/**
 * ACKO Stress Test — Analyse Script
 * Runs ESLint against all generated files, calculates scores,
 * and logs results to Google Sheets automatically.
 *
 * Usage: npm run analyse
 * Delete this file after the stress test exercise is complete.
 */

import { execSync } from "child_process";
import { readdirSync, readFileSync, statSync, existsSync, mkdirSync } from "fs";
import { join, relative } from "path";
import { google } from "googleapis";

// ── Config ────────────────────────────────────────────────────────────
const SHEET_ID = "1U5wI9Lua3Racq7Bojb_ME0ZW-T2ZDpGQfjb1IVYWCrw";
const SERVICE_ACCOUNT_PATH = "./service-account.json";
const STRESS_TEST_DIR = "./stress-test";
const RESULTS_TAB = "Results Log";
const PROMPT_TAB = "Prompt List";
const ERROR_TAB = "Error Details";

// ── Google Sheets Auth ────────────────────────────────────────────────
async function getSheet() {
  const auth = new google.auth.GoogleAuth({
    keyFile: SERVICE_ACCOUNT_PATH,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  return google.sheets({ version: "v4", auth });
}

// ── Get all .tsx files recursively ───────────────────────────────────
function getAllFiles(dir) {
  const files = [];
  for (const entry of readdirSync(dir)) {
    const fullPath = join(dir, entry);
    if (statSync(fullPath).isDirectory()) {
      files.push(...getAllFiles(fullPath));
    } else if (entry.endsWith(".tsx")) {
      files.push(fullPath);
    }
  }
  return files;
}

function getPromptNumber(filePath) {
  const match = filePath.match(/prompt-(\d+)\.tsx/);
  return match ? match[1] : null;
}

// ── Run ESLint on a file ──────────────────────────────────────────────
function runEslint(filePath) {
  try {
    const output = execSync(`npx eslint "${filePath}" --format json`, {
      encoding: "utf8",
      stdio: ["pipe", "pipe", "pipe"],
    });
    return JSON.parse(output);
  } catch (err) {
    try { return JSON.parse(err.stdout); } catch { return null; }
  }
}

// ── Count FLAG comments in file ───────────────────────────────────────
function countFlags(filePath) {
  const content = readFileSync(filePath, "utf8");
  return (content.match(/\/\/ FLAG:/g) || []).length;
}

// ── Calculate scores from ESLint results ─────────────────────────────
// Reports raw violation counts — more reliable than % for debugging.
function calculateScores(eslintResults) {
  if (!eslintResults || !eslintResults[0]) {
    return { tokenViolations: 0, componentViolations: 0, failureType: "None", totalErrors: 0, totalWarnings: 0 };
  }

  const messages = eslintResults[0].messages || [];
  const totalErrors = messages.filter(m => m.severity === 2).length;
  const totalWarnings = messages.filter(m => m.severity === 1).length;

  const ruleCounts = {};
  messages.forEach(m => {
    ruleCounts[m.ruleId] = (ruleCounts[m.ruleId] || 0) + 1;
  });

  const tokenRules = [
    "acko/no-hardcoded-colors",
    "acko/no-hardcoded-spacing",
    "acko/no-hardcoded-typography",
    "acko/no-arbitrary-tailwind",
    "acko/no-fake-tokens",
    "acko/no-inline-styles",
  ];

  const componentRules = [
    "acko/no-native-elements",
    "acko/no-unknown-imports",
  ];

  const tokenViolations = tokenRules.reduce((s, r) => s + (ruleCounts[r] || 0), 0);
  const componentViolations = componentRules.reduce((s, r) => s + (ruleCounts[r] || 0), 0);

  // Dominant failure type
  const allRuleCounts = Object.entries(ruleCounts).sort((a, b) => b[1] - a[1]);
  let failureType = "None";
  if (allRuleCounts.length > 0) {
    const topRule = allRuleCounts[0][0];
    if (tokenRules.includes(topRule)) failureType = "Token";
    else if (componentRules.includes(topRule)) failureType = "Component";
    else failureType = "Pattern";
  }

  return { tokenViolations, componentViolations, failureType, totalErrors, totalWarnings };
}

// ── Read prompt metadata from Sheet Tab 1 ────────────────────────────
async function getPromptMetadata(sheets, promptNumber) {
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: SHEET_ID,
    range: `${PROMPT_TAB}!A:F`,
  });
  const rows = res.data.values || [];
  const row = rows.find(r => r[0] === promptNumber.padStart(3, "0"));
  if (!row) return { category: "—", complexity: "—", skillFileVersion: "v1" };
  return { category: row[1] || "—", complexity: row[2] || "—", skillFileVersion: row[5] || "v1" };
}

// ── Write result row to Tab 2 ─────────────────────────────────────────
async function writeResultToSheet(sheets, row) {
  await sheets.spreadsheets.values.append({
    spreadsheetId: SHEET_ID,
    range: `${RESULTS_TAB}!A:K`,
    valueInputOption: "RAW",
    requestBody: { values: [row] },
  });
}

// ── Write error details to Tab 3 ─────────────────────────────────────
async function writeErrorDetailsToSheet(sheets, promptNumber, category, filePath, eslintResults) {
  if (!eslintResults || !eslintResults[0]) return;
  const messages = eslintResults[0].messages || [];
  if (messages.length === 0) return;

  const fileName = filePath.split("/").pop();
  const rows = messages.map(m => [
    promptNumber.padStart(3, "0"),
    category,
    fileName,
    m.line || "—",
    m.column || "—",
    m.ruleId || "—",
    m.severity === 2 ? "Error" : "Warning",
    m.message || "—",
  ]);

  await sheets.spreadsheets.values.append({
    spreadsheetId: SHEET_ID,
    range: `${ERROR_TAB}!A:H`,
    valueInputOption: "RAW",
    requestBody: { values: rows },
  });
}

// ── Parse CLI args into a Set of prompt numbers ──────────────────────
function parseTargetPrompts(args) {
  if (args.length === 0) return null;
  const numbers = new Set();
  for (const arg of args) {
    if (arg.includes("-")) {
      const [start, end] = arg.split("-").map(Number);
      if (!isNaN(start) && !isNaN(end)) {
        for (let i = start; i <= end; i++) numbers.add(String(i));
      }
    } else if (!isNaN(Number(arg))) {
      numbers.add(arg);
    }
  }
  return numbers.size > 0 ? numbers : null;
}

// ── Main ──────────────────────────────────────────────────────────────
async function main() {
  console.log("🔍 ACKO Stress Test — Analyser\n");

  const targetPrompts = parseTargetPrompts(process.argv.slice(2));
  if (targetPrompts) {
    console.log(`Filter: prompts ${[...targetPrompts].sort((a, b) => a - b).join(", ")}\n`);
  }

  const sheets = await getSheet();

  if (!existsSync(STRESS_TEST_DIR)) {
    mkdirSync(STRESS_TEST_DIR, { recursive: true });
    console.log("Created stress-test/ folder.");
  }

  let files = getAllFiles(STRESS_TEST_DIR);

  if (targetPrompts) {
    files = files.filter(f => {
      const num = getPromptNumber(f);
      return num && targetPrompts.has(num);
    });
  }

  if (files.length === 0) {
    console.log("No matching .tsx files found. Check your prompt numbers.");
    return;
  }

  console.log(`Found ${files.length} file${files.length === 1 ? "" : "s"}. Analysing...\n`);

  let passed = 0;
  let failed = 0;

  for (const file of files) {
    const promptNumber = getPromptNumber(file);
    if (!promptNumber) {
      console.log(`⚠️  Skipping ${file} — filename doesn't match prompt-XXX.tsx`);
      continue;
    }

    const eslintResults = runEslint(file);
    const scores = calculateScores(eslintResults);
    const flagCount = countFlags(file);
    const meta = await getPromptMetadata(sheets, promptNumber);

    let rootCause = "—";
    if (scores.failureType === "Token") rootCause = "Skill file gap";
    else if (scores.failureType === "Component") rootCause = "Package gap";
    else if (scores.failureType === "Pattern") rootCause = "LLM limitation";

    const row = [
      promptNumber.padStart(3, "0"),
      meta.category,
      meta.complexity,
      meta.skillFileVersion,
      scores.tokenViolations,        // Token Violations (raw count)
      scores.componentViolations,    // Component Violations (raw count)
      flagCount > 0 ? flagCount : "None",
      scores.failureType,
      rootCause,
      "—",
      "—",
    ];

    await writeResultToSheet(sheets, row);
    await writeErrorDetailsToSheet(sheets, promptNumber, meta.category, file, eslintResults);

    const status = scores.tokenViolations === 0 && scores.componentViolations === 0 ? "✅" : "❌";
    if (status === "✅") passed++; else failed++;

    console.log(
      `${status} prompt-${promptNumber} | Token violations: ${scores.tokenViolations} | Component violations: ${scores.componentViolations} | Failures: ${scores.failureType} | Flags: ${flagCount}`
    );
  }

  console.log(`\n─────────────────────────────────`);
  console.log(`✅ Passed: ${passed} / ${files.length}`);
  console.log(`❌ Failed: ${failed} / ${files.length}`);
  console.log(`\nResults logged to Google Sheet.`);
}

main().catch(console.error);

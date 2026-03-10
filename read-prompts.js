/**
 * ACKO Stress Test — Read Prompts Script
 * Fetches all prompts from Google Sheet Tab 1
 * and saves them as prompts.json for Cursor to read.
 *
 * Usage: npm run read-prompts
 * Delete this file after the stress test exercise is complete.
 */

import { google } from "googleapis";
import { writeFileSync } from "fs";

// ── Config ────────────────────────────────────────────────────────────
const SHEET_ID = "1U5wI9Lua3Racq7Bojb_ME0ZW-T2ZDpGQfjb1IVYWCrw";
const SERVICE_ACCOUNT_PATH = "./service-account.json";
const PROMPT_TAB = "Prompt List";
const OUTPUT_FILE = "./prompts.json";

// ── Google Sheets Auth ────────────────────────────────────────────────
async function getSheet() {
  const auth = new google.auth.GoogleAuth({
    keyFile: SERVICE_ACCOUNT_PATH,
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });
  const sheets = google.sheets({ version: "v4", auth });
  return sheets;
}

// ── Main ──────────────────────────────────────────────────────────────
async function main() {
  console.log("📋 ACKO Stress Test — Reading Prompts from Sheet\n");

  const sheets = await getSheet();

  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: SHEET_ID,
    range: `${PROMPT_TAB}!A:F`,
  });

  const rows = res.data.values || [];

  if (rows.length <= 1) {
    console.log("No prompts found in Sheet. Add prompts to Tab 1 first.");
    return;
  }

  // Skip header row
  const headers = rows[0];
  const dataRows = rows.slice(1);

  const prompts = dataRows
    .filter(row => row[0] && row[3]) // Must have prompt # and prompt text
    .map(row => ({
      promptNumber: row[0]?.trim(),
      category: row[1]?.trim() || "—",
      complexity: row[2]?.trim() || "—",
      promptText: row[3]?.trim(),
      folderPath: row[4]?.trim() || "",
      skillFileVersion: row[5]?.trim() || "v1",
    }));

  if (prompts.length === 0) {
    console.log("No valid prompts found. Make sure columns A-E are filled in Tab 1.");
    return;
  }

  // Save to prompts.json
  writeFileSync(OUTPUT_FILE, JSON.stringify(prompts, null, 2));

  console.log(`✅ ${prompts.length} prompts saved to prompts.json\n`);
  console.log("Breakdown:");

  // Count by category
  const categories = {};
  prompts.forEach(p => {
    categories[p.category] = (categories[p.category] || 0) + 1;
  });
  Object.entries(categories).forEach(([cat, count]) => {
    console.log(`  ${cat}: ${count} prompts`);
  });

  console.log("\nReady. Open Cursor and run the batch instruction.");
}

main().catch(console.error);

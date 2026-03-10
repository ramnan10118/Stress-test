/**
 * ACKO Stress Test — Custom ESLint Rules
 * Checks token compliance, component compliance, and pattern compliance.
 * Delete this file after the stress test exercise is complete.
 */

// All valid token prefixes from primitives.md
const VALID_TOKEN_PREFIXES = [
  // Semantic tokens
  "--color-", "--space-", "--scale-", "--radius-", "--shadow-",
  "--z-", "--duration-", "--ease-", "--opacity-", "--border-",
  // Primitive colour palettes
  "--grey-", "--red-", "--orange-", "--yellow-", "--green-",
  "--lime-", "--teal-", "--blue-", "--purple-", "--pink-",
  "--zinc-", "--earth-grey-",
  // Typography tokens
  "--display-", "--heading-", "--body-", "--label-", "--caption", "--overline",
];

// All valid @acko package imports
const ACKO_PACKAGES = [
  "@acko/accordion", "@acko/alert", "@acko/avatar", "@acko/badge",
  "@acko/breadcrumb", "@acko/button", "@acko/calendar", "@acko/card",
  "@acko/checkbox", "@acko/css", "@acko/dropdown", "@acko/field",
  "@acko/input-group", "@acko/label", "@acko/navigation-wizard",
  "@acko/pagination", "@acko/progress", "@acko/radio", "@acko/scroll-area",
  "@acko/separator", "@acko/skeleton", "@acko/switch", "@acko/table",
  "@acko/tabs", "@acko/text-input", "@acko/textarea", "@acko/toggle",
  "@acko/tokens", "@acko/tooltip", "@acko/typography",
];

// Native HTML elements that have ACKO component equivalents
const NATIVE_ELEMENT_MAP = {
  button: "@acko/button",
  input: "@acko/text-input",
  textarea: "@acko/textarea",
  select: "@acko/dropdown",
  a: "@acko/button (use variant='link')",
};

const rules = {

  // ── Rule 1: No hardcoded colours ──────────────────────────────────
  "no-hardcoded-colors": {
    meta: {
      type: "problem",
      docs: { description: "Disallow hardcoded colour values. Use CSS token variables." },
      schema: [],
    },
    create(context) {
      const hexPattern = /#([0-9a-fA-F]{3,8})\b/;
      const rgbPattern = /rgba?\s*\(/;
      const namedColors = /\b(red|blue|green|white|black|gray|grey|orange|yellow|pink|purple|teal)\b/;

      function checkValue(value, node) {
        // Skip if value is a CSS token variable
        if (typeof value === "string" && value.includes("var(--")) return;
        if (hexPattern.test(value)) {
          context.report({ node, message: `Hardcoded colour detected: "${value}". Use a CSS token variable e.g. var(--color-*).` });
        }
        if (rgbPattern.test(value)) {
          context.report({ node, message: `Hardcoded rgb/rgba detected: "${value}". Use a CSS token variable e.g. var(--color-*).` });
        }
        if (namedColors.test(value)) {
          context.report({ node, message: `Named CSS colour detected: "${value}". Use a CSS token variable e.g. var(--color-*).` });
        }
      }

      return {
        JSXAttribute(node) {
          if (node.name.name === "className" && node.value?.type === "Literal") {
            const cls = node.value.value;
            if (/\b(text|bg|border|ring|fill|stroke)-\[.+\]/.test(cls)) {
              context.report({ node, message: `Arbitrary Tailwind colour class detected: "${cls}". Use a CSS token variable.` });
            }
          }
          if (node.name.name === "style" && node.value?.expression?.properties) {
            node.value.expression.properties.forEach(prop => {
              const key = prop.key?.name || "";
              const val = prop.value?.value || "";
              if (/color|background|fill|stroke/i.test(key)) {
                checkValue(String(val), node);
              }
            });
          }
        },
      };
    },
  },

  // ── Rule 2: No hardcoded spacing ──────────────────────────────────
  "no-hardcoded-spacing": {
    meta: {
      type: "problem",
      docs: { description: "Disallow hardcoded spacing values. Use CSS token variables." },
      schema: [],
    },
    create(context) {
      return {
        JSXAttribute(node) {
          if (node.name.name === "className" && node.value?.type === "Literal") {
            const cls = node.value.value;
            if (/\b(p|m|px|py|pt|pb|pl|pr|mx|my|mt|mb|ml|mr|gap|space)-\[\d+px\]/.test(cls)) {
              context.report({ node, message: `Hardcoded spacing in Tailwind class: "${cls}". Use a CSS token variable e.g. var(--space-*).` });
            }
          }
          if (node.name.name === "style" && node.value?.expression?.properties) {
            node.value.expression.properties.forEach(prop => {
              const key = prop.key?.name || "";
              const val = String(prop.value?.value || "");
              // Skip token variables
              if (val.includes("var(--")) return;
              if (/margin|padding|gap|top|left|right|bottom/i.test(key)) {
                if (/^\d+px$/.test(val)) {
                  context.report({ node, message: `Hardcoded spacing value: "${key}: ${val}". Use a CSS token variable e.g. var(--space-*).` });
                }
              }
            });
          }
        },
      };
    },
  },

  // ── Rule 3: No hardcoded typography ───────────────────────────────
  "no-hardcoded-typography": {
    meta: {
      type: "problem",
      docs: { description: "Disallow hardcoded font sizes and weights. Use CSS token variables." },
      schema: [],
    },
    create(context) {
      return {
        JSXAttribute(node) {
          if (node.name.name === "className" && node.value?.type === "Literal") {
            const cls = node.value.value;
            if (/\btext-\[\d+px\]/.test(cls)) {
              context.report({ node, message: `Hardcoded font size in Tailwind class: "${cls}". Use a typography token.` });
            }
          }
          if (node.name.name === "style" && node.value?.expression?.properties) {
            node.value.expression.properties.forEach(prop => {
              const key = prop.key?.name || "";
              const val = String(prop.value?.value || "");
              // Skip token variables
              if (val.includes("var(--")) return;
              if (/fontSize|fontWeight|lineHeight|letterSpacing/i.test(key)) {
                if (/^\d+$/.test(val) || /^\d+px$/.test(val)) {
                  context.report({ node, message: `Hardcoded typography value: "${key}: ${val}". Use a CSS token variable.` });
                }
              }
            });
          }
        },
      };
    },
  },

  // ── Rule 4: No arbitrary Tailwind classes ─────────────────────────
  "no-arbitrary-tailwind": {
    meta: {
      type: "problem",
      docs: { description: "Disallow arbitrary Tailwind values like w-[120px]." },
      schema: [],
    },
    create(context) {
      return {
        JSXAttribute(node) {
          if (node.name.name === "className" && node.value?.type === "Literal") {
            const cls = node.value.value;
            const arbitrary = cls.match(/\S+-\[[^\]]+\]/g) || [];
            arbitrary.forEach(match => {
              context.report({ node, message: `Arbitrary Tailwind class detected: "${match}". Use a CSS token variable instead.` });
            });
          }
        },
      };
    },
  },

  // ── Rule 5: No fake tokens ────────────────────────────────────────
  "no-fake-tokens": {
    meta: {
      type: "problem",
      docs: { description: "Disallow invented CSS token variables not defined in primitives.md." },
      schema: [],
    },
    create(context) {
      return {
        Literal(node) {
          if (typeof node.value !== "string") return;
          const varMatches = node.value.match(/var\(--[\w-]+\)/g) || [];
          varMatches.forEach(match => {
            const token = match.slice(4, -1);
            const isValid = VALID_TOKEN_PREFIXES.some(prefix => token.startsWith(prefix));
            if (!isValid) {
              context.report({ node, message: `Unknown token: "${token}". Only tokens defined in primitives.md are allowed.` });
            }
          });
        },
      };
    },
  },

  // ── Rule 6: No inline styles (fixed) ──────────────────────────────
  // Only flags hardcoded token-replaceable values (spacing, colour, typography).
  // Layout/structural CSS (display, flex, grid, align, justify, position,
  // overflow, cursor, etc.) is allowed — these have no token equivalent.
  //
  // Passes: style={{ gap: "var(--space-3)" }}
  // Passes: style={{ display: "flex", alignItems: "center" }}
  // Flags:  style={{ gap: "12px" }} or style={{ fontWeight: 700 }}
  "no-inline-styles": {
    meta: {
      type: "warn",
      docs: { description: "Disallow inline styles with hardcoded token-replaceable values." },
      schema: [],
    },
    create(context) {
      // Properties that MUST use tokens — flag raw values here
      const TOKEN_PROPS = /^(gap|rowGap|columnGap|margin|marginTop|marginBottom|marginLeft|marginRight|padding|paddingTop|paddingBottom|paddingLeft|paddingRight|fontSize|fontWeight|lineHeight|letterSpacing|color|background|backgroundColor|borderColor|borderRadius|opacity|boxShadow|width|height|minWidth|minHeight|maxWidth|maxHeight)$/;

      // Layout/structural properties — never need tokens, never flag
      const LAYOUT_PROPS = /^(display|flexDirection|flexWrap|flex|flexGrow|flexShrink|flexBasis|alignItems|alignContent|alignSelf|justifyContent|justifyItems|justifySelf|gridTemplateColumns|gridTemplateRows|gridColumn|gridRow|gridArea|position|top|left|right|bottom|zIndex|overflow|overflowX|overflowY|textAlign|textDecoration|textTransform|textWrap|whiteSpace|wordBreak|cursor|pointerEvents|touchAction|userSelect|visibility|transform|transition|animation|objectFit|objectPosition|fontVariantNumeric|verticalAlign|listStyle|appearance|resize|outline|float|clear)$/;

      return {
        JSXAttribute(node) {
          if (node.name.name !== "style") return;
          if (!node.value?.expression?.properties) return;
          node.value.expression.properties.forEach(prop => {
            const key = prop.key?.name || "";
            const val = prop.value;

            // Skip layout/structural properties entirely
            if (LAYOUT_PROPS.test(key)) return;

            // Only check token-replaceable properties
            if (!TOKEN_PROPS.test(key)) return;

            if (val?.type === "Literal") {
              // String value — only flag if it does NOT use a token variable
              if (typeof val.value === "string" && !val.value.includes("var(--")) {
                context.report({
                  node,
                  message: `Inline style with hardcoded value: "${key}: ${val.value}". Use var(--token) instead.`,
                });
              }
              // Numeric value — always flag (numbers are never tokens)
              if (typeof val.value === "number") {
                context.report({
                  node,
                  message: `Inline style with hardcoded number: "${key}: ${val.value}". Use a CSS token variable.`,
                });
              }
            }
          });
        },
      };
    },
  },

  // ── Rule 7: No native elements where ACKO components exist ────────
  "no-native-elements": {
    meta: {
      type: "problem",
      docs: { description: "Warn when native HTML elements are used where an ACKO component exists." },
      schema: [],
    },
    create(context) {
      return {
        JSXOpeningElement(node) {
          const name = node.name.name;
          if (NATIVE_ELEMENT_MAP[name]) {
            context.report({ node, message: `Native <${name}> used. Use ${NATIVE_ELEMENT_MAP[name]} from the ACKO package instead.` });
          }
        },
      };
    },
  },

  // ── Rule 8: No unknown package imports ────────────────────────────
  "no-unknown-imports": {
    meta: {
      type: "problem",
      docs: { description: "Flag UI component imports not from the ACKO package." },
      schema: [],
    },
    create(context) {
      return {
        ImportDeclaration(node) {
          const src = node.source.value;
          if (!src.startsWith("@acko/")) return;
          if (!ACKO_PACKAGES.includes(src)) {
            context.report({ node, message: `Unknown ACKO package: "${src}". This package is not in the approved component list.` });
          }
        },
      };
    },
  },

};

export default { rules };

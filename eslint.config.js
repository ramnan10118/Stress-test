import js from "@eslint/js";
import tseslint from "typescript-eslint";
import ackoStressTest from "./eslint-rules/acko-stress-test.js";

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      acko: ackoStressTest,
    },
    rules: {
      // ── ACKO Stress Test Rules ──────────────────────────────────────

      // Token compliance
      "acko/no-hardcoded-colors": "error",
      "acko/no-hardcoded-spacing": "error",
      "acko/no-hardcoded-typography": "error",
      "acko/no-arbitrary-tailwind": "error",
      "acko/no-fake-tokens": "error",

      // Component compliance
      "acko/no-inline-styles": "error",
      "acko/no-native-elements": "warn",
      "acko/no-unknown-imports": "error",
    },
  }
);

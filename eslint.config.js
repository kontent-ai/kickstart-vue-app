import tsParser from "@typescript-eslint/parser";
import pluginVue from "eslint-plugin-vue";

export default [
  ...pluginVue.configs["flat/recommended"],
  { ignores: ["dist", "node_modules"] },
  {
    files: ["**/*.vue"],
    languageOptions: {
      parser: pluginVue.parser,
      parserOptions: {
        parser: tsParser,
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    rules: {
      "vue/multi-word-component-names": "off",
    },
  },
];

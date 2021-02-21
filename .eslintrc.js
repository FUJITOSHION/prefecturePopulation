module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  extends: [
    "eslint:recommended", //js全てのrecoomend
    "plugin:react/recommended", //reactの書き方
    "plugin:@typescript-eslint/recommended", // tsのrecommend
    "prettier", //eslintとprettierとかぶっているのはprettireを優先
    "prettier/@typescript-eslint", // 上のts版
  ],
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "react/react-in-jsx-scope": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};

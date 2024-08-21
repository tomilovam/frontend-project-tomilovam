import globals from "globals";
import pluginJs from "@eslint/js";

import { FlatCompat } from "@eslint/js";
import path from "path";
import { fileURLToPath } from "url";

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname
});

export default [
  {languageOptions: { globals: globals.node }},
  pluginJs.configs.recommended,
  ...compat.extends("standard", "example"),
];
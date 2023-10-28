# @bjoluc/eslint-config-xo-next

[![npm](https://img.shields.io/npm/v/@bjoluc/eslint-config-xo-next/latest)](https://www.npmjs.com/package/@bjoluc/eslint-config-xo-next)
[![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/bjoluc/eslint-config-xo-next/build.yml)](https://github.com/bjoluc/eslint-config-xo-next/actions)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

My ESLint (using XO rules, hence the package name), Prettier, and import-sort config for Next.js projects. Note that it includes ESLint, prettier, and prettier-plugin-import-sort as dependencies (so I don't have to update them in each project individually).

## Usage

In (root) `package.json`:

```json
"eslintConfig": {
	"extends": "@bjoluc/xo-next",
	"parser": "@typescript-eslint/parser",
	"root": true,
	"parserOptions": {
		"project": "tsconfig.json", // or ["package-a/tsconfig.json", "package-b/tsconfig.json"] in monorepos
		"tsconfigRootDir": "./"
	},
	"ignorePatterns": ["**/*.js"],
	"rules": {
		// ...
	}
},
"prettier": "@bjoluc/eslint-config-xo-next/prettier.config"
```

For some reason, `"importSort": "@bjoluc/eslint-config-xo-next/importsort.config"` doesn't work. An `importsort.config.js` file with `module.exports = require("@bjoluc/eslint-config-xo-next/importsort.config");` does.

module.exports = {
	extends: ["xo", "xo-react", "prettier"],
	rules: {
		"no-unused-vars": "off",
		"unicorn/filename-case": "off",
		"unicorn/prefer-module": "off",
		"import/extensions": "off",
		"import/no-extraneous-dependencies": "off",
		"import/no-unassigned-import": "off",
		"import/order": "off",
		"n/no-unsupported-features/es-syntax": "off",
		"n/prefer-global/process": "off",
		"n/file-extension-in-import": "off",
		"react/prop-types": "off",
		"react/function-component-definition": [
			"error",
			{
				namedComponents: "arrow-function",
				unnamedComponents: "arrow-function",
			},
		],
		"capitalized-comments": "off",

		// Prettier-conflicting rules that are not already disabled by eslint-plugin-prettier
		"react/jsx-tag-spacing": "off",
	},
	overrides: [
		{
			extends: ["xo-typescript", "prettier"],
			rules: {
				"@typescript-eslint/naming-convention": "off",
				"@typescript-eslint/triple-slash-reference": "off",
			},
			files: ["**/*.{ts,tsx}"],
		},
	],
};

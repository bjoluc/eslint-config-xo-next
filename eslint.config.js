module.exports = {
	extends: "xo-react",
	rules: {
		"no-unused-vars": "off",
		"unicorn/filename-case": "off",
		"unicorn/prefer-module": "off",
		"import/no-extraneous-dependencies": "off",
		"import/extensions": "off",
		"n/no-unsupported-features/es-syntax": "off",
		"n/prefer-global/process": "off",
		"n/file-extension-in-import": "off",
		"@typescript-eslint/naming-convention": "off",
		"@typescript-eslint/triple-slash-reference": "off",
		"react/prop-types": "off",
		"react/function-component-definition": [
			"error",
			{
				namedComponents: "arrow-function",
				unnamedComponents: "arrow-function",
			},
		],
	},
};

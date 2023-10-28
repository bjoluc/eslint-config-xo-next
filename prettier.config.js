module.exports = {
	printWidth: 100,
	trailingComma: "es5",
	useTabs: true,
	bracketSpacing: false,

	plugins: [require("prettier-plugin-organize-imports")],
	organizeImportsSkipDestructiveCodeActions: true,
};

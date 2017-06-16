const config = require("./config")

module.exports = {
	parserOptions: {
		sourceType: "module"
	},
	extends: "google",

	// required to lint *.vue files
	plugins: [
		"html"
	],

	settings: {
		"import/resolver": {
			"webpack": {
				"config": "build/webpack.base.conf.js"
			}
		}
	},

	// add your custom rules here
	rules: {
		// don"t allow semicolons
		"semi": ["error", "never"],

		// don"t require comma in the last line of an object/dictionary declaration
		"comma-dangle": ["error", "never"],

		// ignore max-len for comments
		"max-len": [
			"error",
			{ "code": 100, "ignoreComments": true, "ignoreTrailingComments": true, "ignoreUrls": true, "ignoreStrings": true }
		],

		// force space after and before curly braces in object/dict declarations
		"object-curly-spacing": ["error", "always"],

		// allow debugger; instruction during development
		"no-debugger": config.isProduction ? 2 : 0,

		// force "===" in comparisons when ambiguous
		"eqeqeq": ["error", "smart"],

		// force double quotes
		"quotes": ["error", "double"],

		"indent": ["error", "tab"],

		"require-jsdoc": 0,

		"new-cap": ["error", { "capIsNew": false }]
	}
}

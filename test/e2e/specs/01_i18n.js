module.exports = {
	"Static translation works": (browser) => {
		const server = browser.globals.serverURL

		browser
			.url(server + "/showcase")
			.waitForElementVisible("#app", 2500)
			.assert.containsText(".feature--static-translation",
				"This is a statically translated string: Hello world!")
			.end()
	},

	"Dynamic translation works": (browser) => {
		const server = browser.globals.serverURL

		browser
			.url(server + "/showcase")
			.waitForElementVisible("#app", 2500)

			.assert.containsText(".feature--dynamic-translation",
				"This is a dynamically translated string: no elements")

			.clearValue(".feature--dynamic-translation input[type=number]")
			.setValue(".feature--dynamic-translation input[type=number]", 1)
			.assert.containsText(".feature--dynamic-translation",
				"This is a dynamically translated string: single element")

			.clearValue(".feature--dynamic-translation input[type=number]")
			.setValue(".feature--dynamic-translation input[type=number]", 2)
			.assert.containsText(".feature--dynamic-translation",
				"This is a dynamically translated string: 2 elements")

			.end()
	}
}

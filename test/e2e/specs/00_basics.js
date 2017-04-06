module.exports = {
	"Website loads": (browser) => {
		const server = browser.globals.serverURL

		browser
			.url(server)
			.waitForElementVisible("#app", 2500)
			.end()
	}
}

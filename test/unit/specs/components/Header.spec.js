import { mount } from "avoriaz"
import { expect } from "chai"
import AppHeader from "components/AppHeader"

describe("AppHeader", () => {
	it("renders a title and a logo", () => {
		const header = mount(AppHeader)
		expect(header.is("header")).to.equal(true)
		expect(header.hasClass("AppHeader")).to.equal(true)
	})
})

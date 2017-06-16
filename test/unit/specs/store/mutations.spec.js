import { expect } from "chai"
import { mutations } from "store/mutations"

describe("mutations", () => {
	it("SET_COUNTER", () => {
		const { SET_COUNTER } = mutations
		const state = { counter: 0 }

		SET_COUNTER(state, { value: 42 })

		expect(state.counter).to.equal(42)
	})

	it("SET_REMOTE_PAGE_CONTENT", () => {
		const { SET_REMOTE_PAGE_CONTENT } = mutations
		const state = { remotePageContent: null }

		SET_REMOTE_PAGE_CONTENT(state, { content: "Testing content" })

		expect(state.remotePageContent).to.equal("Testing content")
	})
})

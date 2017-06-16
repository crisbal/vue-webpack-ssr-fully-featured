import { testAction } from "./utils/testAction"

const ActionsInjector = require("inject-loader!store/actions")
const actions = ActionsInjector({
	"axios": {
		get(url) {
			return Promise.resolve({
				data: {
					title: "Testing"
				}
			})
		}
	}
}).actions

describe("actions", () => {
	it("INCREMENT_COUNTER", (done) => {
		testAction(actions.INCREMENT_COUNTER, null, { counter: 0 }, [
			{ type: "SET_COUNTER", payload: { value: 1 } }
		], done)
	})

	it("LOAD_REMOTE_PAGE", (done) => {
		testAction(actions.LOAD_REMOTE_PAGE, null, { remotePageContent: null }, [
			{
				type: "SET_REMOTE_PAGE_CONTENT",
				payload: {
					content: "Testing"
				}
			}
		], done)
	})
})

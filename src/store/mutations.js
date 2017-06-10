// import Vue from "vue"

export const mutations = {
	SET_COUNTER: (state, { value }) => {
		state.counter = value
	},

	SET_REMOTE_PAGE_CONTENT: (state, { content }) => {
		state.remotePageContent = content
	}

}

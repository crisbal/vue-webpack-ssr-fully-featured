export const actions = {
	INCREMENT_COUNTER: ({ commit, state }) => {
		commit("SET_COUNTER", { value: (state.counter + 1) })
	}
}

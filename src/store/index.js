import Vue from "vue"
import Vuex from "vuex"

import { actions } from "./actions"
import { mutations } from "./mutations"

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		modals: []
	},
	actions,
	mutations
})

if (module.hot) {
	module.hot.accept([
		"./actions",
		"./mutations"
	], () => {
		store.hotUpdate({
			actions: require("./actions").actions,
			mutations: require("./mutations").mutations
		})
	})
}

export default store

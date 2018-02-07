import Vue from "vue"
import VueI18n from "vue-i18n"
import { sync } from "vuex-router-sync"

import { createStore } from "./store"
import { createRouter } from "./router"

import App from "./App.vue"


import metaInfo from "./mixins/metaInfo"
Vue.mixin(metaInfo)

// allow i18n for components
Vue.use(VueI18n)

// we use "primaryLanguage" as a key because it does not really matter
// we can do this since the file is loaded using the `LANGUAGE_FILENAME` key
const messages = {
	"main": require(`./../i18n/${LANGUAGE_MAIN_FILENAME}.json`)
}

// Expose a factory function that creates a fresh set of store, router,
// app instances on each call (which is called for each SSR request)
export function createApp(ssrContext) {
	const i18n = new VueI18n({
		locale: "main",
		messages
	})

	// create store and router instances
	const store = createStore()
	const router = createRouter()

	// sync the router with the vuex store.
	// this registers `store.state.route`
	sync(store, router)

	// create the app instance.
	// here we inject the router and store to all child components,
	// making them available everywhere as `this.$router` and `this.$store`.
	const app = new Vue({
		router,
		store,
		i18n,
		ssrContext,
		render: (h) => h(App)
	})

	// expose the app, the router and the store.
	// note we are not mounting the app here, since bootstrapping will be
	// different depending on whether we are in a browser or on the server.
	return { app, router, store }
}


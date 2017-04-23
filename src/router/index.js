import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

// We are also using Webpack code splitting here so that each route's associated
// component code is loaded on-demand only when the route is visited.
// When do you use on-demand load? When the view is not one of the important one. When a route is important? You decide

import Home from "views/Home.vue" // include in the main bundle
const Showcase = () => System.import("views/Showcase.vue") // load dynamically when needed

export default new Router({
	mode: "history",
	scrollBehavior: () => ({ y: 0 }),
	routes: [
		{ path: "/", component: Home },
		{ path: "/showcase", component: Showcase }
	]
})

<template lang="pug">
	main.view--ShowcaseFetchError
		b This page is used as a demo for the `asyncData` error handling feature
		p When requesting this page an error will be thrown by the action inside `asyncData`

		// display the error
		div(v-if="error")
			br
			b Error
			p {{ error }}
</template>

<script>
import ErrorHandler from "mixins/errorHandler"

export default {
	name: "ShowcaseFetchError",
	mixins: [ErrorHandler], // this will enable the `this.error` variable
	meta() {
		return {
			title: "ShowcaseFetchError",
			description: "This will return 404 when failing to fetch async data",
			httpStatusCode: this.error ? 404 : 200
		}
	},
	asyncData({ store }) {
		return store.dispatch("LOAD_PAGE_FAILING")
			.catch((error) => {
				// use action SET_ERROR to set any error you want to be available in `this.error`
				return store.commit("SET_ERROR", { error: error.message })
			})
	}
}
</script>

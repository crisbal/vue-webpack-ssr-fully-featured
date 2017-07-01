<template lang="pug">
	main.view--Showcase
		h1 This is a showcase for some features
		section.showcase__features

			.feature.feature--static-translation
				.feature__name Compile-time i18n
				.feature__display This is a statically translated string: $ts("showcase_static")
				.feature__description The above string is translated at compile time, no additional computation is needed not from the server or from the client.

			.feature.feature--dynamic-translation
				.feature__name Runtime i18n
				.feature__display This is a dynamically translated string: {{ $tc("showcase_dynamic", counter, { counter }) }}
					br
					label Elements:
					input(type="number", v-model="counter", id="counter")
				.feature__description The above translation is generated using the state of the `input` element. Both the server and the client will render this, dynamically.

			.feature.feature--404-page
				.feature__name 404 page
				.feature__display This is a link to an unknown page:
					router-link(to="/404") Go to a 404 page
				.feature__description Clicking the link will bring you to a custom 404 page. The page will return the HTTP status code 404 if rendering it from the server

			.feature.feature--vuex-counter
				.feature__name Vuex
				.feature__display This is a vuex-managed counter: {{ vuexCounter }}
					button(v-on:click="incrementCounter()") Click to increment
				.feature__description Clicking the button will dispatch the increment action

			.feature.feature--vuex-api
				.feature__name Async data fetching
				.feature__display This is a remotely fetched string:
					i  {{ remotePageContent }}
				.feature__description It is fetched dynamically using the `asyncData` function of this page, this mean that if this page is requested from the server the page will be fetched on the server, without the client having to do any work at all. If instead, this page was rendered on the browser the fetching will be done before rendering this page

			.feature.feature--error-handling
				.feature__name Graceful error handling
				.feature__display
					router-link(to="/showcase/fetch-error", target="_blank") This page
					|  will generate an error when performing `asyncData` fetching, the error will be gracefully handled. The page will also return 404 based on the fact that the error is generated
				.feature__description It is possible to catch server side errors and handle them gracefully
</template>

<style lang="scss" scoped>
.feature {
	margin: 1rem;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);

	&__name {
		padding: 1rem;
		font-size: 1.25rem;
		background-color: #f2f2f2;
	}

	&__display,
	&__description {
		padding: 1rem;
	}
}
</style>

<script>
export default {
	name: "Showcase",
	data: () => {
		return {
			counter: 0
		}
	},
	computed: {
		vuexCounter() {
			return this.$store.state.counter
		},
		remotePageContent() {
			return this.$store.state.remotePageContent
		}
	},
	meta() {
		return {
			title: "Showcase",
			description: "This is the meta description for the showcase page"
		}
	},
	methods: {
		incrementCounter() {
			this.$store.dispatch("INCREMENT_COUNTER")
		}
	},
	asyncData({ store }) {
		return store.dispatch("LOAD_REMOTE_PAGE")
	}
}
</script>

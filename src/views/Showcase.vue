<template lang="pug">
	main.view--Showcase
		h1 This is a showcase for the current features
		section.showcase__features
			.feature.feature--static-translation
				.feature__name This is a statically translated string: $ts("showcase_static")
				.feature__description
					| The above string is translated at compile time, no additional computation is needed not from the server or from the client.
			.feature.feature--dynamic-translation
				.feature__name
					| This is a dynamically translated string:
					| {{ $tc("showcase_dynamic", counter, { counter }) }}
					br
					label Elements:
					input(type="number", v-model="counter", id="counter")
				.feature__description
					| The above translation is generated using the state of the `input` element. Both the server and the client will render this, dynamically.
			.feature.feature--404-page
				.feature__name
					| This is a link to an unknown page:
					router-link(to="/404") Go to a 404 page
				.feature__description
					| Clicking the link will bring you to a custom 404 page
</template>

<style lang="scss" scoped>
.feature {
	padding: 1rem;
	margin-bottom: 1rem;
	border: 1px solid black;
	font-size: 1.3rem;

	&__name {
		padding: 1rem;
		margin-bottom: 0.5rem;
		background-color: #f2f2f2;
	}

	&__description {
		font-style: italic;
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
	meta() {
		return {
			title: "Showcase",
			description: "This is the meta description for the showcase page"
		}
	}
}
</script>

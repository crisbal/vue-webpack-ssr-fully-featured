<template lang="pug">
	main.view--Home
		h1 This is the home page!
		router-link(to="/showcase") Go to showcase
</template>

<script>
export default {
	name: "Home",
	meta() {
		return {
			title: "Home",
			description: "This is the meta description for the home page"
		}
	}
}
</script>

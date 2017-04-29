<template lang="pug">
	main.view--Home
		h1 This is the home page!
		router-link(to="/showcase") Go to showcase
</template>

<script>
export default {
	name: "Home",
	title() {
		return "Home Page!"
	}
}
</script>

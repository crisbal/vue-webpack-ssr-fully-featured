<template lang="pug">
	main.view--Home
		h1 Home Page
		p Hello there!
		p In the showcase you can see some of the features offered by this project
		router-link(to="/showcase") Go to the showcase page
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

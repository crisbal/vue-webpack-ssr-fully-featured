<template lang="pug">
	header.Header
		router-link.Header__link(to="/")
			img.Header__logo(src="~images/logo.png")
			div.Header__name
				img.Header__title(src="~images/name.svg")
				div.Header__subtitle $ts("site_subtitle")
</template>

<style lang="sass">
.Header {
	padding: 1rem 1rem;
	font-size: 1.5rem;
	background-color: whitesmoke;

	&__link {
		color: black;
	}

	&__logo {
		vertical-align: middle;
		width: 2.5rem;
		margin-right: 0.5rem;
	}

	&__name, &__subtitle {
		display: inline-block;
	}

	&__name {
		vertical-align: middle;
		marging-right: 0.5rem;
	}

	&__title {
		margin-right: 0.5rem;
	}
}
</style>

<script>
export default {
	name: "AppHeader"
}
</script>

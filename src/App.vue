<template lang="pug">
	#app.app(:class="{ 'app--rtl': isRTL }")
		header.Header
			// TODO: move Header to its own component
			router-link.Header__link(to="/")
				img.Header__logo(src="~static/logo.png")
				div.Header__name
					img.Header__title(src="~static/name.svg")
					div.Header__subtitle ${site_subtitle}
		transition
			router-view.view
</template>

<style lang="sass">
@import "~styles/declarations";
@import "~styles/global";

.Header {
	padding: 1rem 1rem;
	font-size: 1.5rem;
	background-color: whitesmoke;

	&__link{
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
	name: 'App',
	data: () => {
		return {
			isRTL: LANGUAGE_ISRTL
		}
	}
}
</script>

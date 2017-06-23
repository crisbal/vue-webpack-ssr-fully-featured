<template lang="pug">
	header.AppHeader
		router-link.AppHeader__link(to="/")
			img.AppHeader__logo(src="~images/logo.png", alt="Logo")
			div.AppHeader__name
				h3.AppHeader__title Site Name
				div.AppHeader__subtitle $ts("site_subtitle")
</template>

<style lang="scss">
.AppHeader {
	padding: 1rem;
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

	&__name,
	&__subtitle {
		display: inline-block;
	}

	&__name {
		vertical-align: middle;
		margin-right: 0.5rem;
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

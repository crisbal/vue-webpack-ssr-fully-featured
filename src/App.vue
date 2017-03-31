<template>
	<div id="app" class="app" :class="{ 'app--rtl': isRTL }">
		<header class="Header">
			<img class="Header__logo" :src="resources.logo" alt="">
			${site_name} - ${site_subtitle}</header>
		<transition>
      <router-view></router-view>
    </transition>
	</div>
</template>

<style lang="sass">
@import "~styles/declarations";
@import "~styles/global";

.view {
	padding: 1rem;
}

.Header {
	padding: 1rem 1rem;
	font-size: 1.5rem;
	background-color: whitesmoke;

	&__logo {
		width: 2.5rem;
	}
}
</style>

<script>
const logo = require("static/logo.png")

export default {
	name: "App",
	data: () => {
		return {
			isRTL: LANGUAGE_ISRTL,

			resources:{
				logo: logo
			}
		}
	}
}
</script>

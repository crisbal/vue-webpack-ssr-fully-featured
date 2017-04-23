<template lang="pug">
	#app.app(:class="{ 'app--rtl': isRTL }")
		AppHeader
		transition
			router-view.view
</template>

<style lang="sass">
@import "~styles/global";
</style>

<script>
import AppHeader from "components/AppHeader.vue"

export default {
	name: "App",
	components: {
		AppHeader
	},
	data: () => {
		return {
			isRTL: LANGUAGE_ISRTL
		}
	}
}
</script>

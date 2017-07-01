export default {
	beforeDestroy() {
		if (this.error) this.$store.commit("CLEAR_ERROR") // unset the error in the store
	},
	computed: {
		error() {
			return this.$store.state.error
		}
	}
}

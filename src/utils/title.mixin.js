function getTitle(vm) {
	const { title } = vm.$options
	if (title) {
		return typeof title === "function"
		? title.call(vm)
		: title
	}
}

const serverTitleMixin = {
	created() {
		const title = getTitle(this)
		if (title) {
			this.$root.$options.ssrContext.title = `${title} - WikiToLearn`
		}
	}
}

const clientTitleMixin = {
	mounted() {
		const title = getTitle(this)
		if (title) {
			document.title = `${title} - WikiToLearn`
		} else {
			document.title = "WikiToLearn"
		}
	}
}

export default process.env.VUE_ENV === "server"
? serverTitleMixin
: clientTitleMixin

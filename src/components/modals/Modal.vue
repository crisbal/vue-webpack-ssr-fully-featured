<template lang="pug">
	.Modal(v-show="show", @click="dismiss")
		.Modal__container
			.Modal__header
				h1 Modal header
			.Modal__content
				p This is a modal
				slot
			.Modal__footer
				button(@click="close") Close Modal
</template>

<style lang="sass">
.Modal {
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;

	padding: 10% 20%;
	background-color: rgba(0, 0, 0, 0.5);

	&__container {
		background-color: white;
		padding: 1rem;
	}
}
</style>

<script>
export default {
	name: "Modal",
	props: {
		dismissable: {
			type: Boolean,
			default: true
		}
	},
	data: () => {
		return {
			show: false
		}
	},
	methods: {
		close() {
			this.show = false
		},
		dismiss() {
			if (this.dismissable) {
				this.close()
			}
		}
	}
}
</script>

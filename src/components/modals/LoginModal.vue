<template lang="pug">
	Modal(:dismissable="false")
		p This is a login modal
</template>


<script>
import Modal from "components/modals/Modal.vue"

export default {
	name: "LoginModal",
	components: {
		Modal
	}
}
</script>

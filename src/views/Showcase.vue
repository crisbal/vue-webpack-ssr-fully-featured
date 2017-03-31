<template>
	<main class="view view--Showcase">
		<h1>This is a showcase for the current features</h1>
		<section class="showcase__features">
			<div class="feature">
				<div class="feature__name">
					This is a statically translated string: ${showcase_static}
				</div>
				<div class="feature__description">
					The above string is translated at compile time, no additional computation is needed not from the server or from the client.
				</div>
			</div>
			<div class="feature">
				<div class="feature__name">
					This is a dynamically translated string:
					{{ $tc("showcase_dynamic", counter, { counter }) }}
					<br>
					<label for="">Elements: </label>
					<input type="number" v-model="counter">
				</div>
				<div class="feature__description">
					The above translation is generated using the state of the `input` element. Both the server and the client will render this, dynamically.
				</div>
			</div>
		</section>
	</main>
</template>

<style lang="sass" scoped>
.feature {
	padding: 1rem;
	margin-bottom: 1rem;
	border: 1px solid black;
	font-size: 1.3rem;

	&__name {
		padding: 1rem;
		margin-bottom: 0.5rem;
		background-color: #f2f2f2;
	}

	&__description{
		font-style: italic;
	}
}
</style>

<script>
export default {
	name: "Showcase",
	data: () => {
		return {
			counter: 0
		}
	}
}
</script>

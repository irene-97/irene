<template>
	<a :class="['work', {hidden}]" :href="href" target="_blank" :title="year">
		<img :src="require(`../assets/images/works/${src}`)" :alt="alt"/>
		<p>{{ text }}</p>
		<span>{{ year }}</span>
	</a>
</template>

<script>
	export default {
		name: 'Work',
		props: ['href', 'year', 'src', 'alt', 'text', 'hidden'],
	};
</script>

<style lang="scss">
	@import "../scss/variables";

	.work {
		position: relative;
		display: block;
		flex-basis: calc(33.3% - 24px);
		margin: 15px 12px;
		border-radius: 5px;
		padding: 20px;
		box-shadow: 0 0 20px rgba($color-black, 0.3);
		text-decoration: none;
		background: $color-white;
		transition: box-shadow 0.3s ease;

		p {
			font-size: 19px;
			line-height: 24px;
			color: $color-black;
		}

		span {
			position: absolute;
			right: 20px;
			top: 20px;
			padding: 2px 7px;
			font-size: 15px;
			line-height: 20px;
			color: $color-white;
			background-color: rgba($color-black, 0.8);
		}

		img {
			width: 100%;
			height: 200px;
			object-fit: cover;
		}

		&:hover {
			box-shadow: 0 0 33px rgba($color-black, 0.5);
		}

		&.hidden {
			display: none;
		}

		.is-browser-ie & {
			flex-basis: calc(33.3% - 64px);
		}
	}

	@media screen and (max-width: 1100px) {
		.work {
			flex-basis: auto;
			width: calc(50% - 24px);
		}
	}
</style>

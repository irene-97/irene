<template>
	<div class="block-copyright">
		<div class="container">
			<h3>© Ирина Артемова, г. Ульяновск, 2018</h3>
		</div>
		<div class="cat">
			<img src="../assets/images/svg/Cat.svg" alt="Irene Artemova">
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Copyright',
	};
</script>

<style lang="scss">
	@import "../scss/variables";

	.block-copyright {
		position: relative;
		box-shadow: 0 0 20px rgba($color-black, 0.3);
		background: $color-cod-gray;
		transform: translateZ(0);

		h3 {
			padding: 20px 0;
			font-size: 19px;
			text-align: center;
			color: $color-white;
		}

		.cat {
			position: absolute;
			left: 74px;
			top: -182px;
			overflow: hidden;
			width: 160px;
			opacity: 0;
			visibility: hidden;
			transform: translate3d(0, 100%, 0);
			transition: opacity 0.5s ease, visibility 0.5s ease, transform 0.5s ease;

			img {
				display: block;
				width: 100%;
			}
		}

		&:hover {
			.cat {
				opacity: 1;
				visibility: visible;
				transform: translate3d(0, 0, 0);
				transition: opacity 0.25s ease, visibility 0.25s ease, transform 0.25s ease;
			}
		}
	}

</style>

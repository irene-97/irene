<template>
	<header>
		<div class="container">
			<transition appear name="fadeInDown">
				<div class="logo">
					<svg fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 333.06 47.03">
						<path class="logo__text"
							  d="M0 0h10.34v47H0zM19.23.0h14.78a41.48 41.48.0 0 1 6.6.4 11 11 0 0 1 4.63 2.14 11.58 11.58.0 0 1 3.67 4.75 16.64 16.64.0 0 1 1.33 6.77q0 8.82-6.61 12.4l8.65 20.57H41.02l-6.29-18.6h-5.17v18.6H19.23zm10.33 7.62v13.2h4.55q6.06.0 6.06-6.79a7.4 7.4.0 0 0-.9-3.84 4.82 4.82.0 0 0-2.08-2 8.88 8.88.0 0 0-3.5-.53zM57.68.0h10.33v47H57.68zM76.56.0H88l12.09 29.22V0h8v47h-9.23l-14.3-34.01v34h-8zm40 0h28.6v8.06h-18.27v10.93h14.19v8.06h-14.19v11.57h18.26v8.41h-28.59zm33.66.0h10.34v38.22h15.16v8.82h-25.5zM171.65.0h11.38l6.64 17.14L196.77.0h10.09L193.8 27.15v19.88h-10.34V27.15z"></path>
						<circle fill="#0077b3" class="logo__dot" cx="213.41" cy="38.65" r="8.37"></circle>
						<path class="logo__text"
							  d="M241.45.0h10.4l13.44 47h-10.57l-2.35-9.72h-13.24L236.82 47h-9.5zm9 29.25L245.7 9.98l-4.58 19.24zM269.22.0H284a41.48 41.48.0 0 1 6.6.4 11 11 0 0 1 4.63 2.14 11.58 11.58.0 0 1 3.67 4.75 16.65 16.65.0 0 1 1.33 6.77q0 8.82-6.61 12.4l8.65 20.57h-11.26l-6.29-18.6h-5.16v18.6h-10.34zm10.34 7.62v13.2h4.55q6.06.0 6.06-6.79a7.41 7.41.0 0 0-.9-3.84 4.82 4.82.0 0 0-2.08-2 8.88 8.88.0 0 0-3.5-.53zM303.74.0h29.32v8.82h-9.61v38.21h-10.34V8.82h-9.37z"></path>
					</svg>
				</div>
			</transition>
			<transition appear name="fadeInDown">
				<div class="navigation">
					<a href="#" v-scroll-to="'#works'">
						Работы
					</a>
					<a href="#" v-scroll-to="'#achievements'">
						Достижения
					</a>
					<a href="#" v-scroll-to="'#contacts'">
						Контакты
					</a>
					<a class="active" href="https://irinely.art" target="_blank">
						Блог
					</a>
				</div>
			</transition>
			<button class="hamburger" type="button" @click="toggleMenu()">
				<img src="../assets/images/svg/hamburger.svg" alt="Меню"/>
			</button>
			<div class="navigation-small" v-if="navigationSmallVisible">
				<a href="#" v-scroll-to="'#works'">
					Работы
				</a>
				<a href="#" v-scroll-to="'#achievements'">
					Достижения
				</a>
				<a href="#" v-scroll-to="'#contacts'">
					Контакты
				</a>
				<a href="https://ireneblog.beliarh.net/" target="_blank">
					Блог
				</a>
			</div>
			<transition appear name="fadeInDown">
				<div class="title wow fadeInDown">
					Веб-разработка
				</div>
			</transition>
			<transition appear name="fadeInDown" @before-enter="animateArrow = true">
				<div class="subtitle">
					Адаптивная кроссбраузерная<br/>
					вёрстка сайтов
				</div>
			</transition>
			<div :class="['arrow', {bounce: animateArrow}]">
				<a href="#" v-scroll-to="'#works'">
					<img src="../assets/images/svg/arrow-down-sign-to-navigate.svg" alt="Вниз"/>
				</a>
			</div>
		</div>
	</header>
</template>

<script>
	export default {
		name: 'Header',
		data() {
			return {
				navigationSmallVisible: false,
				animateArrow: false,
			};
		},
		methods: {
			toggleMenu() {
				this.navigationSmallVisible = !this.navigationSmallVisible;
			},
		},
	};
</script>

<style lang="scss">
	@import "../scss/variables";
	@import "../scss/mixins/clearfix";

	header {
		@include clearfix;

		height: 100vh;
		min-height: 800px;
		max-height: 1200px;
		box-shadow: 0 0 20px rgba($color-black, 0.3);
		background: url("../assets/images/header-cat.jpg") 50% 60% no-repeat;
		background-size: cover;

		.logo {
			float: left;
			margin-top: 62px;
			font-size: 25px;
			text-transform: uppercase;
			color: $color-white;

			svg {
				display: block;
				width: 240px;
				height: 34px;
			}
		}

		.navigation {
			float: right;
			margin-top: 68px;
			font-size: 25px;

			a {
				display: inline-block;
				margin: 0 13px;
				text-decoration: none;
				text-transform: uppercase;
				color: $color-white;

				&:hover {
					border-bottom: solid 3px $color-deep-cerulean;
				}

				&.active {
					border-bottom: solid 3px $color-deep-cerulean;
				}
			}
		}

		.hamburger {
			display: none;
			outline: none;
			border: none;
			background: none;

			img {
				width: 65px;
			}
		}

		.navigation-small {
			position: absolute;
			right: 165px;
			top: 32px;
			z-index: 5;
			border: solid 2px $color-white;
			padding: 39px 23px;
			width: 430px;
			height: auto;
			font-size: 37px;
			background: $color-black;

			a {
				display: block;
				margin: 55px 0;
				padding: 8px;
				font-size: 52px;
				line-height: 52px;
				text-decoration: none;
				color: $color-white;

				&:first-child {
					margin-top: 0;
				}

				&:last-child {
					margin-bottom: 0;
				}
			}
		}

		.title {
			clear: both;
			padding-top: 160px;
			font-weight: bold;
			font-size: 50px;
			line-height: 80px;
			text-align: center;
			text-transform: uppercase;
			color: $color-white;
		}

		.subtitle {
			font-size: 30px;
			line-height: 33px;
			text-align: center;
			color: $color-white;
		}

		.arrow {
			margin-top: 283px;
			text-align: center;
			opacity: 0;
			transition: opacity 0.5s ease;

			img {
				display: inline-block;
				width: 80px;
			}

			&.bounce {
				opacity: 1;
				animation: bounce 3s;
				animation-iteration-count: 2;
			}
		}
	}

	@media screen and (max-width: 1040px) {
		header {
			.navigation {
				font-size: 20px;
			}
		}
	}

	@media screen and (max-width: 930px) {
		header {
			@include clearfix;

			.logo {
				margin-top: 43px;
			}

			.navigation {
				display: none;
			}

			.hamburger {
				display: block;
				float: right;
				margin-top: 26px;
				margin-right: 45px;
			}
		}
	}

	@media screen and (max-width: 875px) {
		header {
			@include clearfix;

			.text {
				padding-top: 80px;
				padding-bottom: 0;
				font-size: 57px;
				line-height: 100px;
			}

			.arrow {
				margin-top: 180px;
			}
		}
	}

	.fadeInDown-enter-active {
		transition: all 1s ease;
	}

	.fadeInDown-enter, .fadeInDown-leave-to {
		transform: translateY(-10px);
		opacity: 0;
	}

	@keyframes bounce {
		0% {
			transform: translateY(0px);
		}
		50% {
			transform: translateY(30px);
		}
		70% {
			transform: translateY(0px);
		}
		80% {
			transform: translateY(30px);
		}
		100% {
			transform: translateY(0px);
		}
	}
</style>

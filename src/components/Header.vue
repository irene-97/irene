<template>
	<header>
		<div class="container">
			<transition appear name="fadeInDown">
				<div class="logo">
					<img src="../assets/images/svg/irene-light.svg" alt="Ирина Артёмова"/>
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
					<a href="https://ireneblog.beliarh.net/" target="_blank">
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
			margin-top: 37px;
			font-size: 25px;
			text-transform: uppercase;
			color: $color-white;

			img {
				vertical-align: middle;
				width: 220px;
				height: 83px;
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
					border-bottom: solid 3px $color-ocean-green;
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

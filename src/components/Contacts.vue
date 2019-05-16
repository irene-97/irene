<template>
	<div class="block-contacts" id="contacts">
		<div class="container">
			<h2>Контакты</h2>
			<div class="labels">
				<div class="city">
					<img src="../assets/images/svg/placeholder.svg" alt="Город">
					<div class="text">
						Ульяновская область, г. Ульяновск
					</div>
				</div>
				<div class="email">
					<img src="../assets/images/svg/envelope.svg" alt="Email">
					<div class="text">
						artemova.irene@gmail.com
					</div>
				</div>
				<div class="phone">
					<img src="../assets/images/svg/phone-call.svg" alt="Телефон">
					<div class="text">
						+7 902 246 44 06
					</div>
				</div>
			</div>
			<div class="links">
				<a href="mailto:artemova.irene@gmail.com" target="_blank" title="Gmail">
					<img src="../assets/images/svg/gmail.svg" alt="Gmail">
				</a>
				<a href="https://vk.com/irinely_art" target="_blank" title="Вконтакте">
					<img src="../assets/images/svg/vk.svg" alt="Вконтакте">
				</a>
				<a href="https://github.com/irinely" target="_blank" title="Github">
					<img src="../assets/images/svg/github-logo.svg" alt="Github">
				</a>
				<a href="https://www.behance.net/irinely_art" target="_blank" title="Behance">
					<img src="../assets/images/svg/behance.svg" alt="Behance">
				</a>
				<a href="skype:irene_121997?chat" target="_blank" title="Skype">
					<img src="../assets/images/svg/skype.svg" alt="Skype">
				</a>
				<a href="https://t.me/irinely_art" target="_blank" title="Telegram">
					<img src="../assets/images/svg/telegram.svg" alt="Telegram">
				</a>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Contacts',
	};
</script>

<style lang="scss">
	@import "../scss/variables";

	.block-contacts {
		padding-bottom: 40px;
		height: auto;
		box-shadow: 0 0 20px rgba($color-black, 0.3);
		background: url("../assets/images/contact.jpg") 0 0 no-repeat;
		background-size: cover;
		background-attachment: fixed;

		.labels {
			display: flex;
			padding: 40px 0;
			color: $color-white;

			.city {
				flex-grow: 1;
				width: 260px;
				text-align: center;

				img {
					width: 100px;
				}
			}

			.email {
				flex-grow: 1;
				width: 260px;
				text-align: center;

				img {
					width: 100px;
				}
			}

			.phone {
				flex-grow: 1;
				width: 260px;
				text-align: center;

				img {
					width: 100px;
				}
			}
		}

		.links {
			display: flex;
			padding: 35px 0;
			text-align: center;

			a {
				flex-grow: 1;
				text-decoration: none;

				img {
					width: 100px;
					height: 100px;
				}

				&:nth-child(3) {
					filter: invert(1);
				}

				&:nth-child(6) {
					img {
						border-radius: 50%;
					}
				}
			}
		}

		p {
			padding: 15px 21px 21px;
			font-size: 23px;
			line-height: 34px;
			text-align: center;
			color: $color-white;

			a {
				border-bottom: solid 1px $color-white;
				text-decoration: none;
				color: $color-white;
			}
		}
	}

	@media screen and (max-width: 930px) {
		.block-contacts {
			background-attachment: scroll;

			.labels {
				.city,
				.email,
				.phone {
					.text {
						font-size: 23px;
					}
				}
			}
		}
	}

	@media screen and (max-width: 840px) {
		.block-contacts {
			.labels {
				.city,
				.email,
				.phone {
					img {
						width: 95px;
					}

					.text {
						font-size: 17px;
					}
				}
			}

			.links {
				flex-wrap: wrap;
				padding: 8px 0;

				a {
					flex-basis: 33%;
					margin-bottom: 40px;

					img {
						width: 85px;
						height: 85px;
					}
				}
			}
		}
	}


</style>

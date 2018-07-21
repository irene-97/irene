<template>
	<div class="page page-about">
		<div class="block-about">
			<div class="container">
				<div class="block-about__top">
					<img class="block-about__photo" src="../assets/images/irene_artemova.jpg" alt="Ирина Артемова"/>
					<div class="block-about__wrapper">
						<h1>
							Верстальщик сайтов
						</h1>
						<div class="block-about__contacts">
							<div class="block-about__item">Ирина Артемова</div>
							<div class="block-about__item">Почта: artemova.irene@gmail.com</div>
							<div class="block-about__item">Личный сайт: <a href="https://irene.beliarh.net/" target="_blank">https://irene.beliarh.net/</a>
							</div>
							<div class="block-about__item">GitHub: <a href="https://github.com/irene-97" target="_blank">https://github.com/irene-97</a>
							</div>
						</div>
					</div>
				</div>
				<div class="block-about__info">
					<p class="subtitle">
						Как работаю? Что использую в&nbsp;разработке сайтов?
					</p>
					<p>
						Занимаюсь адаптивной вёрсткой сайтов по&nbsp;дизайн-макетам (psd, sketch). Придерживаюсь
						принципов PixelPerfect вёрстки с&nbsp;поддержкой современных браузеров. Качественно и&nbsp;добросовестно
						подхожу к&nbsp;работе над каждым проектом&nbsp;&mdash;
						тестирую сайты в&nbsp;разных браузерах, на&nbsp;разных разрешениях и&nbsp;устройствах. Делаю
						вёрстку гибкой, с&nbsp;чистым и&nbsp;аккуратным кодом.
					</p>
					<br/>
					<p>
						Веду свой <a href="https://ireneblog.beliarh.net/" target="_blank">блог о&nbsp;веб-разработке</a>,
						где при возможности описываю&nbsp;то, что изучаю и&nbsp;практикую.
					</p>
					<br/>
					<p>
						Основные навыки:
					</p>
					<ul>
						<li>HTML, шаблонизатор Pug</li>
						<li>Методология именования классов BEM</li>
						<li>Flexbox</li>
						<li>Имеются базовые знания JavaScript, jQuery</li>
						<li>Имеются базовые знания PHP</li>
						<li>Bootstrap, Foundation</li>
						<li>Работа со&nbsp;сторонними JS-библиотеками</li>
						<li>Svg-спрайты, png-спрайты</li>
						<li>Командная работа с&nbsp;Git</li>
						<li>Для взаимодействия с&nbsp;макетами - Photoshop, Avocode, Zeplin</li>
						<li>Работа со&nbsp;сборкой с&nbsp;помощью Gulp</li>
						<li>PixelPerfect вёрстка</li>
						<li>Адаптивная кроссбраузерная вёрстка</li>
					</ul>
					<p class="subtitle">
						Где училась?
					</p>
					<p>
						Окончила &laquo;Ульяновский авиационный колледж&nbsp;&mdash; Межрегиональный центр компетенций&raquo;
						по&nbsp;специальности &laquo;Программирование в&nbsp;компьютерных системах&raquo;.
					</p>
					<p>
						Окончила обучающий курс &laquo;Вёрстка&raquo; от&nbsp;компании &laquo;MST Digital
						Agency&raquo;.
					</p>
					<p>
						Помимо этого, и&nbsp;в&nbsp;настоящее время постоянно самообучаюсь, стремлюсь набирать опыт,
						развиваться и&nbsp;совершенствоваться в&nbsp;своем деле.
					</p>
					<p class="subtitle">
						Какой опыт работы?
					</p>
					<p>
						С&nbsp;2016 года занимаюсь вёрсткой и&nbsp;адаптированием сайтов.
					</p>
					<p>
						Проходила стажировку в&nbsp;компании; работала удалённо над разными сайтами (вёрстка,
						адаптирование, переделывание сайтов&nbsp;&mdash; от&nbsp;мелких лендингов до&nbsp;достаточно
						крупных проектов), большая часть из&nbsp;которых под NDA соглашением.
					</p>
					<p>
						Работала удалённо с&nbsp;такими компаниями, как I-Market (г.Москва), DocDoc (г.Москва), Камис (г.
						<nobr>Санкт-Петербург</nobr>), Волга-М (г.Ульяновск).
					</p>
					<p>
						Имеется <router-link to="/">портфолио с&nbsp;некоторыми работами</router-link>.
					</p>
					<p class="subtitle">
						Почему предпочитаю удалённую работу?
					</p>
					<p>
						Такой вид работы даёт возможность находить интересные проекты разной сложности и&nbsp;сотрудничать
						с&nbsp;различными компаниями. Обустроенное под себя личное рабочее место позволяет работать в&nbsp;более
						спокойной и&nbsp;комфортной обстановке
						в&nbsp;удобное время. К&nbsp;тому&nbsp;же не&nbsp;требуется тратить большое количество времени
						на&nbsp;дорогу в&nbsp;общественном транспорте. А&nbsp;в&nbsp;перерывах между проектами можно
						посветить себя самообразованию.
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'About',
	};
</script>

<style lang="scss">
	@import "../scss/variables";

	.block-about {
		padding: 50px 0;

		&__top {
			display: flex;
		}

		&__photo {
			display: block;
			flex: 0 0 auto;
			margin-right: 50px;
			width: 340px;
			height: 468px;
		}

		&__contacts {
			margin: 30px 0;
		}

		&__item {
			font-size: 20px;
		}

		h1 {
			font-size: 42px;
			line-height: 80px;
		}

		a {
			text-decoration: none;
			color: $color-bodger-blue;
		}

		p {
			margin-bottom: 10px;
			font-weight: 300;
			font-size: 23px;
			line-height: 30px;

			&.subtitle {
				padding: 50px 0 10px;
				font-weight: 500;
				font-size: 26px;
				line-height: 30px;
			}
		}

		ul {
			list-style-type: disc;
			margin-top: 10px;
			margin-bottom: 10px;
			margin-left: 33px;

			li {
				font-weight: 300;
				font-size: 23px;
				line-height: 30px;
			}
		}

		@media (max-width: 940px) {
			&__photo {
				width: 280px;
				height: 373px;
			}

			h1 {
				font-size: 32px;
				line-height: 45px;
			}
		}

		@media (max-width: 750px) {
			&__top {
				flex-direction: column;
			}

			h1 {
				order: 1;
			}

			&__photo {
				order: 2;
				margin: 0 auto;
			}
		}
	}

</style>

<template>
	<div class="block-works" id="works">
		<div class="container">
			<h2 :class="[{'info-text-open': isInfoVisible}]">
				Работы
				<img
					class="info"
					src="../assets/images/svg/info.svg"
					alt="Информация"
					title="Информация"
					@click="toggleInfo()"
				/>
				<div class="info-text">
					Ниже представлена лишь небольшая часть старых работ, в&nbsp;которую не&nbsp;ходят проекты, разработанные под <nobr>NDA-соглашением</nobr>
				</div>
			</h2>
			<div class="works">
				<Work
					v-for="(work, index) in list"
					:href="work.href"
					:year="work.year"
					:src="work.src"
					:alt="work.alt"
					:text="work.text"
					:hidden="index >= 15 && !isAllVisible"
				/>
			</div>
			<button type="button" @click="showAll()" v-if="!isAllVisible">
				Показать ещё
			</button>
		</div>
	</div>
</template>

<script>
	import Work from './Work';

	export default {
		name: 'Works',
		components: {
			Work,
		},
		methods: {
			showAll() {
				this.isAllVisible = true;
			},
			toggleInfo() {
				this.isInfoVisible = !this.isInfoVisible;
			}
		},
		data() {
			return {
				isAllVisible: false,
				isInfoVisible: false,
				list: [
					{
						href: 'https://irene-97.github.io/dior-addict/',
						year: '2018',
						src: 'Dior.jpg',
						alt: 'Dior',
						text: 'Вёрстка лендинга косметики Dior',
					},
					{
						href: 'https://premia.beliarh.net/',
						year: '2016',
						src: 'premia.jpg',
						alt: 'Премия',
						text: 'Вёрстка сайта премии «Лидер конкурентных закупок»',
					},
					{
						href: 'https://birtrans.beliarh.net/',
						year: '2016',
						src: 'birtrans.jpg',
						alt: 'Транспортная компания',
						text: 'Вёрстка сайта транспортной компании «Биртранс»',
					},
					{
						href: 'https://domchehov.beliarh.net/',
						year: '2016',
						src: 'domchehov.jpg',
						alt: 'МДЧ',
						text: 'Вёрстка сайта мебельного магазина «МДЧ»',
					},
					{
						href: 'https://cookery.beliarh.net/',
						year: '2017',
						src: 'cookery.jpg',
						alt: 'Кулинарные рецепты',
						text: 'Дизайн, вёрстка и программирование сайта «Кулинарные рецепты»',
					},
					{
						href: 'https://irene-97.github.io/zebra/',
						year: '2017',
						src: 'Zebra.jpg',
						alt: 'Zebra',
						text: 'Вёрстка сайта магазина одежды «Zebra»',
					},
					{
						href: 'https://www.behance.net/gallery/56278679/ShopBear',
						year: '2017',
						src: 'Shopbear.jpg',
						alt: 'Магазин мишек',
						text: 'Дизайн сайта магазина игрушек',
					},
					{
						href: 'https://irene-97.github.io/bakery/',
						year: '2017',
						src: 'bakery.jpg',
						alt: 'Пекарня',
						text: 'Вёрстка сайта пекарни',
					},
					{
						href: 'https://irene-97.github.io/winter-resort/',
						year: '2017',
						src: 'crios.jpg',
						alt: 'Зимний курорт',
						text: 'Вёрстка лендинга зимнего курорта',
					},
					{
						href: 'https://advertany.beliarh.net/',
						year: '2017',
						src: 'advertany.jpg',
						alt: 'Доска объявлений',
						text: 'Дизайн, вёрстка и программирование доски объявлений',
					},
					{
						href: 'https://irene-97.github.io/cantus/',
						year: '2017',
						src: 'cantus.jpg',
						alt: 'Музыкальный сайт Cautus',
						text: 'Вёрстка музыкального сайта',
					},
					{
						href: 'https://www.behance.net/gallery/57167207/dostavka-sushi-i-rollov',
						year: '2017',
						src: 'sushi.jpg',
						alt: 'Доставка суши и роллов',
						text: 'Дизайн сайта доставки суши и роллов',
					},
					{
						href: 'https://irene-97.github.io/my-charity/',
						year: '2017',
						src: 'my-charity.jpg',
						alt: 'My Charity',
						text: 'Вёрстка сайта «My Charity»',
					},
					{
						href: 'https://irene-97.github.io/author-blog/',
						year: '2017',
						src: 'author-blog.jpg',
						alt: 'Блог',
						text: 'Вёрстка блога',
					},
					{
						href: 'https://cats.beliarh.net/',
						year: '2017',
						src: 'cats.jpg',
						alt: 'Как назвать кота',
						text: 'Дизайн и вёрстка сайта «Как назвать кота»',
					},
					{
						href: 'https://irene.beliarh.net/',
						year: '2017',
						src: 'irene.beliarh.jpg',
						alt: 'Портфолио Ирины Артемовой',
						text: 'Дизайн, вёрстка и программирование портфолио веб-разработчика',
					},
					{
						href: 'https://yazykov.beliarh.net/',
						year: '2017',
						src: 'yazykov.jpg',
						alt: 'Поэт Языков',
						text: 'Дизайн, вёрстка и программирование сайта «Поэт Н.М.Языков»',
					},
					{
						href: 'https://irene-97.github.io/lispum-media/',
						year: '2017',
						src: 'lispum-media.jpg',
						alt: 'Lispum Media',
						text: 'Вёрстка сайта «Lispum Media»',
					},
					{
						href: 'https://irene-97.github.io/mobile-app/',
						year: '2017',
						src: 'mobileApp.jpg',
						alt: 'MobileApp',
						text: 'Вёрстка лендинга «MobileApp»',
					},
					{
						href: 'https://www.behance.net/gallery/59828687/noch-prodazh-avtomobilej',
						year: '2017',
						src: 'Luxe.jpg',
						alt: 'Ночь продаж Luxe Fiat',
						text: 'Дизайн лендинга ночи продаж автомобилей',
					},
					{
						href: 'https://www.behance.net/gallery/57340031/super-dacha-(testovoe-zadanie-dlja-IDEM)',
						year: '2017',
						src: 'dasha.jpg',
						alt: 'Супер ДАЧА',
						text: 'Дизайн сайта «СуперДАЧА» (тестовое задание)',
					},
					{
						href: 'https://irene-97.github.io/strict/',
						year: '2017',
						src: 'strict.jpg',
						alt: 'Strict',
						text: 'Вёрстка лендинга «Strict»',
					},
					{
						href: 'https://www.behance.net/gallery/56565199/Portfolio',
						year: '2017',
						src: 'portfolio.jpg',
						alt: 'Портфолио Ирины Артемовой',
						text: 'Дизайн сайта-портфолио',
					},
					{
						href: 'https://www.behance.net/gallery/56283119/kofejnja',
						year: '2017',
						src: 'Cafe.jpg',
						alt: 'Кофейня',
						text: 'Дизайн сайта кофейни',
					},
					{
						href: 'https://www.behance.net/gallery/56539131/vetklinika',
						year: '2017',
						src: 'doctor-pets.jpg',
						alt: 'Ветклиника',
						text: 'Дизайн сайта ветклиники',
					},
					{
						href: 'https://pizza.beliarh.net/',
						year: '2017',
						src: 'pizza.jpg',
						alt: 'Доставка пиццы',
						text: 'Дизайн, вёрстка и программирование лендинга доставки пиццы',
					},
				],
			};
		},
	};
</script>

<style lang="scss">
	@import "../scss/variables";

	.block-works {
		padding-bottom: 55px;

		h2 {
			&.info-text-open {
				.info-text {
					opacity: 1;
					visibility: visible;
				}
			}
		}

		.info {
			position: absolute;
			margin-left: 5px;
			width: 23px;
			height: 23px;
			cursor: pointer;
		}

		.info-text {
			position: absolute;
			left: 50%;
			top: 60px;
			z-index: 10;
			margin-left: -44px;
			border-radius: 7px;
			padding: 13px;
			width: 250px;
			box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
			font-size: 15px;
			line-height: 20px;
			text-align: left;
			text-transform: none;
			color: $color-black;
			background-color: $color-white;
			opacity: 0;
			visibility: hidden;
			transform: translateX(-50%);
			transition: opacity 0.3s ease;
		}

		.text {
			padding-bottom: 51px;

			p {
				border-left: solid 4px $color-alizarin-crimson;
				padding: 15px 21px;
				font-style: italic;
				font-size: 23px;
				line-height: 34px;
				text-align: justify;
				text-indent: 30px;
			}
		}

		.works {
			display: flex;
			flex-wrap: wrap;
			margin-bottom: 40px;
		}

		button {
			display: block;
			margin: 0 auto 12px;
			outline: none;
			border: none;
			border-radius: 4px;
			padding: 12px 29px;
			box-shadow: 0 0 20px rgba($color-black, 0.2);
			font-size: 19px;
			color: $color-black;
			background: $color-white;
			cursor: pointer;

			&:hover {
				background: darken($color-white, 3%);
			}
		}
	}
</style>

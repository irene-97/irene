<template>
	<div class="block-achievements" id="achievements">
		<div class="container">
			<h2>
				Достижения
			</h2>
			<div class="achievements">
				<Achievement
					v-for="(achievement, imageIndex) in list"
					:key="imageIndex"
					:href="achievement.href"
					:src="achievement.src"
					:title="achievement.title"
					@click.native.prevent="index = imageIndex"
				/>
			</div>
			<VueGallery :images="images" :index="index" @close="index = null"/>
		</div>
	</div>
</template>

<script>
	import Achievement from './Achievement';
	import VueGallery from 'vue-gallery';

	export default {
		name: 'Achievements',
		components: {
			Achievement,
			VueGallery,
		},
		data() {
			return {
				index: null,
				list: [
					{
						href: 'achievements1.jpg',
						src: 'achievements1-preview.jpg',
						title: 'Всероссийская олимпиада 2016-2017 уч.г. по дисциплине Основы программирования',
					},
					{
						href: 'achievements2.png',
						src: 'achievements2-preview.png',
						title: 'Диплом о среднем профессиональном образовании',
					},
					{
						href: 'achievements3.png',
						src: 'achievements3-preview.png',
						title: 'Сертификат о прохождении курса &quot;Вёрстка&quot; образовательного проекта GREENWICH от MST Digital Agency',
					},
				],
			};
		},
		computed: {
			images() {
				return this.list.map((achievement) => {
					return require(`../assets/images/achievements/${achievement.href}`);
				});
			},
		},
	};
</script>

<style lang="scss">
	@import "../scss/variables";

	.block-achievements {
		padding-bottom: 55px;
		box-shadow: 0 0 20px rgba($color-black, 0.3);
		background-color: $color-white;

		.achievements {
			display: flex;
			flex-wrap: wrap;
			margin-bottom: 20px;
		}
	}
</style>

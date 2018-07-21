<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: 'app',
	};
</script>

<style lang="scss">
	@import "scss/reset";
	@import "scss/variables";
	@import "scss/mixins/clearfix";
	@import "scss/fonts";
	@import "scss/base";
	@import "scss/container";
</style>

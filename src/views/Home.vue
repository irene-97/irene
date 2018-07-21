<template>
	<div class="page page-home">
		<Header/>
		<Works/>
		<Achievements/>
		<Contacts/>
		<Copyright/>
	</div>
</template>

<script>
	import Header from '../components/Header';
	import Works from '../components/Works';
	import Achievements from '../components/Achievements';
	import Contacts from '../components/Contacts';
	import Copyright from '../components/Copyright';

	export default {
		name: 'home',
		components: {
			Header,
			Works,
			Achievements,
			Contacts,
			Copyright,
		},
	};
</script>

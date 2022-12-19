<template>

	<Header />
	<div class="container mt-4 pt-5">
		<router-view></router-view>
	</div>
	<Footer />

</template>

<script setup lang="ts">
	import Header from './components/Header.vue'
	import Footer from './components/Footer.vue'
	
</script>

<style scoped>
	
</style>
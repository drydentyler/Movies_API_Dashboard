<template>
	<div class="container">
		<h1>Movies Collection</h1>
		<br/>
		<MoviesDirectorsContainer />
	</div>
</template>

<script setup>
import MoviesTable from './components/MoviesTable.vue'
import MoviesDirectorsContainer from './components/MoviesDirectorsContainer.vue'

</script>
<style scoped>
.hidden {
  display: none;
}
</style>

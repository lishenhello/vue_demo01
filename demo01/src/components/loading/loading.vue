<template>
	<div class='layer' v-show='loadingShow'>
		<div class="spinner">
		  <div class="rect1"></div>
		  <div class="rect2"></div>
		  <div class="rect3"></div>
		  <div class="rect4"></div>
		  <div class="rect5"></div>
		</div>
	</div>
</template>
<script>
	import {mapState} from 'vuex'
	export default {
	  computed: {
	    ...mapState(['loadingShow'])
	  }
	}
</script>
<style lang='stylus'>
	@import './loading.styl'
</style>
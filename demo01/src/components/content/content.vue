<template>
	<div class='content'>
		<h1>{{slide.title}}</h1>
		<div v-html='slide.content'></div>
	</div>
</template>
<script>
	export default {
	  props: {
	  	slide: {
	  	  type: Object
	  	},
	  	data () {
	  	  return {

	  	  }
	  	}
	  }
	}
</script>
<style lang='stylus'>
	@import './content.styl'
</style>
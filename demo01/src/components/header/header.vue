<template>
	<div>
		<div class='header_layer' v-show='menuShow' @click='shownav'></div>
		<header @click='shownav' :class='{"show":menuShow}'>
			<span class="iconfont icon-fenlei"></span>
			<div class="header_title">
				<div>{{headerTitle}}</div>
			</div>
			<span class="iconfont icon-sousuo_sousuo"></span>
		</header>
	</div>
</template>
<script>
	import {mapState} from 'vuex'
	export default {
	  data () {
	  	return {
	  		show: false,
	  		hide: false
	  	}
	  },
	  computed: {
	    ...mapState(['headerTitle', 'menuShow'])
	  },
	  methods: {
	  	shownav () {
	  		this.$store.commit('updateMenu')
	  	}
	  }
	}
</script>
<style lang='stylus'>
	@import './header.styl'
</style>

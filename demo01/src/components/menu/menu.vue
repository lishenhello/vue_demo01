<template>
	<div id="menu" :class="{'show':menuShow}">
		<div>
			<div><img src="http://otzx5qa1n.bkt.clouddn.com/daxiong.jpg" alt=""></div>
			<div>暗夜，香香香!</div>
		</div>
		<ul>
			<li v-for='menu in menus' @click='hideMenu(itemContent[menu], menu)' >
			<router-link :to='menu'>
			<i class="iconfont" :class='"icon-"+menu'></i>{{itemContent[menu]}}
			<span v-show='menu === "day" && news > 0'>{{news}}</span>
			</router-link>
			</li>
		</ul>
	</div>
</template>
<script>
	import {mapState} from 'vuex'
	const itemContent = {'welfare': '福利', 'day': '每日推荐', 'ios': 'IOS', 'android': 'Android', 'web': 'Web前端'}
	export default {
	  data () {
	  	return {
	  		itemContent: itemContent
	  	}
	  },
	  computed: {
	  	...mapState(['menuShow', 'menus', 'news'])
	  },
	  methods: {
	  	hideMenu (title, menu) {
	  		this.$store.commit('updateTitle', title)
	  		this.$store.commit('updateMenu')
	  		if (menu === 'day') {
	  			this.$store.commit('updateNews')
	  		}
	  	}
	  }
	}
</script>
<style lang='stylus'>
	@import '../../common/css/mixin.styl'
	@import './menu.styl'
</style>
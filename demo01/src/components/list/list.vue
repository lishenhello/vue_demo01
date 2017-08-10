<template>
	<div class="list" v-infinite-scroll='loadMore' infinite-scroll-disabled='busy' infinite-scroll-distance='10'>
		<a :href="data.url" v-for='data in datas'>
			<v-card :data='data'></v-card>
		</a>
	</div>
</template>
<script>
	import vCard from '../card/card'
	export default {
	  components: {
	  	vCard
	  },
	  props: {
	  	type: String
	  },
	  data () {
	  	return {
	  		busy: false,
	  		datas: [],
	  		page: 1
	  	}
	  },
	  methods: {
	  	loadMore () {
	  		this.busy = true
	  		this.loadTop()
	  		this.page++
	  	},
	  	loadTop () {
	  		console.log(11)
	  		this.$store.commit('updateLoading', true)
	  		this.$http.get(`http://gank.io/api/data/${this.type}/10/${this.page}`).then((response) => {
	  			// console.log(response)
	  			this.datas = this.datas.concat(response.body.results)
	  			// console.log(this.datas)
	  				this.busy = false
	  			this.$nextTick(() => {
	  				this.$store.commit('updateLoading', false)
	  			})
	  		})
	  	}
	  }
	}
</script>
<style lang='stylus'>
	@import './list.styl'
</style>
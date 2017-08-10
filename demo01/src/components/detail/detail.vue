<template>
	<transition name='fade'>
		<div v-show='showFlag' class='detail'>
			<div>
				<header>
					<div class='back' @click='hide'><</div>
					<div v-if='detail' class='title'>{{detail.created_at || detail.publishedAt || updated_at}}</div>
				</header>
				<section ref='content'>
					<div v-if='detail' v-html='detail.content'></div>
				</section>
			</div>
		</div>
	</transition>
</template>
<script>
	import BScroll from 'better-scroll'
	export default{
		data () {
			return {
				showFlag: false
			}
		},
		props: {
			detail: {
				type: Object
			},
			time: {
				type: String
			}
		},
		methods: {
			show () {
				this.showFlag = true
				this.$nextTick(() => {
					if (!this.scroll) {
						this.scroll = new BScroll(this.$el, {click: true, startX: 0, stratY: 0, scrollY: true})
					} else {
						this.scroll.refresh()
					}
				})
			},
			hide () {
				this.showFlag = false
			}
		}
	}
</script>
<style lang='stylus'>
	@import './detail.styl'
</style>
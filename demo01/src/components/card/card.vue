<template>
	<div id="card">
		<img :src='data.images?data.images[0]:"./static/404.png"' alt="">
		<div>
			<p>{{data.desc}}</p>
			<div>
				<div>{{data.who}}</div>
				<div>{{data.publishedAt}}</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		props: {
			data: {
				type: Object
			}
		}
	}
</script>
<style lang='stylus'>
	@import './card.styl'
</style>
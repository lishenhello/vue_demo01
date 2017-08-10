<template>
	<swiper :options="swiperOption">
	    <swiper-slide v-for="slide in swiperSlides">
	    	<v-content :slide='slide'></v-content>
	    </swiper-slide>
	    <div class="swiper-pagination" slot="pagination"></div>
  	</swiper>
</template>
<script>
	import vContent from '../content/content'
	import {swiper, swiperSlide} from 'vue-awesome-swiper'
	const weekday = ['今天', '昨天', '前天', '三天前', '四天前']
	export default {
		data () {
			return {
				swiperSlides: [],
				weekday: [],
				swiperOption: {
					pagination: '.swiper-pagination',
					slidesPerView: 'auto',
					paginationClickable: true,
					paginationBulletRender (swiper, index, className) {
			            return `<span class='${className} current'>${weekday[index]}</span>`
			          }		
				}
			}
		},
		components: {
			swiper, swiperSlide, vContent
		},
		created () {
			this.$store.commit('updateLoading', true)
			  this.$http.get('http://gank.io/api/history/content/5/1').then((response) => {
				this.swiperSlides = response.body.results
				// console.log(this.swiperSlides)
				 this.$nextTick(() => {
		           this.$store.commit('updateLoading', false)
		        })
			})
		}
	}
</script>
<style lang='stylus'>
	@import './day.styl'
</style>
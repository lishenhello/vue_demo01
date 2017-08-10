<template>
  <div class="welfare" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
      <div class='welfareLeft'>
        <div v-for='item in leftData' style='padding-bottom:15px' @click='selectDetail(item.createdAt)'>
          <img :src="item.url" alt="">
        </div>
      </div>
      <div class='welfareRight'>
        <div v-for='items in rightData' style="padding-bottom:15px" @click='selectDetail(items.createdAt)'>
          <img :src="items.url" alt="">
        </div>
      </div>
      <v-detail :detail='detailContent' :time='time' ref='details'></v-detail>
    </div>
</template>
<script>
  import {objectDate} from '../../common/js/dateTime'
  import vDetail from '../detail/detail'
  export default {
    data () {
      return {
        page: 0,
        busy: false,
        leftData: [],
        rightData: [],
        detailContent: null,
        time: ''
      }
    },
    components: {
      vDetail
    },
    methods: {
      loadMore () {
      this.busy = true
      this.loadTop()
      this.page++
    },
    loadTop () {
      console.log(this.page)
      this.$store.commit('updateLoading', true)
      this.$http.get(`https://gank.io/api/data/福利/10/${this.page}`).then((response) => {
        // 筛选出左边的数据
        let left = response.body.results.filter((data, i) => {
           // console.log(data)
          return (i + 1) % 2 === 1
        })
        // 筛选出右边的数据
        let right = response.body.results.filter((data, i) => {
          return (i + 1) % 2 !== 1
        })
        // console.log(right)
        this.leftData = this.leftData.concat(left)
        this.rightData = this.rightData.concat(right)
        // 强制异步转同步，关闭加载动画
        this.$nextTick(() => {
          this.$store.commit('updateLoading', false)
        })
      })
       this.busy = false
    },
    selectDetail (time) {
        this.$store.commit('updateLoading', true)
        this.time = time
        let obj = objectDate(time)
        this.$http.get(`http://gank.io/api/history/content/day/${obj.y}/${obj.m}/${obj.d}`).then((response) => {
          this.detailContent = response.body.results[0]
           console.log(this.detailContent)
          this.$nextTick(() => {
            this.$store.commit('updateLoading', false)
          })
           this.$refs.details.show()
        })
    }
   }
  }
</script>
<style lang='stylus'>
  @import './welfare.styl'
</style>
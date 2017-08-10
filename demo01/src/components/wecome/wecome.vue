<template>
    <div class="wecome">
          <div class="loader-inner pacman">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
    </div>
</template>
<script>
 import {saveToLocal} from '../../common/js/local'
    export default {
      mounted () {
        setTimeout(() => {
          // console.log(11111)
          this.$router.push({path: './web'})
          saveToLocal('gank', 'wecome', true)
        }, 10000)
      }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
    @import './wecome.styl'
</style>

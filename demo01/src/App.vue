<template>
  <div id="app">
    <v-header></v-header>
    <v-menu></v-menu>
    <v-load></v-load>
    <keep-alive>
      <router-view></router-view> 
    </keep-alive>
  </div>
</template>
<script>
  import vHeader from './components/header/header'
  import vMenu from './components/menu/menu'
  import vLoad from './components/loading/loading'
  export default {
    name: 'app',
    components: {
      vHeader, vMenu, vLoad
    }
  }
</script>
<style lang='stylus'>
  #app
    width: 100%
</style>
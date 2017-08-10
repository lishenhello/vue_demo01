// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import infiniteScroll from 'vue-infinite-scroll'	// 引入vue滚动瀑布流插件
import resource from 'vue-resource'		// 引入resource
import VueLazyload from 'vue-lazyload'		// 引入懒加载插件
import router from './router' // 引入路由模块
import store from './vuex/index' // 引入vuex状态管理器
import './common/css/font.css'	// 引入字体图标样式
import {loadToLocal} from './common/js/local' // 读取缓存不成功，原因不详。。

// 注册插件
Vue.use(infiniteScroll)
Vue.use(resource)
 
Vue.use(VueLazyload, {
  error: './static/404.png',
  loading: './static/loading.gif',
  attempt: 1
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

/**
 * loadTOLocal()是读取本地缓存数据，具体common/js/store.js 查看
 *
 *
 */
if (!loadToLocal('gank', 'wecome', false)) {
  router.push('/wecome')
}

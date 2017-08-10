// 导入vue文件
import Vue from 'vue'
// 导入vuex文件
import Vuex from 'Vuex'

// 注册组件
Vue.use(Vuex)

// 注册初始状态
const state = {
  'headerTitle': 'web前端',
  'menuShow': false,
  'menus': ['welfare', 'day', 'ios', 'android', 'web'],
  'news': 5,
  'loadingShow': false
}
// 创建一个mutation用来改变初始状态
const mutations = {
  updateMenu (state) {
  	state.menuShow = !state.menuShow
  },
  updateTitle (state, title) {
  	state.headerTitle = title
  },
  updateNews (state) {
  	state.news = 0
  },
  updateLoading (state, flag) {
    state.loadingShow = flag
  }
}
// 实例化一个store仓库并导出
export default new Vuex.Store({
  state,
  mutations
})

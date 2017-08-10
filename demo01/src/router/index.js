import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
	   path: '/welfare',
	   component: require('../components/welfare/welfare')
	 },
	  {
	   path: '/day',
	   component: require('../components/day/day')
	 },
	  {
	   path: '/ios',
	   component: require('../components/ios/ios')
	 },
	  {
	   path: '/android',
	   component: require('../components/android/android')
	 },
	  {
	   path: '/web',
	   component: require('../components/web/web')
	 },
	 {
	   path: '/wecome',
	   component: require('../components/wecome/wecome')
	 },
	 {
	   path: '/',
	   redirect: '/web'
	 }
  ]
})

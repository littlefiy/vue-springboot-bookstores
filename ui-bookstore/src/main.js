// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store/index'
import Moment from 'moment'
// 定义全局时间戳过滤器
Vue.filter('formatDate', function(value) {
  return Moment(value).format('YYYY-MM-DD')
})
Vue.filter('formatTime', function(value) {
  return Moment(value).format('YYYY-MM-DD HH:mm:ss')
})
Vue.prototype.$moment = Moment;
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Vuex)

new Vue({
  el: '#app',
  router: router,
  store: store,
  components: { App },
  template: '<App/>'
})






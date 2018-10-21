// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import apis from './server/api'
import VueLazyload from 'vue-lazyload'//vue懒加载
import store from './store'//应用store里的index

Vue.use(apis)
Vue.use(VueLazyload,{
  loading:require('./assets/timg.gif')//把图片当成模块加载之前显示logo
})
import '@/assets/css/reset.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,//注入vue中
  components: { App },
  template: '<App/>'
})

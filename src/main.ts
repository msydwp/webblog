import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import cookies from 'vue-cookies' //引入cookie

//配置请求数据
import {AxiosInstance } from "axios";

Vue.prototype.$http=axios

Vue.config.productionTip = false

Vue.use(cookies)
Vue.prototype.$cookies=cookies;


//配置请求根路径
// axios.defaults.baseURL = '';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

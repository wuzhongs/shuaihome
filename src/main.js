import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import {Message } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store/index'

// import env from './env' 
import router from './router'
Vue.prototype.$message = Message

const mock = false
if(mock){
  require('./mock/api')
}
  
//统一接口，基于代理的方式
axios.defaults.baseURL = '/api/';

//根据环境变量获取不同的地址请求，基于cors和jsonp的方式
// axios.defaults.baseURL = env.baseUrl

//超时
axios.defaults.timeout = 8000;
//接口错误拦截
axios.interceptors.response.use((response) => {
  let res = response.data;
  let path = location.hash;
  if(res.status == 0){
    return res.data
  }else if(res.status == 10){
    if(path != '#/index'){
      window.location.href = '/#/login'
    }
    return Promise.reject(res)
  }else{
    Message.warning(res.msg)
    return Promise.reject(res)
  }
},(error) => {
    let res = error.response;
    Message.error(res.data.message);
    return Promise.reject(error)
})

Vue.use(VueAxios,axios)
Vue.use(VueLazyLoad,{
  loading:'/imgs/loading-svg/loading-bars.svg'
})
Vue.use(VueCookie)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
 
}).$mount('#app')

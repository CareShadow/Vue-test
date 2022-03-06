// 引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//引入VueRouter
import VueRouter from 'vue-router'
// 引入路由器
//import router from './router/index.js'
// 引入全部样式
// import 'element-ui/lib/theme-chalk/index.css'
import {Button} from 'element-ui';

Vue.use(Button)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this //安装全局事件总线，$bus就是当前应用的vm
  }
}).$mount('#app')

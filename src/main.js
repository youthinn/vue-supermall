import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from "./store"

import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

import toast from 'components/common/toast'

import Vant from 'vant';
import 'vant/lib/index.css';

Vue.config.productionTip = false;

//创建一个事件总线
// Vue.prototype.$bus = new Vue();
// event Bus 用于无关系组件间的通信。
Vue.prototype.$bus = new Vue()

//安装toast插件
Vue.use(toast)

Vue.use(Vant);


// 解决移动端300ms延迟
FastClick.attach(document.body)

// 使用懒加载图片插件
Vue.use(VueLazyLoad, {
  loading: require('./assets/img/common/imgload.jpg')
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

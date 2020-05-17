
import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
import '../src/assets/fonts/iconfont.css'
import Vant from 'vant';
import 'vant/lib/index.css';
import './vant.js'
import store from './store'
Vue.use(Vant);

Vue.config.productionTip = false
// 解决移动端点击延迟200ms的问题
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
      FastClick.attach(document.body);
  }, false);
}



new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

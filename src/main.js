
import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
import '../src/assets/fonts/iconfont.css'
import Vant from 'vant';
import 'vant/lib/index.css';
import './vant.js'
import store from './store'
import Moment from 'moment';
Vue.filter('comverTime',function(data,format){
  return Moment(data).format(format);
});
import waterfall from "vue-waterfall2"
Vue.use(waterfall)

// 　<p>{{Time | comverTime('YYYY年MM月DD日')}}</p>
// 　　<!-- 输出结果 2019年09月05日-->
// 　　<p>{{Time | comverTime('YYYY-MM-DD HH:mm:ss')}}</p>
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

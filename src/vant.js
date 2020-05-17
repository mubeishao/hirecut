import Vue from 'vue'
import Vant from 'vant';
import 'vant/lib/index.css';
import { NoticeBar } from 'vant';
import { Search } from 'vant';
Vue.use(Search);

import { Image as VanImage } from 'vant';
Vue.use(VanImage);

import less from 'less'
Vue.use(less)


Vue.use(NoticeBar);
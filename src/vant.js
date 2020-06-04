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

import { Cell, CellGroup } from 'vant';
Vue.use(Cell);
Vue.use(CellGroup);

Vue.use(NoticeBar);

import { ActionSheet } from 'vant';

Vue.use(ActionSheet);

import { Checkbox, CheckboxGroup } from 'vant';

Vue.use(Checkbox);

import { Toast } from 'vant';

Vue.use(Toast);

import { Field } from 'vant';

Vue.use(Field);
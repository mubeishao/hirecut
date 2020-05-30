import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import header from '@/components/header'
import appontment from '../pages/appiontment'
import selectProject from '../pages/selectProject'
import hairProject from '../pages/hairProject'
import hairCutter from '../pages/haircutter'
import reward from '../pages/reward'
import redPackage from '../pages/redpackage'
import memBer from '../pages/member'
import allowance from '../pages/allowance'
import Integral from '../pages/Integral'
import mallScore from '../pages/mallScore'
import onlineScore from '../pages/onlineScore'
import myorder from '../pages/myorder'
import purchase from '../pages/purchase'
import makeappont from '../pages/makeAppont'
// import user from '../pages/myself'


const User = () => import('../pages/myself');

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/', 
      redirect:'/main'
    },
    {
      path: '/main',
      name: 'Main',
      component: main,
      meta:{
         showfoot:true
      }
    },
    {
      path: '/user',
      name: 'User',
      component: User, 
      meta:{
        showfoot:true
     },
     
    },
    {
      path: '/header',
      name: 'Header',
      component: header, 
      meta:{
        showfoot:true
     }
    },
    {
      path: '/appontment',
      name: 'Appontment',
      component: appontment, 
      meta:{
        showfoot:true
     }
    },
    {
      path: '/selectProject',
      name: 'Appontment',
      component: selectProject, 
      meta:{
        showfoot:false
     }
    },
    {
      path: '/hairproject',
      name: 'HairProject',
      component: hairProject, 
      meta:{
        showfoot:false
     }
    },
    {
      path: '/haircutter',
      name: 'haircutter',
      component: hairCutter, 
      meta:{
        showfoot:false
     }
    },
    {
      path: '/reward',
      name: 'reward',
      component: reward, 
      meta:{
        showfoot:false   
     }
    },
    {
      path: '/redpackage',
      name: 'redpackage',
      component: redPackage, 
      meta:{
        showfoot:false   
     }
    },
    {
      path: '/member',
      name: 'member',
      component: memBer, 
      meta:{
        showfoot:false   
     }
    },
    {
      path: '/allowance',
      name: 'allowance',
      component: allowance, 
      meta:{
        showfoot:false   
     }
    },
    {
      path: '/integral',
      name: 'integral',
      component: Integral, 
      meta:{
        showfoot:false   
     }
    },
    {
      path: '/mallscore',
      name: 'mallscore',
      component: mallScore, 
      meta:{
        showfoot:false   
     }
    },
    {
      path: '/onlinescore',
      name: 'onlinescore',
      component: onlineScore, 
      meta:{
        showfoot:false   
     }
    },
    {
      path: '/myorder',
      name: 'myorder',
      component: myorder, 
      meta:{
        showfoot:false   
     }
    },
    {
      path: '/purchase',
      name: 'purchase',
      component: purchase, 
      meta:{
        showfoot:false   
     }
    },
    {
      path: '/makeappont',
      name: 'makeappont',
      component: makeappont, 
      meta:{
        showfoot:false   
     }
    },
    
   
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import footer from '@/components/footer'
import header from '@/components/header'
import appontment from '../pages/appiontment'
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
    }
   
  ]
})

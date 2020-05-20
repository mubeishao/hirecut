import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import footer from '@/components/footer'
import header from '@/components/header'
import appontment from '../pages/appiontment'
import selectProject from '../pages/selectProject'
import hairProject from '../pages/hairProject'
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
   
  ]
})

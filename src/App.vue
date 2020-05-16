<template>
  <div id="app">
       <router-view ></router-view>
       <Footbot v-show="$route.meta.showfoot"></Footbot>
  </div>
</template> 


<script>
// 禁止手机端扩大和缩小手势
window.onload = function () {
  document.addEventListener('touchstart', function (event) {
    if (event.touches.length > 1) {
      event.preventDefault()
    }
  })
  document.addEventListener('gesturestart', function (event) {
    event.preventDefault()
  })
}

</script>
<script>
import Footbot from './components/footer'
export default {
  name: 'App',
  data(){
    return{
       cls1:'',
       cls2:''
    }

   
  },
   components:{
           Footbot
    }

  

  
 
}
</script>

<style>
    #app{
      width: 100%;
      height: 100%;
      background: #ffffff;
      font-size: 0.26rem;
    }
</style>

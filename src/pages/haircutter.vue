<template>
     <div class="content">
           <div class="header">
               <div class="head"><HeaderTop :rightContent='name' /></div>
               <div class="bgm">
                   <img src="../../static/images/hairdetail.png" class="hairdetail" />
               </div>
               <div class="round">
                   <van-image width="60" height="60" round   src="https://img.yzcdn.cn/vant/cat.jpeg" />
               </div>
           </div>
           <div class="TonyInfo">
               <div class="tong">
                    <p class="named">托尼</p>
                     <div class="eng">
                         <p class="english">tong</p><p class="price">剪发价：¥188</p>
                     </div>
                     <div class="eng england">
                        <p class="strong">最强男士定制理发师</p><p class="icon"><van-icon name="arrow" color="#dcdddf" /></p>
                     </div>
               </div>
           </div>
     </div>
</template>
<script>
import HeaderTop from '../components/header'
export default {
    data(){
        return{
           name:'托尼'
        }
    },
    components:{
        HeaderTop
    }
    
}
</script>
<style scoped>
     .header{
        position: relative;
        border-bottom: 0.05rem solid gainsboro;
     }
     .hairdetail{
         display: block;
         width: 80%;
         height: 3.4rem;
         margin: 0 auto; 
         filter: blur(6px);
     }
     .head{
         z-index: 999;
     }
     .round{
       position: fixed;
       top: 3.4rem;
       left: 45%;
     }
     .TonyInfo{
         width: 100%;
         margin: 0.3rem auto;
         border-bottom: 0.01rem solid #f2f2f2;
     }
     .tong{
        margin: 0 auto;
        width: 90%;
     }
     .named{
         color: #000000;
         font-weight: bold;
         font-size: 0.26rem;
     }
     .eng{
         display: flex;
         justify-content: space-between;
         font-size: 0.2rem;
         margin: 0.1rem auto;
     }
     .england{
         font-size: 0.2rem;
         color: #666666;
         margin: 0.14rem auto;
     }
    .english{
         color: #999999;
    }
    .price{
        color: #f9516b;
    }
    
  
</style>
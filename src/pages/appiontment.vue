<template>
    <section class="section">
        <div class="top">
              <div class="head">
                 <p class="retail">预约</p>
                 <p ><van-icon name="shop-collect-o" /><span class="mall">门店</span></p>
             </div>
        </div>
        <div class="sales">
              <div class="shop">
                   <div class="image"><van-image width="50" height="50"   src="https://img.yzcdn.cn/vant/cat.jpeg" /></div>
                   <div class="intro">
                       <p class="name">龙江店</p>
                       <p class="fontS"><van-icon name="location-o" />南京市</p>
                       <p class="fontS">
                        <van-icon name="phone-circle-o" />
                        0551-4685554</p>
                   </div>
                   <div class="telphone">
                       <van-image width="34" height="34" round   src="https://img.yzcdn.cn/vant/cat.jpeg" />
                   </div>
              </div>
        </div>
    </section>
</template>
<script>
import HeaderTop from '../components/header'
export default {
    data(){
        return{

        }
    }
}
</script>

<style scoped>
    .section{
        padding-top: 0.5rem;
        
    }
    .head{
           display: flex;
           justify-content: space-between;
           text-align: center;
           margin: 0 auto;
           width: 90%; 
          
       }
    .retail{
         font-size: 0.26rem;
        }   
    .mall{
        font-size: 0.22rem;
    }    
    .top{
         border-bottom: 0.01rem solid gainsboro;
         padding-bottom: 0.4rem;
    }
    .sales{
        margin-top: 0.3rem;
        border-bottom: 0.1rem dashed gainsboro;
        padding-bottom: 0.26rem;
    }
    .shop{
        display: flex;
        justify-content: center;
        margin: 0 auto;
        width: 90%;
    }
    .image{
        flex: 0 0 1.2rem;
    }
    .name{
        font-size: 0.24rem;
    }
    .intro{
        flex: 2;
    }
    .fontS{
        font-size: 0.2rem;
        color: gray;
         margin: 0.1rem 0;
    }
    .telphone{
        padding-top: 0.16rem;
    }
    
</style>
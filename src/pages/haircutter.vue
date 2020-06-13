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
               <div class="faxian">
                   剪发
               </div>
               <div class="faxian2">
                   剪发
               </div>
           </div>
           <div class="TonyInfo">
               <div class="tong">
                    <p class="named">托尼</p>
                     <div class="eng">
                         <p class="english">tong</p><p class="price">剪发价：¥188</p>
                     </div>
                     <div class="eng england">
                        <p class="strong">最强男士定制理发师</p><p class="icon"><van-icon name="arrow" color="#dcdddf" size="14" /></p>
                     </div>
               </div>
           </div>
           <div class="row">
               <div>
                   <p class="oneline">66组</p>
                   <p class="secondline">作品</p>
               </div>
                <div>
                   <p class="oneline">188次</p>
                   <p class="secondline">被约</p>
               </div>
                <div>
                   <p class="oneline">6</p>
                   <p class="secondline">打赏</p>
               </div>
                <div>
                   <p class="oneline">100%</p>
                   <p class="secondline">好评率</p>
               </div>
           </div>
           <p class="border"></p>
           <div class="mall">
               <div>
                   <p class="long">龙剑点</p>
                   <p class="address">
                       <img src="../../static/images/12_08.png" width="8" height="10" />
                       <span >南京市鼓楼区打鸡蛋123号</span>
                    </p> 
               </div>
               <a href="tel:13812340050" class="phone"></a>
               <!-- <img src="../../static/images/12_05.png" width="40" height="40" class="phone" /> -->
           </div>
          <p class="border"></p>
          <div class="retail">
              <div class="today">
                  <img src="../../static/images/12_13.png" width="13" height="14"/>
                  <span>今日预约情况</span>
              </div>
              <div class="book">
                  <p>已有<span class="number"> 8</span>人预约</p>
                  <div class="image">
                       <span class="index1">
                            <van-image
                            round
                            width="30"
                            height="30"
                            src="https://img.yzcdn.cn/vant/cat.jpeg"
                            />
                       </span>
                        <span class="index2">
                            <van-image
                            round
                            width="30"
                            height="30"
                            src="https://img.yzcdn.cn/vant/cat.jpeg"
                            />
                       </span>
                       <img src="../../static/images/arrow_09.png" width="7" height="12" class="vanicon"/>
                      
                  </div>
              </div>
          </div>
          <p class="border"></p>
          <div class="art">
               <div class="opus">
                    <div class="today">
                        <img src="../../static/images/12_16.png" width="13" height="14"/>
                        <span>他的作品</span>
                    </div>
                    <div class="more" @click="goPic">
                        <span>更多作品</span><van-icon name="arrow" color="#dcdddf" size="14" />
                    </div>
              </div>
              <ul class="wrap">
                  <li v-for="(item,index) in imglist" :key="index">
                       <van-image
                            width="60"
                            height="60"
                            fit="fill"
                            src="https://img.yzcdn.cn/vant/cat.jpeg"
                        />
                  </li>
              </ul>
          </div>
          <p class="border"></p>
          <router-link to="/evaluation">
               <div class="rate">
                <div  class="customer">
                    <img src="../../static/images/12_19.png" width="13" height="14"/>
                    <span class="today">顾客评价</span>
                </div>
                <div class="count">
                    <span>18条</span>
                    <van-icon name="arrow" color="#dcdddf" size="14" class="arrow" />
                </div>
              </div>
          </router-link>
          <p class="border2"></p>
          <div class="bot">
              <img src="../../static/images/wer_09.png" @click="goReward"/>
              
               <router-link to="/hairproject">
                   <img src="../../static/images/12_22.png"/>
               </router-link>
          </div>
     </div>
</template>
<script>
import HeaderTop from '../components/header'
export default {
    data(){
        return{
           name:'托尼',
           imglist:8
        }
    },
    components:{
        HeaderTop
    },
    methods:{
        goReward(){
            this.$router.push({path:"/reward"})
        },
        goPic(){
            this.$router.push({path:'/picimg'})
        }
    }
    
}
</script>
<style scoped>
     .content{
         width: 100%;
         height: 100%;
         background: #ffffff;
         overflow: auto;
     }
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
       position: absolute;
       top: 3.4rem;
       left: 42%;
     }

     .faxian{
         position:absolute;
         top: 2rem;
         left: 2rem;
         border-radius: 0.28rem;
         border: 0.02rem solid #000000;
         padding: 0.1rem 0.16rem;
         font-size: 0.14rem;
     }
      .faxian2{
         position:absolute;
         top: 1rem;
         left: 3rem;
         border-radius: 0.28rem;
         border: 0.02rem solid #000000;
         padding: 0.1rem 0.16rem;
         font-size: 0.14rem;
     }
     .TonyInfo{
         width: 100%;
         margin: 0.2rem auto;
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
    .row{
        display: flex;
        justify-content: space-around;
        text-align: center;
        padding-bottom: 0.18rem;
    }
    .row div{
        display: flex;
        flex-direction: column;
    }
    .oneline{
        font-size: 0.26rem;
        color: #333333;
        font-family:"Microsoft YaHei"
    }
    .secondline{
        font-size: 0.2rem;
        color: #999999;
        margin-top: 0.1rem;
    }
    .border{
        width: 100%;
        height: 0.2rem;
        background: #f4f5f7;
    }
     .border2{
        width: 100%;
        height: 0.8rem;
        background: #f4f5f7;
        padding-bottom: 0.8rem;
    }
    .mall{
        display: flex;
        justify-content: space-between;
        padding: 0.2rem 0.3rem  0.08rem 0.3rem;
        
    }
    .long{
        color: #000000;
        font-size: 0.24rem;
        font-weight: bold;
    }
    .address{
        color: #9b9b9b;
        font-size: 0.18rem;
        margin-top: 0.16rem;

    }
    .address span{
        vertical-align: top;
    }
    .phone{
       display: block;
       width: 0.6rem;
       height: 0.6rem;
       margin-top: -0.08rem;
       background: url('../../static/images/12_05.png') no-repeat;
       background-size: 100% 100%;
    }
    .retail{
        padding: 0.2rem 0.3rem;
    }
    .today{
        font-size: 0.24rem;
        color: #000000;
        font-weight: bold;
        
    }
    .today img{
        vertical-align: middle;
    }
    .today span{
        font-weight: bold;
        vertical-align: middle;

    }
    .book{
        display: flex;
        justify-content: space-between;
        color: #999999;
        margin-top: 0.2rem;
        font-size: 0.2rem;
    }
    .book p{
        padding-left: 0.4rem;
    }
    .number{
        color: #fa506b;
    }
    .image{
        margin-top: -0.4rem;
        padding-right: 0.1rem;
       
    }
    .index1{
        z-index: 2;
    }
     .index2{
        z-index: 4;
        margin-left: -0.2rem;
    }
    .vanicon{
       margin-left: 0.1rem;
       margin-bottom: 0.2rem;
        
    }
    .art{
        width: 90%;
        margin: 0 auto;
    }
    .opus{
        display: flex;
        justify-content: space-between;
        text-align: center;
        padding: 0.2rem 0;
    }
    .more span{
        vertical-align: top;
        color: #9c9c9c;
    }
    .wrap{
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        margin: 0 auto;
    }
    .wrap li{
        /* margin-right: 0.24rem; */
        margin: 0.1rem 0.1rem;
    }
    .rate{
         display: flex;
        justify-content: space-between;
        padding: 0.2rem 0.3rem ;
       

         
    }
    .customer img,.arrow{
        vertical-align: middle;
    }
    .count span{
        color: #999999;
        font-size: 0.2rem;
    }
    .bot{
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        display: flex;
        overflow: hidden;
    }
    .bot img{
        display: block;
        flex: 1;
        height: 0.65rem;
    }

    

</style>
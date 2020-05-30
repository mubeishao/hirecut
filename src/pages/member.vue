<template>
    <div class="container">
          <HeaderTop :rightContent="rightContent"/>
          <h3>充值套餐</h3>
          <ul>
              <li class="recharge" v-for="(item,index) in charge" :key="index">
                 <div class="charge">
                       <p class="money"><span>{{item.money}}</span>¥</p>
                        <div class="num">
                            <p>次卡充值{{item.charge}}元,赠送{{item.give}}次</p>
                            <img src="../../static/images/member_03.png" height="24" width="70" />
                        </div>
                        <div class="hair">{{item.washhair}}</div>
                 </div>
              </li>
          </ul>
          <h3>我的会员卡</h3>
          <ul>
              <li class="card" v-for="(item,index) in cardList" :key="index">
                    <div class="memcard">
                        <p class="reward"><span>{{item.money1}}</span>¥</p>
                        <p class="mall">{{item.mall}}</p>
                    </div>
                    <h2>{{item.card}}</h2>  
                    <!-- <p class="percent"><van-progress color="#fb516b"  track-color="#4a4a4a"    :percentage="12" /></p> -->
                     <p class="percent">
                        <progressBar :value="12" :max="100"></progressBar>
                     </p>
                    <div class="times">
                            <p>已使用{{item.month}}次</p>
                            <p class="extra">剩余{{item.sheng}}次</p>
                    </div>
                 
              </li>
          </ul>
    </div>
</template>
<script>
import HeaderTop from '../components/header'
import progressBar from '../components/progreeeBar'
export default {
    data(){
        return{
           rightContent:"会员卡",
           charge:[
               {
                 money:1000,
                 charge:1000,
                 give:50,
                 washhair:"洗发卡"
               },
               {
                 money:200,
                 charge:200,
                 give:50,
                 washhair:"洗发卡"
               },
           ],
           cardList:[
               {
                   money1:1000,
                   mall:'龙江店',
                   card:'洗发卡',
                   month:10,
                   sheng:12
               },
                 {
                   money1:2000,
                   mall:'龙江店',
                   card:'洗发卡',
                   month:10,
                   sheng:22
               }
           ]
        }
    },
    components:{
        HeaderTop,
        progressBar
    }
}
</script>
<style scoped>
     h3{
         color: #333333;
         font-size: 0.2rem;
         font-weight: bold;
         padding: 0.1rem 0 0.1rem 0.32rem ;
     }
     .card{
         
         width: 90%;
         height: 2.4rem;
         margin: 0 auto;
         border-radius: 0.05rem;
         background: url("../../static/images/member1_07.png") no-repeat;
         background-size: 100% 100%;
         margin-bottom: 0.1rem;
     }
     .recharge{
         padding: 0.26rem 0.2rem;
         width: 85%;
         margin: 0.16rem auto;
         border-radius: 0.05rem;
         box-shadow: 0 0 15px #f9f9f9;
        
     }
     
     .money{
         color: #fb516b;
     }
     .money span{
         font-size: 0.3rem;
     }
     .num{
         display: flex;
         justify-content: space-between;
         margin: 0 auto;
         color: #666666;
         font-size: 0.24rem;
         padding-top: 0.1rem;
     }
     .num img {
         display: block;
         padding-right: 0.05rem;
         margin-top: -0.1rem;
     }
     .hair{
         font-size: 0.24rem;
         color: #999999;
     }
     .memcard{
         display: flex;
         justify-content: space-between;
         padding: 0.26rem 0.2rem 0 0.2rem;
     }
      h2{
         margin:0.1rem 0 0.1rem 0;
         color: #8b7d5c;
         font-size: 0.24rem;
         padding-left: 0.24rem;
     }
     .percent{
         padding-top: 0.01rem;
        
     }
     .reward span{
         font-size: 0.4rem;
         font-weight: bold;
     }
     .mall{
         font-size: 0.22rem;
         color: #666666;
     }
     .times{
         display: flex;
         justify-content: space-between;
         padding: 0.3rem 0.2rem 0 0.2rem;
         font-size: 0.22rem;
      
     }
     .extra{
         font-size: 0.22rem;
           color: #8b7d5c;
     }
     
</style>
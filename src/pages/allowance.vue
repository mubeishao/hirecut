<template>
    <div class="content">
            <HeaderTop :rightContent="rightContent"/>
             <ul>
              <li class="card" v-for="(item,index) in cardList" :key="index">
                   <div>
                        <div class="memcard">
                            <p class="reward"><span>{{item.money1}}</span>¥</p> 
                       </div>
                        <div class="deal">
                            <h2>
                                <img src="../../static/images/taocan_03.png" width="12" height="12"/>
                                <span>{{item.card}}</span>
                            </h2> 
                            <p>剩余12次</p>
                        </div> 
                        <p class="percent"><van-progress color="#fb516b"  track-color="#4a4a4a"    :percentage="12" /></p>
                        <!-- <p class="percent">
                            <progress-bar leftBg="#ffffff" bgc="#4a4a4a" ballBgc="red"  :value="12" 
                            ></progress-bar>
                        </p> -->
                        <div class="times">
                                <p>会员专享,充{{item.month}}送{{item.month}}</p>
                                <p class="extra">查看详情次</p>
                        </div>
                   </div>
                   <div class="outday">
                        <p>卡号: 000001</p>
                         <p>有效期: 永久有效</p>
                          <p>开卡日期: 2020年5月26日</p>
                    </div> 
              </li>
                  
          </ul>
    </div>
</template>
<script>
import HeaderTop from '../components/header'
export default {
    data(){
        return{
            rightContent:"套餐余量",
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
        HeaderTop
    }
}
</script>
<style scoped>
     .card{
         width: 90%;
         height: 2rem;
         margin: 0 auto;
         border-radius: 0.05rem;
         background: url("../../static/images/member1_07.png") no-repeat;
         background-size: 100% 100%;
         margin-bottom: 1.2rem;
         padding-bottom: 0.05rem;
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
     h2 img,h2 span{
         vertical-align: middle;
     }
      .percent{
         margin-top: 0.2rem;
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
         padding: 0.24rem 0.2rem 0  0.2rem;
         font-size: 0.22rem;
         
     }
      .extra{
         font-size: 0.22rem;
        color: #fb516b;
     }
     .deal{
         display: flex;
         justify-content: space-between;
         text-align: center;
         align-items: center;
         
     }
     .deal p{
         font-size: 0.24rem;
         padding-right: 0.2rem;
     }
     .outday{
         width: 98%;
         margin: 0.4rem auto;
         color: #666666;
         font-size: 0.22rem;
         margin-bottom: 0.8rem;
     }
     .outday p{
         margin: 0.1rem 0;
     }
</style>
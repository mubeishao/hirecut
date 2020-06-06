<template>
    <div class="content">
        <HeaderTop :rightContent="selectProject"/>
         <van-tabs v-model="active"  color="currentIndex==active?'apple':'apple2'" @click="getActive">
                                <van-tab :title="unused"></van-tab>
                                <van-tab :title="outday"></van-tab>
         </van-tabs>
        <!-- <div class="table">
                 <ul class="used">
                     <li v-for="(item,index) in arrList" :key="index" @click="current(index)">
                         <div :class="currentIndex==index?'apple':'apple2'">
                              <p class="one"> {{item.unused}}</p>
                              <p :class="currentIndex==index?'iphone':''"></p>
                         </div>
                         
                     </li>    
                 </ul>
        </div> -->
        <ul class="packeage">
            <li class="bgm" v-for="(item,index) in chargelist" :key="index">
                <div class="padd">
                     <div class="list">
                        <div>
                            <div class="charge">{{item.name}}</div>
                            <div class="day">有效日期至{{item.day}}</div>
                        </div>
                        <p class="money">¥<span>{{item.money}}</span></p>
                     </div>
                  <div class="dgg">{{item.word}}
                  </div>
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
             unused:"未使用(1)",
             outday:"已过期",
             selectProject:"我的红包",
             active:0,
             currentIndex:'',
             arrList:[
                 {
                     unused:"未使用(1)"
                 },
                 {
                      unused:"已过期"
                 }
             ],
             chargelist:[
                 {
                     name:'充值赠送',
                     day:'2020.3.26',
                     money:10,
                     word:`
                       中华人民共和国的法定货币是人民币，
                    
                      人民币的单位为元，人民币的辅币单位为角、分。1元等于10负责人民币的设计、印制和发行负责人民币的设计、印制和发行
                     `
                 },
                  {
                     name:'充值赠送',
                     day:'2020.10.26',
                     money:30,
                     word:`
                       中华人民共和国的法定货币是人民币，
                     
                      人民币的单位为元，人民币的辅币单位为角、分。1元等于10负责人民币的设计、印制和发行负责人民币的设计、印制和发行
                     `
                 },
             ]
        }
    },
    methods:{
         goUnUsed(){

         },
         current(index){
             this.currentIndex = index
         },
         getActive(e){
              this.currentIndex = e
         }
    },
    components:{
        HeaderTop
    }
}
</script>
<style scoped>
     .content{
         width: 100%;
         height: 100%;
         background: #f5f5f5;
        
     }
     .table{
         width: 100%;
         height: 0.8rem;
         border: none;
         background: #ffffff;
     }
     .used{
         width: 100%;
         height: 100%;
         display: flex;
         justify-content: center;
         text-align: center;
         align-items: center; 
     }
     .used li{
         flex: 1;
         text-align: center;
          /* height: 0.8rem;
          line-height: 0.8rem; */
     }
     .apple{
          width: 1.2rem;
          color: #333333;
          /* border-bottom: 0.05rem solid #000000;  */
          margin: 0 auto;
          font-weight: bold;
          transition: all 0.2s ease;   
          text-align: center;
     }
     .apple2{
          color: #999999;
          border-bottom: none;
          margin: 0 auto;
          transition: all 0.2s ease;
          text-align: center;
     }
     .one{
         
         padding-top: 0.3rem;
         padding-bottom: 0.2rem;
     }
      .iphone{ 
          width: 0.8rem;
          color: #333333;
          border-bottom: 0.05rem solid #000000;
          margin-left: 0.22rem;
      }
     .bgm{
         width: 94%;
         height: 2.2rem;
         background: url("../../static/images/packe_03.png") no-repeat;
         background-size: 100% 100%;
         margin: 0.3rem auto;
     }
     .list{
         display: flex;
         justify-content: space-between;
         padding-top: 0.26rem;
     }
     .padd{
         width: 90%;
         margin: 0 auto;

     }
     .charge{
         color: #333333;
         font-size: 0.26rem;
         font-weight: bold;
     }
     .day{
         color: #999999;
         font-size: 0.2rem;
         font-weight: bold;
         margin-top: 0.16rem;
         
     }
     .money{
         color: #fb516b;
         
     }
     .money span{
         font-size: 0.6rem;
         font-weight: bold;
     }
     .dgg{
         margin-top: 0.5rem;
         color: #999999;
         font-size: 0.18rem;
         letter-spacing:0.02rem;
         line-height: 0.22rem;
     }
</style>
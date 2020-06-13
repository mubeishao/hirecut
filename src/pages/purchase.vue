<template>
    <div class="content">
        <HeaderTop :rightContent="selectProject"/>
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
        <ul class="myorder">
            <li class="order"  v-for="(item,index) in orderlist" :key="index">
                    <div class="day">订单日期: {{item.day}}</div>
                    <div class="padd">
                        <div class="mei">
                            <p class="project mu">项目:</p>
                            <p class="ping">
                                美食染发;美食染发;;美食染发;美食染发;美食染发;美食染发
                            </p>
                        </div>
                        <div class="curry">
                            <span class="project">执行:</span><span>{{item.zonjian}}</span>
                        </div>
                        <div class="assiant"><span class="project">助理:</span><span>{{item.assiant}}</span></div>
                        <div class="bottom">共计:<span class="yuan">{{item.total}}元</span></div>
                        <div class="right">
                            <img src="../../static/images/goodrate_03.png" height="12" width="40"/>
                            <span class="deatil" @click="checkDetail">查看详情</span>
                            <span class="deatil">我要点评</span>
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
           active:'1',
           selectProject:"消费记录",
           currentIndex:0,
           arrList:[
                 {
                     unused:"未使用(1)"
                 },
                 {
                      unused:"已过期"
                 }
             ],
            orderlist:[
                {
                    day:'2020-4-5',
                    hairlist:{
                        name:'美式剪发'
                    },
                    zonjian:"总监",
                    assiant:'刘备',
                    total:'156'
                },
                  {
                    day:'2020-4-5',
                    hairlist:{
                        name:'美式剪发'
                    },
                    zonjian:"总监",
                    assiant:'刘备',
                    total:'156'
                }
            ] 
        }
    },
    components:{
        HeaderTop
    },
    methods:{
         current(index){
             this.currentIndex = index
         },
         checkDetail(){
             this.$router.push({path:'/integral'})
         }
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
          /* color: #333333;
          border-bottom: 0.05rem solid #000000; */
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

      .myorder{
          padding-right: 0.18rem;
      }

      .order{
          width: 90%;
          height: 3rem;
          border-radius: 0.05rem;   
          margin: 0.2rem auto;
          margin-bottom: 0.6rem;
         
      }
      .day{
          width: 100%;
          height: 0.7rem;
          line-height: 0.7rem;
          background: url("../../static/images/order_03.png") no-repeat;
          background-size: 100% 100%;
          color: #333333;
          font-size: 0.26rem;
          padding-left: 0.18rem;
          font-weight: bold;
          margin: 0 auto;
          
      }
      .project{
          color: #999999;
          font-size: 0.22rem;
      }
      .padd{
          width: 100%;
          background: #ffffff; 
          padding-left: 0.18rem;
          padding-top: 0.26rem;
          padding-bottom: 0.2rem;
      }
      .curry{
          margin: 0.2rem 0;
      }
      .mei{
          display: flex;
          padding-right: 0.2rem;
      }
      .mu{
          flex: 1;
      }
      .ping{
          flex: 8;
      }
      .yuan{
          color: #333333;
          font-size: 0.22rem;
      }
      .bottom{
          color: #999999;
          font-size: 0.22rem;
          margin-top: 0.2rem;
          padding-right: 0.22rem;
          padding-bottom: 0.05rem; 
          
      }
      .deatil{
          padding: 0.05rem 0.1rem;
          text-align: center;
          font-size: 0.18rem;
          color: #666666;
          border: 0.01rem solid #dddddd;
          border-radius: 0.02rem;
      }
      .right{
          text-align: right;
          padding-right: 0.1rem;
      }
      .right img{
          vertical-align: middle;
      }
</style>
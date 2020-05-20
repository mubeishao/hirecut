<template>
    <div class="select">
         <HeaderTop :rightContent='selectProject'/>
         <section>
             <div class="content">
                 <div class="head">
                     <div class="intro1"><van-image width="0.6rem" height="0.6rem" round   src="https://img.yzcdn.cn/vant/cat.jpeg" /></div>
                     <div class="intro">
                         <p class="name">熊安良</p>
                         <p class="price">HERO(理发价 ￥98)</p>
                     </div>
                 </div>
                 <div class="time">
                     <div class="relative">
                        <ul class="timebook">
                            <li v-for="(item,index) in weeklist" :key="index" :class="index==selectday?'red ':''"  @click="selectdayItem(index,item.day,item.week)">
                                <p class="day1">{{item.day}}</p>
                                <p class="day2">{{item.week}}</p>
                            </li>
                        </ul>
                        <div class="img"><van-icon name="arrow" /></div>
                     </div>
                      <div class="marquee">
                          <van-notice-bar color="#ee0f0f" background="#ffffff" left-icon="info-o">
                           公众号预约问题请联系商家!    <span class="detail">详情>></span>
                         </van-notice-bar>
                      </div>
                 </div>
                 <div class="marginTop">
                       <div class="retailTime">
                            <ul class="reatil">
                                <li v-for="(item,index) in morning" :key="index" :class="curentmor == index|| (index>curentmor&&index < nextCount) ?'bgm':'bgmk'" 
                                 @click="clickReatil(index,item.time,morning)">{{item.time}}</li>
                            </ul>
                            <div class="noon">上午</div>
                       </div>
                        <div class="retailTime retailMiddle">
                            <ul class="reatil">
                                <li v-for="(item,index) in middleTime" :key="index" 
                                :class="curentmor2==index || curentmor2==index+1  ?'bgm':'bgmk'" 
                                @click="clickMiddle(index,item.time,middleTime)">{{item.time}}</li>
                            </ul>
                            <div class="noon">下午</div>
                       </div>
                        <div class="retailTime">
                            <ul class="reatil">
                                <li v-for="(item,index) in nightlist" :key="index"  :class="curentmor3==index || curentmor3==index+1 || curentmor3==index+2 ?'bgm':'bgmk'" 
                                @click="clickNight(index,item.time,nightlist)">
                                    {{item.time}}
                                </li>
                            </ul>
                            <div class="noon">晚上</div>
                       </div>

                       <div class="attention">注：预约当天服务需要提前60分钟</div>
                 </div>

                 
                 <footer>
                     <div>
                         <van-icon name="underway-o" />
                         <span>时间选择：<span class="period">{{periodDay}} {{morDay}}--{{morPoint}}</span></span>
                     </div>
                     <div class="next">下一步</div>
                 </footer>
             </div>
         </section>
    </div>
</template>
<script>
import HeaderTop from '../components/header'
export default {
    data(){
        return{
             selectProject:"选择项目",
             selectday:0,
             periodDay:"今天",
             timePoint:"",
             present:0,
             curentmor:100,
             curentmor2:100,
             curentmor3:100,
             nextCount:0, 
             morDay:"",
             morPoint:"",
          
             weeklist:[
                 {
                    day:'今天',
                    week:'周一'
                 },
                  {
                    day:'明天',
                    week:'周二'
                 },
                  {
                    day:'后天',
                    week:'周san'
                 },
                  {
                    day:'5/12',
                    week:'周一'
                 },
                  {
                    day:'5/12',
                    week:'周二'
                 },
                  {
                    day:'今天',
                    week:'周san'
                 }, {
                    day:'今天',
                    week:'周一'
                 },
                  {
                    day:'今天',
                    week:'周二'
                 },
                  {
                    day:'今天',
                    week:'周san'
                 }, {
                    day:'今天',
                    week:'周一'
                 },
                  {
                    day:'今天',
                    week:'周二'
                 },
                  {
                    day:'今天',
                    week:'周san'
                 },
                  {
                    day:'今天',
                    week:'周一'
                 },
                  {
                    day:'今天',
                    week:'周二'
                 },
                  {
                    day:'今天',
                    week:'周san'
                 },
                  {
                    day:'今天',
                    week:'周一'
                 },
                  {
                    day:'今天',
                    week:'周二'
                 },
                  {
                    day:'今天',
                    week:'周san'
                 },
             ],
             morning:[
                 {time:'2'},
                 {time:'22'},
                 {time:'27'},
                 {time:'12:30'},
                 {time:'20:30'},
                 {time:'234'},
             ],
             middleTime:[
                 {time:'2'},
                 {time:'22'},
                 {time:'27'},
                 {time:'12:30'},
                 {time:'20:30'},
                 {time:'234'},
                 {time:'12:30'},
                 {time:'20:30'},
                 {time:'15:30'},
                 {time:'12:30'},
                 {time:'20:30'},
                 {time:'19:20'},
             ],
             nightlist:[
                 {time:'2:00'},
                 {time:'22:00'},
                 {time:'15:30'},
                 {time:'12:30'},
                 {time:'20:30'},
                 {time:'23:59'},
             ],

             hairDay:[
                 {
                     morning1:[  {time:'21:30'},
                    {time:'22:30'},
                    {time:'11.30'},
                    {time:'12:30'},
                    {time:'20:30'},
                    {time:'234'},]
                 },
                 {
                    morning2:[  
                    {time:'6:30'},
                    {time:'22:30'},
                    {time:'27'},
                    {time:'12:30'},
                    {time:'20:30'},
                    {time:'234'},]
                 },
                 {
                    morning3:[  {time:'2:30'},
                    {time:'22:30'},
                    {time:'27'},
                    {time:'12:30'},
                    {time:'20:30'},
                    {time:'234'},]
                 }
             ]
              
             

             
        }
    },
    methods:{
        selectdayItem(index,day,week){
              let vm = this;
              this.selectday = index
              vm.periodDay = day
              vm.timePoint = week

        },
        clickReatil(index,item,mon){
              let vm = this
              vm.curentmor = index;
              vm.nextCount = index+3
            //   vm.curentmor = vm.nextCount
              
              
              
            //  let vm =this;
            //  vm.curentmor2 = 100
            //  vm.curentmor3 = 100
            //  vm.curentmor = index
            //  vm.curentmor = index +1  
            //  vm.morDay = item
            //  if(vm.morning.length == index+1) {
            //      vm.morPoint = mon[index].time
            //      vm.curentmor2 = 0
            //      if(vm.curentmor2 == 0){
            //          vm.morPoint = vm.middleTime[0].time
            //      }
            //  }else{
            //      vm.morPoint = mon[index+1].time
            //  }

        },
        clickMiddle(index,item,middle){
             let vm =this;
             vm.curentmor = 100
             vm.curentmor3 = 100
             vm.curentmor2 = index
             vm.curentmor2 = index +1 
             vm.morDay = item
             if(vm.middleTime.length == index+1) {
                  vm.morPoint = middle[index].time
                  vm.curentmor3 = 0
                 if(vm.curentmor3 == 0){
                  vm.morPoint = vm.nightlist[0].time
                 }
             }else{
                vm.morPoint = middle[index+1].time
             }
   

        },
        // 晚上
        clickNight(index,item,night){
             let vm =this;
             vm.curentmor = 100
             vm.curentmor2 = 100
             vm.curentmor3 = index
             vm.curentmor3 = index +1
             vm.curentmor3 = index +2
             vm.morDay = item
             if(vm.nightlist.length == index+1) {
                vm.morPoint = night[index].time
             }else{
                vm.morPoint = night[vm.curentmor3].time
             }
        },

    },
    components:{
     HeaderTop
  }
}
</script>
<style scoped>
    
    .mor{
        display: flex;
        justify-content: center;
    }
    .mor li{
        width: 1rem;
        height: 0.5rem;
        background: red;
    }

     .select{
         width: 100%;
         height: 100%;
         overflow: auto;
         background: #eeeeee;
     }
     .head{    
         display: flex;
         justify-content: center;
         align-content: center;
         background: #222222;
         margin: 0 auto;
         color: #f8f8f8;  
     }
     .time{
         width: 100%;
         background: #ffffff;
     }
     .intro1{
         display: inline-block;
         padding-top: 0.12rem;
         
     }
     .intro{
         height: 0.7rem;
         line-height: 0.6rem;
         padding-bottom: 0.1rem;
         padding-left: 0.2rem;
     }
     .name{
         font-size: 0.24rem;
         height: 0.3rem;
     }
     .price{
         font-size: 0.14rem;
         height: 0.3rem;   
     }
     .timebook{
         display: flex;
         justify-content: flex-start;
         align-items: center;
         background: #f9f9f9;
         height: 0.7rem;    
         overflow: auto;
         width: 96%;    
         padding-top: 0.14rem;
     }
     .timebook li{
         height: 100%;
         padding: 0 0.1rem;
     }
     .relative{
         position: relative;
     }
     .img{
         position: absolute;
         right: 0;
         bottom: 0.2rem;
         font-size: 0.3rem;
         color: #b8b8b8;
     }
     .selectday{
         padding: 0.1rem;  
         height: 100%;
        
     }
     .day1{
         font-size: 0.24rem;
         width: 0.6rem;
     }
     .day2{
         font-size: 0.2rem;
         padding-top: 0.1rem;
         padding-left: 0.02rem;
     }
     .timebook::-webkit-scrollbar{
        height: 0;
        width: 0;
        color: none;
        background: none;
    } 
    .red{
        color: red;
        border-bottom: 0.04rem solid red;
    }
    .detail{
        font-size: 0.1rem;
        margin-left: 1rem;
    }
    .retailTime{
        position: relative;
        width: 100%;
        height: auto;
        background: #ffffff;
        margin-top: 0.4rem;
        /* padding: 0.1rem; */
    }
    .retailMiddle{
        margin: 0.8rem auto;
    }
    .reatil{
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        /* padding: 0.1rem; */
        width: 100%;
       padding: 0.1rem 0 0.1rem 0;
        
    }
    .noon{
        position: absolute;
        top: -0.3rem;
        left: 45%;
        width:0.6rem;
        height:0.5rem; 
        line-height: 0.4rem;
        background-color:#ffffff;
        border-radius:0.5rem 0.5rem 0 0; 
        font-size: 0.12rem;
        text-align: center;

    }
    .reatil li{
        border: 0.01rem solid #dadada;
        border-radius: 0.24rem;
        text-align: center;
        width: 1.3rem;
        height: 0.44rem;
        line-height: 0.44rem;
        margin:0.1rem 0.14rem;
        font-size: 0.2rem;
        padding-top: 0.03rem;
           
    }
    .marginTop{
        width: 100%;
        padding-bottom: 1.6rem;
    }
    footer{
        display: flex;
        justify-content: space-between;
        position: fixed;
        left: 0;
        bottom: 0;
        height: 0.8rem;
        line-height: 0.8rem;
        width: 100%;
        background: #ffffff;
        padding-left: 0.2rem;
    }
    .next{
        width: 1.2rem;
        height: 0.4rem;
        line-height: 0.4rem;
        border-radius: 0.2rem;
        background: #64635f;
        text-align: center;
        vertical-align: middle;
        margin-top: 0.2rem;
        font-size: 0.2rem;
        margin-right: 0.36rem;
    }
    .attention{
        font-size: 0.18rem;
        color: #939393;
        margin-top: 0.6rem;
        padding-left: 0.2rem;
    }
    .period{
        color: red;
    }
    .bgm,.bgm2,.bgm3{
        background: red;
        color: #ffffff;
    }
    .bgmk{
         background: #ffffff;
        color:#939393;
    }
</style>
<template>
    <div class="content">
            <HeaderTop :rightContent="rightContent"/>
             <ul>
              <li  v-for="(item,index) in cardList" :key="index">
                   <div class="card">
                        <div class="memcard">
                            <p class="reward"><span>{{item.money1}}</span>¥</p> 
                       </div>
                        <div class="deal">
                            <h2>
                                <img src="../../static/images/taocan_03.png" width="12" height="12"/>
                                <span>{{item.card}}</span>
                            </h2> 
                            <p>剩余{{item.sheng}}次</p>
                        </div> 
                       
                        <p class="percent">
                          <progressBar :value="item.sheng" :max="100"></progressBar>
                        </p>
                        <div class="times">
                                <p>会员专享,充{{item.money1}}送{{item.money1}}</p>
                                <p  @click="checkdet(index)" :class="currentIndex==index?'excolor extra':'excolor2 extra'">查看详情</p>
                        </div>
                   </div>
                   <div class="outday" v-show="showCheck">
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
import progressBar from '../components/progreeeBar'
export default {
    data(){
        return{
            rightContent:"套餐余量",
            currentIndex:0,
            showCheck:false,
            showCheck1:false,
            showCheck2:false,
            showCheck3:false,
            showCheck4:false,
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
                   card:'染发卡',
                   month:10,
                   sheng:22
               },
                {
                   money1:2000,
                   mall:'龙江店',
                   card:'染发卡',
                   month:11,
                   sheng:25
               }
            ],
           
        }
    },
    created(){
        
    },
    components:{
        HeaderTop,progressBar
    },
    methods:{
        checkdet(index){
            console.log(index)
            let vm =this;
            this.currentIndex = index
            this.showCheck = !this.showCheck
            for(let i =1;i<vm.cardList.length;i++){
            //    this[`showCheck${i+1}`] = true;
              console.log(i)
            //    console.log( this[`showCheck${i+1}`])
            }
        }
    }
}
</script>
<style scoped>
     .card{
         width: 90%;
         height: 2.4rem;
         margin: 0 auto;
         border-radius: 0.05rem;
         background: url("../../static/images/member1_07.png") no-repeat;
         background-size: 100% 100%;
         margin-bottom: 0.2rem;
        
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
         padding: 0.24rem 0.2rem 0  0.2rem;
         font-size: 0.2rem;
         
     }

      .extra{
         font-size: 0.22rem; 
     }
     .excolor2{
        color: #666666;
     }
     .excolor{
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
         margin: 0.2rem auto 0.2rem 0.4rem;
         color: #666666;
         font-size: 0.22rem;     
     }
     .outday p{
         margin: 0.1rem 0;
     }
</style>
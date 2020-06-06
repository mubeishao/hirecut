<template>
    <div class="content">
         <div class="fixed">
             <img src="../../static/images/TA_03.png" width="20" height="22" @click="goback"/>
             <p>打赏TA</p>
         </div>
         <div class="head">
              <div class="image">
                  <van-image
                    round
                    width="50"
                    height="50"
                    src="../../static/images/shang_03.png"
                    />
              </div>
              <div class="tong">托尼</div>
              <div class="english">tong</div>
         </div>
         <div class="money">
              <ul  :class="show ? 'circle2':'circle'">
                  <li v-show="!show" class="cirli1">
                    <!-- <countTo ref='example' :startVal='startVal' :endVal='endVal' :duration='1000' :decimals="0"></countTo> -->
                    {{money}}
                  </li>
                   <li v-show="show" class="cirli2">
                       <input placeholder="输入金额" v-model="moneyOne"  class="place"/>
                  </li>
              </ul>
              <p class="click">点击按键随机打赏</p>
              <ul class="extra">
                  <li v-for="(item,index) in allmoney" :key="index" @click="reward(item.money,index,item.text)" :class="currentIndex==index?'bgm':'bgm2'">
                      {{item.money}}
                  </li> 
              </ul>
              <input type="text"  v-model="word"  class="text" placeholder="说点什么吧" />   

              <div v-show="showTran" :class="showTran?'trans':''">{{word}}</div>
              

              <div class="wx">
                  <img src="../../static/images/shang_11.png"/>
              </div> 
         </div>
    </div>
</template>
<script>
import HeaderTop from '../components/header'
import countTo from 'vue-count-to';
export default {
    data(){
        return{
           showTran:false, 
           count:0,
           name:'打赏TA',
           money:"8.88",
           currentIndex:0,
           show:false,
           moneyOne:"",
           KPI:0,
           word:'',
           allmoney:[
               {
                   id:1,
                   money:1.24,
                   text:'辛苦你了'
               },
                {
                   id:2,
                   money:3.24,
                   text:'爱你一万年'
               },
                {
                   id:3,
                   money:6.66,
                    text:'棒棒哒'
               },
                {
                   id:4,
                   money:9.99,
                    text:'你的死忠粉'
               },
                {
                   id:5,
                   money:'其他金额'
               },
           ]
        }
    },
    components:{
        HeaderTop,countTo
    },
    mounted(){
        let vm = this
      
    },
    methods:{
         goback(){
          this.$router.go(-1);//返回上一页
        } ,
        reward(item,index,text){
          var num = null;
          this.currentIndex = index
          this.word = text
          this.money = 0;
          if(item=="其他金额"){
            this.show = true
          }else{
            this.show = false
            this.showTran = true 
            if(item.toString().indexOf('.') == -1){
                var num = Math.floor(parseInt(item))-1 
            }else{
                var num =  Math.floor(item)
            }      
            var t = setInterval(() => {
                num+=0.01;  
                this.money  =  num.toFixed(2)
                if(this.money == item){    
                    this.showTran =false    
                    clearInterval(t)
                }

            }, 10);
          }  
          
        },
        addNum(item){
         let vm = this
         var timer = null
         let start = 0;
         let step = 0;
          this.money = item
         timer = setInterval(function(){
             start +=0.1;
             if(start = item){
                  console.log(start)
                //   this.money = item
                 clearInterval(timer)
                  timer = null
             }  
         },100)
     }      
    }
}
</script>
<style scoped>
    .head{
        display: flex;
        justify-content: center;
        align-content: center;
        text-align: center;
        flex-direction: column;
        background:url('../../static/images/TA_02.png') no-repeat;
        background-size:100% 100% ;
        height: 3.4rem;
    }
    .fixed{
        display: flex;
        justify-content: space-between;
        width:90%;
        position: fixed;
        top: 0.2rem;
        left: 0.25rem;
        color: #ffffff;
        font-size: 0.28rem;
    }
    .fixed p{
        padding-top: 0.1rem;
    }
    .image{
        margin-top: 0.3rem;
    }
    .tong{
        color: #ffffff;
        font-size: 0.24rem;
        padding: 0.1rem 0; 
    }
    .english{
        color: #dddddd;
        font-size: 0.2rem;
    }
    .main{
        position: fixed;
        left: 0;
        top: 0;
    }
    .money{
        display: flex;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        align-items: center;
        margin: 0.5rem auto;
        width: 96%;
       
    }
    .circle{
        width: 1.3rem;
        height: 1.3rem;
        border-radius: 50%;
        border: 0.1rem solid #e9e9e9;
        transition: all .3s ease;
    }
    
    .circle li{
        width: 1.1rem;
        height: 1.1rem;
        line-height: 1.1rem;
        border-radius: 50%;
        border: 0.1rem solid #5a5a5a;
        text-align: center;
        color: #fb516b;
        font-size: 0.38rem;
        font-weight: bold;
        transition: all .3s ease;
    }
     .circle2{
        width: 2.5rem;
        height: 1rem;
        border-radius: 0.6rem;
        border: 0.1rem solid #e9e9e9;
        transition: all 0.3s ease-in-out;
        
    }
    .cirli2,.cirli1{
        width: 2.3rem;
        height: 0.8rem;
        line-height: 0.8rem;
        border-radius: 0.6rem;
        border: 0.1rem solid #5a5a5a;
        text-align: center;
        transition: all 0.3s ease-in-out;
       
    }

    .circle2 li input{
        display: block;
        width: 1.5rem;
        height: 0.5rem;
        line-height: 0.5rem;
        text-align: center;
        color: #fb516b;
        font-size: 0.3rem;
        font-weight: bold;
        margin: 0 auto;
        margin-top: 0.16rem;

    }
    .click{
        color: #9c9c9c;
        font-size: 0.2rem;
        margin: 0.34rem 0;
    }
    .extra{
        display: flex;
        justify-content: space-between;
    }
    .extra li{
        width: 1rem;
        height: 0.5rem;
        line-height: 0.5rem;
        text-align: center;
        border: 0.01rem solid #ececec;
        font-size: 0.22rem;
        margin-right: 0.1rem;
        font-weight: bold;
    }
    .text{
        display: block;
        width: 90%;
        height: 0.5rem;
        border: 0.01rem solid #ececec;
        color: #333333;
        margin:0.2rem auto;
        font-size: 0.2rem;
        margin-left: 0.26rem;
       
    }

    .wx img{
        position: fixed;
        bottom: 0.1rem;
        left: 0.18rem;
        width: 94%;
        display: block;
        height: 0.6rem;
        
    }
    .place::-webkit-input-placeholder{
       color: #fb516b;;
    }
    .trans{
        position: relative;
        /* transition: all .3s ease; */
        animation:mymove 1.5s ease;
        color: #fb516b;
    }
    .bgm{
        background: #fb516b;
        color: #ffffff;
    }
    .bgm2{
        background: #ffffff;
        color: #333333;
    }



    @keyframes mymove
        {
            from {top:0px;}
            to {top:-200px;}
        }

    @-webkit-keyframes myfirst{
         0%{
              transform:translateY(20px);
              opacity: 1;
         }
          50%{
              transform:translateY(40px);
              opacity: 0.6;
         }
          100%{
              transform:translateY(60px);
              opacity: 0;
         }
    }
    



</style>
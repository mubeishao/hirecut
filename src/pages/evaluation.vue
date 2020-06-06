<template>
    <div class="evaluation">
           <HeaderTop :rightContent="selectProject"/>
           <ul class="rate">
               <li :class="currentIndex==1?'li_border':''" @click="customer(1)">
                  <div class="customer">
                        <img src="../../static/images/customer_03.png" width="39" height="40" class="cus_img" />
                  </div>
                    
               </li>
               <li :class="currentIndex==2?'li_border':''" @click="customer(2)">
                   <div class="customer"  >
                        <img src="../../static/images/customer_06.png" width="20" height="18" />
                        <span>好评(66)</span>
                   </div>
               </li>
                <li :class="currentIndex==3?'li_border':''" @click="customer(3)">
                    <div class="customer">
                        <img src="../../static/images/customer_08.png" width="22" height="16" />
                        <span>中评(16)</span>
                    </div>
               </li>
                <li :class="currentIndex==4?'li_border':''" @click="customer(4)">
                    <div class="customer">
                         <img src="../../static/images/customer_10.png" width="20" height="16" />
                         <span>差评(6)</span>
                    </div>
               </li>
           </ul>
           <ul class="userInfo">
               <li class="user" v-for="(item,index) in userList" :key="index">
                   <div class="plane">
                         <div class="first">
                           <van-image
                            round
                            width="0.8rem"
                            height="0.8rem"
                            src="https://img.yzcdn.cn/vant/cat.jpeg"
                            />
                         </div> 
                         <div class="second">
                             <p class="name">{{item.name|hideMiddle}}</p>
                             <p class="project">项目:{{item.project}}</p>
                         </div>   
                         
                        <div class="three">
                            <span class="time">{{item.time}}</span>
                            <span class="line"></span>
                            <img src="../../static/images/goodrate_03.png" width="40" height="14" class="image" />
                        </div>
                   </div>
                   <div class="hot">
                       <span>{{item.hair}}</span> 
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
           selectProject:'顾客评价',
           active:0,
           currentIndex:1,
           userList:[
               {
                   name:'陈梦瑶',
                   project:"飞机头",
                   time:'2020.4.15',
                   hair:'热心肠',
               },
                 {
                   name:'陈梦瑶2',
                   project:"飞机头",
                   time:'2020.4.18',
                   hair:'热心肠',
               }
           ]
          
        }
    },
    components:{
        HeaderTop
    },
    methods:{
        customer(index){
             this.currentIndex = index
        },
        getActive(){
             
        }
    },
    filters: {
                hideMiddle(val) {
                    return `${val.substring(0,1)}**${val.substring(val.length)}`
                }
            }
}
</script>
<style scoped>
    .evaluation{
        width: 100%;
        height: 100%;
        background: #f5f5f5;
        
    }
    .rate{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        background: #ffffff;
        color: #666666;
        font-size: 0.22rem;
       
        
    }
    .rate li{
        height: 100%;
        padding: 0 0.3rem;
        
    }
    .li_border{
        border-bottom:0.04rem solid #8b8b8b
    }
    .customer{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        height: 0.8rem;
    }
    .customer span{
       padding-top: 0.14rem;
    }
    .cus_img{
        padding-bottom: 0.1rem;
    }
    .userInfo{
        margin: 0.2rem 0;
    }
    .user{
        width: 100%;
        margin: 0 auto;
        background: #f9f9f9;
        border-bottom: 0.01rem solid #f0f0f0;
        padding-bottom: 0.2rem;
    }
    .plane{
        display: flex;
        justify-content: space-between;
        padding: 0.2rem 0.34rem 0 0.34rem;
    }
    .first{
        flex: 1;
    }
    .second{
        flex: 2;
        text-align: left;
        padding-right: 1rem;
    }
    .line{
        height: 0.1rem;
        background: #bfbfbf;
        padding: 0 0.01rem;
    }
    .time{
        color: #999999;
        font-size: 0.22rem;
    }
    .image{
        padding-left: 0.08rem;
    }
    .name{
        color: #333333;
        padding-top: 0.08rem;
    }
    .project{
        color: #7a7a7a;
        padding-top: 0.12rem;
        font-size: 0.24rem;
    }
    .hot{
        width: 70%;
        margin: 0 auto;
        padding-left: 0.8rem;
        font-size: 0.22rem;
        color: #999999;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
    }
    .hot span{
        padding: 0.05rem 0.1rem;
        border: 0.01rem solid #ededed;
        margin-left: 0.01rem;
    }
</style>
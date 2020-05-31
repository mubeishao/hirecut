<template>
    <div class="content">
        <HeaderTop :rightContent="selectProject"/>
        <div class="tranp">
                        <van-image
                            round
                            width="0.8rem"
                            height="0.8rem"
                            src="https://img.yzcdn.cn/vant/cat.jpeg"
                            />
                         <span>TrampTangnade</span>   
        </div>
        <ul class="number">
            <li class="first">
                <div class="day">
                    <p>手机号</p>
                    <p>13900125586</p>
                </div>
            </li>
             <li class="second">
                <div class="day">
                    <p>注册日期</p>
                    <p>2020-4-15</p>
                </div>
            </li>
        </ul>
        <div class="img" @click="unting">
           
        </div> 
    </div>
</template>
<script>
import HeaderTop from '../components/header'
export default {
    data(){
        return{
           selectProject:"我的"
        }
    },
    components:{
        HeaderTop
    },
    unting(){
        
    }
}
</script>
<style scoped>
     .content{
         width: 100%;
         height: 100%;
         background: #f5f5f5;
     }
     .tranp{
         display: flex;
         justify-content: center;
         flex-direction: column;
         align-items: center;
         text-align: center;
         margin: 0.2rem 0;
     }
     .tranp span{
         color: #000000;
         font-weight: bold;
         font-size: 0.24rem;
         margin-top: 0.2rem;
     }
     .number{
         width: 100%;
         background: #ffffff;
     }
     .number  li{
         height: 0.7rem;
         line-height: 0.7rem;
         color: #666666;
         font-size: 0.22rem;
        
     }
     .first{
         border: 0.01rem solid #ececec;
     }
     .second{
          border-bottom: 0.01rem solid #ececec;
     }
     .day{
         display: flex;
         justify-content: space-between;
         width: 90%;
         margin: 0 auto;
     }
     .img{
         width: 80%;
         height: 0.6rem;
         margin: 0.4rem auto;
         background: url('../../static/images/my_03.png') no-repeat;
         background-size: 100% 100%;
     }
</style>
<template>
    <div class="content">
          <HeaderTop :rightContent="rightContent"/>
          <div class="pic"></div>
          <div class="white">
                    <div class="tel">
                            <div>
                                <p class="mall">龙门店</p>
                                <p class="number">
                                    <img src="../../static/images/picture_07.png" width="8" height="10" />
                                    <span>025-88888888</span>
                                </p>
                            </div>
                            <a href="tel:025-88888888" class="phone"></a>
                    </div>
                    
           </div>
            <div class="nanjing">
                                <img src="../../static/images/picture_11.png" width="10" height="12" />
                                <span>南京市钟鼓楼区普通路达到12358号</span>
           </div>
           <div class="bottom">
              
           </div>

    </div>
</template>
<script>
import HeaderTop from '../components/header'
   export default{
        data(){
            return{
                rightContent:"我要预约"
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
        background: #f7f7f7;
    }
    .pic{
        width: 100%;
        height: 7.5rem;
        background: url('../../static/images/picture_01.png') no-repeat;
        background-size: 100% 100%;
        z-index: 2;
        
    }
    .tel{
        display: flex;
        justify-content: space-between;
        text-align: center;
        align-items: center;
        width: 90%;
        margin: 0 auto;
    }
    .container{
       width: 100%; 
       background: #ffffff;
       height: 2rem;
    }
    .white{
        background: #ffffff;
        border-bottom: 0.01rem solid #ececec;
        padding: 0.2rem 0;
       
    }
    .mall{
        text-align: left;
        color: #333333;
        font-size: 0.26rem;
        font-weight: bold;
    }
    .number{
        padding-top: 0.2rem;
        color: #999999;
        font-size: 0.2rem;
    }
    .phone{
        width: 0.6rem;
        height: 0.6rem;
        background: url('../../static/images/picture_04.png') no-repeat;
        background-size: 100% 100%;
       
    }
    .nanjing{
       height: 0.6rem;
       line-height: 0.6rem; 
       width: 100%;
       padding: 0.14rem 0;
       margin: 0 auto;
       font-weight: bold;
       background: #ffffff;
       padding-left: 0.3rem;
    }
    .bottom{
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 0.7rem;
        background: url('../../static/images/picture_14.png') no-repeat;
        background-size: 100% 100%;
    }
</style>
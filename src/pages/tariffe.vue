<template>
    <div class="bgm">
        <HeaderTop :rightContent="rightContent"/>
        
             <div class="price">
                <div class="head">
                       <div class="order">
                            <van-image round width="40" height="40" src="https://img.yzcdn.cn/vant/cat.jpeg" class="round" />
                             <p>染发价格单</p>
                       </div>
                </div>
                <ul class="container">
                    <li v-for="(item,index) in hairPrice" :key="index" class="hairprice">
                            <div class="type">{{item.name.type}}</div>
                            <div class="user">{{item.name.fansi}}</div>
                             <div class="user">{{item.name.mobian}}</div>
                            <div class="user">{{item.name.tang}}</div>
                    </li>
                </ul>    
           </div>
      
    </div>
</template>
<script>
import HeaderTop from '../components/header'
export default {
    data(){
         return{
             rightContent:"价目表",
             hairPrice:[
                 {
                     name:{
                         type:"类型(基础染/健康染)",
                          fansi:"短发",
                           mobian:"中发",
                            tang:"长发"
                     },
                   
                    
                 },
                 {
                     name:{
                         type:"范斯",
                          fansi:"399/499",
                           mobian:"456",
                            tang:"222"
                     },
                 }
                

             ]
         }
    },
    components:{
        HeaderTop
    }
}
</script>
<style lang="scss">
    .bgm{
        width: 100%;
        height: 100%;
        background: #f4f5f7;
    }
    .head{
        width: 100%;
        height: 0.8rem;
        background: url('../../static/images/order_03.png') no-repeat;
        background-size: 100% 100%;
        line-height: 1rem;
        
    }
    .order{
        padding-left: 0.2rem;
    }
    .head p{
        height: 0.8rem;
        line-height: 0.8rem;
         display: inline-block;
         vertical-align: top;
         
    }
    .round{
        padding-top: 0.1rem;
    }
    
    .price{
        width: 90%;
        height: auto;
        margin: 0.2rem auto;
        background: #ffffff;
         padding-bottom: 0.1rem; 
        
    }
  
    .hairprice{
        width: 100%;
        margin: 0.2rem auto;
        display: flex;
        justify-content: space-between;
        text-align: center;
        align-items: center;
        
    }

    .type{
        flex: 2;
        text-align: left;
        padding-left: 0.1rem;
       
    }
    .user{
        flex: 0.8;
    }
    .container{
        width: 100%;
    }

</style>
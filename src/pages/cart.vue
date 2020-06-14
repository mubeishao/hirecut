<template>
    <div class="content">
         <HeaderTop :rightContent="selectProject"/>
         <div class="bgm">
            <div class="head">
                    <input placeholder="请输入产品名称" />
                     <span class="spIcon" @click.stop.prevent="searchkey"><van-icon name="search" /></span>
            </div>
            <ul class="sort">
                 <li v-for="(item,index) in list" :key="index" @click="sort(index)">
                   {{item.name}}
                 </li>
            </ul>
            <div class="salerMain">
                <ul class="saler">
                    <li v-for="(num,index) in content" :key="index"  @click="godetail">
                        <img :src="num.img" class="beauty" />
                        <div class="container">
                            <div class="type">{{num.type}}</div>
                            <div class="score"><span>{{num.yuan}}元</span>+<span>{{num.score}}积分</span></div>
                            <div class="customer">
                                <p>销量:{{num.saler}}</p>
                                <img :src="num.cart" width="14" height="14" />
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
         <div>
             
         </div>
         </div>
    </div>
</template>
<script>
import HeaderTop from '../components/header'
export default {
    data(){
        return{
            selectProject:"商城",
            list:[
                {
                    name:'排序'
                },
                {
                    name:'销量'
                },
                {
                    name:'价格'
                },
                {
                    name:'积分'
                },
            ],
            content:[
                {
                    img:"../../static/images/cart2_03.png",
                    type:'烫染',
                    yuan:'3880',
                    score:"125",
                    saler:'32',
                    cart:'../../static/images/cart_07.png'
                },
                  {
                    img:"../../static/images/cart2_03.png",
                    type:'烫染',
                    yuan:'4580',
                    score:"1000",
                    saler:'332',
                    cart:'../../static/images/cart_07.png'
                },
                  {
                    img:"../../static/images/cart2_03.png",
                    type:'烫染',
                    yuan:'3880',
                    score:"888",
                    saler:'32',
                    cart:'../../static/images/cart_07.png'
                },
                  {
                    img:"../../static/images/cart2_03.png",
                    type:'烫染',
                    yuan:'3880',
                    score:"965",
                    saler:'32',
                    cart:'../../static/images/cart_07.png'
                },
                  {
                    img:"../../static/images/cart2_03.png",
                    type:'烫染',
                    yuan:'3680',
                    score:"5655",
                    saler:'322',
                    cart:'../../static/images/cart_07.png'
                },
            ]
        }
    },
    methods:{
        sort(index){
            
        },
        godetail(){
            this.$router.push({path:'/goodsdetail'})
        }
    },
    components:{
        HeaderTop
    }
}
</script>
<style scoped>

    .bgm{
        width: 100%;
        height: auto;
        
    }
    .content{
        width: 100%;
        height: auto;
        background: #f5f5f5;
        
    }
    .head{
        position: relative;
        padding-top: 0.2rem;
        text-align: center;
    }
    .spIcon{
        position: absolute;
        top: 0.33rem;
        right: 0.44rem;
    }
    .head input{
        width: 90%;
        height: 0.5rem;
        border-radius: 0.3rem;
        border: 0.01rem solid #999999;
        color: #999999;
        margin: 0 auto;
        padding-left: 0.3rem;
    }
    .head img{
        position: absolute;
        top: 0.32rem;
        right: 0.4rem;
    }
    input::placeholder{
        font-size: 0.22rem;
        color: #999999;
    }
    .salerMain{
        width: 100%;
        background: #f5f5f5;
    }
    .sort{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        border-top: 0.01rem solid #ececec;
        margin-top: 0.16rem;
        border-bottom: 0.01rem solid #ececec; 
      
    }
    .sort li{
        width: 94%;
        margin: 0 auto;
        color: #333333;
        font-size: 0.24rem;
        font-weight: bold;
        height: 0.3rem;
        line-height: 0.3rem;
        border-right: 0.02rem solid #ececec; 
        margin: 0.15rem 0;
       
         
    }
    .sort li:last-child{
        border-right: none;
    }
    .saler{ 
        width: 94%;
        height: auto;
        margin: 0.16rem auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: left;
        flex-wrap: wrap;
        background: #f5f5f5;
        margin-bottom: 0.5rem;
        
    }
    .saler li{
        width: 48%;
        border-radius: 0.1rem;
        background: #ffffff;
        margin: 0.1rem 0;
    }
    .beauty{
        display: block;
        width: 97%;
        height: 1.8rem;
        margin: 0 auto;
        padding-top: 0.06rem;

    }
    .container{
        padding-left: 0.16rem;
    }
    .type{
        /* color: #333333;
        font-weight: bold; */
        margin:0.1rem 0;
    }
    .score{
        color: #fb516b;
        margin-bottom: 0.2rem;
    }
    .customer{
        display: flex;
        justify-content: space-between;
        text-align: center;
        color: #999999;
        margin-bottom: 0.2rem;
        font-size: 0.2rem;
        padding-right: 0.2rem;
    }
    .customer p{
        padding-top: 0.03rem;
    }

    
   
</style>
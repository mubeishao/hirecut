<template>
    <section class="section">
       <div class="container">
            <div class="top">
                <div class="head">
                    <p class="retail">预约</p>
                    <p ><van-icon name="shop-collect-o" /><span class="mall">门店</span></p>
                </div>
            </div>
            <div class="sales">
                <div class="shop">
                    <div class="image" ><van-image width="50" height="50"   src="https://img.yzcdn.cn/vant/cat.jpeg" /></div>
                    <div class="intro">
                        <p class="name">龙江店</p>
                        <p class="fontS"><van-icon name="location-o" />南京市</p>
                        <p class="fontS">
                            <van-icon name="phone-circle-o" />
                            0551-4685554</p>
                    </div>
                    <div class="telphone">
                        <van-image width="38" height="38" round   src="https://img.yzcdn.cn/vant/cat.jpeg" />
                    </div>
                </div> 
            </div>
            <div class="contentIndex">
                <div  v-for="(item,index) in content" :key="index" class="content">
                    <div class="shop">
                        <div class="image" @click="goCutter"><van-image width="50" height="50" round   src="https://img.yzcdn.cn/vant/cat.jpeg" /></div>
                        <div class="intro">
                                <div class="hair">
                                        <p>{{item.tony}}</p>
                                        <p><span class="fontS">剪发价:</span><span class="money">￥{{item.price}}</span></p> 
                                </div>
                                <p class="fontS">{{item.englishName}}</p>
                            </div>  
                    </div>
                    <div class="work">
                        <div v-for="(item,index) in worklist" :key="index" class="haircut">
                                {{item.name}}
                        </div>
                    </div>
                    <div class="rate">
                        <span><van-icon name="like-o" />好评率: {{item.goodRate}}</span>
                        <span><van-icon name="award-o" />已被约: {{item.yue}}</span>
                        <span><van-icon name="award-o" />作品集: {{item.opus}}</span>
                    </div>
                    <div class="round" @click="selectProject">
                            <van-image width="30" height="30" round   src="https://img.yzcdn.cn/vant/cat.jpeg" />
                    </div>
                </div>
            </div>
        </div> 
    </section>
</template>
<script>
import HeaderTop from '../components/header'
export default {
    data(){
        return{
            worklist:[
                 {name:"男士理发"},
                 {name:"美发"},
                 {name:"美容"},
            ],
            content:[
                {
                    tony:'tony',
                    price:69,
                    englishName:'tony',
                     worklist:[
                        {name:"男士理发"},
                        {name:"美发"},
                        {name:"美容"},
                    ],
                    goodRate:'100%',
                    yue:98,
                    opus:2
                },
                 {
                    tony:'tony',
                    price:69,
                    englishName:'tony',
                     worklist:[
                        {name:"男士理发"},
                        {name:"美发"},
                        {name:"美容"},
                    ],
                    goodRate:'100%',
                    yue:98,
                    opus:2
                },
                 {
                    tony:'tony',
                    price:69,
                    englishName:'tony',
                     worklist:[
                        {name:"男士理发"},
                        {name:"美发"},
                        {name:"美容"},
                    ],
                    goodRate:'100%',
                    yue:98,
                    opus:2
                },
                 {
                    tony:'tony',
                    price:69,
                    englishName:'tony',
                     worklist:[
                        {name:"男士理发"},
                        {name:"美发"},
                        {name:"美容"},
                    ],
                    goodRate:'100%',
                    yue:98,
                    opus:2
                },
                 {
                    tony:'tony',
                    price:69,
                    englishName:'tony',
                     worklist:[
                        {name:"男士理发"},
                        {name:"美发"},
                        {name:"美容"},
                    ],
                    goodRate:'100%',
                    yue:98,
                    opus:2
                },
                 {
                    tony:'tony',
                    price:69,
                    englishName:'tony',
                     worklist:[
                        {name:"男士理发"},
                        {name:"美发"},
                        {name:"美容"},
                    ],
                    goodRate:'100%',
                    yue:98,
                    opus:2
                },
                 {
                    tony:'tony',
                    price:69,
                    englishName:'tony',
                     worklist:[
                        {name:"男士理发"},
                        {name:"美发"},
                        {name:"美容"},
                    ],
                    goodRate:'100%',
                    yue:98,
                    opus:2
                },
            ]

        }
    },
    methods:{
        selectProject(){
            this.$router.push({path:"/hairproject"})
        },
        goCutter(){
            this.$router.push({path:"/haircutter"})
        }
    }
}
</script>

<style scoped>
    .section{
        padding-top: 0.5rem;
        overflow: auto;
    }
    .container{
        height: 600px;
    }

    .head{
           display: flex;
           justify-content: space-between;
           text-align: center;
           margin: 0 auto;
           width: 90%; 
          
    }
    .contentIndex{
         background: #ffffff;
         padding-bottom: 2rem;
    }
    .retail{
         font-size: 0.26rem;
        }   
    .mall{
        font-size: 0.22rem;
    }    
    .top{
         border-bottom: 0.01rem solid gainsboro;
         padding-bottom: 0.4rem;
    }
    .sales{
        margin-top: 0.3rem;
        border-bottom: 0.1rem dashed gainsboro;
        padding-bottom: 0.26rem;
    }
    .shop{
        display: flex;
        justify-content: center;
        margin: 0 auto;
        width: 90%;
    }
    .image{
        flex: 0 0 1.2rem;
    }
    .name{
        font-size: 0.24rem;
    }
    .intro{
        flex: 2;
    }
    .fontS{
        font-size: 0.2rem;
        color: gray;
        margin: 0.1rem 0;
    }
    .telphone{
        padding-top: 0.16rem;
    }
    .content{
        position: relative;
        margin-top: 0.3rem;
        border-bottom: 0.01rem solid gainsboro;
        padding-bottom: 0.1rem;
    }
    .round{
        position: absolute;
        right: 0.3rem;
        bottom: 0.6rem;
    }
    .hair{
        display: flex;
        justify-content: space-between;
        text-align: center;
        padding-top: 0.1rem;
    }
    .money{
        color: red;
        font-size: 0.3rem;
    }
    .work{
        display: flex;
        justify-content: space-between;
        width: 56%;
        margin: 0 0.32rem;
        
    }
    .haircut{
        flex: 1;
        height: 0.34rem;
        line-height: 0.36rem;
        text-align: center;
        border-radius: 0.2rem;
        background: #ececec;
        color: #9b9b9b;
        font-size: 0.2rem;
        margin: 0.1rem 0.05rem;
    }
    .rate{
        font-size: 0.2rem;
        margin: 0.1rem auto;
        padding-left: 0.34rem;
    }
    .rate span{
        margin: 0 0.04rem;
    }
    ::-webkit-scrollbar{
        height: 0;
        width: 0;
        color: none;
        background: none;
    }
</style>
<template>
    <div class="bgm">
        <HeaderTop :rightContent="rightContent"/>
        <ul>
            <li class="price" v-for="(item,index) in tablelist" :key="index">
                    <div class="head">
                        <div class="order">
                                <van-image round width="40" height="40" :src="item.img" />
                                <p>{{item.form}}</p>
                        </div>
                    </div>
                    <ul class="container">
                        <li v-for="(item,index) in item.hairPrice" :key="index" class="hairprice">
                                <div :class="index==0?'type':'typeOne'">{{item.name}}</div>
                                <div :class="index==0?'hairOne':'hairType'">{{item.price}}</div>
                                <div :class="index==0?'hairOne':'hairType'">{{item.moprice}}</div>
                                <div :class="index==0?'hairOne':'hairType'">{{item.ziprice}}</div>   

                                <!-- <div :class="item.name=='烫染修复'?'hairOne':'hairType'">{{item.price}}</div>
                                <div :class="item.name=='烫染修复'?'hairOne':'hairType'">{{item.moprice}}</div>
                                <div :class="item.name=='烫染修复'?'hairOne':'hairType'">{{item.ziprice}}</div>    -->
                        </li>
                    </ul>    
            </li>

            <li class="price" v-for="(item,index) in tableTwo" :key="index">
                    <div class="head">
                        <div class="order">
                                <van-image round width="40" height="40" :src="item.img" />
                                <p>{{item.form}}</p>
                        </div>
                    </div>      
                <div class="priceform">
                    <ul class="wolf">
                          <li v-for="(item,index) in pricelist" :key="index" :class="index==0?'three':'night'">
                              {{item.name}}
                          </li>
                         
                    </ul>
                     <ul class="wolf">
                          <li v-for="(item,index) in pricelist" :key="index" class="itemColor">
                              {{item.price}}
                          </li>    
                    </ul>
                     <ul class="wolf">
                          <li v-for="(item,index) in pricelist" :key="index" :class="index==0?'three':'night'">
                              {{item.hair}}
                          </li>    
                    </ul>
                     <ul class="wolf">
                          <li v-for="(item,index) in pricelist" :key="index" class="itemColor">
                              {{item.real}}
                          </li>    
                    </ul>
                </div>        
            </li>

            <li class="price" v-for="(item,index) in tableThree" :key="index">
                    <div class="head">
                        <div class="order">
                                <van-image round width="40" height="40" :src="item.img" />
                                <p>{{item.form}}</p>
                        </div>
                    </div>      
                <div class="priceform">
                    <ul class="wolf">
                          <li v-for="(item,index) in pricelist" :key="index" :class="index==0?'three':'night'">
                              {{item.name}}
                          </li>
                         
                    </ul>
                     <ul class="wolf">
                          <li v-for="(item,index) in pricelist" :key="index" class="itemColor">
                              {{item.price}}
                          </li>    
                    </ul>
                     <ul class="wolf">
                          <li v-for="(item,index) in pricelist" :key="index" :class="index==0?'three':'night'">
                              {{item.hair}}
                          </li>    
                    </ul>
                     <ul class="wolf">
                          <li v-for="(item,index) in pricelist" :key="index" class="itemColor">
                              {{item.real}}
                          </li>    
                    </ul>
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
             rightContent:"价目表",
             active:'1',
             tablelist:[
                  {
                      img:"https://img.yzcdn.cn/vant/cat.jpeg",
                      form:"染发价格单",
                      hairPrice:[
                            {
                                name:"类型(基础染/健康染)",
                                price:"短发",
                                moprice:"中发",
                                ziprice:"长发"
                                    
                            },
                            {
                                name:"范斯",
                                price:"399/456",
                                moprice:"23/456",
                                ziprice:"99/569"
                            },
                            {
                                name:"魔变无",
                                price:"399/456",
                                moprice:"23/456",
                                ziprice:"99/569"
                            },
                            {
                                name:"资生堂",
                                price:"399/456",
                                moprice:"23/456",
                                ziprice:"99/569"
                            }
                       ]
                      
                  },
                
             ],
             tableTwo:[
                    {
                      img:"https://img.yzcdn.cn/vant/cat.jpeg",
                      form:"单次护理系列价格单",
                      hairPrice:[
                            {
                                name:"干性受损",
                                price:"发道水疗",
                                moprice:"巴西",
                                ziprice:"欧拉呀"
                                    
                            },
                            {
                                name:"发道水疗",
                                price:"200",
                                moprice:"50",
                                ziprice:"99"
                            },
                            {
                                name:"白皙",
                                price:"深沉修复",
                                moprice:"卡是修复",
                                ziprice:"欧莱雅"
                            },
                            {
                                name:"欧拉呀",
                                price:"88",
                                moprice:"898",
                                ziprice:"500"
                            }
                       ]
                      
                  }
             ],
             tableThree:[
                    {
                      img:"https://img.yzcdn.cn/vant/cat.jpeg",
                      form:"日常洗剪吹系列价格单",
                      hairPrice:[
                            {
                                name:"干性受损",
                                price:"发道水疗",
                                moprice:"巴西",
                                ziprice:"欧拉呀"
                                    
                            },
                            {
                                name:"发道水疗",
                                price:"200",
                                moprice:"50",
                                ziprice:"99"
                            },
                            {
                                name:"白皙",
                                price:"深沉修复",
                                moprice:"卡是修复",
                                ziprice:"欧莱雅"
                            },
                            {
                                name:"欧拉呀",
                                price:"88",
                                moprice:"898",
                                ziprice:"500"
                            }
                       ]
                      
                  }
             ],
             pricelist:[
                 {
                     name:'干性受损',
                     price:'',
                     hair:"烫染修复",
                     real:""
                 },
                 {
                     name:'发道水疗',
                     price:'88',
                     hair:"深沉修复",
                      real:"88"
                 },
                 {
                     name:'巴西liffa',
                     price:'908',
                     hair:"古诗理发",
                      real:"789"
                 },
                 {
                     name:'欧拉呀',
                     price:'56',
                     hair:"活力胶",
                      real:"444"
                 },
             ]
            
         }
    },
    components:{
        HeaderTop
    },
    mounted(){}
}
</script>

<style scoped lang="scss">
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
        line-height: 0.8rem;
        
    }
    .order{
        padding-left: 0.2rem;
        padding-top: 0.065rem;
    }
    .head p{
         display: inline-block;
         vertical-align: top;
         margin-top: -0.03rem;
    }
    .round{
        padding-top: 0.1rem;
    }
    
    .price{
        width: 94%;
        height: auto;
        margin: 0.2rem auto;
        background: #ffffff;
         padding-bottom: 0.1rem; 
        
    }
  
    .hairprice,.hairprice2{
        width: 100%;
        margin: 0.2rem auto;
        display: flex;
        justify-content: space-between;
        text-align: center;
        align-items: center;
        
    }
   

    .type{
        flex: 2.2;
        text-align: left;
        padding-left: 0.16rem;
        color: #999999;   
    }
    .typeOne,.typeOne2{
        flex: 2.2;
        text-align: left;
        padding-left: 0.16rem;
        color: #333333; 
        font-weight: bold;
    }
    .typeOne2{
        flex: 1.4;
    }
    // .hairOne2{
    //     flex: 1.2;
    //     color: #999999;
    // }
     .hairType{
        flex: 1;
        color: #fb516b;
    }
    .hairOne{
        flex: 1;
        color: #999999;
    }
    .user{
        flex: 0.8;
    }
    .container{
        width: 100%;
    }
     .priceform{
        width: 100%;
        margin: 0.1rem auto;
    }
    .wolf{
        width: 94%;
        display: flex;
        justify-content: space-between;
        text-align: center;
        align-items: center;
        margin: 0 auto;
    }
    .wolf li{
        flex: 1;
        margin: 0.08rem 0;
        
    }
    .night{
        color: #999999;
    }
    .three{
        color: #333333;
        font-weight: bold;
    }
    .itemColor{
        color: #fb516b;
    }
   

</style>

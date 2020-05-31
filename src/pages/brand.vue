<template>
    <div class="intro">
         <HeaderTop :rightContent="rightContent"/>
         
         <div class="brand" v-if="brand.length!=0">
             <ul class="content">
                 <li v-for="(item,index) in brand" :key="index">
                     <van-image width="200" height="200" :src="item.img" />
                     <p>品牌介绍：{{item.intro}}</p>
                 </li>
             </ul>
         </div>
         <div v-else>
                   <noData :nodata="nodata"/>
         </div>
    </div>
</template>
<script>
import noData from '../components/nodata'
import HeaderTop from '../components/header'
export default {
    data(){
        return{
            rightContent:"品牌介绍",
            nodata:"还有资料介绍",
            brand:[
                {
                    img:"https://img.yzcdn.cn/vant/cat.jpeg",
                    intro:"一个完美的品牌"
                }
            ]
        }
    },
    components:{
        noData,HeaderTop
    }
}
</script>
<style lang="scss">
    .brand{
        width: 100%;
        margin-top: 0.2rem;
        .content{
            width: 90%;
            margin: 0 auto;
            font-size: 0.24rem;
            color: #999999;
            text-align: center;
        }
        .content p{
            margin-top: 0.2rem;
        }
    }
</style>
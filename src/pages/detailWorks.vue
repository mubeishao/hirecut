<template>
    <div class="container">
          <HeaderTop :rightContent="selectProject"/>
          <div class="main">
              <ul>
                  <li class="intro">
                       <div class="picture">
                             <van-image width="40" height="40" round   src="https://img.yzcdn.cn/vant/cat.jpeg"  />
                             <div class="content">
                                 <p><span class="zhang">张建</span><span class="matin">MATIAN BARROUD</span></p>
                                 <p class="fuzi">
                                      <img src="../../static/images/picture_11.png" width="8" height="10" class="nanjing" />
                                      <span>夫子庙 13天前</span>
                                      <span class="yuan">¥ 188</span>
                                 </p>
                             </div>
                       </div>
                       <div class="boy">
                           <p class="handsome">男士短发，无敌帅气，迷倒千万人</p>
                           <ul class="itemImg">
                               <li v-for="(item,index) in list" :key="index" >
                                   <van-image width="80" height="100"    :src="item.img"  />
                               </li>
                           </ul>
                       </div>
                        <p class="gift">
                               <span @click="zan" :class="show?'gift_job':''">
                                      <van-icon name="good-job-o" />
                                      <span class="count">{{countZan}}</span>
                               </span>
                               <router-link to="/reward">
                                    <span class="zan" >
                                        <van-icon name="gift-card-o" />
                                        <span class="zanSpan">打赏TA</span>
                                    </span>
                                </router-link>
                         </p>
                  </li>
              </ul>
          </div>
          <div class="talk">
               <p>
                   <span class="other">来自其他美丽达人的评论</span>
                   <span class="beauty">
                       <img src="../../static/images/pan.png" width="10" height="20" />
                       <span @click.prevent="comment">评论</span>
                   </span>
               </p>
          </div>
          <div class="reatil" @click="bookOne">预 约</div>
    </div>
</template>
<script>
import HeaderTop from '../components/header'
import { Toast } from 'vant'
export default {
    data(){
        return{
             selectProject:"作品",
             countZan:localStorage.getItem('zan')||0,
             count:0,
             show:localStorage.getItem('zan'),
             list:[
                 {
                     img:'../../static/images/works_03.png'
                 },
                 {
                     img:'../../static/images/works_03.png'
                 },
                 {
                     img:'../../static/images/works_03.png'
                 },
                 
             ]
        }
    },
    components:{
        HeaderTop
    },
    methods:{
        zan(){
             let vm = this
             if(localStorage.getItem('zan')){
                 return 
             }else{
                 vm.countZan = vm.countZan +1
                 localStorage.setItem('zan',vm.countZan) 
                 vm.show = true
                 Toast('点赞+1')
             }
        },
        bookOne(){
             this.$router.push({path:'/selectproject'})
        },
        comment(){
               this.$router.push({path:'/comment'})
        }
    }
}
</script>
<style scoped>
    .container{
        width: 100%;
        height: 100%;
        background: #f4f4f4;
    }
    .main{
        width: 100%;
        height: auto;
        background: #ffffff;
    }
    .intro{
        width: 90%;
        margin: 0 auto;
        padding: 0.2rem 0;
       
    }
    .picture{
        display: flex;
    }
    .zhang{
        color: #fb516b;
    }
    .matin{
        color: #333333;
        font-size: 0.22rem;
        margin-left: 0.14rem;
    }
    .content{
        padding-left: 0.2rem;
        flex: 4;
    }
    .fuzi{
        margin-top: 0.16rem;
        color: #999999;
        font-size: 0.2rem;
        text-align: left;
    }

    .yuan{
        float: right;
    }
    .boy{
        width: 90%;
        margin: 0.14rem auto;
        padding-left: 0.6rem; 

    }
    .handsome{
        text-align: left;
        font-size: 0.22rem;
        margin-bottom: 0.2rem;
        padding-top: 0.1rem;
        padding-left: 0.1rem;
    }
    .itemImg{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
        width: 100%;
    }
    .itemImg li{
        margin-left: 0.1rem;  
    }
    .gift{
        margin: 0.16rem auto;
        width: 88%;
        padding-left: 0.8rem;
       
    }
    .gift_job{
        color: #fb516b;
    }
    .talk{
        margin: 0.36rem auto;
        width: 90%;
        
    }
    .zan{
        width: 1rem;
        position: relative;
        float: right;  
        color: #fb516b;
    }

    .zanSpan{
        font-size: 0.23rem;
        vertical-align: middle;
        position: absolute;
        right: -0.04rem;
        bottom: 0.04rem;
    }
    .count{
        font-size: 0.26rem;
        color: #999999;
        vertical-align: top;
    }

    .beauty span{
        vertical-align: top;
    }
    .other{
        float: left;
        color: #919191;
        font-size: 0.22rem;
        margin-top: 0.2rem;
    }
    .beauty{
        float: right;
        padding: 0.03rem 0.2rem;
        text-align: center;
        border: 0.01rem solid #dddddd;
        border-radius: 0.4rem;
        padding-top: 0.14rem;
      
    }
    .beauty img{
        margin-top: -0.04rem;
    }
    .reatil{
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 0.7rem;
        line-height: 0.7rem;
        text-align: center;
        background: url('../../static/images/zyj_02.png') no-repeat;
        background-size: 100% 100%;
        font-size: 0.26rem;
        color: #ffffff;
    }

</style>

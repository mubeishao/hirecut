<template>
    <div class="container">
          <HeaderTop :rightContent="selectProject"/>
          <div class="main">
              <ul>
                  <li  v-for="(item,index) in arrlist" :key="index">
                     <div class="intro"> 
                        <div class="picture">
                                <van-image width="40" height="40" round   src="https://img.yzcdn.cn/vant/cat.jpeg"  />
                                <div class="content">
                                    <p class="fuzi">
                                        <img src="../../static/images/picture_11.png" width="8" height="10" class="nanjing" />
                                        <span>夫子庙 2020.4.15</span>
                                        <span class="yuan">¥ 188</span>
                                    </p>
                                </div>
                        </div>
                            <div class="boy">
                                <p class="handsome">男士短发，无敌帅气，迷倒千万人</p>
                                <ul class="itemImg">
                                    <li v-for="(pic,index) in item.obj" :key="index">
                                        <van-image width="85" height="100"  :src="pic.img" />
                                    </li>
                                </ul>
                            </div>
                            <div class="gift">
                              <div class="pline">
                                   <p @click="zan" :class="show?'gift_job':''"><van-icon name="good-job-o" />
                                      <span class="count">{{countZan}}</span>
                                  </p>
                                  <p  ><van-icon name="comment-o" />
                                            <span class="count">{{item.talk}}</span>
                                  </p>
                                  <p @click="zanPic" ><van-icon name="cash-back-record" />
                                            <span class="count shang">打赏TA</span>
                                 </p>
                              </div>
                            
                               <router-link to="/reward">
                                    <span class="beauty" >
                                        <img src="../../static/images/yu_yue.png" width="14" height="18" />
                                        <span @click.prevent="comment">预约</span>
                                    </span>
                                </router-link>
                         </div>
                      </div> 
                  </li>
              </ul>
          </div>
          <!-- <div class="talk">
               <p>
                   <span class="other">来自其他美丽达人的评论</span>
                   <span class="beauty">
                       <img src="../../static/images/pan.png" width="10" height="20" />
                       <span @click.prevent="comment">评论</span>
                   </span>
               </p>
          </div>
          <div class="reatil" @click="bookOne">预 约</div> -->
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
             talk:0,
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
                 
             ],

             arrlist:[
                 {
                      img:'../../static/images/works_03.png',
                      countZan:0,
                      talk:0,
                       obj:[
                          {
                               img:'../../static/images/works_03.png'
                          },
                          {
                               img:'../../static/images/works_03.png'
                          }
                         
                      ]
                 },
                  {
                      img:'../../static/images/works_03.png',
                      countZan:0,
                      talk:0,
                      obj:[
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
        zanPic(){
               this.$router.push({path:'/reward'})
        },
        bookOne(){
             this.$router.push({path:'/selectproject'})
        },
        comment(){
               this.$router.push({path:'/hairproject'})
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
       
    }
    .main li{
        width: 100%;
        background: #ffffff;
    }
    .intro{
        width: 90%;
        margin: 0.1rem auto;
        padding: 0.2rem 0;
        margin-top: 0.2rem;
       
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
        margin: 0 auto 0.1rem 0;
        padding-left: 0.8rem; 

    }
    .handsome{
        text-align: left;
        font-size: 0.22rem;
        margin-bottom: 0.2rem;
        
    }
    /* .itemImg{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
    } */
    .itemImg li{
        display: inline;
        margin-right: 0.12rem;  
    }
    .gift{
        display: flex;
        justify-content: space-between;
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
        float: right;  
        color: #fb516b;
    }
    .zan span{
        font-size: 0.2rem;
        vertical-align: top;
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
        padding: 0.05rem 0.2rem;
        text-align: center;
        border: 0.01rem solid #dddddd;
        border-radius: 0.4rem;
        padding-top: 0.1rem;
        color: #919191;
      
    }
    .beauty img{
        margin-top: -0.02rem;
    }
    .reatil{
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 0.6rem;
        line-height: 0.6rem;
        text-align: center;
        background: url('../../static/images/zyj_02.png') no-repeat;
        background-size: 100% 100%;
        font-size: 0.24rem;
        color: #ffffff;
    }
    .pline{
        padding-top: 0.13rem;
    }
    .pline p{
        display: inline;
        margin-right: 0.1rem;
    }
    .shang{
        font-size: 0.25rem;
      
    }
    /* .objPic{
        display: flex;
        justify-content: flex-start;
    } */
  

</style>
<style>

</style>
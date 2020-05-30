<template>
    <div class="myself">
         <div class="head">
                 <div><van-icon name="arrow-left" /></div>
                 <img src="../../static/images/hua_03.png" width="25" height="25"/>
         </div>
         <div>
              <div class="marTop">
                    <div class="img">
                        <van-image width="70" height="70" round  src="https://img.yzcdn.cn/vant/cat.jpeg" />
                    </div>
                    <div class="hair">
                        <p class="hairName">{{hairname}}</p>
                        <p class="hairbgm">理发达人 Lv4</p>
                    </div>
              </div>
              <div class="three">
                  <router-link to="/member">
                    <div class="member" >     
                            <img src="../../static/images/hua_16.png" width="22" height="22"/>
                            <span>会员卡</span>
                    </div>
                  </router-link> 
                  <router-link to="/allowance">
                      <div class="member">
                        <img src="../../static/images/huaban_11.png" width="22" height="22"/>
                        <span>套餐余量</span>
                      </div>
                  </router-link>
                  <div class="member">
                    <img src="../../static/images/huaban_13.png" width="22" height="22"/>
                    <span>我的预约</span>
                  </div>
              </div>    
              <div class="salarys">
                  <router-link to="/purchase"> 
                    <div class="more">
                        <p class="yuan">您一共消费<span>699</span>元</p>
                        <p class="record"><span>查看更多的消费记录</span><van-icon name="arrow" size="12" class="van" /></p>
                    </div>
                  </router-link>
              </div>
              <div class="redpackge">
                      <ul>
                          <router-link to="/redpackage">
                              <li>
                                <div class="red">
                                    <img src="../../static/images/tu_07.png" width="16" height="18" />
                                    <span>我的红包</span>
                                </div>
                                <p class="award">刮红包赢奖金<van-icon name="arrow" size="12" class="van" /></p>
                              </li>
                          </router-link>
                          <router-link to="/mallscore">
                              <li>
                                <div class="red">
                                    <img src="../../static/images/tu_11.png" width="20" height="20" />
                                    <span>门店消费积分</span>
                                </div>
                                <p class="award">积分兑换礼品<van-icon name="arrow" size="12" class="van" /></p>
                              </li>
                          </router-link>
                             <router-link to="/onlinescore">
                              <li>
                                <div class="red">
                                    <img src="../../static/images/hua_26.png" width="19" height="19" />
                                    <span>线上消费积分</span>
                                </div>
                                <p class="award">积分当钱用<van-icon name="arrow" size="12" class="van" /></p>
                              </li>
                          </router-link>
                             <router-link to="/myorder">
                              <li>
                                <div class="red">
                                    <img src="../../static/images/hua_29.png" width="19" height="20" />
                                    <span>我的订单</span>
                                </div>
                                <p class="award"><van-icon name="arrow" size="12" class="van" /></p>
                              </li>
                          </router-link>
                      </ul>  
              </div>
         </div>
        
    </div>
</template>
<script>
import HeaderTop from '../components/header'
export default {
    data(){
        return{
             hairname:"ADonJson"
        }
    },
    components:{
        HeaderTop
    }
}
</script>
<style  scoped>
    .head{
        width: 90%;
        display: flex;
        justify-content:space-between;
        font-size: 0.36rem;
        margin: 0 auto;
        padding-top: 0.4rem;
        color: #999999;
    }
    .marTop{
        width: 90%;
        margin: 0 auto;
        display: flex;
        margin-top: 0.5rem;
    }
    .img{
        flex: 1;
        margin-right: 0.26rem;
    }
    .hair{
        flex: 3;
        margin-right: 0.1rem;
        padding-top: 0.22rem;

    }
    .hairName{
        color: #000000;
        font-size: 0.3rem;
        font-weight: bold;
    }

    .hairbgm{
        margin-top: 0.26rem;
    }
    .hairbgm{
        background: url('../../static/images/daren.png') no-repeat;
        background-size: 100% 100%;
        height: 0.44rem;
        line-height: 0.44rem;
        text-align: center;
        width: 2rem;
        font-size: 0.2rem;
        color: #ffffff;
    }
    .three{
        display: flex;
        justify-content: space-between;
        text-align: center;
        align-content: center;
        width: 88%;
        margin: 0.5rem auto;
    }
    .member{
        display: flex;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        align-items: center;
    }
    .three span{
        color: #9c9c9c;
        font-size: 0.18rem;
        margin-top: 0.14rem;
    }
    .salarys{
       width: 100%;
       height: 3rem;
       background: url("../../static/images/huhu_02.png") no-repeat;
       background-size: 100% 100%;
       z-index: 1;
    }
    .more{
        width: 90%;
        display: flex;
        justify-content: space-between;
        color: #ffffff;
        margin: 0 auto;
        padding-top: 0.5rem;
    }
    .yuan{
        font-size: 0.24rem;
    }
    .yuan span{
        font-size: 0.28rem;
    }
    .record{
        font-size: 0.16rem;
        color: #9c9c9c;
        padding-top: 0.04rem;
    }
    .van{
        vertical-align: middle;
    }
    .redpackge{
        width: 100%;
        z-index: 10;
        border-top-left-radius: 0.5rem;
        border-top-right-radius: 0.5rem;
        background: #ffffff;
        margin-top: -1.8rem;
    }
    .redpackge ul{
        width: 90%;
        margin: 0 auto;
    }
    .redpackge ul li{
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        height: 1rem;
        border-bottom: 0.01rem solid #cccccd;
    }
    .red{
        color: #1d1d1d;
        font-size: 0.24rem;
        font-weight: bold;
    }
    .red img{
        vertical-align: middle;
        margin-right: 0.16rem;
    }
    .red span{
        vertical-align: middle;
    }
    .award{
        font-size: 0.18rem;
    }
</style>

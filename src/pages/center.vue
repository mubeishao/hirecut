<template>
    <div class="center">
          <HeaderTop/>
          <!-- <noData :nodata="nodata"/> -->
          <div class="swiper">
               <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                    <van-swipe-item>1</van-swipe-item>
                    <van-swipe-item>2</van-swipe-item>
                    <van-swipe-item>3</van-swipe-item>
                    <van-swipe-item>4</van-swipe-item>
                </van-swipe>
                <div class="brand">
                    <div class="park">
                        <div class="intro">
                            <router-link to="/brand">
                                <p>
                                    <img src="../../static/images/dian_03.png" width="12" height="12"/>
                                    <span>品牌介绍</span>
                                </p> 
                             </router-link>
                            <p class="line">|</p>
                        </div>  
                        <div class="intro left">
                            <router-link to="/tariffe">
                                <p>
                                    <img src="../../static/images/dian_05.png" width="12" height="12"/>
                                    <span>价目表</span>
                                </p> 
                            </router-link>
                            <p class="line">|</p>
                        </div>  
                        <div class="intro">
                             <router-link to="/member">
                                <p>
                                    <img src="../../static/images/dian_07.png" width="15" height="15"/>
                                    <span>会员特惠</span>
                                </p> 
                            </router-link>
                        </div>    
                    </div>
                </div>
          </div>
          <div class="redpackge">
                      <ul>
                          <router-link to="/main">
                              <li>
                                <div class="red">
                                    <img src="../../static/images/dian_13.png" width="26" height="24" />
                                    <div>
                                         <p>在线预约</p>
                                         <p class="serve">提前预约,优先服务</p>
                                    </div>
                                </div>
                                <p class="award"><van-icon name="arrow" size="12" class="van" /></p>
                              </li>
                          </router-link>
                          <router-link to="/user">
                              <li>
                                <div class="red">
                                    <img src="../../static/images/dian_16.png" width="27" height="24" />
                                     <div>
                                         <p>我是会员</p>
                                         <p class="serve">会员服务,方便省心</p>
                                    </div>
                                </div>
                                <p class="award"><van-icon name="arrow" size="12" class="van" /></p>
                              </li>
                          </router-link>
                             <router-link to="/cart">
                              <li>
                                <div class="red">
                                    <img src="../../static/images/dian_19.png" width="26" height="24" />
                                    <div>
                                         <p>积分商城</p>
                                         <p class="serve">激情换购,超值享受</p>
                                    </div>
                                </div>
                                <p class="award"><van-icon name="arrow" size="12" class="van" /></p>
                              </li>
                          </router-link>
                             <router-link to="/stories">
                              <li>
                                <div class="red">
                                    <img src="../../static/images/dian_22.png" width="26" height="24" />
                                     <div>
                                         <p>发品空间</p>
                                         <p class="serve">关注发品,了解时尚</p>
                                    </div>
                                </div>
                                <p class="award"><van-icon name="arrow" size="12" class="van" /></p>
                              </li>
                          </router-link>
                      </ul>  
              </div>
    </div>
</template>
<script>
import noData from '../components/nodata'
import HeaderTop from '../components/header'
export default {
    data(){
        return{
          nodata:"没有数据哦",
          rightContent:'店铺名字'
        }
    },
    components:{
         noData,HeaderTop
    }
}
</script>
<style scoped>
    .center{
        width: 100%;
        height: 100%;
        background: #ffffff;
    }
    .my-swipe .van-swipe-item {
        color: #fff;
        font-size: 0.24rem;
        line-height: 2.6rem;
        text-align: center;
        background-color: #39a9ed;
  }
    .brand{
        width: 100%;
        border-bottom: 0.01rem solid #ececec;
      
    }
    .park{
        width: 90%;
        margin: 0 auto;
        display: flex;
        height: 0.8rem;
    }
     .park div{
        flex: 1;
    }
   
    .intro{
        display: flex;
        justify-content: center;
        text-align: center;
        align-items: center;
        color: #727171;
        font-size: 0.22rem;
        padding-left: 0.2rem;
    }
    .left{
        padding-left: 0.4rem;
    }
    .line{
        padding-left: 0.4rem;
        color: #b9b8b8;
    }
    .redpackge{
        width: 100%;
        background: #ffffff;
        
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
        display: flex;
        justify-content: space-between;
        text-align: left;
    }
    .serve{
        color: #9b9b9b;
        font-size: 0.16rem;
        padding-top: 0.06rem;
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
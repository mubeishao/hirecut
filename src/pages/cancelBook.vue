<template>
    <div class="content">
          <HeaderTop/>
          <div class="cancel">
              <p class="time">预约日期:2020.4.15</p>
              <div class="day">
                    <div class="clock">
                        <img src="../../static/images/12_05.png" width="35" height="35" />
                        <div >
                            <p class="noon" >明天14:00</p>
                            <p class="hour">14小时</p>
                        </div>
                    </div>
                     <div class="flex">
                         <van-image
                            round
                            width="52"
                            height="52"
                            src="https://img.yzcdn.cn/vant/cat.jpeg"
                        />
                         <div class="left">
                             <p class="server">预约服务者</p>
                              <p class="liyang">李阳</p>
                               <p class="server server2">预约门店</p>
                                <p class="jiangbei">江北店</p>
                                <p class="mgr">
                                    <span class="tel">13812342250</span>
                                    <img src="../../static/images/12_05.png" width="20" height="20" />
                                </p>
                         </div>
                     </div>
                     <div  :class="show ? 'been beenbook':'been beenbook2'" @click="cancelTicket">{{cancel}}</div>
              </div>
          </div>
    </div>
</template>
<script>
import HeaderTop from '../components/header'
import { Dialog } from 'vant';
export default {
    data(){
        return{
           cancel:'取消预约',
           show:true
        }
    },
    components:{
        HeaderTop
    },
    methods:{
        cancelTicket(){
            
             Dialog.confirm({
                title: '',
                message: '确定要取消此次预约吗?',
                })
                .then(() => {
                     this.show =false
                    this.cancel = '已取消'
                })
                .catch(() => {
                    // on cancel
                });
        }
    }
}
</script>
<style scoped>
    .content{
        width: 100%;
        height: 100%;
        background: #f5f5f5;
    }
   .cancel{
       width: 86%;
       margin: 0.3rem auto;
       text-align: center;
   }
   .time{
       color: #585858;
       font-size: 0.24rem;
       margin-bottom: 0.5rem;
   }
   .day{
       width: 100%;
       height: auto;
       border-radius: 0.1rem;
       background: #ffffff;
       padding-top: 1rem;
       padding-bottom: 0.6rem;
      
   }
   .flex{
       width: 80%;
       margin: 0 auto;
       display: flex;
       justify-content: flex-start;
   }
   .liyang{
       color: #242424;
       font-size: 0.26rem;
       font-weight: bold;
       margin-bottom: 0.3rem;
   }
   .server{
       color: #a8a8a8;
       font-size: 0.24rem;
       margin-bottom: 0.16rem;
   }
   .server2{
        margin-bottom: 0.1rem;
   }
   .left{
        text-align: left;
        padding-left: 0.3rem;
   }
   .tel{
       color: #4f4f4f;
       font-size: 0.24rem;
   }
   .jiangbei{
       margin-bottom: 0.2rem;
   }
   .mgr{
       margin-bottom: 0.5rem;
   }
   .mgr img{
       vertical-align: middle;
   }
   .been{
       width: 2.4rem;
       height: 0.7rem;
       line-height: 0.7rem;
       border-radius: 0.7rem;
       color: #d8d8d8;
       border: 0.01rem solid #d0d0d0;
       margin: 0 auto;
       font-size: 0.26rem;
       margin-left: 1.8rem;
       
   }
   .beenbook{
       color: #ff2145;
       border: 0.01rem solid #ff2145;
   }
   .beenbook2{
       color: #d8d8d8;
       border: 0.01rem solid #d0d0d0;
   }
   .clock{
       position: fixed;
       left: 30%;
       top: 14%;
       width: 38%;
       display: flex;
       justify-content: center;
       height: auto;
       background: #ff2145;
       border-radius: 0.7rem;
       text-align: center;
       margin: 0 auto;
       

   }
   .clock div{
        padding: 0.18rem 0;
        padding-left: 0.24rem;
        text-align: left;
   }
   .clock img{
        margin-top: 0.18rem;
   }
   .noon{
       color: #f9fff8;
       font-size: 0.26rem;
       
       
   }
   .hour{
       color: #ffdcea;
       font-size: 0.22rem;
       padding-top: 0.08rem;
      
   }
</style>
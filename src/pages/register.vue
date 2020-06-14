<template>
      <div class="content">
           <div class="headOK">
               <p class="headres">注册</p>
           </div>
           <div class="main">
                  <div class="image">
                       <van-image
                        round
                        width="1.8rem"
                        height="1.8rem"
                        src="https://img.yzcdn.cn/vant/cat.jpeg"
                    
                    />
                  </div>
                  <!-- <div class="num">
                      <span>手机号</span><van-field v-model="tel" type="tel" label="" maxlength="11" />
                      <van-field
                            v-model="sms"
                            center
                            clearable
                            label="验证码"
                            placeholder="请输入验证码"
                            maxlength="6"
                            >
                            <template #button>
                                <van-button size="small" type="primary"   @click.prevent="getSmsCode()">
                                    {{computeTime>0 ? `已发送(${computeTime}s)` : '获取验证码'}}
                                </van-button>
                            </template>
                       </van-field>
                  </div>   -->
                  <div class="loginContainer" >
                    <div class="phone">
                            <span class="span">
                                <img src="../../static/images/phone_res (1).png" width="12" height="18">
                            </span>
                            <input
                                type="tel"
                                placeholder="请输入您的手机号"
                                maxlength="11"
                                class="phoneNum"
                                v-model="tel"
                            >
                    </div>
                    <div class="phone">
                            <span class="span">
                                <img src="../../static/images/phone_res (2).png" width="13" height="16">
                            </span>
                            <input
                                type="tel"
                                placeholder="请输入验证码"
                                maxlength="6"
                                class="phoneNum"
                                v-model="sms"
                            >
                            <span class="getCode"  @click.prevent="getSmsCode()">
                                 {{computeTime>0 ? `已发送(${computeTime}s)` : '获取验证码'}}
                            </span>
                    </div>
                 </div>

                  <div class="regiter" @click="register"></div>
                 
                  <div class="login"></div>
                  <div >
                      <van-image
                        round
                        width="0.52rem"
                        height="0.5rem"
                        src="../../static/images/res_11.png"
                        />
                  </div>
           </div>
      </div>    
</template>
<script>
import { Toast } from 'vant'
export default {
    data(){
        return{
             tel:'',
             sms:'',
             computeTime:0
        }
    },
    computed: {
        rightPhone() {
         return /^1[23456789]\d{9}$/.test(this.tel);
        }
   },
   methods:{
         getSmsCode(){
             if(!this.computeTime){
                this.computeTime = 60; 
                this.intervalId = setInterval(() => {
                    this.computeTime--;
                    if (this.computeTime <= 0) {
                    // 停止计时
                    clearInterval(this.intervalId);
                    this.computeTime = 0;
                    }
                }, 1000);
             }
         },

         register(){
             let {tel,sms,rightPhone} = this
             if(tel==''){
                 Toast('手机号不能为空');
                 return
             }
             if(sms==''){
                 Toast('短信验证码不能为空');
                 return
             }
            if (!rightPhone) {
                this.$toast("手机号不正确");
                return;
            }
            this.$router.push({path:'/main'})
         }
   }
}
</script>
<style scoped>
    .content{
        width: 100%;
        height: 100%;
        background: url('../../static/images/reg_bg.png') no-repeat;
        background-size: 100% 100%;
        overflow: hidden;
    }
    .headOK{
        width: 100%; 
        height: 1rem;
        text-align: right;
        color: #333333;
        font-weight: bold;
        font-size: 0.28rem;
        padding: 0.4rem 0.2rem;
        border-bottom: 0.01rem solid #d8d8d8;   
        
    }
    /* .headres{
        position: fixed;
        right: 0.2rem;
        top: 0.3rem;
    } */
   
    .main{
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
        width: 70%;
        margin: 0 auto;
        
    }
     .image{
        width: 100%;
        margin: 0.7rem auto 0.4rem 0;
        text-align: center;
    }


    .regiter{
        width: 100%;
        height: 0.7rem;
        background: url('../../static/images/res_03.png') no-repeat;
        background-size: 100% 100%;
        color: #ffffff;
        font-size: 0.24rem;
        font-weight: bold;
        margin: 0.1rem 0;
    }
    .forget{
        color: #9e9f9f;
        font-size: 0.2rem;
        margin-top: 0.1rem;
    }
    .login{
        width: 100%;
        margin: 1.8rem 0 0.5rem 0;
        height: 0.16rem;
        background: url('../../static/images/login-res_03.png') no-repeat;
        background-size: 100% 100%;
    }
    .wx{
        width: 0.55rem;
        height: 0.51rem;
        background: url('../../static/images/res_11.png') no-repeat;
        background-size: 100% 100%;
        margin-bottom: 1rem;
    }
    .loginContainer{
        width: 100%;
        margin: 0.5rem 0;
    }
    .phone {
        width: 100%;
        position: relative;
        height: 0.6rem;
        line-height: 0.6rem;
        margin: 0 auto 0.2rem 0;
       
        
    }
    .span{
        padding-right: 0.1rem;
        vertical-align: top;
       
    }
    .span img{
        padding-bottom: 0.03rem;
        
    }
    .phoneNum {
        width: 90%;
        height: 0.45rem;
        color: #979292;
        font-size: 0.22rem;
        background: none;
        outline: none;
        border-bottom: 1px solid #dbdada;
        vertical-align: top;
    }
    .getCode {
        float: right;
        height: 0.36rem;
        line-height: 0.36rem;
        border-radius: 0.4rem;
        text-align: center;
        margin-top: 0.48rem;
        border: none;
        outline: none;
        position: absolute;
        right: 0.12rem;
        bottom:0.22rem;
        color: #030303;
        font-size: 0.22rem;
        }
   
</style>
 <style>
     .van-button--primary{
         background-color:#ffffff !important;
         border: #ffffff !important;
         color: #1d1d1d  !important;
         font-size: 0.24rem !important;
     }
     .van-cell:not(:last-child)::after{
         border-bottom:none;
     }
     .van-cell {
        border-bottom: 0.01rem solid #ebedf0 !important;
     }
     .van-field__label span{
         font-size: 0.25rem !important;
     }
</style>
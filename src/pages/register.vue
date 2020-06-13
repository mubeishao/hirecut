<template>
      <div class="content">
           <div class="head">
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
                  <div class="num">
                      <van-field v-model="tel" type="tel" label="手机号" maxlength="11" />
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
                  </div>  

                  <div class="regiter" @click="register"></div>
                  <div class="forget">忘记密码?</div>
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
        background: #fefefe;
        overflow: hidden;
    }
    .head{
        width: 100%; 
        height: 0.6rem;
        text-align: right;
        color: #333333;
        font-weight: bold;
        font-size: 0.26rem;
        padding: 0.3rem 0;
        border-bottom: 0.01rem solid #d8d8d8;   
        
    }
    .headres{
        position: fixed;
        right: 0.2rem;
        top: 0.5rem;
    }
   
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

    .num{
        width: 100%;
        margin: 0.2rem auto;
        
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
        margin: 1rem 0 1.6rem 0;
        height: 0.16rem;
        background: url('../../static/images/login-res_03.png') no-repeat;
        background-size: 100% 100%;
    }
    .wx{
        width: 0.55rem;
        height: 0.51rem;
        background: url('../../static/images/res_11.png') no-repeat;
        background-size: 100% 100%;
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
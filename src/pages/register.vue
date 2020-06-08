<template>
      <div class="content">
           <div class="head">注册</div>
           <div class="main">
                  <div class="image">
                       <van-image
                        round
                        width="1.4rem"
                        height="1.4rem"
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
                            placeholder="请输入短信验证码"
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
                  <div class="login"></div>
                  <div class="wx"></div>
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
    }
    .head{
        width: 100%;
        margin: 0 auto;
        position: fixed;
        left: 0;
        top: 0;
        height: 0.6rem;
        line-height: 0.6rem;
        text-align: center;
        color: #333333;
        font-weight: bold;
        font-size: 0.26rem;
        padding: 0.1rem 0;
       
        
    }
   
    .main{
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
        width: 70%;
        margin: 0 auto;
        padding-top: 1rem;
    }
     .image{
        width: 100%;
        margin: 0.6rem auto;
        text-align: center;
    }

    .num{
        width: 100%;
        margin: 0.3rem auto;
        
    }
    .regiter{
        width: 100%;
        height: 0.6rem;
        line-height: 0.6rem;
        background: url('../../static/images/res_03.png') no-repeat;
        background-size: 100% 100%;
        color: #ffffff;
        font-size: 0.24rem;
        font-weight: bold;
        margin: 0.1rem 0;
    }
    .login{
        width: 100%;
        margin: 1.5rem 0 1.6rem 0;
        height: 0.24rem;
        background: url('../../static/images/login-res_03.png') no-repeat;
        background-size: 100% 100%;
    }
    .wx{
        width: 0.51rem;
        height: 0.5rem;
        background: url('../../static/images/res_11.png') no-repeat;
        background-size: 100% 100%;
    }
</style>
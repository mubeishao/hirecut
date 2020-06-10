<template>
    <div class="container">
          <HeaderTop :rightContent="rightContent"/>
          <div class="content">
              <div class="user">
                  <div class="left">
                      <van-image
                        round
                        width="52"
                        height="52"
                        src="https://img.yzcdn.cn/vant/cat.jpeg"
                        />
                        <div class="liyang">李阳</div>
                  </div>
                  <div class="right">
                      <p class="time">{{queryInfo.morDay}}至{{queryInfo.morPoint}}</p>
                      <p class="day"> {{queryInfo.periodDay}}  ({{queryInfo.timePoint}})下午</p>
                  </div>
                

              </div>
              <div class="project">
                      <p class="yuyue">预约项目</p>
                      <ul class="type ">
                          <li class="hairlist"  v-for="(item,index) in querylist" :key="index">
                              <p>{{item}}</p>
                          </li>
                      </ul>
              </div>
              <div class="project">
                      <p class="yuyue">备注</p>
                      <van-field
                        v-model="address"
                        rows="3"
                        autosize
                        label="我的位置在:"
                        type="textarea"
                        
                        placeholder=""
                        show-word-limit
                        />
              </div>
              <img src="../../static/images/now_03.png" class="now"  @click="goBookNow"/>
             
          </div>
    </div>
</template>
<script>
import HeaderTop from '../components/header'
   export default{
        data(){
            return{
                rightContent:"我的预约",
                address:"",
                querylist:[],
                queryInfo:this.$route.query.queryInfo,
                typeList:[
                    {
                        name:'塑性烫(菲灵)',
                    },
                     {
                        name:'塑性烫(菲灵)',
                    },
                     {
                        name:'塑性烫(菲灵)',
                    },
                     {
                        name:'塑性烫(菲灵)',
                    },
                     {
                        name:'塑性烫(菲灵)',
                    },
                     {
                        name:'塑性烫(菲灵)',
                    },
                     {
                        name:'塑性烫(菲灵)',
                    },
                     {
                        name:'塑性烫(菲灵)',
                    },
                     {
                        name:'塑性烫(菲灵)',
                    },
                ]
            }
     },
     watch:{
           queryInfo(newVal,old){
                   
           }
     },
     created(){
         let vm =this
         const query = localStorage.getItem('queryInfo')
         const info = vm.queryInfo.hairString
         vm.querylist = info.split(',')
         console.log( vm.querylist)
     },
     mounted(){
      
     },
     components:{
         HeaderTop
     },
     methods:{
         goBookNow(){
             this.$router.push({path:'/cancelbook'})
         }
     }
   }
</script>
<style lang="scss" scoped>
   .container{
       width: 100%;
       height: 100%;
       background: #f1f1f1;
       .content{
           width: 90%;
           margin: 0.4rem auto;
           .user{
               display: flex;
               justify-content: space-between;
               height: 1rem;
               background: #ffffff;
               border-radius: 0.6rem;
               .left{
                   margin-left: 0.05rem;
                   margin-top: 0.04rem;
                   display: flex;
                   justify-content: center;
                   align-items: center;
                   .liyang{
                     margin-left: 0.16rem;
                     padding-bottom: 0.4rem;
                   }
               }
               .right{
                   padding: 0 0.14rem;
                   background: #ff2245;
                   height: 0.8rem;
                   border-radius: 0.5rem;
                   margin-top: 0.1rem;
                   margin-right: 0.06rem;
                   color: #ffffff;
                   text-align: center;
                   .time{
                       margin-top: 0.18rem;
                       font-size: 0.24rem;
                   }
                   .day{
                       font-size: 0.2rem;
                       margin-top: 0.06rem;
                       color: #ffeded;
                   }
               }
              
           }
           .project{
                   margin: 0.3rem auto;
                   .yuyue{
                       color: #f42233;
                       font-size: 0.22rem;
                       margin-bottom: 0.2rem;
                   }
                   .textarea{
                       width: 100%;
                       border: none;
                       overflow: hidden;
                       
                   }
                   .type{
                        display: flex;
                        justify-content: flex-start;
                        text-align: center;
                        align-items: center;
                       flex-wrap: wrap;
                       width: 100%;
                       border-radius: 0.05rem;
                        background: #ffffff;
                        padding: 0.05rem 0;
                       .hairlist{ 
                           height: auto;
                           color: #fff4f2;
                           padding: 0.05rem;
                           border-radius: 0.06rem;
                           p{
                               width: 1.6rem;
                               height: 0.4rem;
                               line-height: 0.4rem;
                               text-align: center;
                               border-radius: 0.5rem;
                               padding: 0.1rem;
                               background: #ff2245;
                               font-size: 0.22rem;
                           }
                       }  
                   }
               }
            .now{
                display: block;
                width: 100%;
                height: 0.7rem;
                margin: 0.4rem auto;
            }   
       
       
       }
   }
</style>
<style >
   .van-field__label{
       width: 100px !important;
       border: none !important;
   }
</style>
<template>
    <div class="main"> 
            <div class="content">
                <img src="../../static/images/left_03.png" width="18" height="18" @click="onClickLeft" />
                <p></p>
                <p class="right">{{rightContent}}</p>
            </div>
    </div>
</template>
<script>
export default {
    props:{
       title:{
           type:String,
           default:''
       },
       rightContent:{
           type:String,
           default:"预约"
       }
       
    },
    data(){
        return{
           
        }
    },
    // watch:{
    //      title(newValue,oldValue){
    //          this.title = newValue
    //      },
    //      rightContent(newValue,oldValue){
    //          console.log(newValue)
    //          this.rightContent = newValue
    //      }
    // },
    methods:{
         onClickLeft(){
            this.$store.commit("setTransition", "turn-right");
            this.$router.back()
        },
         onClickRight(){
     
        }
    }
}
</script>
<style  scoped>
   .header{
       height: 60px;
   }
   .home{
     width: 24px;
     height: 24px;
     position: fixed;
     top:10px;
     right:56px;
     z-index: 99;
     
   }

   .van-icon{
      font-size: 22px;
   }
   .van-nav-bar__title{
        color: #ffffff;
   }
   .van-nav-bar__left, .van-nav-bar__right{
     font-size: 20px
   }
   .van-nav-bar .van-icon{
      color: #000000
   }
   .main{
       width: 100%;
       background: #ffffff;
       border: none;
   }
   .content{
       width: 90%;
       display: flex;
       justify-content: space-between;
       margin: 0 auto;
       height: 30px;
       padding-top: 0.3rem;
       
      
   }
   .content img{
       display: block;
      
   }
   .right{
       font-size: 0.32rem;
       color: #1d1d1d;
       font-weight: bold;
   }
</style>



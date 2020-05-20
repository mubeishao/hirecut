<template>
    <div class="main"> 
            <van-nav-bar :title='title' >
                <van-icon name="arrow-left" slot="left" @click="onClickLeft" /> 
                <span slot="right" >{{rightContent}}</span> 
            </van-nav-bar>     
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
</style>



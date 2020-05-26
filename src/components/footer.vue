<template>
    <div >
        <van-tabbar
            fixed
            v-model="active"
            class="footer"
            >
            <van-tabbar-item icon="home-o" to="/main">预约</van-tabbar-item>
            <van-tabbar-item icon="search">作品</van-tabbar-item>
            <van-tabbar-item  to='/user' class="round">
                <van-image
                        round
                        width="1.2rem"
                        height="1.2rem"
                        src="https://img.yzcdn.cn/vant/cat.jpeg"
                />
            </van-tabbar-item>
            <van-tabbar-item icon="refund-o">
               商城
            </van-tabbar-item>
            <van-tabbar-item icon="friends-o" to='/user' >我的</van-tabbar-item>         
       </van-tabbar>   
    </div>
</template>
<script>

export default {
    data(){
        return{
             active:0,
        }
    },
 
}
</script>
<style scoped>
     .footer{
         width: 100%;
         height: 1.2rem;
         position: fixed;
         left: 0;
         bottom: 0;
         border-top-left-radius: 0.6rem;
         border-top-right-radius: 0.6rem;
         border-top: 0.02rem solid gainsboro;
     }
     .van-tabbar-item{
         border: none;
     }
     .van-row--justify-center{
         text-align: center
      }
     .round{
         padding-bottom:0.6rem
     }
     .van-tabbar-item--active{
         color: red;
     }
     .van-hairline--top-bottom::after, .van-hairline-unset--top-bottom::after{
         border-width:0
     }
</style>

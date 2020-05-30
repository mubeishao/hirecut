<template>
    <div >
        <van-tabbar
            fixed
            v-model="active"
            class="footer"
            >
            <van-tabbar-item to="/main" class="mainline">
                <van-image
                            
                            width="0.4rem"
                            height="0.4rem"
                            src="../../static/images/book_11.png"
                    />
                <p>预约</p>
            </van-tabbar-item>
            <van-tabbar-item  class="mainline">
                 <van-image
                            
                            width="0.4rem"
                            height="0.4rem"
                            src="../../static/images/book_13.png"
                    />
                <p>作品</p>
            </van-tabbar-item>
            <van-tabbar-item  to='/user' class="round">
                <van-image
                        round
                        width="1.2rem"
                        height="1.2rem"
                        src="https://img.yzcdn.cn/vant/cat.jpeg"
                />
            </van-tabbar-item>
            <van-tabbar-item  class="mainline">
                <van-image
                            
                            width="0.4rem"
                            height="0.4rem"
                            src="../../static/images/book_15.png"
                    />
                <p>商城</p>
            </van-tabbar-item>
            <van-tabbar-item  to='/user' class="mainline">
                  <van-image
                            
                            width="0.4rem"
                            height="0.4rem"
                            src="../../static/images/book_17.png"
                    />
                <p>我的</p>
            </van-tabbar-item>         
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
     .mainline{
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
     }
     .mainline p{
         margin-top: .1rem;
     }
</style>

<template>
    <div >
        <van-tabbar
            fixed
            v-model="active"
            class="footer"
            active-color="#fd325d"
            @change="onChange"
            >
            <van-tabbar-item to="/main" class="mainline">
                <van-image
                            
                            width="0.4rem"
                            height="0.4rem"
                            :src="currentIndex==0?foot.foot03:book.book11"
                    />
                <p>预约</p>
            </van-tabbar-item>
            <van-tabbar-item  class="mainline" to="/stories">
                 <van-image
                            
                            width="0.4rem"
                            height="0.4rem"
                            :src="currentIndex==1?foot.foot07:book.book13"
                    />
                <p>作品</p>
            </van-tabbar-item>
            <van-tabbar-item  to='/center' class="round">
                <van-image
                        round
                        width="1.2rem"
                        height="1.2rem"
                        src="https://img.yzcdn.cn/vant/cat.jpeg"
                />
            </van-tabbar-item>
            <van-tabbar-item to="/cart"  class="mainline">
                <van-image
                            
                            width="0.4rem"
                            height="0.4rem"
                            :src="currentIndex==3?foot.foot07:book.book15"
                    />
                <p>商城</p>
            </van-tabbar-item>
            <van-tabbar-item  to='/user' class="mainline">
                  <van-image
                            
                            width="0.4rem"
                            height="0.4rem"
                            :src="currentIndex==4?foot.foot09:book.book17"
                    />
                <p>我的</p>
            </van-tabbar-item>         
       </van-tabbar>   
    </div>
</template>
<script>
import book15  from '../../static/images/book_15.png'
import book11  from '../../static/images/book_11.png'
import book13  from '../../static/images/book_13.png'
import book17  from '../../static/images/book_17.png'
import foot03  from '../../static/images/foot_03.png'
import foot05  from '../../static/images/foot_05.png'
import foot07  from '../../static/images/foot_07.png'
import foot09  from '../../static/images/foot_09.png'
export default {
    data(){
        return{
             active:0,
             currentIndex:0,
             book:{book11,book13,book15,book17},
             foot:{foot03,foot05,foot07,foot09}
        }
    },
    methods:{
        onChange(index){
            console.log(index)
            this.currentIndex = index
        }
    }
 
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
     /* .van-tabbar-item--active{
         color: red;
     } */
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

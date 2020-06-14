<template>
   <div class="cart">
      <HeaderTop :rightContent="selectProject"/> 
      <div class="cartWrapper">
        <!-- 购物车为空 -->
        <div class="emptyCart"
            v-show="!isShowEmptyCart">
            <!-- <img src="./../../images/cart/empty.png" alt=""> -->
            <div class="title">tille</div>
            <router-link to="/dashboard/home" class="goHome">23444</router-link>
        </div>
        <div class="contentWrapper"
           v-show="isShowEmptyCart">
            <div class="contentWrapperList"
             v-for="(goods,index) in shopCart"
             :key="index">
          <section>
            <div class="shopCartListCon">
              <div class="left">
                <!-- <a href="javaScript:;"
                   class="cartCheckBox"
                   :checked="goods.checked"
                   @click.stop="single(goods.id)"></a> -->
                   <van-checkbox v-model="checked" checked-color="#07c160"></van-checkbox>
              </div>
              <div class="center">
                <img :src="goods.smallImage" width="70" height="90">
              </div>
              <div class="right">
                <a class="goodsname">{{goods.name}}</a>
                <div class="bottomContent">
                  <p class="shopPrice"> ¥ {{goods.price}}</p>
                   <div class="shopDeal">
                    <yd-spinner max="999" unit="1" v-model="spinner1"></yd-spinner>
                  </div>
                  <!-- <div class="shopDeal">
                    <span @click="reduceGoods(goods.id,goods.num)">-</span>
                    <input type="number"
                           disabled
                           v-model="goods.num">
                    <span @click="addGoods(goods.id,goods.name,goods.smallImage,goods.price)">+</span>
                  </div> -->
                </div>
              </div>
            </div>
          </section>
        </div>
        <!-- 提交订单 -->
        <div class="botbar">
            <van-submit-bar :price="totalPrice"
                            :button-text="submitBarText"
                            @submit="onSubmit"
                            :disabled="!(selectedGoodNum>0)"
                            v-show="isShowEmptyCart">
                <van-checkbox v-model="isCheckedAllOne" checked-color='#45c763'>全选</van-checkbox>
            </van-submit-bar>
        </div>
      </div>
      </div>  
   </div>
</template>
<script>
import HeaderTop from '../components/header'
export default {
    data(){
        return{
            selectProject:"购物车",
            isShowEmptyCart:true,
            totalPrice:200,
            checked:false,
            spinner1:0,
            selectedGoodNum:2,
            isCheckedAllOne:false,
            shopCart:[
                {
                    num: 1,
                    id: "58bf8d1a936edf72323d9bfc",
                    name: "美丽秀发 时刻额日志 不到宿舍考都考博 ",
                    price: "562",
                    smallImage: "../../static/images/works_03.png",
                    checked: true,
                },
                 {
                    num: 2,
                    id: "58bf8d1a936edf72323d9bfc",
                    name: "美丽秀发 ",
                    price: "489",
                    smallImage: "../../static/images/works_03.png",
                    checked: true,
                },
                 {
                    num: 2,
                    id: "58bf8d1a936edf72323d9bfc",
                    name: "美丽秀发 ",
                    price: "489",
                    smallImage: "../../static/images/works_03.png",
                    checked: true,
                },
                 
      
         
            ]
        }
    },
    computed:{
       submitBarText () {
        const count = this.selectedGoodNum;
        //  return this.$t('order.settlement') + (count ? `(${count})` : '');
        return `结算${100}`
       },
         // 1.是否显示空购物车样式
        isShowEmpty () {
            let isshow = false;
            if (this.totalCount > 0) {
                isshow = true;
            }
            return isshow;
            },

         // 3.计算shopCart的数量
        totalCount () {
        console.log(this.shopCart)
        return Object.keys(this.shopCart).length;
        },

        selectedGoodsCount () {
            let selectedGoodsCount = 0;
            Object.values(this.shopCart).forEach((goods, index) => {
                if (goods.checked) {
                selectedGoodsCount++;
                }
            });
            return selectedGoodsCount;
       },
        // 5.是否全部选中
    isCheckedAll: {
      get () {
        let tag = this.totalCount > 0;
        let shopCart = this.shopCart;
        Object.values(shopCart).forEach(goods => {
          if (!goods.checked) {
            tag = false;
          }
        });
        return tag;
      },
      set (value) {
        // 改变store中的值
        // 解决 assigned to but it has no setter.
        // https://vuex.vuejs.org/zh/guide/forms.html
        //  https://stackoverflow.com/questions/55097118/computed-property-was-assigned-to-but-it-has-no-setter-a-toggle-component
        let isCheckedAll = !value;
        
      }
     },


    },
    methods:{
        single(){

        },
                // 6.去结算
    onSubmit () {
      // 6.1 当选中商品数量大于0跳转
      if (this.selectedGoodNum > 0) {
        // 跳转到订单界面
        this.$router.push('/order');
      } else {
     
      }
    },
    },
    components:{
        HeaderTop
    }
}
</script>
<style lang="scss"  scoped>
.cart {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  overflow: hidden;
  .titleWrapper {
    width: 90%;
    margin: 0 auto;
    height: 2.6rem;
    background: #fff;
    -webkit-background-size: 0.1rem 4.4rem;
    background-size: 0.1rem 4.4rem;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .titleWrapper .clearCart { 
    position: absolute;
    right: 0.3rem;
    font-size: 0.8rem;
  }
  .disableClearCart {
    color: grey;
  }
  .cartWrapper {
    @media screen and (min-width: 300px) and(max-width: 374px) {
      .van-submit-bar {
        bottom: 0;
      }
    }
    @media screen and (min-width: 375px) and(max-width: 420px) {
      .van-submit-bar {
        bottom: 0;
      }
    }
    @media screen and (min-width: 420px) and(max-width: 1024px) {
      .van-submit-bar {
        bottom: 0;
      }
    }
    .emptyCart {
      display: flex;
      flex-direction: column;
      justify-content: center;
      img {
        padding-top: 2rem;
        width: 50%;
        height: 8rem;
        margin: 0 auto;
      }
      .title {
        text-align: center;
        padding: 0.5rem;
      }
      .goHome {
        margin-top: 2rem;
        color: white;
        background-color: #45c763;
        text-align: center;
        margin: 0 auto;
        padding: 0.5rem;
        width: 5rem;
        height: 1rem;
        line-height: 1rem;
        border-radius: 1rem;
      }
    }
    .contentWrapper {
      width: 95%;
      margin: 0 auto;  
      padding-top: 0.24rem;
      height: 9rem;
      overflow: auto;
      section {
        background-color: #ffffff;
        border-radius: 0.2rem;
        .shopCartListCon {
          display: flex;
          height: 2rem;
          margin-bottom: 0.2rem;
          padding: 0.1rem 0;
          justify-content: center;
          align-items: center;
          .left{
              flex: 2;
              margin-left: -0.3rem;
          }
          .center{
              flex: 3.3;
              padding-left: 0.16rem;
              padding-right: 0.2rem;
          }
          .right{
              flex: 8;
              display: flex;
              flex-direction: column;
              padding-right: 0.1rem;
              overflow: hidden;
              text-overflow:ellipsis;
              white-space: wrap;
              .goodsname{
                  width: 3rem;
                  padding-bottom: 0.7rem;
                  color: #030303;
                  font-size: 0.24rem;
                  padding-right: 0.2rem;
              }
              
          }
       
     
        }
        .bottomContent {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          .shopPrice {
            font-size: 0.22rem;
            color: #ff2145;
            padding-right: 0.2rem;
            
          }
          .shopDeal{
              padding-right: 0.1rem;
          }
          .shopDeal span {
            display: inline-block;
            width: 0.3rem;
            height: 0.5rem;
            line-height: 0.5rem;
            text-align: center;
            float: left;
          }
          .shopDeal input {
            float: left;
            width: 0.5rem;
            height: 0.4rem;
            text-align: center;
            margin: 0 0.2rem;
            font-size: 0.24rem;
            background-color: #f5f5f5;
            border: 0;
          }
        }
      }
    }
  }
  .van-checkbox {
    margin-left: 0.5rem;
  }
  .botbar{
      width: 100%;
      height: 3rem;
      background: #ffffff;
      position: fixed;
      left: 0;
      bottom: 0;
  }
}
</style>
<style>
   .yd-spinner{
       height: 0.4rem !important;
       width: 1.6rem !important;
       border-radius: 0.1rem !important;
       border: 0.01rem solid #d9d9d9 !important;
   }
   .yd-spinner>input{
       width: 50% !important;
       border-left: 0.01rem solid #d9d9d9 !important;
       border-right: 0.01rem solid #d9d9d9 !important;
   }
    .yd-spinner>span{
        width: 25% !important;
        background-color: #ffffff !important;
        padding-bottom: 0.05rem !important;
   }
   .yd-spinner>span>i:after{
       top: 41% !important;
   }
   .van-submit-bar{
       border-top: 0.01rem solid #ededed !important;
   }
   .van-submit-bar__bar{ 
       width: 100% !important;
   }
   .van-submit-bar__bar .van-checkbox{
       margin-left: 0.16rem !important;
   }
   .van-submit-bar__button--danger{
       background: #ff2145 !important;
   }
   .van-submit-bar__button{
       width: 1.4rem !important;
       height: 0.6rem !important;
       border-radius: 0.5rem !important;
   }
</style>

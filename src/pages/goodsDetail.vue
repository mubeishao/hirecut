<template>
    <div class="content">
         <div class="detail">
               <div class="image">
                  <img src="../../static/images/goods_de.png" class="imgOne" />
                  <div class="cart">
                       <!-- <img src="../../static/images/goods1_05.png" width="30" height="30"  /> -->
                      <span class="add">1</span>
                  </div>
               </div>
               <div class="goodsInfo">
                    <div class="hair">染发</div>
                    <div class="zonse">棕色烫染</div>
                    <div class="score"><span>1388元</span>+<span>1022积分</span></div>
                    <div class="saler">销量:32</div>
               </div>
              
          </div>
          <div class="goods">商品详情</div>
          <div class="tang">棕色烫染</div>
          <div class="bottom">
              <img src="../../static/images/goods1_09.png" />
               <img src="../../static/images/goods1_11.png" />
          </div>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    }
}
</script>

<style lang="scss" scoped>
    
    .content{
         width: 100%;
         height: 100%;
         background: #f7f7f7;
         .detail{
               width: 100%;
               height: 62%;
               background: #ffffff;
         }
        .image{
            width: 94%;
            height: 5rem;
            margin: 0 auto;
            .imgOne{
                width: 100%;
                height: 100%;
                display: block;
            }
            .cart{
                position: fixed;
                top: 0.3rem;
                right: 0.4rem;
                width: 0.5rem;
                height: 0.5rem;
                background: url('../../static/images//goods1_05.png') no-repeat;
                background-size: 100% 100%;
            }
            .add{
                display: block;
                border-radius: 0.14rem;
                background: #fb516b;
                color:#ffffff;
                padding: 0.06rem 0.1rem;
                font-size: 0.1rem;
                float: right;
                margin-top: -0.12rem;
                margin-right: -0.1rem;
            }

        }
        .goodsInfo{
             padding: 0.16rem 0.3rem;
             
             .hair{
                 color: #333333;
                 font-size: 0.26rem;
                 font-weight: bold;
             }
             .zonse{
                 color: #999999;
                 font-weight: bold;
                 margin: 0.2rem auto;
                 font-size: 0.23rem;
             }
            .score{
                 color: #fb516b;
                 font-weight: bold;
                 font-size: 0.22rem;
                 margin-bottom: 0.3rem;

            }
            .saler{
                padding-bottom: 0.2rem;
            }
            .number{
                 color: #333333;
                 font-size: 0.22rem;
                 font-weight: bold;
            } 
        }
        .goods{
            width: 100%;
            height: 0.8rem;
            line-height: 0.8rem;
            background: #ffffff;
            padding-left: 0.3rem;
            margin-top: 0.2rem;
            color: #666666;
        }
        .tang{
            padding: 0.2rem 0.3rem;
        }
        .bottom{
            width: 100%;
            display: flex;
            position: fixed;
            left: 0;
            bottom: 0;
            img{
              height: 0.6rem;  
              flex: 1;
            }
        }
   }
</style>
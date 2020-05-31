<template>
    <div>
        <HeaderTop :rightContent="rightContent"/>
        <div class="arealist">
           <div v-for="(item,index) in arealist" :key="index"  :class="currentIndex==index ? 'cureent area':'now area' " @click="changeArea(index)">
              {{item.value}}
           </div>
        </div>
        <div class="content">
            <waterfall :col='col' :data="data"  @loadmore="loadmore" >
                    <template >
                        <div class="cell-item" v-for="(item,index) in data" :key="index">
                            <div class="introduce" v-if="index==0">
                                <div class="ku">
                                     <p class="duax"><span class="line">.</span>&nbsp;&nbsp;<span >推荐库</span></p>
                                     <p class="eight">18</p>
                                </div>
                                <div class="action">
                                    <p>推荐库帮你找到更美的自己</p>
                                    <p class="heart">心动不如行动吧~</p>
                                </div>
                            </div>   
                            <img v-if="item.img" :src="item.img" alt="加载错误"   />
                            <!-- <div v-if="item.img" class="imgRound" :style="{backgroundImage : `url(${item.img})` }"></div> -->
                            <div class="item-body">
                                <!-- <div class="item-desc">{{item.title}}</div> -->
                                <div class="item-footer">
                                    <!-- <div v-if="item.avatar" class="avatar" :style="{backgroundImage : `url(${item.avatar})` }"></div> -->
                                    <div class="image">
                                         <div class="name">{{item.user}}</div>
                                         <div  class="like">{{item.like}}</div>
                                    </div>
                                    <!-- <div class="like" :class="item.liked?'active':''" >
                                        <i ></i>
                                        <div class="like-total">{{item.like}}</div>
                                    </div> -->
                                </div>
                            </div>
                        </div>
                    </template>
             </waterfall>
        </div>

    </div>
</template>
<script>
import HeaderTop from '../components/header'
export default {
    data(){
        return{
            rightContent:"作品",
            arealist:[{value:"全部"},{value:"女方"},{value:"男发"},{value:"创意发型"}],
            currentIndex:0,
            col:2,
            data:[
                {
                     img:'../../static/images/works_03.png',
                    avatar:'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
                    title:'34555',
                    user:'tong',
                    like:'终极大段lif'
                },
                 {
                    img:'../../static/images/works_03.png',
                    avatar:'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
                    title:'贵妇级好用的水乳有哪些呢？',
                    user:'jack',
                    like:'终极大段'
                },
                 {
                     img:'../../static/images/works_03.png',
                    avatar:'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
                    title:'贵妇级好用的水乳有哪些呢？',
                    user:'keke',
                    like:'终极大段'
                },
                 {
                    img:'../../static/images/works_03.png',
                    avatar:'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
                    title:'贵妇级好用的水乳有哪些呢？',
                    user:'marry',
                    like:'中分'
                },
                 {
                    img:'../../static/images/works_03.png',
                    avatar:'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
                    title:'贵妇级好用的水乳',
                    user:'sheake',
                    like:'中分'
                },
                 {
                     img:'../../static/images/works_03.png',
                    avatar:'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
                    title:'贵妇级好用的水乳有哪些呢？',
                    user:'sheake',
                    like:'飞机头'
                },
                 {
                   img:'../../static/images/works_03.png',
                    avatar:'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
                    title:'贵妇级好用的水乳有哪些呢？',
                    user:'sheake',
                    like:'飞机头'
                },
                 {
                     img:'../../static/images/works_03.png',
                    avatar:'https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg',
                    title:'贵妇级好用的水乳有哪些呢？',
                    user:'sheake',
                    like:'飞机头'
                },
            ]
            
        }
    },
    components:{
        HeaderTop
    },
    methods:{
       changeArea(index){
           this.currentIndex = index
       },
       loadmore(){
           
       }
    }
}
</script>
<style lang="scss">
   .container-water-fall{
    // padding: 0 28px;
    width: 100vw;
    box-sizing:border-box;
    h4{
        padding-top: 56px;
        padding-bottom:28px;
        font-family: PingFangSC-Medium;
      font-size: 36px;
      color: #000000;
      letter-spacing: 1px;
      text-align: justify;
    }
    button{
      background-image: linear-gradient(-180deg,#fafbfc,#eff3f6 90%);
      background-color: #eff3f6;
      color:#24292e;
      border:1px solid rgba(27,31,35,.2);
      border-radius: .25em;
      width: 100px;
      line-height: 26px;
      font-size: 13px;

      margin: 4px 0;
      margin-right: 4px;
      cursor: pointer;
      outline: none;

    }
    button:hover{
      background-image: linear-gradient(-180deg,#fafbfc,#ccc 90%);
    }
    .cell-item{
            // margin-bottom: 18px;
            background: #ffffff;
            border: 2px solid #F0F0F0;
            border-radius: 12px;
            overflow: hidden;
            box-sizing:border-box;
            // .imgRound{
            //     border-radius: 12px 12px 0 0;
            //     width: 100%;
            //     height: 1rem;
            //     display: block;
            // }
            .item-body{
              // border: 1px solid #F0F0F0;
                padding: 4px;
                .item-desc{
                    font-size: 15px;
                    color: #333333;
                    line-height: 15px;
                    font-weight: bold;
                }
                .item-footer{
                    margin-top: 0.6rem;
                    position: relative;
                    display: flex;
                    align-items: center;
                    .avatar{
                        width: 44px;
                        height: 44px;
                        border-radius: 50%;
                        background-repeat: no-repeat;
                        background-size: contain;
                    }
                    .name{
                        max-width: 150px;
                        margin-left: 10px;
                        font-size: 0.24rem;
                        color: #999999;
                        margin: 0.16rem 0 0.2rem 0;
                    }
                    .like{
                        color: #fb516b;
                        font-size: 0.26rem;
                        
                    }

                }
            }
        }
  }
 
</style>
<style scoped>
.content{
    background: #f5f5f5;
}
.cureent{
  background: url("../../static/images/book_03.png") no-repeat;
  background-size: 100% 100%;
  color: #ffffff;
  border: none;
}
.now{
  background: #ffffff;
  color: #000000;
}
.arealist{
  display: flex;
  justify-content: space-between;
  padding: 0.2rem 0.2rem 0.2rem;
}

.area{
  flex: 1;
  text-align: center;
  height: 0.46rem;
  line-height: 0.48rem;
  border-radius: 0.24rem; 
  border: 0.014rem solid #dfdfdf;
  margin: 0 0.1rem;
  font-size: 0.22rem;
}

.cell-item{
    width: 2.8rem;
    margin: 0.2rem auto;
    background: #ffffff;
    border: 1px solid #F0F0F0;
    border-radius: 12px;
    overflow: hidden;
   
    
}
.cell-item img{
    width: 100%;
    height: 100%;
}

.vue-waterfall-column{
    width: 48% !important;
}
.introduce{
    padding:  0.1rem 0.08rem;
    background: #eeeeee;
    margin-bottom: 0.2rem;
}
.ku{
    color: #333333;
    font-weight: bold;
    font-size: 0.24rem;
    margin-bottom: 0.14rem;
    display: flex;
    justify-content: space-between;
}
.duax{
    padding-top: 0.1rem;
}

.line{
    width: 0.05rem;
    height: 0.3rem;
    background: #333333;
    
}
.action{
    color: #999999;
    font-size: 0.2rem;
}
.heart{
    padding-top: 0.08rem;
}
.eight{
    width: 0.6rem;
    height: 0.4rem;
    line-height: 0.4rem;
    border-radius: 0.2rem;
    text-align: center;
    background: #d3d3d3;
    color: #ffffff;
}
.image{
    padding: 0.1rem 0.3rem;
}
 .name{
     max-width: 150px;
     font-size: 0.24rem;
     color: #fb516b;       
     margin-bottom: 0.1rem;
}
.like{
    color: #999999;
    font-size: 0.22rem;   
}



</style>
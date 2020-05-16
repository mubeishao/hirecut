<template>
  <div class="hello">
       <!-- <HeaderTop :title="title" :rightContent="rightContent" /> -->
       <div class="content">
            <div class="head">
                  <div class="appinotment">预约</div>
                  <div class="search">
                       <input v-model="search"  class="sear" placeholder="输入关键字"  @click.stop.prevent="searchkey" />
                       <span class="spIcon" @click.stop.prevent="searchkey"><van-icon name="search" /></span>
                  </div> 
            </div>
       </div>
      
       <div class="arealist">
           <div v-for="(item,index) in arealist" :key="index"  :class="index==cuurentIndex ? 'cureent area':'now area' " @click="changeArea(index)">
              {{item.value}}
           </div>
       </div>
       <div   class="detailline">
          <div class="address" v-for="(item,index) in detailInfo" :key="index">
                 <div class="pic">
                      <van-image width="100" height="90"   src="https://img.yzcdn.cn/vant/cat.jpeg" />
                  </div>
                  <div class="detail">
                      <div class="mall">
                          <p>{{item.mall}}</p><p class="distance">{{item.distance}}</p>
                      </div>
                      <p class="district"><van-icon name="location-o" /> {{item.address}}</p>
                      <p class="district">
                        <van-icon name="phone-circle-o" />
                        {{item.tel}}</p>
                  </div>
                  <div class="book" @click.stop.prevent="toBook">预约</div>
           </div>
           <div class="bottom"></div>
      </div>
  </div>  
</template>

<script>

import HeaderTop from './header'
export default {

  data () {
    return {
       search:'',
       arealist:[{value:"鼓楼区"},{value:"建邺区"},{value:"江北新区"},{value:"雨花台区"}],
       title:"",
       rightContent:"我的预约",
       cuurentIndex:0,
       detailInfo:[
         {
         mall:"1号店",
         distance:"10km",
         address:"南京市步行街第一大道236号",
         tel:"0551-4685223"
        },
          {
         mall:"2号店",
         distance:"10km",
         address:"南京市步行街第一大道236号",
         tel:"0551-4685223"
        },
          {
         mall:"3号店",
         distance:"10km",
         address:"南京市步行街第一大道236号",
         tel:"0551-4685223"
        },
          {
         mall:"4号店",
         distance:"10km",
         address:"南京市步行街第一大道236号",
         tel:"0551-4685223"
        },
         {
         mall:"5号店",
         distance:"10km",
         address:"南京市步行街第一大道236号",
         tel:"0551-4685223"
        },
          {
         mall:"6号店",
         distance:"10km",
         address:"南京市步行街第一大道236号",
         tel:"0551-4685223"
        },
          {
         mall:"7号店",
         distance:"10km",
         address:"南京市步行街第一大道236号",
         tel:"0551-4685223"
        },
       ]
    }
  },
  methods:{
       changeArea(index){
           this.cuurentIndex = index
       },
      //  输入搜索
       searchkey(){

       },
       toBook(){
          this.$router.push({path:"/appontment"})
       }
  },
  components:{
     HeaderTop
  }

 
}
</script>

<style scoped>
.hello{
  background: #ffffff;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.content{
  width: 100%;     
  border-bottom: 0.02rem solid gainsboro;
  padding-bottom: 0.2rem;
}
.head{
  display: flex;
  justify-content: space-between;
  text-align: center;
  font-size: 0.3rem;
  margin: 0 auto;
  padding-top: 0.3rem;
  width: 90%;
        
}
.appinotment{
  padding-top: 0.15rem;
}
.search{
  height: 0.8rem;
  position: relative;
  font-size: 0.22rem;
 
}
.sear{
  height: 0.5rem;
  border-radius: 0.3rem;
  width: 3.4rem;
  border: 0.01rem solid gray;
  padding-left: 0.3rem;
}
.spIcon{
   position: absolute;
   top: 0.14rem;
   right: 0.2rem;
}
.line{
  width: 100%;
  height: 0.7px;
  background-color: gray;
  margin-top: 0.2rem;
}
.line2{
  width: 100%;
  height: 0.7px;
  background-color: gray;
  margin-top: 0.1rem;
}
.cureent{
  background: #000000;
  color: #ffffff;
}
.now{
  background: #ffffff;
  color: #000000;
}
.arealist{
  display: flex;
  justify-content: space-between;
  padding: 0.4rem 0.2rem 0.2rem;
}

.area{
  flex: 1;
  text-align: center;
  height: 0.46rem;
  line-height: 0.48rem;
  border-radius: 0.24rem; 
  border: 0.014rem solid #000000;
  margin: 0 0.1rem;
  font-size: 0.22rem;
}

.pic{
  flex: 0 0 2.2rem;
}
.detail{
  flex: 2;
}
.mall{
  display: flex;
  justify-content: space-between;
  padding-right: 0.1rem;
}
.district{
  overflow: hidden;
  font-size: 0.16rem;
  color: gray;
  margin: 0.2rem 0;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.distance{
    font-size: 0.16rem;
    color: gray;
}
.detailline{
    overflow: auto;
    height: 500px;
    margin-top: 0.2rem;
}

.address{
   display: flex;
   justify-content: center;
   position: relative;
   text-align: center;
   border-bottom: 1px solid gainsboro;
   margin-bottom: 0.14rem;
   padding: 0 0.24rem 0.13rem 0.1rem;
}
.book{
  position: absolute;
  bottom: 0.2rem;
  right: 0.24rem;
  width: 1rem;
  height: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
  background: #000000;
  border-radius: 0.12rem;
  color: #ffffff;
}
.address:last-child{
  border-bottom: none;
}

.bottom{
  height: 1.8rem;
  margin-bottom: 1rem;
}
div::-webkit-scrollbar{
    height: 0;
    width: 0;
    color: none;
    background: none;
}
 
   
		
</style>

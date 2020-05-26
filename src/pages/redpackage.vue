<template>
    <div class="content">
        <HeaderTop :rightContent="selectProject"/>
        <div class="table">

                 <ul class="used">
                     <li v-for="(item,index) in arrList" :key="index" @click="current(index)">
                         <p :class="currentIndex==index?'apple':'apple2'">{{item.unused}}</p>
                     </li>
                   
                 </ul>
        </div>
    </div>
</template>
<script>
import HeaderTop from '../components/header'
export default {
    data(){
        return{
             unused:"未使用(1)",
             outday:"已过期",
             selectProject:"我的红包",
             active:'',
             currentIndex:'',
             arrList:[
                 {
                     unused:"未使用(1)"
                 },
                 {
                      unused:"已过期"
                 }
             ]
        }
    },
    methods:{
         goUnUsed(){

         },
         current(index){
             this.currentIndex = index
         }
    },
    components:{
        HeaderTop
    }
}
</script>
<style scoped>
     .content{
         width: 100%;
         height: 100%;
         background: #f5f5f5;
        
     }
     .table{
         width: 100%;
         height: 0.8rem;
         border: none;
         background: #ffffff;
     }
     .used{
         width: 100%;
         height: 100%;
         display: flex;
         justify-content: center;
         text-align: center;
         align-items: center; 
     }
     .used li{
         flex: 1;
         text-align: center;
          height: 0.8rem;
          line-height: 0.8rem;
     }
     .apple{
          width: 1.2rem;
          color: #333333;
          border-bottom: 0.05rem solid #000000;
          margin: 0 auto;
          font-weight: bold;
     }
     .apple2{
          color: #999999;
          border-bottom: none;
         margin: 0 auto;
     }
    
</style>
<template>
    <div class="project">
         <HeaderTop :rightContent="selectProject"/>
         <div class="pro_hair">
             <ul>
                <li v-for="(item,index) in hairlist" :key="index" class="lihair">
                    <div class="hair">
                       <p class="key">{{item.hair}}</p>
                       <p class="content">{{item.value}}</p>
                       <p class="value"><van-icon name="arrow-down" /></p>
                    </div>
                </li>
             </ul>
             <div class="serve">
                 <div class="todo">0个项目，服务时长-</div>
                 <img src="../../static/images/next_03.png" width="80" height="30" @click="selectDown" />
             </div>
             <div class="model">
                <van-action-sheet v-model="show" :round="false"  :actions="actions" @select="onSelect">
                     <div class="contentItem">内容</div>
                </van-action-sheet>
             </div>
         </div>
    </div>    
</template>
<script>
import next_page from '../../static/images/next_03.png'
import HeaderTop from '../components/header'
export default {
    data(){
        return{
             selectProject:"选择项目",
             show:true,
             actions:[],
             hairlist:[
                 {
                     hair:'理发',
                     value:'圣诞节哦是是是f'
                 },
                   {
                     hair:'理发',
                     value:'烫发'
                 },
                   {
                     hair:'理发',
                     value:'烫发'
                 },
                   {
                     hair:'理发',
                     value:'烫发'
                 },
             ],

        }
    },
    methods:{
        onSelect(item){
            this.show = true;
        },
        selectDown(){
            this.show = true
        }
    },
    components:{
     HeaderTop
  }
}
</script>
<style scoped>
    .pro_hair{
        width: 100%;
        margin-top: 0.3rem;
    }
    .lihair{
        border-bottom: 0.006rem solid #e3e3e3;
    }
    .hair{
        display: flex;
        justify-content: space-between;
        height: 0.7rem;
        line-height: 0.7rem;
        width: 90%;
        margin: 0 auto;
    }
    .key{
         font-size: 0.24rem;
        color: #1d1d1d;
    }
    .content{
        width: 4.5rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: right;
    }
    .value{
        color: #b4b4b5;
    }
    .serve{
        display: flex;
        justify-content: space-between;
        font-size: 0.2rem;
        color: #1d1d1d;
        width: 90%;
        margin: 1rem auto;
    }
    .todo{
        padding-top: 0.2rem;
    }
    .contentItem{
        height: 3rem;
    }
</style>
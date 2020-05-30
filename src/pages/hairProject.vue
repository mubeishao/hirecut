<template>
    <div class="project">
         <HeaderTop :rightContent="selectProject"/>
         <div class="pro_hair">
             <ul>
                <li v-for="(item,index) in hairlist" :key="index" class="lihair" @click="hairShow(item.hair,index)">
                    <div class="hair">
                       <p class="key">{{item.hair}}</p>
                       <p class="content" v-if="currentIndex==index">{{hairString}}</p>
                       <p class="value"><van-icon name="arrow-down"/></p>
                    </div>
                </li>
             </ul>
             <div class="serve">
                 <div class="todo"><span class="countOne">{{count}}</span>个项目，服务时长-<span class="countOne">{{hairServeTime}}</span>*半小时</div>
                 <img src="../../static/images/next_03.png" width="80" height="30" @click="selectDown" />
             </div>
             <div class="model">
                <van-action-sheet v-model="show" :round="false"  :actions="actions" @select="onSelect">
                     <div>
                         <div class="firstline">
                            <div class="divline">
                                 <div class="rong">{{hairServise}}</div>
                                 <img src="../../static/images/next_07.png" width="50" height="25" @click="showImg"/>
                            </div>
                         </div>
                         <ul class="contentItem">   
                             <li v-for="(item,index) in haristyle" :key="index">
                                <div class="haristyle">
                                    <div class="flex">
                                        <p class="itemName">{{item.name}}</p>
                                        <p class="time">服务时长:{{item.serveTime}}*半小时</p>
                                    </div>
                                    <div class="radio">
                                        <!-- <van-radio-group v-model="radio"  @click="clickEvent(item)">
                                                    <van-radio :name="index" checked-color="#f12b44"></van-radio>     
                                        </van-radio-group> -->
                                        <van-checkbox v-model="item.checked" checked-color="#f12b44" @click="change(item.name,item.serveTime,item.checked,index)"></van-checkbox>
                                    </div>
                                </div>
                             </li>
                         </ul>
                     </div>
                </van-action-sheet>
             </div>
         </div>
    </div>    
</template>
<script>
import { Toast } from 'vant';
import next_page from '../../static/images/next_03.png'
import HeaderTop from '../components/header'
export default {
    data(){
        return{
             selectProject:"选择项目",
             show:false,    
             actions:[],
             pickProject:[],
             checked:false,
             currentIndex:989,
             hairName:'',
             hairInfo:[],
             hairString:"",
             hairServise:'理发2',
             hairServise2:"",
             count:0,
             hairServeTime:0,
             hairInfoName:"",
             hairdetail:"",
             showContent:false,
             hairlist:[
                 {
                     hair:'理发1',
                     value:'0'
                 },
                   {
                     hair:'理发2',
                     value:'1'
                 },
                   {
                     hair:'理发3',
                     value:'2'
                 },
                   {
                     hair:'理发4',
                     value:'3'
                 },
             ],
             haristyle:[
                 {
                     name:'渐变理发',
                     serveTime:2,
                     checked:false
                 },
                 {
                     name:'渐变理发1',
                     serveTime:1,
                      checked:false
                 },
                 {
                     name:'渐变理发4',
                     serveTime:3,
                      checked:false
                 },
                 {
                     name:'渐变理发2',
                     serveTime:4,
                      checked:false
                 },
                 {
                     name:'渐变理发3',
                     serveTime:5,
                      checked:false
                 },
                   {
                     name:'渐变理发12',
                     serveTime:1,
                      checked:false
                 },
             ]

        }
    },
    methods:{
        onSelect(item){
            this.show = true;
        },
        selectDown(){
           let vm =this
           if(vm.count==0 || vm.pickProject.length==0){
                Toast('请选择项目');
            }else{
                this.$router.push({path:"/selectproject",query:{count:vm.count,hairString:vm.hairString}})
            }
        },
        selectRadio(val){
            var check = this.haristyle[val].radio;
            this.haristyle[val].radio = this.radio === 1 ? 0 : 1; 
        },
        change(name,serveTime,checked,index){
            let vm =this
            vm.hairName = name
            // vm.hairdetail = vm.hairdetail + name
             if(checked){
                vm.pickProject.push(vm.hairName)
                vm.hairServeTime = vm.hairServeTime + serveTime
             }else{
                 if(vm.pickProject.indexOf(name)>-1){
                    var i = vm.pickProject.indexOf(name)
                    vm.pickProject.splice(i,1) 
                 }
                //  if(vm.hairInfo.indexOf(name)>-1){
                //      var i = vm.hairInfo.indexOf(name)
                //      vm.hairInfo.splice(i,1)   
                      
                //  }
                 vm.hairServeTime = vm.hairServeTime - serveTime
             }
             vm.hairString = vm.pickProject.toString()
             if(vm.hairServise == vm.hairServise2){
                  vm.hairString = vm.pickProject.toString()
             }
           
             vm.count = vm.pickProject.length  

             
        },
        showImg(){
            let vm = this;
            vm.show =false

        },
        hairShow(hair,index){
             let vm = this    
            // vm.hairString = ''       
            //  vm.pickProject = []
             this.hairServise = hair
             this.show = true  
             vm.hairInfoName = hair
             vm.currentIndex = index
             vm.haristyle.map(item=>{
                 item.checked = false
             })
            
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
    .model{
        padding-bottom: 1rem;
    }
    .key{
         font-size: 0.24rem;
        color: #1d1d1d;
    }
    .content{
        width: 4rem;
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
    .countOne{
        color: #f12b44;
    }
    .todo{
        padding-top: 0.2rem;
    }
    .model{
        overflow: hidden;
    }
    .contentItem{
        padding: 0 0.2rem;  
        padding-bottom: 1rem;
    }

    .firstline{
        font-size: 0.24rem;
        color: #9f9f9f;
        border-bottom: 0.01rem solid #e3e3e3;
        padding: 0.1rem;
    }
    .divline{
        display: flex;
        justify-content: space-between;
        padding: 0.1rem 0.1rem;
     
    }
    .rong{
        padding-top: 0.14rem;
    }
    .haristyle{
        display: flex;
        justify-content: space-between;
        padding: 0.1rem 0;
        border-bottom: 0.01rem solid #e3e3e3;
    }
    
    .itemName{
        color: #343434;
        font-size: 0.24rem;
        margin-top: 0.1rem;
    }
    .time{
        color: #9c9c9c;
        font-size: 0.16rem;
        padding: 0.06rem 0;
    }
    .radio{
        padding-top: 0.24rem;
    }
</style>
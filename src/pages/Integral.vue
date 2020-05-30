<template>
    <div class="Integral">
            <HeaderTop/>
            <ul>
                <li class="score" v-for="item in arrlist" :key="item">
                    <div class="first">
                        <div class="get flex">
                            <p>{{item.getscore}}</p>
                            <p>{{item.score}}</p>
                       </div>
                        <div class="project flex">
                            <p>{{item.day}}</p>
                            <p>{{item.project}}</p>
                        </div>
                    </div>
                </li>
            </ul>
    </div>
</template>
<script>
import HeaderTop from '../components/header'
export default {
    data(){
        return{
              arrlist:[
                  {
                      getscore:'获取积分',
                      score:100,
                      day:'2020.4.5',
                      project:'项目消费积分'
                  },
                   {
                      getscore:'获取积分',
                      score:100,
                      day:'2020.4.5',
                      project:'项目消费积分'
                  },
                   {
                      getscore:'获取积分',
                      score:100,
                      day:'2020.4.5',
                      project:'项目消费积分'
                  },
              ]
        }
    },
    components:{
        HeaderTop
    }
}
</script>
<style scoped>
    .Integral{
        width: 100%;
        height: 100%;
    }
    .score{
        width: 100%;
        border-bottom: 0.01rem solid #ececec;
        
    }
    .first{
        padding: 0.16rem 0.32rem;
    }
    .get{
        color: #333333;
        font-size: 0.24rem;
        margin-bottom: 0.14rem;
    }
    .project{
        color: #999999;
        font-size: 0.18rem;
    }
    .flex{
        display: flex;
        justify-content: space-between;
        text-align: center;
        align-items: center;
    }
</style>
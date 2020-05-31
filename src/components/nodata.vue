<template>
    <div class="content">
          <div class="data">
               <img src="../../static/images/nodata.png" width="80" height="80"/>
               <span>{{nodata}}</span>
          </div>
    </div>
</template>
<script>

export default {
    props:{
        nodata:{
            type:String,
            default:"暂无数据"
        }
    },
    data(){
        return{

        }
    }
}
</script>
<style scoped>
    .content{
       
        width: 100%;
        height: 100%;
        
    }
    .data{
        position: fixed;
        display: flex;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        align-items: center;
        top: 30%;
        left: 40%;
    }
    .data span{
        margin-top: 0.2rem;
        font-size: 0.24rem;
        color: #999999;
    }
</style>
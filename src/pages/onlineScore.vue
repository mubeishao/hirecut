<template>
    <div class="mall">
          <HeaderTop :rightContent="selectProject"/>
          <div class="content">
                <div class="now">当前积分</div>
                <div class="score">1100</div>
                <img src="../../static/images/mall1_03.png" width="110" height="30" />
          </div>
    </div>
</template>
<script>
import HeaderTop from '../components/header'
export default {
    data(){
        return{
            selectProject:"线上积分"
        }
    },
     components:{
        HeaderTop
    }
}
</script>
<style scoped>
    .content{
        display: flex;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        align-items: center;
        width: 100%;
        height: 2.6rem;
        background: url('../../static/images/mall2_02.png') no-repeat;
        background-size: 100% 100%;
    }
    .content img{
        display: block;
    }
    .now{
        color: #d3d3d3;
        font-size: 0.22rem;
    }
    .score{
        color: #ffffff;
        font-size: 0.44rem;
        margin: 0.2rem 0;
    }

</style>
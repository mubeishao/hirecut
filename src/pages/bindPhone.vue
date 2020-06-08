<template>
    <div class="content">
        <HeaderTop :rightContent="selectProject"/>
        <div class="bind"></div>
        <div class="pic"></div>
        <div class="number">请输入开卡时登记的手机号</div>
        <input type="tel" class="telNum" maxlength="11" />
        <img src="../../static/images/phon_05.png" class="phone" />  
    </div>
</template>
<script>
import HeaderTop from '../components/header'
export default {
    data(){
        return{
            selectProject:"绑定手机"
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
        background: #f1f1f1;
    }
    .bind{
        width: 100%;
        height: 3rem;
        background: url('../../static/images/bind_01.png') no-repeat;
        background-size: 100% 100%;
        z-index: 1;
        margin-top: -0.82rem;
    }
    .pic{
        width: 100%;
        height: 0.3rem;
        background: url('../../static/images/bind1_02.png') no-repeat;
        background-size: 100% 100%;
        margin-top: 0.3rem;
        margin-bottom: 0.5rem;
    }
    .number{
        width: 80%;
        margin: 0.3rem auto;
        color: #909090;
        font-size: 0.22rem;
        padding-left: 0.6rem;


    }
    .telNum{
        display: block;
        width: 82%;
        margin: 0 auto;
        height: 0.6rem;
        border-radius: 0.4rem;
        padding-left: 0.3rem;

    }
    .phone{
        display: block;
        width: 85%;
        height: 0.7rem;
        margin: 0.4rem auto;
        
    }
</style>
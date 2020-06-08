<template>
     <div class="container">
         <HeaderTop :rightContent="selectProject"/>
         <van-field
                        v-model="message"
                        rows="6"
                        autosize
                        type="textarea"
                        
                        placeholder="输入评论内容"
                        show-word-limit
                        />
            <div class="reatil" @click="publish">评 论</div>
    </div>
</template>
<script>
import { Toast } from 'vant';
import HeaderTop from '../components/header'
export default {
    data(){
        return{
            message:"",
            selectProject:"评论"
        }
    },
    methods:{
         publish(){
            if(this.message!=""){
                Toast('发表成功');
                this.message = ''
            }  
       }
    },
    components:{
        HeaderTop
    },
}
</script>
<style scoped>
    .container{
        width: 100%;
        height: 100%;
        background: #f4f4f4;
    }
    .reatil{
        width: 90%;
        margin: 0 auto;
        text-align: center;
        height: 0.6rem;
        line-height: 0.6rem;
        font-size: 0.26rem;
        background: url('../../static/images/retail_de_03.png') no-repeat;
        background-size: 100% 100%;
        color: #ffffff;
        font-weight: bold;
        margin-top: 0.4rem;
    }
</style>
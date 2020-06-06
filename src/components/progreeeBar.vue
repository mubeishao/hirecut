<template>
     <div class="content" >
        <div class="img" :style="images">{{value}}</div>
        <div class="progress" >
            <div  class="wrap" :style="imaWarp"></div>       
        </div>
        <div class="ball" :style="ballcode"></div>
    </div>
</template>
<script>
export default {
     props: {
        value: {
                type: Number,
                default: 0,
        },
        max:{
            type:Number,
            default:10,
        }
     },
    data(){
        return{
                pValue: this.value,
                pMax: this.max,
                pMin: 0,
                width:0,
                left: {
                    'width': this.leftvalue,
                    'background': "#ffffff",
                    'height': '4px',
                },
                ball:{
                    'height': '4px',
                    'width': '8px',
                    'borderRadius':'8px',
                    'background':'red',
                    'marginLeft':this.leftvalue
                },
                images:{
                       "position":"absolute",
                       'left': 0,
                       'top': -30+'px'  
                },
                imaWarp:{
                        'width': this.max+'px', 
                },
                ballcode:{
                       "position":"absolute",
                        'top': -4.4+'px',
                        'left': 0,
                }

        }
    },
      watch: {
            max(cur, old){
                this.pMax = cur;
                console.log(this.pMax)
            },
    
           
          
    },


 

    mounted() {
           console.log(this.pValue)
         // 初始百分比
            this.width = (this.pValue - this.pMin) / (this.pMax - this.pMin) * 100 +'%';
            var img =  (this.pValue - this.pMin) / (this.pMax - this.pMin) * 100-2 +'%'
            this.images.left = img
            this.imaWarp.width = this.width
            this.ballcode.left = this.width
            

    }
}
</script>
<style scoped>
    .content{
        position: relative;
        height: 0;
        margin-top: 0.5rem;
    }
    .progress{ 
        width: 100%;
        background:#4a4a4a;
        height: 4px;
        line-height: 4px;
    }
    .wrap{
  
         background:#ffffff;
         height: 100%;
    }
    .ball{
        width: 16px;
        height: 16px;
        border-radius: 8px;
        background: #ffffff;
       
    }
    .img{

        width: 0.5rem;
        height: 0.35rem;
        background: url('../../static/images/mem_07.png') no-repeat;
        background-size: 100% 100%;
        text-align: center;
        font-size: 0.2rem;
        color: #ffffff;
        padding-top: 0.08rem;
        

    }

</style>
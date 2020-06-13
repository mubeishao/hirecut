import axios from 'axios'
import qs from 'qs'
import { Toast } from 'vant'


let timeout = 20000
let isRefreshToken=false;

export const service = axios.create({
    baseURL: prod.env.CONFIG.BASE_URL, // api的base_url
    timeout// 请求超时时间
});
/****** request拦截器==>对请求参数做处理 ******/
service.interceptors.request.use(config => {
    if (!localStorage.getItem('token')) {
       
        return;
    }
    Toast.loading({
        message: '加载中...',
        forbidClick: true,
        duration:true
    });
    config.headers = {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json',
         
    };  
    config.method === 'post' ? qs.stringify({ ...config.data }) : (config.params = { ...config.params });
    return config 
},err=>{

    Promise.reject(error);
})

/****** respone拦截器==>对响应做处理 ******/
service.interceptors.response.use(
    response => {
      //成功请求到数据
      Toast.clear();
      if (response.data.result === 1) {
        return response.data;
      } else if (response.data.result === 0) {
        return response.data;
      }
    },
    error => {
      //响应错误处理
      Promise.reject(error);
    }
  );
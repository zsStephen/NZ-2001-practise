//进行axios二次封装，使用请求与响应拦截器
import axios from "axios"
import type { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse } from 'axios'
//引入失败样式给axios失败回调
import { ElMessage } from "element-plus"
//第一步：利用axios对象的create方法，创建axios实例（其他的配置：基础路径，超时的时间）
const request:AxiosInstance  = axios.create({
    //基础路径
    baseURL:import.meta.env.VITE_APP_BASE_API,  //基础路径会携带/api
    timeout:5000 //超时时间设置
})

//第二步：request实例添加请求与响应拦截器
request.interceptors.request.use(
    //config配置对象，headers属性请求头，给服务器端携带公共参数
    //返回配置对象
      (config: InternalAxiosRequestConfig) => {
    // 例：从 localStorage 取 token 加到请求头
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)
//第三步，响应拦截器
request.interceptors.response.use(
    (response: AxiosResponse) => {
    const res = response.data
    // 根据后端约定的 code 判断是否成功（比如 200 代表成功）
    if (res.code !== 200) {
      return Promise.reject(new Error(res.message || '请求失败'))
    }
    // 直接返回业务数据，调用方拿到的就是 data 本身
    return res.data
  },
  (error) => {
    // 网络错误、超时等统一处理（可配合 element-plus 弹提示）
    
    let message = ""
    let status = error.response.status
    if(error.response){
         switch(status){
        case 401:
            message= "TOKEN过期"
            break;
        case 403:
            message= "无权访问"
            break;
        case 404:
            message= "请求地址错误"
            break;
        case 500:
            message= "服务器出现问题"
            break;
        default:
            message = "网络出现问题"   
            break; 
        }
    }else{
        message = "网络出现问题"
    }

    //提示错误信息
    ElMessage({
        type:"error",
        message
    })
    return Promise.reject(error)
  }
)

export default request;
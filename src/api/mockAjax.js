import axios from 'axios'
import nprogress from 'nprogress'
import "nprogress/nprogress.css"
const request = axios.create({
  baseURL:'/mock',
  timeout:5000
})
request.interceptors.request.use((config)=>{
  nprogress.start()
  return config
})
request.interceptors.response.use((res)=>{
  nprogress.done()
  return res.data
},(error)=>{
  return Promise.reject(alert("服务器响应数据失败"))
})
export default request

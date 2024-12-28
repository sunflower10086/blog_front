import axios from 'axios'
import { themeConfig } from '../assets/themeConfig.mjs'

// 创建axios实例
const service = axios.create({
  baseURL: themeConfig.api.url,
  timeout: 10000,
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 在这里可以添加请求前的处理，比如添加token等
    return config
  },
  error => {
    console.error('请求错误:', error)
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    // 这里可以根据后端返回的状态码做统一的错误处理
    return res
  },
  error => {
    console.error('响应错误:', error)
    return Promise.reject(error)
  }
)

export default service

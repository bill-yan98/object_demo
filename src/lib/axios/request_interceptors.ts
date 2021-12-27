import { fetch } from './index'
import { AxiosRequestConfig, AxiosRequestHeaders } from 'axios'

fetch.interceptors.request.use((config: AxiosRequestConfig) => {
  // 在发送请求之前添加token
  const token = localStorage.getItem('demo_token') ? localStorage.getItem('demo_token') : '';
  (config.headers as AxiosRequestHeaders).Authorization = `Bearer ${token}`
  return config
})

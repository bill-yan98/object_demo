import { fetch } from './index'
import { AxiosResponse } from 'axios'
import { Modal, Message } from 'view-design'
import router from '@/router'

fetch.interceptors.response.use((response: AxiosResponse) => {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  return response
}, (error) => {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  if (error.response) {
    const { data, status } = error.response
    localStorage.setItem('demo_errorCode', status)
    if (status === 401) {
      (Modal as any).confirm({
        title: '提示',
        content: data.message,
        onOk: () => {
          localStorage.clear()
          router.push('/login')
        },
        onCancel: () => {
          console.log(1)
        }
      })
    } else if (status === 403) {
      localStorage.setItem('demo_errorCode', status)
      router.push('/error')
    } else {
      (Message as any).error({
        background: true,
        content: data.message,
        closable: true
      })
    }
  }
  return error
})

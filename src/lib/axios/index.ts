import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

const BASE_URL =  process.env.VUE_APP_BASE_URL

interface FetchInstance {
    <T>(config: AxiosRequestConfig) : Promise<T>
}
export const fetch: AxiosInstance & FetchInstance =  axios.create({
    baseURL: BASE_URL
})

export interface Response<T> {
    error_code: number;
    message: string;
    data: T;
}

export interface ResponseList<T> extends Response<T>{
    total: number;
    pageSize: number;
    pageNum: number;
}

export interface Page {
    total: number;
    pageSize: number;
    pageNum: number;
}
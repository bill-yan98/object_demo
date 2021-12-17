import { fetch, Response } from '@/lib/axios'

export interface UserInfoReq {
    time: string;
    name: string;
}

export interface UserInfoRes {
    username: string;
    ip: string;
    port: string;
}

export const getUserInfo = (data: UserInfoReq) => fetch<Response<UserInfoRes>>({
    url: '/home/userInfo',
    method: 'post',
    data,
})
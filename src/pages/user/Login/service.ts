import { request  } from "@umijs/max";

/** 登录接口 */
export async function login(body:API.LoginParams):Promise<any> {
    return request<any>('/user/login', {
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data:body,
    })
}




// 获取用户信息  mock

import { RequestData } from "@ant-design/pro-table/es/typing";
import { UserColumnItem } from "./index.d";

export async function fetchUserList(params: {
    pageSize: number;
    current: number;
  },
) {
    return new Promise(resolve=>resolve({
        data: [
            {
                userId:1,
                userName:'1',
                loginName:'1'
            },
            {
                userId:2,
                userName:'2',
                loginName:'2'
            }
        ],
        success: true,
        total: 111,
    })) as Promise<Partial<RequestData<UserColumnItem>>>;
}
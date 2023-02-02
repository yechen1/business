// 将联合类型解包， 便于编辑器提示
type Simplify<T> = Pick<T, keyof T>


export type UserQuery = {}

export type UserItem = {
    userId: number;
    userName: string;
    loginName: string;
}




export type UserColumnItem = Simplify<UserQuery & UserItem>
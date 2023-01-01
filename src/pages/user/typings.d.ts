declare namespace API {
    type PermissionItem = {
        permissionId:number,
        permissionKey: string,
        permissionName: string,
        permissionType: string,
        permissionTypeName: string,
        remarks:string | null,
    }
    type UserListItem = {
        buId:number,   
    }
    type LoginParams = {
        loginName?: string,
        password?: string,
    }
    type AccountData = {
        loginName: string,
        password: string,
        isRemeberPass: boolean,
    }
}
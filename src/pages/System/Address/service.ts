/** 获取用户地址列表 分页*/

export async function getAddressList(): Promise<any> {
  // body: any,
  // options?: Record<string,any>,
  return new Promise((relsove) => {
    relsove({
      data: [
        {
          id: '1',
          address_user: 'chenye',
          phone: '2',
          address_province: '2',
          address_city: '2',
          address_strict: '',
          address_detail: '',
          is_default: 0,
          user_name: '',
          is_delete: false,
        },
        {
          id: '2',
          address_user: 'chenye',
          phone: '',
          address_province: '',
          address_city: '',
          address_strict: '',
          address_detail: '',
          is_default: 0,
          user_name: '',
          is_delete: false,
        },
      ],
    });
  });
}

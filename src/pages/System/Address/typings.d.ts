declare namespace API {
  type AddressTableColumnsProps = {
    id: string;
    address_user: string;
    phone: string;
    // address_province_id: string,
    address_province: string;
    address_city: string;
    address_strict: string;
    address_detail: string;
    is_default: number;
    user_name: string; //账号名称；
    is_delete: boolean; // 是否注销
  };
}

declare namespace AddressManage {
  type AddFormProps = {
    name?: string;
  };
  type EditModalForm = {
    address_user: string;
    phone: string;
    address_province: string;
    address_city: string;
    address_strict: string;
    address_detail: string;
    is_default: number;
    user_name: string; //账号名称；
    is_delete: boolean; // 是否注销
  };
}

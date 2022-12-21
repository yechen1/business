import Uitl from '@/utils/Util';
import { PlusOutlined } from '@ant-design/icons';
import { ProColumns } from '@ant-design/pro-components';
import { Button } from 'antd';

// 行初始数据
export const ADDRESS_TABLE_LIST_ITEM: API.AddressTableColumnsProps = {
  id: '',
  address_user: '',
  phone: '',
  address_province: '',
  address_city: '',
  address_strict: '',
  address_detail: '',
  is_default: 0,
  user_name: '',
  is_delete: false,
};

// 表格列头
export const getColumns = (): ProColumns<API.AddressTableColumnsProps>[] => {
  return [
    {
      title: '收件人',
      dataIndex: 'address_user',
      ellipsis: true,
    },
    {
      title: '电话',
      dataIndex: 'phone',
      ellipsis: true,
    },
    {
      title: '省',
      dataIndex: 'address_province',
      ellipsis: true,
    },
    {
      title: '市',
      dataIndex: 'address_city',
      ellipsis: true,
    },
    {
      title: '区',
      dataIndex: 'address_strict',
      ellipsis: true,
    },
    {
      title: '详情地址',
      dataIndex: 'address_detail',
      ellipsis: true,
    },
    {
      title: '是否默认地址',
      dataIndex: 'is_default',
      ellipsis: true,
    },
    {
      title: '账号名称',
      dataIndex: 'user_name',
      ellipsis: true,
    },
    {
      title: '是否注销',
      dataIndex: 'is_delete',
      ellipsis: true,
    },
  ];
};

// 表格自定义工具栏
export const getToolBarRender = (actionTable: any) => {
  return () => {
    return [
      <Button
        key="button"
        type="primary"
        icon={<PlusOutlined />}
        onClick={() =>
          actionTable.handleInsertRow(Uitl.deepClone(ADDRESS_TABLE_LIST_ITEM))
        }
      >
        新增
      </Button>,
    ];
  };
};

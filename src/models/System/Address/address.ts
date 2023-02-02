import { useState, useRef, useCallback } from 'react';
import type { ActionType } from '@ant-design/pro-components';
import { notification } from 'antd';
import { OPERATION_TYPE } from '@/utils/common.constant';
import Util from '@/utils/Util';
import { ADDRESS_TABLE_LIST_ITEM } from '@/pages/System/Address/constant';

const { INSERT } = OPERATION_TYPE;

export default () => {
  // 操作类型 insert 新增
  const [handleType, setHandleType] = useState<string>(INSERT);

  // 弹窗开关
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // 弹窗的其他原因备注框是否显示
  const [isShow, setIsShow] = useState<boolean>(false);

  // 选中的行数据
  const [rowData, setRowData] = useState<API.AddressTableColumnsProps>(
    Util.deepClone(ADDRESS_TABLE_LIST_ITEM),
  );

  // 表格ref
  const tableRef = useRef<ActionType>();

  // 弹窗初始化
  const initModal = useCallback(() => {
    setIsOpen(false);
    setIsShow(false);
    setRowData(Util.deepClone(ADDRESS_TABLE_LIST_ITEM));
  }, []);

  // 根据选项变化控制其他原因备注框
  const optionChange = useCallback((failReason: string[]) => {
    setIsShow(failReason.indexOf('8') !== -1);
  }, []);

  // 弹窗 - 提交表单
  const submitModal = useCallback(async (formData: any) => {
    const {} = formData;
    const message = `成功`;
    notification.success({ message });
    tableRef.current?.reload();
    setIsOpen(false);
  }, []);

  // 操作 新增
  const handleInsertRow = useCallback(
    (record: API.AddressTableColumnsProps) => {
      const { ...newRecord } = record;
      setIsOpen(true);
      setHandleType(INSERT);
      setRowData(newRecord);
    },
    [],
  );

  const state = {
    handleType,
    isOpen,
    isShow,
    rowData,
    tableRef,
  };
  const action = {
    initModal,
    optionChange,
    handleInsertRow,
    submitModal,
  };
  return { state, action };
};

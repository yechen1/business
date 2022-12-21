import { useModel } from '@umijs/max';
import ProForm from '@ant-design/pro-form';
import type { ProFormInstance } from '@ant-design/pro-form';
import { Modal } from 'antd';
import React, { useRef } from 'react';

const AddModal: React.FC<AddressManage.AddFormProps> = (props) => {
  const { name } = props;
  console.log(name, 'name');
  const { state: stateTable, action: actionTable } = useModel(
    'System.Address.address',
  );
  const { handleType: operationType, isOpen, rowData, isShow } = stateTable;
  // 表单ref
  const formRef = useRef<ProFormInstance<AddressManage.EditModalForm>>();
  return (
    <Modal
      width={750}
      destroyOnClose
      title="新增地址管理记录"
      open={isOpen}
      onCancel={actionTable.initModal}
      onOk={() => formRef.current?.submit()}
    >
      <ProForm
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
        formRef={formRef}
        layout="horizontal"
        onFinish={(formData: any) =>
          actionTable.submitModal({ ...formData, operationType })
        }
        submitter={false}
      >
        <div>
          <ProForm.Item
            name="address_user"
            label="收件人"
            rules={[{ required: true }]}
          >
            <input />
          </ProForm.Item>
        </div>
      </ProForm>
    </Modal>
  );
};
export default AddModal;

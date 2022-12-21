import { PageContainer, ProTable } from '@ant-design/pro-components';
import { useModel } from 'umi';
import React from 'react';
import AddModal from './component/AddModal';
import { getColumns, getToolBarRender } from './constant';
import styles from './index.less';
import { getAddressList } from './service';

const Address: React.FC = () => {
  // model - pro 表格相关
  const { state: stateTable, action: actionTable } = useModel(
    'System.Address.address',
  );
  getAddressList().then((d) => {
    console.log(d);
  });
  return (
    <PageContainer>
      {/*pro 表格*/}
      <ProTable
        headerTitle="地址管理"
        actionRef={stateTable.tableRef}
        rowKey="id"
        columns={getColumns()}
        request={getAddressList}
        toolBarRender={getToolBarRender(actionTable)}
      />
      <AddModal />
    </PageContainer>
  );
};

export default Address;

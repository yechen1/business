import ZPageContainer from '@/components/ZpageContainer';
import ProTable, { ProColumns } from '@ant-design/pro-table';
import { PlusOutlined } from '@ant-design/icons'
import { Button } from 'antd';
import React from 'react';
import type { UserColumnItem } from './index.d';
import { fetchUserList } from './service';
import { useModel } from '@umijs/max';



const UserManage: React.FC = () => {
    const { state: stateTable, action: actionTable } = useModel('System.User.user');
    const columns: ProColumns<UserColumnItem>[] = [
        { title:'用户ID', dataIndex: 'userId',width: 80,hideInSearch:true, fixed: 'left' },
        { title:'用户名', dataIndex: 'userName',width: 80, fixed: 'left' },
        { title:'登录名', dataIndex: 'loginName',hideInSearch: true },

    ];

    return (
        <ZPageContainer
            header={{
                title: '',
                breadcrumb: {}
            }}
        >
            <ProTable
                // scroll={{x:1300}}
                columns={columns}
                rowKey='userId'
                request={fetchUserList}
                toolBarRender={()=>[
                    <Button
                        key = 'button'
                        icon = { <PlusOutlined />}
                        type = 'primary'
                        
                    >
                        新建
                    </Button>
                ]}
            >

            </ProTable>
        </ZPageContainer>
    );
}


export default UserManage;
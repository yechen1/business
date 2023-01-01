import { Button, Result } from 'antd';
import React from 'react';
import { history } from '@umijs/max';

const Error404: React.FC = () => (
    <Result
        status="404"
        title="404"
        subTitle="页面不存在"
        extra={
            <Button type='primary' onClick={()=>history.push('/')}>
                返回首页
            </Button>
        }
    />
);
export default Error404;
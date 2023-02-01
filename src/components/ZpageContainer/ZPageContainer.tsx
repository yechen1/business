
import React from 'react'
import { PageContainer } from '@ant-design/pro-layout';
import type { PageContainerProps } from '@ant-design/pro-layout';

const ZPageContainer: React.FC<PageContainerProps> = (props) => {
    const { children, ...restProps } = props;
    return (
        <PageContainer
            header={{
                breadcrumb: {},
            }}
            {...restProps}
        >
            {children}
        </PageContainer>
    );
} 


export default ZPageContainer;

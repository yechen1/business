import { PageContainer } from '@ant-design/pro-layout';
import type { PageContainerProps } from '@ant-design/pro-layout';
import React from 'react';

const CommonProPageContainer: React.FC<PageContainerProps> = (props) => {
  const { children, ...restProps } = props;

  return <PageContainer {...restProps}>{children}</PageContainer>;
};

export default CommonProPageContainer;

import React from 'react';
import { useModel } from '@umijs/max';

const GlobalHeaderRight: React.FC = () => {
  const { initialState } = useModel('@@initialState');

  return <div>{initialState?.name || ''}</div>;
};

export default GlobalHeaderRight;

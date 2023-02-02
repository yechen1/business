import type { MenuDataItem } from '@ant-design/pro-layout';

const routes: MenuDataItem[] = [
  {
    name: '系统设置',
    path: '/System',

    routes: [
      // 用户管理配置
      {
        name: '用户配置',
        path: '/System/User',
        component: './System/User',
      },
      // 地址配置
      {
        name: '地址配置',
        path: '/System/Address',
        component: './System/Address',
      },
      // 数据字典配置
      {
        name: '字典配置',
        path: '/System/Dictionary',
        component: './System/Dictionary',
      },
    ] as any,
  },
];

export default routes;

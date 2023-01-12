import type { MenuDataItem } from '@ant-design/pro-layout';

const routes: MenuDataItem[] = [
  {
    name: '系统设置',
    path: '/System',

    routes: [
      // 地址配置
      {
        name: '地址配置',
        path: '/System/Address',
        component: './System/Address',
      },
    ],
  },
];

export default routes;
// import GlobalHeaderRight  from '@/components/RightUserContent'
import type { RunTimeLayoutConfig } from '@umijs/max';
// 运行时配置

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://next.umijs.org/docs/api/runtime-config#getinitialstate
console.log('运行时配置');

// 设置全局的model state 通过 useModel('@@initalState')
export async function getInitialState(): Promise<{ name: string }> {
  return { name: 'chenye' };
}
console.log('app.ts');

// ProLayout 支持的api https://procomponents.ant.design/components/layout
export const layout: RunTimeLayoutConfig = () => {
  return {
    title: 'STL中台数据平台',
  };
};

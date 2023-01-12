import type { RunTimeLayoutConfig } from '@umijs/max';
import { history  } from '@umijs/max';
import type { Settings as LayoutSettings } from '@ant-design/pro-layout' 
import Footer from '@/components/Footer';
import Logo from '@/components/Logo';
import GlobalHeaderRight  from '@/components/RightUserContent'
import { USER } from './constants/store';
// 运行时配置

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://next.umijs.org/docs/api/runtime-config#getinitialstate
console.log('运行时配置');




// 项目初始化进入， 设置全局的model state 通过 useModel('@@initalState')
export async function getInitialState(): Promise<{ 
  name: string
  settings?: Partial<LayoutSettings>;
}> {
  console.log("getInitialState()")
  const { location: { pathname } } = history;
  const currentUserStr = localStorage.getItem(USER);
  const currentUser = currentUserStr ? JSON.parse(currentUserStr) : '游客';

  // 菜单权限获取
  console.log("菜单权限获取");

  return { name: currentUser,settings: {} };
}
console.log('app.ts');

// ProLayout 支持的api https://procomponents.ant.design/components/layout
export const layout: RunTimeLayoutConfig = ({initialState}) => {
  return {
    title: 'STL中台数据平台',
    logo: Logo as any,
    footerRender: () => <Footer />,
    // pageTitleRender:()=>'pageTitleRender',
    rightContentRender: GlobalHeaderRight as any,    // 右侧

    onPageChange: () => {
      const { location: { pathname = ''} } = history;
      // 如果未登录，且当前非登录页面，重定向到login
      if((!initialState || initialState?.currentUser==='游客') && !pathname.includes('/user/login')){
        console.log('pathname',pathname);
        // 增加redireact跳转参数，避免登录后展示首页
        history.push(
          '/user/login' + `?redirect=${encodeURIComponent(pathname ?? '' + history.location.search ?? '')}`
        )
      }
    },

    menuHeaderRender: undefined,  // 左上角菜单头部
    // 自定义403
    unAccessible: <div>unAccessible</div>,
    ...initialState?.settings
  };
};


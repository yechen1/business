import routes from '../src/routes';

export default [
  ...routes,
  {
    path: '/',
    redirect: '/home',
  },
  {
    name: '首页',
    path: '/home',
    component: './Home',
  },
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          // 登录
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          }
        ]
      }
    ]
  },
  {
    path:'*',
    component: './Error404'
  }
];

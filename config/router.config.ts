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
];

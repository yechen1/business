import routerConfig from './router.config';

console.log('umi config start');
export default {
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: 'umi 浏览器标题',
  },
  favicons: ['/assets/favicon.ico'],
  hash: true,
  routes: routerConfig,
  npmClient: 'yarn',
};

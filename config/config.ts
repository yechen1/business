// https://umijs.org/config/
import { defineConfig } from '@umijs/max';

import routerConfig from './router.config';
// import plugin from "./plugin";

console.log('umi config start', `${__dirname}/config.ts`);
export default defineConfig({
  publicPath: '/',
  hash: true,
  antd: {},
  layout: {
    title: 'umi 浏览器标题',
  },

  access: {},
  model: {},
  initialState: {},
  request: {},

  favicons: ['/assets/favicon.ico'],
  routes: routerConfig,
  plugins: [`${__dirname}/plugin.ts`], // umi 插件配置
  npmClient: 'yarn',
  dva: {},
});

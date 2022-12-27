import { IApi } from 'umi';

console.log("plugin start1")
// 插件配置
export default (api: IApi) => {
  // console.log(api.config,"api.config.publicPath",api)
  api.modifyHTML(($) => {
    return $;
  });
  // api.addHTMLLinks(() => [{ rel: 'icon', href: `${api.config.publicPath}/favicon.ico`, type: 'image/x-icon' }]);
};

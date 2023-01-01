import { IApi } from 'umi';

console.log("plugin start1")
// 插件配置
export default (api: IApi) => {
  // console.log(api.config,"api.config.publicPath",api)
  api.modifyHTML(($) => {
    return $;
  });
  api.addHTMLStyles(() => {
    return [
      {
        content: `html, body, #root { height: 100%; margin: 0; padding: 0; color:red; }`,
      },
    ];
  });
};

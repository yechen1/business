import { IApi } from 'umi';

// 插件配置
export default (api: IApi) => {
  api.modifyHTML(($) => {
    $('head').append([`<script src=''></script>`, `<meta />`]);
    return $;
  });
};

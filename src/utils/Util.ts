// 深克隆
export const deepClone = (target: Record<string | number, any>) =>
  JSON.parse(JSON.stringify(target));

export default {
  deepClone,
};

/*
 * @Description: 验证方法集合
 * @Author: qingyang
 * @Date: 2021-01-11 14:42:12
 * @LastEditors: qingyang
 * @LastEditTime: 2021-01-11 16:08:24
 */
/**
 * 验证整数
 */
const digits = value => {
  return /^\d+$/.test(value);
};

export default {
  digits
};

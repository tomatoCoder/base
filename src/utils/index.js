/*
 * @Description:
 * @Author: qingyang
 * @Date: 2021-01-11 16:00:29
 * @LastEditors: qingyang
 * @LastEditTime: 2021-01-11 16:20:15
 */

import test from "./test"; // 验证模块
import random from "./random";
const $u = {
  test,
  random
};

const install = Vue => {
  Vue.prototype.$u = $u;
};
export default {
  install
};

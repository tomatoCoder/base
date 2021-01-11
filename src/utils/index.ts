/*
 * @Description:
 * @Author: qingyang
 * @Date: 2021-01-11 16:00:29
 * @LastEditors: qingyang
 * @LastEditTime: 2021-01-11 18:03:59
 */

import test from "./test"; // 验证模块
import random from "./random";
import { timeFormat } from './timeFormat'

const $u = {
  test,
  random,
  timeFormat
};

const install = (Vue: any) => {
  Vue.prototype.$u = $u;
};
declare module "vue/types/vue" {
  interface Vue {
    $u: any;
  }
}
export default {
  install
};

/*
 * @Description: 生成随机数
 * @Author: qingyang
 * @Date: 2021-01-11 16:18:52
 * @LastEditors: qingyang
 * @LastEditTime: 2021-01-11 16:19:07
 */
function random(min, max) {
  if (min >= 0 && max > 0 && max >= min) {
    const gab = max - min + 1;
    return Math.floor(Math.random() * gab + min);
  } else {
    return 0;
  }
}

export default random;

/*
 * @Description:
 * @Author: qingyang
 * @Date: 2021-01-11 10:51:17
 * @LastEditors: qingyang
 * @LastEditTime: 2021-01-12 11:32:13
 */
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/styles/variable.scss";'
      }
    }
  },
  productionSourceMap: process.env === 'production' ? false : true
};

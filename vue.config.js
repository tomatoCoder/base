/*
 * @Description:
 * @Author: qingyang
 * @Date: 2021-01-11 10:51:17
 * @LastEditors: qingyang
 * @LastEditTime: 2021-01-11 11:10:14
 */
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/styles/variable.scss";'
      }
    }
  },
  productionSourceMap: process.env === "production" ? false : true
};

/*
 * @Description: 
 * @Author: qingyang
 * @Date: 2021-01-07 15:32:56
 * @LastEditors: qingyang
 * @LastEditTime: 2021-01-11 10:56:23
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/styles/index.scss';
Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

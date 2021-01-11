<!--
 * @Description: 
 * @Author: qingyang
 * @Date: 2021-01-07 15:32:56
 * @LastEditors: qingyang
 * @LastEditTime: 2021-01-11 11:25:51
-->
<template>
  <div class="container">
    {{ test }}
    <el-button>123</el-button>
  </div>
</template>
<script lang="ts">
interface IsData {
  chart: null | string;
}
import Vue from "vue";
export default Vue.extend({
  data(): IsData {
    return {
      chart: null
    };
  },
  created() {
    this.chart = "";
    const test = "tet";
    console.log(test);
    // TODO
  },
  computed: {
    test() {
      return "123123";
    }
  },
  methods: {}
});
</script>
<style lang="scss" scoped>
.container {
  background: $themeColor;
}
</style>

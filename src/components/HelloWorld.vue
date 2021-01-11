<!--
 * @Description: 
 * @Author: qingyang
 * @Date: 2021-01-07 15:32:56
 * @LastEditors: qingyang
 * @LastEditTime: 2021-01-11 16:23:28
-->
<template>
  <div class="container">
    1123
    <el-button type="primary">1231467813</el-button>
    <i class="iconfont">&#xe61b;</i>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      chart: null
    };
  },
  created() {
    this.$message("1231");
    const num = this.$u.random(100, 105);
    alert(num);
    const test = "1.1";
    console.log(test);
    // if (this.$u.test.digits(test)) {
    //   alert(1);
    // } else {
    //   alert(2);
    // }
  },
  computed: {},
  methods: {}
});
</script>
<style lang="scss" scoped></style>

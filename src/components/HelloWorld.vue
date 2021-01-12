<!--
 * @Description: 
 * @Author: qingyang
 * @Date: 2021-01-07 15:32:56
 * @LastEditors: qingyang
 * @LastEditTime: 2021-01-12 11:31:42
-->
<template>
  <div class="container">
    <el-button type="primary" @click="createRandom">生成随机数</el-button>
    <i class="iconfont">&#xe61b;</i>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data() {
    return {
      chart: null
    };
  },
  created() {
    this.$message('1231');
    const dataa = '1313';
    const a = 1,
      b = 2,
      c = 3;
    const foo = a + b * c;
    const test = '123131';
    console.log(test);
    if (this.$u.test.digits(test)) {
      console.log('是整数');
    } else {
      console.log('不是整数');
    }
  },
  computed: {},
  methods: {
    createRandom() {
      const num = this.$u.random(100, 105);
      const now = this.$u.timeFormat();
      alert(num);
    }
  }
});
</script>
<style lang="scss" scoped>
.container {
  color: 'red';
}
</style>

<!--
 * @Description: 
 * @Author: qingyang
 * @Date: 2021-01-07 15:32:56
 * @LastEditors: qingyang
 * @LastEditTime: 2021-04-02 17:32:37
-->
<template>
  <div class="container">
    {{animate}}
    <div class="animate__animated animate__bounce animate__delay-2s">Example</div>

    <table >
      <div class="list">
      <tbody >
      <tr class=" animate__slow" :class="setAnimate? '': ''">
        <td>January</td>
        <td>$100</td>
      </tr>
      <tr class="animate__animated" :class="[{animate__fadeInBottomRight:animate==true, hei: isLenght===true},classObj[index]]"  v-for="(item,index) in  list " :key="index" >
        <td>item {{item }}</td>
        <td>$100</td>
      </tr>
      </tbody>
      </div>
   
     
    </table>
    <div class="list">
      <div class="cc rowup">
        <div class="item" v-for="(item, index) in list " :key="index">{{item}}</div>
      </div>
    </div>
    <!-- <el-button type="primary" @click="createRandom">生成随机数</el-button> -->
    <i class="iconfont">&#xe61b;</i>
  </div>
</template>
<script lang="ts">
import { timeTest, promiseTest, asyncTest } from '@/utils/asyncTest';
import Vue from 'vue';
export default Vue.extend({
  data() {
    return {
      chart: null,
      list:[1,2,3,4,5,6],
      index: 6,
      setAnimate: true,
      timer: '',
      animate: false,
       tableData: [],
       endId: '',
      isLenght: false,
      classObj: ['animate__delay-0s','animate__delay-1s','animate__delay-2s','animate__delay-3s','animate__delay-4s']
    };
  },
  created() {
    this.$message('1231');
    const dataa = '23131';
    const a = 1,
      b = 2,
      c = 3;
    const foo = a + b * c;
    const test = '1313';
    console.log(test);
    if (this.$u.test.digits(test)) {
      console.log('是整数');
    } else {
      console.log('不是整数');
    }
    // timeTest();
    // promiseTest();
    asyncTest();
  },
  computed: {},
  mounted() {
    this.resetList();
  },
  methods: {
    resetList() {
      setInterval(()=> {
        this.index++;
        let arr = JSON.parse(JSON.stringify(this.list))
         arr.unshift(this.index);
        arr = arr.splice(0,5)
        this.list = arr;
        this.animate = true
      setTimeout(() => {
       
        this.animate = false
      }, 4000)
        // this.setAnimate = true
      }, 5000)
    }
  }
});
</script>
<style lang="scss" scoped>
.container {
  color: 'red';
}
@keyframes rowup {
  0% {
    -webkit-transform: translate3d(0, -50px, 0);
    transform: translate3d(0, -50px, 0);
  }
  100% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.list {
  width: 500px;
  border: 1px solid #999;
  margin: 20px auto;
  position: relative;
  height: 150px;
  overflow: hidden;
}

.item {
  height: 32px;
  background: red;
  border-bottom: 1px solid yellow;
}
.list .rowup {
  -webkit-animation: 10s rowup linear infinite normal;
  animation: 10s rowup linear infinite normal;
  position: relative;
}

.anim{
  transition: all 0.5s;
   margin-top: -32px;
}
</style>

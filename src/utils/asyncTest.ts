/*
 * @Description: async改造测试
 * @Author: qingyang
 * @Date: 2021-04-02 17:25:13
 * @LastEditors: qingyang
 * @LastEditTime: 2021-04-02 17:34:42
 */

export const timeTest = () => {
  const t = setTimeout(() => {
    console.log('111111111111');
    const t1 = setTimeout(() => {
      console.log('222222222');
      const t2 = setTimeout(() => {
        console.log('3333333333333');
      }, 3000);
    }, 2000);
  }, 1000);
};

const promiseStep = (value: number, time: number) => {
  // TODO:
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(value);
      resolve(value);
    }, time);
  });
};
export const promiseTest = () => {
  promiseStep(1111, 1000)
    .then(() => {
      return promiseStep(2222, 2000);
    })
    .then(() => {
      return promiseStep(3333, 3000);
    });
};
export const asyncTest = async () => {
  await promiseStep(11111, 1000);
  await promiseStep(22222, 2000);
  await promiseStep(33333, 3000);
};

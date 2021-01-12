/*
 * @Description: 验证方法集合
 * @Author: qingyang
 * @Date: 2021-01-11 14:42:12
 * @LastEditors: qingyang
 * @LastEditTime: 2021-01-11 17:20:53
 */
/**
 * 验证电子邮箱格式
 */
const email = (value: string) => {
  return /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(
    value
  );
};

/**
 * 验证手机格式
 */
const mobile = (value: string) => {
  return /^1[23456789]\d{9}$/.test(value);
};

/**
 * 验证URL格式
 */
const url = (value: string) => {
  return /^((https|http|ftp|rtsp|mms):\/\/)(([0-9a-zA-Z_!~*'().&=+$%-]+: )?[0-9a-zA-Z_!~*'().&=+$%-]+@)?(([0-9]{1,3}.){3}[0-9]{1,3}|([0-9a-zA-Z_!~*'()-]+.)*([0-9a-zA-Z][0-9a-zA-Z-]{0,61})?[0-9a-zA-Z].[a-zA-Z]{2,6})(:[0-9]{1,4})?((\/?)|(\/[0-9a-zA-Z_!~*'().;?:@&=+$,%#-]+)+\/?)$/.test(
    value
  );
};

/**
 * 验证十进制数字
 */
const number = (value: string) => {
  return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
};

/**
 * 验证整数
 */
const digits = (value: string) => {
  return /^\d+$/.test(value);
};

/**
 * 验证身份证号码
 */
const idCard = (value: string) => {
  return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(
    value
  );
};

/**
 * 金额,只允许2位小数
 */
const amount = (value: string) => {
  //金额，只允许保留两位小数
  return /^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0.\d{1,2}$/.test(value);
};

/**
 * 中文
 */
const chinese = (value: string) => {
  const reg = /^[\u4e00-\u9fa5]+$/gi;
  return reg.test(value);
};

/**
 * 只能输入字母
 */
const letter = (value: string) => {
  return /^[a-zA-Z]*$/.test(value);
};

/**
 * 只能是字母或者数字
 */
const enOrNum = (value: string) => {
  //英文或者数字
  const reg = /^[0-9a-zA-Z]*$/g;
  return reg.test(value);
};

/**
 * 验证是否包含某个值
 */
const contains = (value: string, param: string) => {
  return value.indexOf(param) >= 0;
};

/**
 * 判断是否为空
 */
const empty = (value: any) => {
  switch (typeof value) {
    case 'undefined':
      return true;
    case 'string':
      if (value.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, '').length == 0)
        return true;
      break;
    case 'boolean':
      if (!value) return true;
      break;
    case 'number':
      if (0 === value || isNaN(value)) return true;
      break;
    case 'object':
      if (null === value || value.length === 0) return true;
      for (const i in value) {
        return false;
      }
      return true;
  }
  return false;
};

export default {
  email,
  mobile,
  url,
  number,
  digits,
  idCard,
  amount,
  chinese,
  letter,
  enOrNum,
  contains,
  empty,
  isEmpty: empty
};

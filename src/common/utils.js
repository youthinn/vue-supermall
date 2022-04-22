 //防抖动函数，如果下一次数据来的非常快，那么会将上一次取消
export function debouce(func, delay) {
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
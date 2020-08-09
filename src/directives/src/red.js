const red = {
  // 只调用一次，指令第一次绑定到元素时调用
  bind(el) {
    el.style.color = 'red';
  }
};
export default red;

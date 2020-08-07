//引入
// import copy from './src/copy';
// 自定义指令集合
const directives = {
  // copy
};

// 这种写法可以批量注册指令
export default {
  install(Vue) {
    Object.keys(directives).forEach(key => {
      Vue.directive(key, directives[key]);
    });
  }
};

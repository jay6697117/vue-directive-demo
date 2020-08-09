//引入
import focus from './src/focus';
import red from './src/red';
import mydirective from './src/mydirective';
import mypos from './src/mypos';

// 自定义指令集合
const directives = {
  focus,
  red,
  mydirective,
  mypos
};

/**
 * 这种写法可以批量注册指令
 * 写法1: 如果插件是一个对象，必须提供install方法
 */
const directivesPlugin = {
  install(Vue) {
    Object.keys(directives).forEach(key => {
      Vue.directive(key, directives[key]);
    });
  }
};

/**
 * 这种写法可以批量注册指令
 * 写法2: 如果插件是一个函数，它会被作为install方法
 */
// const directivesPlugin = function(Vue) {
//   Object.keys(directives).forEach(key => {
//     Vue.directive(key, directives[key]);
//   });
// };

export default directivesPlugin;

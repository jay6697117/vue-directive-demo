/**
 * 写法1: 如果插件是一个对象，必须提供install方法
 */
const Plugin1 = {
  install(Vue, options) {
    console.log('Plugin1 options :>> ', options); //输出
    // 3. 添加实例方法
    Vue.prototype.$alert1 = function() {
      console.log(`Plugin1 received params -- ${options}`); //输出
    };
    // 1. 添加全局方法或 property
    Vue.plugin1GlobalMethod = function() {
      console.log('Vue.plugin1GlobalMethod :>> ', Vue.plugin1GlobalMethod);
    };
    // 2. 添加全局方法或 property
    Vue.plugin1GlobalProperty = 'plugin1GlobalProperty';
  }
};

/**
 * 写法2: 如果插件是一个函数，它会被作为install方法
 */
function Plugin2(Vue, options) {
  console.log('Plugin2 options :>> ', options); //输出
  // 3. 添加实例方法
  Vue.prototype.$alert2 = function() {
    console.log(`Plugin2 received params -- ${options}`); //输出
  };
  // 1. 添加全局方法或 property
  Vue.plugin2GlobalMethod = function() {
    console.log('Vue.plugin2GlobalMethod :>> ', Vue.plugin2GlobalMethod);
  };
  // 2. 添加全局方法或 property
  Vue.plugin2GlobalProperty = 'plugin2GlobalProperty';
}

export { Plugin1, Plugin2 };

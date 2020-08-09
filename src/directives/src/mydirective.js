const mydirective = {
  // 只调用一次，指令第一次绑定到元素时调用
  bind(el, binding, vnode, oldVnode) {
    el.innerHTML =
      'name: ' +
      JSON.stringify(binding.name) +
      '<hr>' +
      'value: ' +
      JSON.stringify(binding.value) +
      '<hr>' +
      'oldValue: ' +
      JSON.stringify(binding.oldValue) +
      '<hr>' +
      'expression: ' +
      JSON.stringify(binding.expression) +
      '<hr>' +
      'arg: ' +
      JSON.stringify(binding.arg) +
      '<hr>' +
      'modifiers: ' +
      JSON.stringify(binding.modifiers) +
      '<hr>' +
      'vnode keys: ' +
      Object.keys(vnode).join(', ') +
      '<hr>' +
      'oldVnode keys: ' +
      Object.keys(oldVnode).join(', ');
  }
};
export default mydirective;

// const mypos = {
//   bind: function(el, binding, vnode, oldVnode) {
//     el.style.position = binding.value.type;
//     el.style.zIndex = binding.value.zIndex;

//     binding.arg.forEach(element => {
//       el.style[element.dir] = element.dis + 'px';
//     });
//   },
//   update: function(el, binding, vnode, oldVnode) {
//     mypos.bind(el, binding, vnode, oldVnode);
//   },
//   componentUpdated: function(el, binding, vnode, oldVnode) {
//     mypos.bind(el, binding, vnode, oldVnode);
//   }
// };

//函数简写方式
const mypos = function(el, binding, vnode, oldVnode) {
  el.style.position = binding.value.type;
  el.style.zIndex = binding.value.zIndex;

  binding.arg.forEach(element => {
    el.style[element.dir] = element.dis + 'px';
  });
};

export default mypos;

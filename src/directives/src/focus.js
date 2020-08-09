const focus = {
  // 被绑定元素插入父节点时调用
  inserted(el) {
    // 聚焦元素
    el.focus();
  }
};

export default focus;

import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import directives from './directives';
Vue.use(directives);

import { Plugin1, Plugin2 } from './plugins';
Vue.use(Plugin1,'lalala');
Vue.use(Plugin2, 'hahaha');

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

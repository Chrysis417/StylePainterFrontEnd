import Vue from 'vue';
import App from './App.vue';
import router from './starterRouter';
import NowUiKit from './plugins/now-ui-kit';
import axios from 'axios'
Vue.config.productionTip = false;

Vue.use(NowUiKit);
Vue.prototype.$http = axios
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

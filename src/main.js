// 请先导入bootstrap设置环境,在导入其他
import Vue from 'vue';
import store from 'conf@/store';
import router from 'conf@/router';
import {
  Loading, MessageBox, Notification, Message,
} from 'element-ui';

import '@candy/ui/asset/reset.scss';
// candy-ui工具样式
import '@candy/ui/asset/utils.scss';
// 需要element-ui的基础样式, 按需导入中默认不会导入
import 'element-ui/lib/theme-chalk/base.css';
// element-ui的响应式工具函数
import 'element-ui/lib/theme-chalk/display.css';

import App from './app.vue';

Vue.use(Loading.directive);
Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;

Vue.config.productionTip = false;
Vue.config.devtools = true;
Vue.prototype.$ELEMENT = { size: 'small' };

new Vue({
  router,
  store,
  components: { App },
  render(createElement) {
    return createElement(App);
  },
}).$mount('#app');

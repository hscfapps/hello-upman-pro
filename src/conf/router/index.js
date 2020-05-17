import Router from 'vue-router';
import Vue from 'vue';
import routers from './routes';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: routers,
});

// 全局导出
window.$h && (window.$h.router = router);

export default router;

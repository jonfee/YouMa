// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import routers from './router';
import './assets/sass/base/common.scss';
import security from './utils/security';
//import './assets/less/color.less';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: routers
});

/* eslint-disable no-new */
let vm = new Vue({
    el: '#app',
    router,
    render: h => h(App)
});

// 路由过滤器
router.beforeEach((to, from, next) => {
    window.scroll(0, 0);
    
    // 需要登录的页面检测当前是否登录
    let currentUser = security.getCurrentUser();

    if (!currentUser && to.name == 'order_confirm') {
        next({ name: 'login' })
    } else{
        next();
    }
});
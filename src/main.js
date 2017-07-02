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

// 路由过滤器
router.beforeEach((to, from, next) => {
    window.scroll(0, 0);
    
    //即将活动的组件页面，是否需要登录后操作
    var mustLogin = to.meta.mustLogin || false;

    //如果需要登录后才能操作
    if(mustLogin){
        //检测是否已登录
        var isLogin = security.isLogin();

        if(!isLogin){
            next({ name: 'login' });
        }
    }

    next();
});

/* eslint-disable no-new */
let vm = new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import routers from './router';
import './assets/sass/base/common.scss';
import security from './utils/security';
import Toast from './components/global/Toast/index'

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(Toast);

var router = new VueRouter({
    //mode: 'history',
    history: false,
    hashbang: true,
    routes: routers
});

// 路由过滤器
router.beforeEach((to, from, next) => {
    window.scroll(0, 0);
    
    //即将活动的组件页面，是否需要登录后操作
    var mustLogin = to.meta.mustLogin || false;

    //检测是否已登录
    var isLogin = security.isLogin();

    //如果需要登录后才能操作
    if(mustLogin && !isLogin){
        return next({ name: 'login' });
    }

    //如果已登录且指向登录页，则跳转到用户中心
    if(isLogin && to.name == 'login'){
        return next({ name: 'user_center' });
    }

    next();
});

/* eslint-disable no-new */
var vm = new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
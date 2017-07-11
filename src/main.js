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

Vue.use(Toast);
Vue.use(VueRouter);

var router = new VueRouter({
    //mode: 'history',
    history: false,
    hashbang: true,
    routes: routers
});


/* eslint-disable no-new */
var vm = new Vue({
    el: '#app',
    router,
    render: h => h(App)
});

// 路由过滤器
router.beforeEach((to, from, next) => {
    window.scroll(0, 0);

    //即将活动的组件页面，是否需要登录后操作
    var mustLogin = to.meta.mustLogin || false;

    //检测是否已登录
    var isLogin = security.isLogin();


    // 1、如果需要登录后才能操作，则弹出登录框
    if (mustLogin && !isLogin) {
        vm.$children[0].showLogin();
    }
    // 2、如果指向“登录”页，且来源页不为“注册”页时：
    //  2.1  如果：已登录时，路由转到用户中心
    //  2.2  否则：未登录时，弹出登录框
    else if(to.name == 'login' && from.name != 'register'){
        if(isLogin){
            return next({ name: 'user_center' });
        }else{
            vm.$children[0].showLogin();
        }
    }
    else{
        next();
    }
});
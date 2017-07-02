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
    
    //检测是否已登录
    var isLogin = security.isLogin();

    var _go = null;    

    //未登录时，处理登录后操作页面的跳转
    if(!isLogin){
        switch(to.name.toLowerCase()){
            case 'order_confirm':
            case 'user_center':
                  _go = { name: 'login' };
                 break;
        }
    }

    if(_go != null){
        next(_go);
    }else{
        next();
    }
});

/* eslint-disable no-new */
let vm = new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
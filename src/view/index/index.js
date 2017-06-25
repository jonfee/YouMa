// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import routers from '@/router/index';
// import routers_user from './router/user';
// import routers_product from './router/product';
// import routers_order from './router/order';

Vue.config.productionTip = false;



const router=new VueRouter({
    mode: 'history',
    routes:routers
});

/* eslint-disable no-new */
new Vue({
    el:'#app',
    router,
    render: h=>h(App)
});
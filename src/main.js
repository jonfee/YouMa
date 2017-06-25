// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import routers from './router';
import './sass/base/common.scss';
//import './assets/less/color.less';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: routers
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
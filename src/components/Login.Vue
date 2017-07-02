<template>
    <div class="login">
        <div class="logo">
            <img src="/static/imgs/logo.png">
        </div>
    
        <div class="form">
            <form>
                <div class="username">
                    <i class="icon"></i>
                    <input class="input" type="text" v-model="user.username" placeholder="请输入您的登录账号">
                </div>
                <div class="password">
                    <i class="icon"></i>
                    <input class="input" type="password" v-model="user.password" placeholder="请输入您的登录密码">
                </div>
                <input type="button" value="登录" class="input button" @click="login">
                <p class="input tip">还没有账号？赶快去
                    <router-link :to="{name:'register'}">&nbsp;注册&nbsp;</router-link>吧</p>
            </form>
        </div>
    </div>
</template>

<script>

import './../assets/sass/views/login.scss'
import security from './../utils/security'
import { storage as Storage } from './../utils/localStorage'

export default {
    data() {
        return {
            user: {
                username: '',
                password: ''
            }
        }
    },
    methods: {
        login() {
            if (!this.user.username) {
                alert('请输入登录账号！');
                return;
            }
            else if (!this.user.password) {
                alert('请输入登录密码！');
                return;
            }

            // 从localStorage中查询当前用户
            let dbUser = Storage.get(this.user.username);

            if (!dbUser) {
                alert('账号不存在,请先注册！');
                return;
            }

            if (dbUser.password != this.user.password) {
                alert('登录密码错误，请重新输入！');
                return;
            }

            // 设置当前登录用户的Cookie
            security.setCurrentUser({ "username": dbUser.username });
            // 跳转至首页
            this.$router.push('home');
        }
    }
}

</script>


<template>
    <div class="register">
        <div class="logo">
            <img src="./../assets/imgs/logo.png">
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
    
                <p class="input agreement">
                    <input type="checkbox" checked="checked" value="1">
                    <span>我已阅读并同意
                        <a href="javascript:;">《用户注册协议》</a>
                    </span>
                </p>
                <input type="button" value="立即注册" class="input button" @click="register">
                <p class="input tip">我已经有账号了
                    <router-link :to="{name:'login'}">&nbsp;马上登录&nbsp;</router-link>
                </p>
            </form>
        </div>
    </div>
</template>

<script>
import './../assets/sass/views/login.scss'
import { storage as Storage } from './../utils/storage'

export default {
    data() {
        return {
            user: {
                username: '',
                password: '',
                agreement: true
            }
        }
    },
    methods: {
        register() {
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
            if (dbUser) {
                alert('账号已存在,请直接登录！');
                return;
            }

            Storage.set(this.user.username, this.user);

            // 跳转至首页
            this.$router.push('login');
        }
    }
}

</script>
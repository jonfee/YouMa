<template>
    <div class="login">
        <div class="logo">
            <img src="./../assets/imgs/logo.png">
        </div>

        <div class="form">
            <form>
                <div class="username">
                    <i class="icon"></i>
                    <input type="text" v-model="user.username" placeholder="请输入用户名">
                </div>
                <div class="password">
                    <i class="icon"></i>
                    <input type="password" v-model="user.password" placeholder="请输入密码">
                </div>
                <input type="button" value="登录" class="button" @click="login">
                <p class="tip">还没有账号？赶快去
                    <router-link :to="{name:'register'}">&nbsp;注册&nbsp;</router-link>吧</p>
            </form>
        </div>
    </div>
</template>

<script>

import './../sass/views/login.scss'
import { storage as Storage } from './../utils/storage'

export default {
    data() {
        return {
            user: {
                username: '',
                password: ''
            },
            navinfo:{
                title:'用户登录',
                backlink:'/index',
                backtext: ''
            }
        }
    },
    props:['setnav'],
    created: function(){
        //设置导航信息
        this.$emit('setnav',this.navinfo);
    },
    methods: {
        login() {
            alert('111');
        }
    }
}

</script>


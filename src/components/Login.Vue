<template>
    <div class="login">
        <!--顶部导航组件，navinfo格式：{title:'标题',backtext:'返回按钮的内容',backlink:'返回的路由'}-->
        <navbar :navinfo="nav"></navbar>
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

//引入导航组件
import navbar from '@/components/global/navbar'
import './../sass/views/login.scss'
import { storage as Storage } from './../utils/storage'

export default {
    data() {
        return {
            user: {
                username: '',
                password: ''
            },
            nav:{
                title:'用户登录',
                backlink:'/index',
                backtext: ''
            }
        }
    },
    methods: {
        login() {
            alert('111');
        }
    },
    components:{
        navbar
    }
}

</script>


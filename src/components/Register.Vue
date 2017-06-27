<template>
    <div class="register">
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
    
                <p class="input agreement">
                    <input type="checkbox" checked="checked" value="1">
    
                    <span>我已阅读并同意
                        <a href="javascript:;" @click="showAggree=true">《用户注册协议》</a>
                    </span>
                </p>
    
                <input type="button" value="立即注册" class="input button" @click="register">
    
                <p class="input tip">我已经有账号了
                    <router-link :to="{name:'login'}">&nbsp;马上登录&nbsp;</router-link>
                </p>
            </form>
    
            <!--用户协议模态框-->
            <div id="modal" v-show="showAggree" class="modal">
                <span class="close" @click="showAggree=false">X</span>
                <div class="modal-title">
                    <h4>用户注册协议</h4>
                </div>
                <div class="modal-content">
                    <div class="text" style="padding: 0px;">
                        <p>一、总则
                        </p>
                        <p>1.1 保宝网的所有权和运营权归深圳市永兴元科技有限公司所有。
                        </p>
                        <p>1.2 用户在注册之前，应当仔细阅读本协议，并同意遵守本协议后方可成为注册用户。一旦注册成功，则用户与保宝网之间自动形成协议关系，用户应当受本协议的约束。用户在使用特殊的服务或产品时，应当同意接受相关协议后方能使用。
                        </p>
                        <p>1.3 本协议则可由保宝网随时更新，用户应当及时关注并同意本站不承担通知义务。本站的通知、公告、声明或其它类似内容是本协议的一部分。
                        </p>
                        <p>二、服务内容
                        </p>
                        <p>2.1 保宝网的具体内容由本站根据实际情况提供。
                        </p>
                        <p>2.2 本站仅提供相关的网络服务，除此之外与相关网络服务有关的设备(如个人电脑、手机、及其他与接入互联网或移动网有关的装置)及所需的费用(如为接入互联网而支付的电话费及上网费、为使用移动网而支付的手机费)均应由用户自行负担。</p>
                    </div>
                </div>
            </div>
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
            },
            showAggree: false // 显示协议模态
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
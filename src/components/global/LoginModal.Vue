<template>
    <div v-show="show" class="loginmodal">
        <span class="close" @click="hideModal">×</span>
        <div class="login">
            <div class="form">
                <form>
                    <div class="formitem">
                        <i class="icon"></i>
                        <input class="input" type="text" v-model="user.username" placeholder="请输入您的登录账号">
                    </div>
                    <div class="formitem">
                        <i class="icon"></i>
                        <input class="input" type="password" v-model="user.password" placeholder="请输入您的登录密码">
                    </div>
                    <input type="button" value="登录" class="formitem button" @click="login">
                    <p class="formitem tip">还没有账号？赶快去
                        <a href="javascript:;" @click="gotoRegister">&nbsp;注册&nbsp;</a>吧</p>
                </form>
            </div>
    
        </div>
    </div>
</template>


<style lang="scss">
.loginmodal {
    border: solid 1px #ccc;
    position: fixed;
    width: 80%;
    height: 300px;
    padding: 10px;
    left: 10%;
    top: 50%;
    margin: 0 auto;
    margin-top: -150px;
    background-color: rgba(255, 255, 255, 1);
    z-index: 10;
    -webkit-animation-name: zoom;
    -webkit-animation-duration: 0.6s;
    animation-name: zoom;
    animation-duration: 0.6s;
    .close {
        position: absolute;
        display: block;
        width: 20px;
        height: 20px;
        line-height: 20px;
        top: -5px;
        right: -5px;
        font-size: 25px;
        border: solid 1px #ccc;
        border-radius: 100%;
        color: white;
        background-color: #67C36F;
        background-attachment: fixed;
    }
    .login {
        width: 100%;
        height: 100%;

        .form {
            width: 100%;
            text-align: center;
            .formitem {
                width: 70%;
                height: 36px;
                margin: 0 auto;
                margin-top: 20px;
                position: relative;
                .input,
                {
                    width: 100%;
                    height: 100%;
                    text-indent: 30px;
                    letter-spacing: 1px;
                }
                .icon {
                    width: 20px;
                    height: 20px;
                    position: absolute;
                    left: 10px;
                    top: 10px;
                    z-index: 5;
                    background-repeat: no-repeat;
                    background-size: 15px 15px;
                }
                &:first-child i {
                    background-image: url('/static/icons/username.ico');
                }
                &:nth-child(2) i {
                    background-image: url('/static/icons/password.ico');
                }
                &.button {
                    margin-top: 30px;
                    margin-bottom: 30px;
                    background: #67C36F;
                    box-shadow: 0 1px 4px 0 rgba(28, 119, 36, 0.30);
                    color: #fff;
                    letter-spacing: 2px;
                    line-height: 36px;
                    text-align: center;
                }
                &.tip {
                    font-size: 12px;
                    text-align: left;
                }
            }
        }
    }
    @-webkit-keyframes zoom {
        from {
            -webkit-transform: scale(0)
        }
        to {
            -webkit-transform: scale(1)
        }
    }
    @keyframes zoom {
        from {
            transform: scale(0.1)
        }
        to {
            transform: scale(1)
        }
    }
}
</style>



<script>
import Modal from './Modal'
import './../../assets/sass/views/login.scss'
import security from './../../utils/security'
import { storage as Storage } from './../../utils/localStorage'

export default {
    components: { Modal },
    props: {
        show: {
            type: Boolean,
            required: true
        }
    },
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
            console.log(111);
            if (!this.user.username) {
                this.$toast.error('请输入登录账号！');
                return;
            }
            else if (!this.user.password) {
                this.$toast.error('请输入登录密码！');
                return;
            }

            // 从localStorage中查询当前用户
            let dbUser = Storage.get(this.user.username);

            if (!dbUser) {
                this.$toast.error('账号不存在,请先注册！');
                return;
            }

            if (dbUser.password != this.user.password) {
                this.$toast.error('登录密码错误，请重新输入！');
                return;
            }

            // 设置当前登录用户的Cookie
            security.setCurrentUser({ "username": dbUser.username });

            this.$toast.success('登录成功');

            setTimeout(() => {
                this.hideModal();
                // 跳转至首页
                this.$router.push('home');
            }, 1000);
        },
        hideModal() {
            this.$emit('hide');
        },
        gotoRegister() {
            this.hideModal();
            this.$router.push('/user/register')
    }
}
}

</script>

<template>
    <section v-if="!config.hide" class="m-header is-bg is-fixed">
        <div class="m-header-button is-left">
            <router-link v-if="!config.noback" :to="config.backlink">{{ config.backtext }}</router-link>
        </div>
        <h1 class="m-header-title" v-text="config.title"></h1>
        <div class="m-header-button is-right">
            <a href="javascript:;" style="display:none;">分享</a>
        </div>
        <div class="userInfo" v-show="isShowAvatar" @click="onAvtarClick">
            <img :src='avatar'>
        </div>
    </section>
</template>

<script>
import security from './../../utils/security';
/**
*   导航组件所需要的数据对象为：{title:'标题',backtext:'返回按钮的内容',backlink:'返回的路由', noback: 是否隐藏返回按钮,hide: 是否隐藏导航}
*   特别声明：
*       1、当传递的数据对象为null时，将使用默认信息（_defInfo变量）；
*       2、当传递的数据对象中某值为null时，将使用默认信息，同上。
*/

//默认导航信息
var _defInfo = { title: '优码商城', backtext: '〈 返回', backlink: '/', noback: false, hide: false, };

export default {
    props: {
        info: {
            required: true,
            type: Object,
            default: _defInfo
        }
    },
    created() {
        this.user = security.getCurrentUser();

        // 登录注册页面不显示用户Logo
        this.isShowAvatar = (this.info && this.info.title != '用户登录' && this.info.title != '新用户注册');
    },
    computed: {
        config: function () {
            return {
                title: this.info.title || _defInfo.title,
                backtext: this.info.backtext || _defInfo.backtext,
                backlink: this.info.backlink || _defInfo.backlink,
                noback: this.info.noback || _defInfo.noback,
                hide: this.info.hide || _defInfo.hide
            }
        },
        avatar() {
            return this.user ? '/static/icons/loginUser.ico' : '/static/icons/unloginUser.ico';
        }
    },
    data() {
        return {
            isShowAvatar: false, // 是否显示头像
            user: null
        }
    },
    methods: {
        onAvtarClick() {
            if (this.user) {
                console.log('个人中心');
            } else {
                this.$router.push('user/login');
            }
        }
    },
    watch: {
        "info": {
            handler(newVal, oldVal) {
                this.user = security.getCurrentUser();

                // 登录注册页面不显示用户Logo
                this.isShowAvatar = (newVal.title != '用户登录' && newVal.title != '新用户注册');
            }

        }

    }
}
</script>

<style scoped lang="less">
//APP默认颜色
@defaultColor: #42bd56;
//导航底色
@headerBg: @defaultColor;
//导航默认前景色
@headerDefaultColor: rgb(73, 73, 73);

.m-header {
    display: flex;
    align-items: center;
    height: 44px;
    padding: 0 10px;
    background: @headerBg;
    color: @headerDefaultColor;
    border-bottom: 1px solid #eee;
    a {
        color: @headerDefaultColor;
    }
    .m-header-button {
        width: 70px;
        align-items: stretch;
        &.is-left {
            text-align: left;
        }
        &.is-right {
            text-align: right;
        }
        .m-icon-img {
            width: 20px;
            height: 20px;
        }
        .margin-right-10 {
            margin-right: 10px;
        }
    }
    .m-header-title {
        flex: 1;
        text-align: center;
        font-size: 16px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
    &.is-bg {
        background: @headerBg;
        color: #fff;
        a {
            color: #fff;
        }
        .m-header-title {
            color: #fff;
        }
    }
    &.is-fixed {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 9;
    }
    .userInfo {
        width: 30px;
        height: 30px;
    }
}
</style>
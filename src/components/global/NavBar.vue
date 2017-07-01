<template>
    <section v-if="!navinfo.hide" class="m-header is-bg is-fixed">
        <div class="m-header-button is-left">
            <router-link v-if="!navinfo.noback" :to="navinfo.backlink">{{ navinfo.backtext }}</router-link>
        </div>
        <div class="m-header-button m-header-title" v-text="navinfo.title"></div>
        <div class="m-header-button is-right">
            <router-link :to="user.link">{{ user.displayText }}</router-link>
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

export default {
    data() {
        return {
            user: {}
        }
    },
    props: ['info'],
    computed:{
        navinfo: function(){
            return {
                title: this.info.title || '优码商城',
                backtext: this.info.backtext || '〈 返回',
                backlink: this.info.backlink || '/',
                noback: this.info.noback || false,
                hide: this.info.hide || false
            };
        }
    },
    created: function(){
        //设置页面title
        document.title = this.$route.meta.title;
        this.user = this.getUser();
    },
    methods: {
        getUser: function(){
            //登录用户名
            var _user = security.getCurrentUser();

            //显示文字
            var disText = _user.username;
            //链接
            var link = '/user/center';

            if(disText == ''){
                //获取路由名
                var routeName = this.$route.name;
                if(routeName == 'login'){
                    disText = '注册';
                    link = '/user/register';
                }else{
                    disText = '登录';
                    link = '/user/login';
                }
            }

            return {
                name: _user.username,
                displayText: disText,
                link: link
            }
        }
    },
    watch: {
        navinfo: function()
        {
            //绑定用户信息
            this.user = this.getUser();
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
    display: -webkit-fixed;
    display: fixed;

    a {
        color: @headerDefaultColor;
        font-size: 14px;
    }

    .m-header-button{
        height: 100%;
        line-height: 44px;

        &.is-left{
            width: 20%;
            text-align: left;
        }
        
        &.m-header-title {
            width: 60%;
            text-align: center;
            font-size: 16px;
            font-weight: bold;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }

        &.is-right{
            width: 20%;
            text-align: right;
        }
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
}
</style>
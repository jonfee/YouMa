<template>
    <section v-if="!navinfo.hide" class="m-header is-bg">
        <span class="m-header-button is-left">
            <a href="javascript:;" v-if="!navinfo.noback" @click="goBack">{{ navinfo.backtext }}</a>
        </span>
        <span class="m-header-button m-header-title" v-text="navinfo.title"></span>
        <span class="m-header-button is-right">
            <router-link v-show="navinfo.user.show" :to="navinfo.user.link">{{ navinfo.user.displayText }}</router-link>
        </span>
    </section>
</template>

<script>
import security from './../../utils/security';
/**
*   导航组件所需要的数据对象
*   特别声明：
*       1、首页 时，没有“返回”按钮
*       2、用户中心，不显示登录用户信息
*       3、返回操作，默认为 this.$router.go(-1)，即返回上一个路由
*/
export default {
    data(){
        return{
            navinfo: {}
        }
    },
    created: function(){
        this.update();
    },
    watch:{
        '$route': function(){
            this.update();
        }
    },
    
    methods:{
        update: function(){
            //获取当前路由的导航信息
            var nav = this.$route.meta.nav;

            //获取用户信息
            var _user = this.getUser();
            
            //导航标题
            var title = nav.title;

            //是否显示登录用户
            var showUser= nav.showUser;
            if(showUser === undefined) showUser = true; 

            //指定导航信息
            this.navinfo = {
                title: title || '优码商城',                   //导航标题
                backtext: '〈 ' + (nav.backtext || '返回'),                   //返回按钮文字 
                noback: nav.noback || false,                      //是否需要返回铵钮
                hide: nav.hide || false,                          //是否隐藏整个导航条
                user: {
                    show: showUser,                             //是否显示登录用户信息
                    displayText: _user.displayText,             //显示的用户信息
                    link: _user.link                            //用户链接地址
                }                       
            };

            //设置页面title
            document.title = this.navinfo.title;
        },

        /*获取用户信息*/
        getUser: function(){
            //登录用户名
            var _user = security.getCurrentUser();

            //显示文字
            var disText = _user.username;
            //链接
            var link = '/user/center';

            if(disText == ''){
                if(this.$route.name == 'login'){
                    disText = '注册';
                    link = '/user/register';
                }else{
                    disText = '登录';
                    link = '/user/login';
                }
            }
            return { displayText: disText, link: link};
        },

        /** 后退/返回**/
        goBack: function(){
            this.$router.go(-1);
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
    height: 44px;
    padding: 0 10px;
    margin: 0px auto;
    background: @headerBg;
    color: @headerDefaultColor;

    position: fixed;
    left: 0px;
    top: 0px;
    right: 0px;

    display: -webkit-flex;
    display: flex;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

    a {
        color: @headerDefaultColor;
        font-size: 14px;
    }

    .m-header-button{
        display: inline-block;
        height: 44px;
        line-height: 44px;
        margin: 0px;
        padding: 0px;

        &.is-left{
            width: 20%;
            text-align: left;
        }
        
        &.m-header-title {
            width: 60%;
            font-size: 16px;
            font-weight: bold;
            text-overflow: ellipsis;
            white-space: nowrap;
            text-align: center;
            text-align: -webkit-center;
            text-align: -moz-center;
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
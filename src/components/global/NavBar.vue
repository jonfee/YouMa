<template>
    <div class="m-header is-bg is-fixed">
        <div class="m-header-button is-left">
            <router-link  v-if="!noback" :to="backlink">{{ backtext }}</router-link>
        </div>    
        <h1 class="m-header-title" v-text="title"></h1>  
        <div class="m-header-button is-right">
            <a href="javascript:;" style="display:none;">分享</a>
        </div>
    </div>
</template>

<script>

    /**
    *   导航组件所需要的数据对象为：{title:'标题',backtext:'返回按钮的内容',backlink:'返回的路由', noback: 是否隐藏返回按钮}
    *   特别声明：
    *       1、当传递的数据对象为null时，将使用默认信息（_defInfo变量）；
    *       2、当传递的数据对象中某值为null时，将使用默认信息，同上。
    */

    //默认导航信息
    var _defInfo = {title:'优码商城', backtext: '〈 返回', backlink: '/', noback: false};

    export default{
        data() {
            return {
                title: this.navinfo.title || _defInfo.title,
                backtext: this.navinfo.backtext || _defInfo.backtext,
                backlink: this.navinfo.backlink || _defInfo.backlink ,
                noback: this.navinfo.noback || _defInfo.noback
            }
        },
        props:{
            navinfo:{
               type: Object,
               default: _defInfo
            }
        },
        methods: {
            
        }
    }
</script>

<style scoped lang="less">

//APP默认颜色
@defaultColor:#42bd56;
//导航底色
@headerBg:@defaultColor;
//导航默认前景色
@headerDefaultColor:rgb(73,73,73);

.m-header{
    display: flex;
    align-items: center;
    height: 44px;
    padding: 0 10px;
    background: @headerBg;
    color: @headerDefaultColor;
    border-bottom:1px solid #eee;
    a{
        color: @headerDefaultColor;
    }
    .m-header-button{
        width: 70px;
        align-items:stretch;
        &.is-left{
            text-align: left;
        }
        &.is-right{
            text-align: right;
        }
        .m-icon-img{
            width: 20px;
            height: 20px;
        }
        .margin-right-10{
            margin-right: 10px;
        }
    }
    .m-header-title{
        flex: 1;
        text-align: center;
        font-size: 16px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
    &.is-bg{
        background: @headerBg;
        color: #fff;
        a{color: #fff;}
        .m-header-title{
            color: #fff;
        }
    }
    &.is-fixed{
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 9;
    }
}
</style>
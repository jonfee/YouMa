<template>
    <div class="user-center">
        <section class="info">
            <p>亲爱的 <span class="username">{{ user.username }}</span>，{{ message }}!</p>
        </section>
        <section class="address">
            <div class="addr-tip">最近使用过的收货地址</div>
            <div class="addr-info">
                <p>收货人：{{ address.linkman }}</p>
                <p>电话：{{ address.tel }}</p>
                <p>收货地址：{{ address.street }}</p>
            </div>
        </section>
        <section class="active">
            <button @click="signout">退出登录</button>
        </section>                
    </div>
</template>

<script>

//引入收货地址操作类
import addressUtil from './../utils/address'
//引入登录状态/安全操作类
import security from './../utils/security'
//引入样式
import './../assets/sass/views/user_center.scss'

export default{
    data() {
        return {
            //导航信息
            navinfo:{
                title: '用户中心',
                backlink: '/',
                backtext: '首页',
                showUser: false
            },
            //用户信息
            user: {},
            //收货地址
            address: {},
            message: '欢迎您回来'
        }
    },
    props: ['setnav'],
    beforeCreate: function(){
        var islogin = security.isLogin();

        if(!islogin){
            this.$router.push({
                name: 'login'
            })
        }
    },
    created: function(){
        //设置导航信息
        this.$emit('setnav',this.navinfo);

        //获取用户信息
        this.user = security.getCurrentUser();

        //获取最后使用的收货地址
        this.address = addressUtil.getLast();
    },
    computed:{
        
    },
    methods:{
        /*退出登录*/
        signout: function(){
            //清除登录状态
            security.clear();

            //退出登录后，跳转到首页
            this.$router.push({
                name: 'home'
            })
        }
    }
}

</script>
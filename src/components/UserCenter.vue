<template>
    <div class="user-center">
        <section class="info">
            <p>亲爱的 <span class="username">{{ user.username }}</span>，{{ message }}!</p>
        </section>
        <section class="address" v-if="address!=null">
            <div class="addr-tip">最近使用过的收货地址</div>
            <ul class="addr-info">
                <li><span class="tip">收货人</span><span class="val">{{ address.linkman }}</span></li>
                <li><span>联系电话</span><span>{{ address.tel }}</span></li>
                <li><span>收货地址</span><span>{{ address.street }}</span></li>
            </ul>
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
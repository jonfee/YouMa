<template>
    <div class="container">
        <!--顶部导航组件，navinfo格式：{title:'标题',backtext:'返回按钮的内容',backlink:'返回的路由',noback:是否隐藏返回按钮}-->
        <navbar :navinfo="nav"></navbar>
        
        <p>我是首页</p>
    </div>
</template>

<script>

//引入导航组件
import navbar from '@/components/global/navbar'

export default {
    data() {
        return {
            nav:{ noback: true }
        }
    },
    components:{
        navbar
    }
}

</script>
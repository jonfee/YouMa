<template>
  <div id="app">
    <ul>
      <li><a href="/index.html">返回首页</a></li>
      <li v-for="menu in menus"><router-link :to="menu.link">{{menu.name}}</router-link></li>
    </ul>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data:function(){
    return {
      menus:[
        {name:"Login",link:"/user/login"},
        {name:"Register",link:"/user/register"}
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

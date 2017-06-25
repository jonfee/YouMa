<template>
  <div id="app">
     <ul>
      <li v-for="menu in menus"><a :href="menu.link">{{menu.name}}</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data:function(){
    return {
      menus:[
        {name:'首页',link:'/index'},
        {name:'用户',link:'/user'},
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

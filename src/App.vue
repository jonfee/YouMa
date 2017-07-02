<template>
  <div id="app">
    <!--顶部导航组件-->
    <navbar :title="navTitle"></navbar>
    <router-view></router-view>
  </div>
</template>

<script>

//引入导航组件
import navbar from '@/components/global/navbar'

export default {
  name: 'app',
  data(){
    return {
      navTitle: ''
    }
  },
  components:{ navbar }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
  padding-top: 44px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
</style>

<template>
  <div id="app">
    <!--顶部导航组件-->
    <navbar :info="navinfo"></navbar>
    <router-view keep-alive @setnav="setNav"></router-view>
  </div>
</template>

<script>

//引入导航组件
import navbar from '@/components/global/navbar'

export default {
  name: 'app',
  data(){
    return {
      navinfo: {}   //导航信息
    }
  },
  methods:{
    //设置导航信息
    setNav(info){
      this.navinfo = info;
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
  margin:0px;
  padding-top:44px;
  box-sizing:border-box;
}
</style>

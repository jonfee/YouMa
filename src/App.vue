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

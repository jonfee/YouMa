<template>
  <div id="app">
    <!--顶部导航组件-->
    <navbar :title="navTitle"></navbar>
    <router-view></router-view>
    <!--二维码-->
    <qr_code></qr_code>
  
    <!--登录弹窗-->
    <LoginModal :show="showLoginModal" @hide="showLoginModal=false"></LoginModal>
  </div>
</template>

<script>

//引入导航组件
import navbar from '@/components/global/navbar'
//引入公众号二维码组件
import qr_code from '@/components/global/qrcode'

import LoginModal from './components/global/LoginModal'

export default {
  name: 'app',
  data() {
    return {
      navTitle: '',
      showLoginModal: false,
    }
  },
  methods: {
    showLogin() {
      this.showLoginModal = true;
    }
  },
  components: { navbar, qr_code, LoginModal }
}
</script>

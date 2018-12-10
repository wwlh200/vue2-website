<template>
<div class="contact">
  <div class="contact-subject">
    <ul class="contact-subject-title">
      <li>客服电话：0755-29596732/13510119057</li>
      <li><a href="https://hweled888888.1688.com">公司商城：https://hweled888888.1688.com</a></li>
      <li>公司地址：深圳市宝安区福永福海大道福海工业园B3区B栋四栋西</li>
    </ul>

    <div class="contact-subject-copy">
      <p>Copyright © 2018.深圳市华尔威光电科技有限公司 All Rights</p>
      <p><a href="http://www.miitbeian.gov.cn" target="_Blank">粤ICP备18121307号-1</a></p>
      <p><a href="javascript:void" @click="goLogin">网站维护</a></p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {}
  },
 methods: {
    goLogin() {
      this.$router.replace({
        path: '/Login'
      })
    }
  }
}
</script>

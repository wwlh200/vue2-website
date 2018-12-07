<template>
<div class="main-content">
  <div id="abstract" class="container-fluid paddingTop main-content-width">
    <abstract></abstract>
  </div>
  <div id="devStrategy" class="container-fluid paddingTop main-content-width">
    <dev-strategy></dev-strategy>
  </div>
  <div id="contact" class="paddingTop">
    <contact></contact>
  </div>
</div>
</template>

<script>
import abstract from './Abstract.vue'
import devStrategy from './DevStrategy.vue'
import contact from './Contact.vue'
export default {
  components: {
    abstract,
    devStrategy,
    contact
  },
  data() {
    return {}
  },
  methods: {},
  mounted: function () {
    this.$nextTick(function () {
      //手机端点击旋转
      $('.flip-container .flipper1').click(function () {
        $('.flip-container .flipper1').toggleClass('transformCard');
      });

      $('.flip-container .flipper2').click(function () {
        $('.flip-container .flipper2').toggleClass('transformCard');
      });

      $('.flip-container .flipper3').click(function () {
        $('.flip-container .flipper3').toggleClass('transformCard');
      });

      $('.flip-container .flipper4').click(function () {
        $('.flip-container .flipper4').toggleClass('transformCard');
      });

    })
  },
}
</script>

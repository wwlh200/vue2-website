<template>
    <div class="main-content">
      <div id="abstract" class="container-fluid paddingTop main-content-width">
        <abstract></abstract>
      </div>
      <div id="keyTarger" class="container-fluid paddingTop main-content-width">
        <key-targer></key-targer>
      </div>
      <div id="devStrategy" class="container-fluid paddingTop main-content-width">
        <dev-strategy></dev-strategy>
      </div>
      <div id="coreTeam" class="container-fluid paddingTop main-content-width">
        <core-team></core-team>
      </div>
      <div id="contact" class="paddingTop">
        <contact></contact>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
  import abstract from './Abstract.vue'
  import keyTarger from './KeyTarget.vue'
  import devStrategy from './DevStrategy.vue'
  import coreTeam from './CoreTeam.vue'
  import contact from './Contact.vue'
  export default {
    components: {
      abstract,
      keyTarger,
      devStrategy,
      coreTeam,
      contact
    },
    data () {
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

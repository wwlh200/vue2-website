<template>
  <div class="frame">
    <div class="frame-bg container-fluid" id="homePage">
      <div>
        <p>ShanChain</p>
        <p>去中心化人工智能数据合约</p>
        <p><a href="http://www.qianqianshijie.com"><img src="../assets/img/linked.png"/>千千世界</a></p>
        <!--<p>ShanChain&nbspwhitepaper&nbspV1.0&nbspPreview&nbsp(English)</p>-->
        <!--<p>ShanChain&nbsp&nbsp白皮书&nbsp&nbsp(正式版)</p>-->
      </div>
    </div>
    <nav class="navbar navbar-fixed-top frame-navbar">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
                  aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <div class="frame-header-logo navbar-brand">
            <img src="http://shanchain-web.oss-cn-beijing.aliyuncs.com/web_home/officialwebsite_icon_logo_default.png"/>
            <span>深圳善圆科技有限公司</span>
          </div>
        </div>
        <div id="navbar" class="navbar-collapse collapse navbar-right">
          <ul class="nav navbar-nav">
            <li><a href="#homePage" @click="goHomePages">首页</a></li>
            <li><a href="#abstract" @click="goHomePages">项目简介</a></li>
            <li><a href="#keyTarger" @click="goHomePages">核心目标</a></li>
            <li><a href="#devStrategy" @click="goHomePages">发展战略</a></li>
            <li><a href="#coreTeam" @click="goHomePages">团队优势</a></li>
            <li><a href="#contact" @click="goHomePages">联系我们</a></li>
            <li><a href="javascript:void(0)" @click="goHelp">帮助</a></li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="frame-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    created() {
      this.$router.replace({path: '/frame/HomePages'})
    },
    mounted: function () {
      this.$nextTick(function () {
        $(window).scroll(function () {
          if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav")
          } else {
            $(".navbar-fixed-top").removeClass("top-nav")
          }
        })

        //手机端点击导航栏收缩
        $('.navbar-collapse a').click(function () {
          $('.navbar-collapse').collapse('hide');
        });
      })
    },
    methods: {
      goHomePages() {
        this.$router.replace({path: '/frame/HomePages'})
      },
      goHelp() {
        this.$router.replace({path: '/frame/Help'})
      }
    }
  }
</script>

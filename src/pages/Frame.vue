<template>
<div class="frame">
  <div v-if="showHomePageBg" class="frame-bg container-fluid" id="homePage">
    <div>
      <el-carousel>
        <el-carousel-item v-for="item in carouselImages" :key="item.name">
          <img :src="item.url" :alt="item.name" />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
  <div v-else class="frame-bg1">

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
          <img src='http://szhew.oss-cn-shenzhen.aliyuncs.com/logo.png'/>
          <span>深圳华尔威光电科技有限公司</span>
        </div>
      </div>
      <div id="navbar" class="navbar-collapse collapse navbar-right">
        <ul class="nav navbar-nav">
          <li><a href="#homePage" @click="goHomePages">首页</a></li>
          <li><a href="#abstract" @click="goHomePages">公司简介</a></li>
          <li><a href="#contact" @click="goHomePages">联系我们</a></li>
          <el-dropdown @command="handleCommand" trigger="click">
            <span class="el-dropdown-link">
               公司产品<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="goProducts-type1">透明屏</el-dropdown-item>
              <el-dropdown-item command="goProducts-type2">显示屏</el-dropdown-item>
              <el-dropdown-item command="goProducts-type3">micro-LED</el-dropdown-item>
              <el-dropdown-item command="goProducts-type4">室内外模组</el-dropdown-item>
              <el-dropdown-item command="goProducts-type5">点阵/数码管/单元板</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </ul>
      </div>
    </div>
  </nav>
  <div class="frame-content">
    <router-view></router-view>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      carouselImages: [{
          'name': 'carousel1',
          'url': 'http://szhew.oss-cn-shenzhen.aliyuncs.com/car1.jpg'
        },
        {
          'name': 'carousel2',
          'url': 'http://szhew.oss-cn-shenzhen.aliyuncs.com/car2.jpg'
        },
        {
          'name': 'carousel3',
          'url': 'http://szhew.oss-cn-shenzhen.aliyuncs.com/car3.jpg'
        },
      ],
      showHomePageBg: true
    }
  },
  created() {
    this.$router.replace({
      path: '/frame/HomePages'
    })

  },
  mounted: function () {
    this.$nextTick(function () {
      $(window).scroll(function () {
        if ($(".navbar").offset() && $(".navbar").offset().top > 50) {
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
    handleCommand(command) {
      let arr = command.split('-');
      this.goProducts(arr[1]);

    },
    goHomePages() {
      this.showHomePageBg = true;
      this.$router.replace({
        path: '/frame/HomePages'
      })

    },
    goProducts(type) {
      this.showHomePageBg = false;
      this.$router.push({
        name: `Products`,
        params: {
          type: type
        }
      });
    }
  }
}
</script>

<template>
  <div class="core-team">
    <p class="core-team-title">核心团队</p>
    <swiper :options="swiperOption">
      <swiper-slide>
        <div class="carousel-content">
          <img src="http://shanchain-web.oss-cn-beijing.aliyuncs.com/web_home/head_hecong.png" height="200" width="200"/>
          <p>
            清华大学公共管理硕士，南开大学社会工作专业毕业。先后任职中国青少年发展基金会、
            江西医学高等专科学校，颠覆式创新实践者、“两岸四地杰出社工”获得者、 善圆、蓝地、
            碳原子等跨界品牌的创办者、“宇宙思维”倡导者，著有《分享经济与善圆：利他货币理论与实践》、《胚上胚（2001—2010）》等。
          </p>
          <p>何聪</p>
          <p>创始人CEO兼产品总监</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="carousel-content">
          <img src="http://shanchain-web.oss-cn-beijing.aliyuncs.com/web_home/head_zijin.png" height="200" width="200"/>
          <p>
            南开大学会计学专业本科，台湾国立交通大学财务金融研究所硕士，曾任职中国华电集团、
            中泰信托、兴业资管、光大信托，财务金融复合背景，对于企业财务规划、金融行业财务运营有丰富经验，
            熟悉金融行业前中后台业务模式，曾管理近千亿规模信托资产，对于团队人员招聘与管理有自己独特的方法论。
          </p>
          <p>赵紫金</p>
          <p>CFO&HRD</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="carousel-content">
          <img src="http://shanchain-web.oss-cn-beijing.aliyuncs.com/web_home/head_yesong.png" height="200" width="200"/>
          <p>
            毕业于电子科技大学电子信息工程专业，曾任职中兴通信、小米生态、平安科技，担任技术核心职位，完成多个大型项目，
            以及自主创业全栈开发经历。在编程语言、移动端开发、WEB开发前后端、云计算、系统架构等方面均有深入研究，
            拥有完整的技术生态系统，对互联网行业技术发展极具前瞻性和全面性。
          </p>
          <p>叶松</p>
          <p>CTO</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="core-team-content">
      <p class="core-team-content-title">团队优势</p>
      <div class="core-team-content-content">
        <p>强有力的技术支持：利他货币有一种聚集人才的能量和理想</p>
        <p>强有力的同行支持：区块链在金融科技领域的火爆最终支撑的是善圆区块链</p>
        <p>强有力的智力支持：得到清华大学为代表的诸多高校诸多学科背景的专家学者指导</p>
        <p>强有力的政策支持：在公益慈善、医疗、教育、社会创新实验等领域得到地方政府和单位的积极支持</p>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {swiper, swiperSlide} from 'vue-awesome-swiper'

  export default {
    components: {
      swiper,
      swiperSlide
    },
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          paginationClickable: true
        }
      }
    },
    methods: {}
  }
</script>

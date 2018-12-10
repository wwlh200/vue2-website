<template>
<div class="products">
  <div class="row">
    <div class="col-xs-12 col-sm-6 col-md-3" v-for="product in products" :key="product.id">
      <el-card :body-style="{ padding: '0px' }">
        <img :src="product.images[0].url" :alt="product.images[0].name" />
        <div style="padding: 14px;">
          <span>{{product.model}} {{product.type}}</span>
          <div class="bottom clearfix">
            <el-button type="text" class="button" @click="goProduct(product)">查看详细</el-button>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      products: [{
          id: '1',
          model: 'hewm2388Aw',
          type: '户内白光模块',
          size: '60.96 *60.96mm',
          pitch: '7.62mm （0.3″）',
          version: '1.0',
          explain: '户内白光模块',
          document: '',
          images: [{
            'name': 'carousel1',
            'url': 'http://szhew.oss-cn-shenzhen.aliyuncs.com/car1.jpg'
          }]
        },
        {
          id: '2',
          model: 'hewm2388Aw',
          type: '户内白光模块',
          size: '60.96 *60.96mm',
          pitch: '7.62mm （0.3″）',
          version: '1.0',
          explain: '户内白光模块',
          document: '',
          images: [{
            'name': 'carousel1',
            'url': 'http://szhew.oss-cn-shenzhen.aliyuncs.com/car1.jpg'
          }]
        },
        {
          id: '3',
          model: 'hewm2388Aw',
          type: '户内白光模块',
          size: '60.96 *60.96mm',
          pitch: '7.62mm （0.3″）',
          version: '1.0',
          explain: '户内白光模块',
          document: '',
          images: [{
            'name': 'carousel1',
            'url': 'http://szhew.oss-cn-shenzhen.aliyuncs.com/car1.jpg'
          }]
        },
        {
          id: '4',
          model: 'hewm2388Aw',
          type: '户内白光模块',
          size: '60.96 *60.96mm',
          pitch: '7.62mm （0.3″）',
          version: '1.0',
          explain: '户内白光模块',
          document: '',
          images: [{
            'name': 'carousel1',
            'url': 'http://szhew.oss-cn-shenzhen.aliyuncs.com/car1.jpg'
          }]
        },
      ]
    }
  },
  methods: {
    goProduct(product) {
      this.$router.push({
        name: 'Product', params: { product: product }
      });
    }
  }
}
</script>

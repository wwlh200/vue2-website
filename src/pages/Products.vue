<template>
<div class="products">
  <div class="product">
    <div class="content">
      <div class="block">
        <img :src="products[0].images[0].url" alt="products[0].images[0].name">
        <p>产品型号：{{products[0].model}}</p>
        <p>产品类型：{{products[0].type}}</p>
      </div>
    </div>
    <div class="content">
      <div class="block">
        <img :src="products[0].images[0].url" alt="products[0].images[0].name">
        <p>产品型号：{{products[0].model}}</p>
        <p>产品类型：{{products[0].type}}</p>
      </div>
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
          'url':'http://szhew.oss-cn-shenzhen.aliyuncs.com/car1.jpg?Expires=1544172276&OSSAccessKeyId=TMP.AQFBGitZeTBn0IFyPaewJRJAS2nthZAPLlZEWanAPEVgIOceV_C5cmJfZ9p0ADAtAhQv41r7mE2ozinTloMlv_UafR1NewIVAK6kN4ThpIduhEXdkVbZFMSpBPIf&Signature=h%2FDv%2F3CewWbuCkFfR9jnUkX43DQ%3D'
        }]
      }]
    }
  },
  methods: {}
}
</script>

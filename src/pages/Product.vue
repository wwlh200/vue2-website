<template>
<div class="product">
  <el-card :body-style="{ padding: '0px' }">
    <el-carousel>
      <el-carousel-item v-for="item in product.images" :key="item">
        <img :src="item" :alt="item" />
        </el-carousel-item>
    </el-carousel>
    <div style="padding: 14px;">
      <p>产品型号: {{product.model}}</p>
      <p>类型: {{product.type}}</p>
      <p>实际尺寸: {{product.size}}</p>
      <p>点间距: {{product.pitch}}</p>
      <p>版本: {{product.version}}</p>
      <p>说明: {{product.explain}}</p>
      <p><a :href="product.document">产品规格书（点击下载）</a></p>

    </div>
  </el-card>
</div>
</template>

<script>
export default {
  data() {
    return {
      product:{}
    }
  },
  created() {
    this.product = this.$route.params.product;
  },
  methods: {}
}
</script>

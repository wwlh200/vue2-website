<template>
<div class="product">
  <el-card :body-style="{ padding: '0px' }">
    <img :src="product.images[0].url" :alt="product.images[0].name" />
    <div style="padding: 14px;">
      <p>产品型号: {{product.model}}</p>
      <p>类型: {{product.type}}</p>
      <p>实际尺寸: {{product.size}}</p>
      <p>点间距: {{product.pitch}}</p>
      <p>版本: {{product.version}}</p>
      <p>说明: {{product.explain}}</p>
      <p><a :href="product.images[0].url">产品规格书（点击下载）</a></p>
      
    </div>
  </el-card>
</div>
</template>

<script>
export default {
  created() {
    this.product = this.$route.params.product;
  },
  methods: {}
}
</script>

<template>
<div class="products">
  <div class="row">
    <div class="col-xs-12 col-sm-6 col-md-3" v-for="product in products" :key="product.id">
      <el-card :body-style="{ padding: '0px' }">
        <img :src="product.images[0]" :alt="product.images[0]" />
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
import fetch from 'isomorphic-fetch';
import {
  Loading
} from 'element-ui';
export default {
  data() {
    return {
      products: [],
      type: ''
    }
  },
  watch: {
    '$route': 'getProducts'
  },
  created() {
    this.getProducts();
  },
  methods: {
    goProduct(product) {
      this.$router.push({
        name: 'Product',
        params: {
          product: product
        }
      });
    },
    getProducts() {
      let loadingInstance = Loading.service();
      fetch(`http://localhost:3000/api/product/search?type=${this.$route.params.type}`, {
          method: 'GET',
          headers: {
            "Content-Type": "application/json"
          }
        }).then((response) => {
          if (response.status >= 400) {
            throw new Error("Bad response from server");
          }
          return response.json();
        })
        .then((datas) => {
          datas.map(data => {
            data.images = data.images.split('===');
          })
          this.products = datas;
          this.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
            loadingInstance.close();
          });
        });
    }
  }
}
</script>

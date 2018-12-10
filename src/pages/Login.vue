<template>
<div class="login-bg">
  <div class="login-page">
    <div class="login-page-header">
      <img src='http://szhew.oss-cn-shenzhen.aliyuncs.com/logo.png'/>
      <span>深圳华尔威光电科技有限公司</span>
    </div>
    <div class="login-box">
      <div class="login-title">用户登录</div>
      <el-form :model="login" status-icon label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="age">
          <el-input v-model.number="login.mobile"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="login.password" autocomplete="off"></el-input>
        </el-form-item>        
        <el-form-item>
          <el-button type="primary" @click="handleSubmit()">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      login: {
        mobile: '',
        password: ''
      }
    }
  },
  methods: {
    handleSubmit() {
      if (Object.is(this.login.mobile, 1) && Object.is(this.login.password, '1')) {
        this.$message({
          message: '用户登录成功！',
          type: 'success'
        });
        this.$router.replace({
          path: '/backPage'
        });
      } else {
        this.$message({
          message: '账户名与密码不匹配，请重新输入！',
          type: 'warning'
        });
      }

    }
  }
}
</script>

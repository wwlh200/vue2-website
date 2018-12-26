<style>
.table-btn {
  float: left;
}

.content-header {
  padding-top: 20px;
}
</style>

<template>
<div>
  <div class="content-header">
    <el-form :inline="true" :model="formData" class="demo-form-inline">
      <el-form-item label="产品类型">
        <el-select v-model="value" placeholder="请选择">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="getTableData">查询</el-button>
      </el-form-item>
    </el-form>
  </div>
  <div class="content-middle">
    <el-table border stripe size="small" highlight-current-row :data="tableData" @row-click="getSelectedData">
      <el-table-column type="index" width="60"></el-table-column>
      <el-table-column prop="model" label="产品型号" width="180" sortable></el-table-column>
      <el-table-column prop="type" label="产品类型" width="180"></el-table-column>
      <el-table-column prop="size" label="尺寸" width="180"></el-table-column>
      <el-table-column prop="pitch" label="点间距" width="180"></el-table-column>
      <el-table-column prop="version" label="版本" width="180"></el-table-column>
      <el-table-column prop="description" label="说明" width="180"></el-table-column>
      <el-table-column prop="document" label="产品规格书" width="180"></el-table-column>
      <el-table-column prop="images" label="产品照片" width="300"></el-table-column>
    </el-table>
    <div class="table-btn">
      <el-button type="info" size="small" @click="edit('A')">添加数据</el-button>
      <el-button type="warning" :disabled='isDisable' size="small" @click="edit('U')">修改数据</el-button>
      <el-button type="danger" :disabled='isDisable' size="small" @click="edit('D')">删除数据</el-button>
    </div>
    <el-dialog :visible.sync="showModal" :title="modalTitle" close-on-click-modal :inline="true">
      <el-form :model="editData" label-width="100px">
        <el-form-item label="产品型号:" :disabled="modelDisabled">
          <el-input v-model="editData.model" />
        </el-form-item>
        <el-form-item label="产品类型:">
          <el-select v-model="editData.type" placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="尺寸:">
          <el-input v-model="editData.size" />
        </el-form-item>
        <el-form-item label="点间距:">
          <el-input v-model="editData.pitch" />
        </el-form-item>
        <el-form-item label="版本:">
          <el-input v-model="editData.version" />
        </el-form-item>
        <el-form-item label="说明:">
          <el-input v-model="editData.description" />
        </el-form-item>
        <el-form-item label="产品规格书:">
          <el-input v-model="editData.document" />
        </el-form-item>
        <el-form-item label="产品照片:">
          <el-input v-model="editData.images" placeholder="请以===分割图片"/>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="ok">确 定</el-button>
    <el-button @click="cancel">取 消</el-button>
  </span>
    </el-dialog>
  </div>
</div>
</template>

<script>
import qs from 'qs';
import fetch from 'isomorphic-fetch';
import {
  Loading
} from 'element-ui';
export default {
  data() {
    return {
      formData: {
        type: "", //产品类型
      },
      tableData: [],
      editData: {
        model: '',
        type: '',
        size: '',
        pitch: '',
        version: '',
        description: '',
        document: '',
        images: ''
      },
      modelDisabled: false,
      selectedData: {},
      showModal: false,
      action: '',
      modalTitle: '',
      isDisable: true,
      options: [{
        value: 'type1',
        label: '透明屏'
      }, {
        value: 'type2',
        label: '显示屏'
      }, {
        value: 'type3',
        label: 'micro-led'
      }, {
        value: 'type4',
        label: '室内外模具'
      }, {
        value: 'type5',
        label: '点阵/数码管/单元管'
      }],
      value: 'type1'
    }
  },
  methods: {
    edit(action) {
      if (action == 'A') {
        this.modalTitle = '新增数据';
        this.editData = {};
        this.showModal = true;
        this.action = 'A';
        this.modelDisabled = false;
      } else if (action == 'U') {
        this.modalTitle = '修改数据';
        this.editData = this.selectedData;
        this.showModal = true;
        this.action = 'U';
        this.modelDisabled = true;
      } else {
        this.$confirm('确定删除该数据？', '删除', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.updTableData(this.selectedData, 'D');
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });;
      }

    },
    ok() {
      this.showModal = false;
      this.updTableData(this.editData, this.action);
      this.editData = {};
    },
    cancel() {
      this.showModal = false;
      this.editData = {};
    },
    getTableData() {
      let loadingInstance = Loading.service();
      fetch(`http://111.230.245.131:3000/api/product/search?type=${this.value}`, {
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
          this.tableData = datas;
          this.isDisable = true;
          this.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
            loadingInstance.close();
          });
        });
    },
    updTableData(data, action) {
      debugger;
      let [url, reqData, title, params] = ['', {}, '', ''];
      if (action == 'A') {
        url = 'http://111.230.245.131:3000/api/product/add';
        reqData = data;
        params = {
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(reqData)
        };
        title = '新增';
      } else if (action == 'U') {
        url = 'http://111.230.245.131:3000/api/product/update';
        reqData = data;
        params = {
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(reqData)
        };
        title = '修改';
      } else {
        url = `http://111.230.245.131:3000/api/product/del?model=${data.model}`;
        params = {
          method: 'GET',
          headers: {
            "Content-Type": "application/json"
          }
        };
        title = '删除';
      }
      let loadingInstance = Loading.service();
      fetch(url, params).then((response) => {
          if (response.status >= 400) {
            this.$message({
              message: `${title}失败！`,
              type: 'warning'
            });
            throw new Error("Bad response from server");
          }
          return response.json();
        })
        .then((data) => {
          if (data.success) {
            this.$message({
              message: `${title}成功`,
              type: 'success'
            });
          } else {
            this.$message({
              message: `${title}失败！`,
              type: 'warning'
            });
          }
          this.isDisable = true;
          this.getTableData();
          this.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
            loadingInstance.close();
          });
        });
    },
    getSelectedData(data) {
      this.selectedData = data;
      this.isDisable = false
    }
  },
  created() {
    this.getTableData();
  }
}
</script>

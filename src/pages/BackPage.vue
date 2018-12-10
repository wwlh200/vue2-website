<style>
.table-btn {
  float: left;
}

.table-page {
  float: right;
}

.content-header {
  padding-top: 20px;
}
</style>

<template>
<div>
  <div class="content-header">
    <el-form :inline="true" :model="formData" class="demo-form-inline">
      <el-form-item label="产品型号">
        <el-input v-model="formData.tagName" placeholder="产品型号"></el-input>
      </el-form-item>
      <el-form-item label="产品类型">
        <el-select v-model="selectValue" placeholder="请选择">
          <el-option v-for="item in selectData" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="getTableData">查询</el-button>
      </el-form-item>
    </el-form>
  </div>
  <div class="content-middle">
    <el-table :height="tableHeight" border stripe size="small"  :columns="columns" :data="tableData" @on-row-click="getSelectedData">
      <div slot="footer">
        <div class="table-btn">
          <el-button type="info" size="small" @click="edit('A')">添加标签</el-button>
          <el-button type="warning" :disabled='isDisable' size="small" @click="edit('U')">修改标签</el-button>
          <el-button type="error" :disabled='isDisable' size="small" @click="edit('D')">删除标签</el-button>
        </div>
        <div class="table-page">
          <el-pagination placement="top" size="small" show-total show-elevator show-sizer :total='total' @on-change="changePage" @on-page-size-change="changePageSize"></el-pagination>
        </div>
      </div>
    </el-table>
    <el-dialog v-model="showModal" :title="modalTitle" :mask-closable="false" @on-ok="ok" @on-cancel="cancel">
      <el-form ref="editData" :model="editData" label-position="right" :label-width="100">
        <el-form-item label="标签编号:" prop="tagId">
          <el-input disabled v-model="editData.tagId" placeholder="自动编号" />
        </el-form-item>
        <el-form-item label="标签名称:" prop="name">
          <el-input v-model="editData.name" maxlength="4" />
        </el-form-item>
        <el-form-item label="类型:" prop="type">
          <el-select v-model="editData.type" size="small">
            <el-option v-for="item in selectData" :value="item.value" :key="item.value">
              {{item.value + "  " + item.label }}</el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</div>
</template>

<script>
import qs from 'qs';

export default {
  data() {
    return {
      loading: false,
      tableHeight: 0,
      formData: {
        tagName: "", //标签名称
        type: "model", //类型
      },
      columns: [{
          type: 'index',
          title: '序号',
          width: 80,
          align: 'center'
        },
        {
          title: '标签编号',
          key: 'tagId',
          width: 100
        },
        {
          title: '标签名称',
          key: 'tagName',
          width: 100
        },
        {
          title: '等级',
          key: 'rate',
          width: 100
        }
      ],
      tableData: [],
      selectData: [{
          value: 'model',
          label: '人物'
        },
        {
          value: 'space',
          label: '时空'
        },
        {
          value: 'topic',
          label: '话题'
        }
      ],
      selectValue:'',
      editData: {
        tagId: '',
        name: '',
        type: ''
      },
      selectedData: {},
      tipMessage: '',
      showModal: false,
      action: '',
      modalTitle: '',
      isDisable: true,
      total: 0, //总条数
      size: "10", //每页大小，可选
      page: "0", //页码，从0开始，可选
    }
  },
  watch: {
    selectedData: function (data) {
      data.tagId !== undefined ? this.isDisable = false : this.isDisable = true;
    }
  },
  methods: {
    edit(action) {
      if (action == 'A') {
        this.modalTitle = '新增标签';
        this.editData = {};
        this.showModal = true;
        this.action = 'A';
      } else if (action == 'U') {
        this.modalTitle = '修改标签';
        this.editData = $.extend({}, this.selectedData, {
          name: this.selectedData.tagName
        });
        this.showModal = true;
        this.action = 'U';
      } else {
        let that = this;
        this.$el - dialog.confirm({
          title: '删除',
          content: '确定删除该数据？',
          onOk: () => {
            this.updTableData(that.selectedData, 'D');
          }
        });
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
      let that = this;
      this.loading = true;
      this.$ajax({
        method: 'post',
        url: this.$store.getters.baseUrl + '/v1/tag/query',
        data: qs.stringify($.extend({}, that.formData, {
          page: that.page,
          size: that.size,
          sort: '',
          token: that.$store.getters.token
        }))
      }).then(res => {
        that.$Notice.success({
          title: '查询标签信息成功！'
        });
        if (res.data.data) {
          that.tableData = res.data.data.content;
          that.total = res.data.data.totalElements;
          that.selectedData = {};
        } else {
          that.tableData = [];
          that.total = 0;
          that.selectedData = {};
        }
      }).catch(err => {
        that.$Notice.error({
          title: `用户操作失败！`
        });
      })
    },
    updTableData(data, action) {
      let [that, url, reqData, title] = [this, '', {}, ''];
      if (action == 'A') {
        url = this.$store.getters.baseUrl + '/v1/tag/create';
        reqData = $.extend({}, data, {
          token: this.$store.getters.token
        });
        title = '新增';
      } else if (action == 'U') {
        url = this.$store.getters.baseUrl + '/v1/tag/modify';
        reqData = $.extend({}, data, {
          dataString: JSON.stringify(data),
          token: this.$store.getters.token
        });
        title = '修改';
      } else {
        url = this.$store.getters.baseUrl + '/v1/tag/delete';
        reqData = $.extend({}, data, {
          token: this.$store.getters.token
        });
        title = '删除';
      }
      this.$Loading.start();
      this.$ajax({
        method: 'post',
        url: url,
        data: qs.stringify(reqData)
      }).then(res => {
        that.$Loading.finish();
        that.$Notice.success({
          title: `${title}标签成功！`
        });
        that.getTableData();
      }).catch(err => {
        debugger
        that.$Loading.error();
        that.$Notice.error({
          title: `用户操作失败！`
        });
      })
    },
    getSelectedData(data) {
      this.selectedData = data;
      this.selectedData.type = this.formData.type;
    },
    changePage(page) {
      this.page = page - 1;
      this.getTableData();
    },
    changePageSize(size) {
      this.size = size;
      this.getTableData();
    }
  },
  created() {
    this.getTableData();
  },
  mounted: function () {
    //获取表格高度
    this.$nextTick(function () {
      this.tableHeight = $('.frame-layout-right').height() - $('.content-header').outerHeight(true);
    });
    const that = this;
    // 高度自适应
    window.onresize = function temp() {
      that.tableHeight = $('.frame-layout-right').height() - $('.content-header').outerHeight(true);
    };
  }
}
</script>

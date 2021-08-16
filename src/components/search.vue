<style scoped>
.wind{width:1200px;margin: 0px auto;padding-bottom: 53px;}
.heard{font-weight: bold;color: #27282C;font-size: 17px;padding: 15px 0px;text-align: left;}
.el-tabs{background: white;height: 700px;}
.el-tabs /deep/ .el-tabs__content{padding: 37px 54px;}
.el-tabs /deep/ .el-tabs__header{background: #F2F2F2;border: 1px solid #E9E9E9;color: #27282C;}
.el-tabs /deep/ .el-tabs__header .is-active{color: white;background: #00AAEA;}
.el-tabs /deep/ .el-tabs__item{color: #27282C;}
.el-tabs /deep/ .el-tabs__item:hover{color: #27282C !important;}
.el-tabs /deep/ .el-tabs__header .is-active:hover{color: white !important;}
.pl_search{
  border: 1px solid #E9E9E9;
  text-align: left;
  color: #27282C;
  font-size: 15px;
  line-height: 25px;
  margin-bottom: 15px;
}
.pl_search /deep/ .el-textarea__inner{border: none;height: 500px;}
.pl_search .el-radio /deep/ .el-radio__label{font-size: 15px;line-height: 30px;}
.pl_radio{
  background: #F2F2F2;
  padding: 0px 20px;
}
.coa_search {text-align: left;border: 1px solid #E9E9E9;padding: 40px 0px;height: 500px;}
.coa_search .text1{color:#333;font-size: 14px;font-weight: bold;}
.coa_search .el-col{padding: 0px 44px;}
.coa_search .el-form{margin-top: 20px;}
.coa_search .el-form /deep/ .el-form-item__label{font-size: 11px;color: #27282C;line-height:normal;}
.coa_search .text2{color: #666666;font-size: 10px;line-height: 25px;}
.coa_search .text3{color: #27282C;font-size: 12px;line-height: 25px;margin:30px 0px;}
.coa_search .text3 span{color: #666666;margin-right: 30px;}
.coa_search .text4{font-size: 12px;color: #27282C;}
.coa_search .text4 span{color: #00AAEA;line-height: 25px;cursor: pointer;}
</style>
<template>
  <div style="background: #F9F9F9;">
    <div class="wind">
      <div class="heard">高级检索</div>
      <el-tabs type="border-card">
        <el-tab-pane label="结构式搜索">
          <iframe id="iframe" src="static/search/ketcher_labgle.html" scrolling="no" width="100%" style="height:700px;" frameborder="0"></iframe>
        </el-tab-pane>
        <el-tab-pane label="批量查询">
          <div class="pl_search">
            <div class="pl_radio">
              <el-radio-group v-model="batch.radio">
                <el-radio :label="1">搜CAS</el-radio>
                <el-radio :label="2">搜英文名</el-radio>
              </el-radio-group>
            </div>
            <div>
              <el-input
                type="textarea"
                placeholder="批量输入完整CAS或英文名，用回车隔开。"
                v-model="batch.textarea">
              </el-input>
            </div>
            <div>
              　使用帮助：先选择需要搜索的信息类型，同时输入多个关键词，用回车隔开。   例如：877264-44-3    11-82-8    12-76-2
            </div>
          </div>
          <el-button type="primary" @click="batch_search()">批量搜索</el-button>
        </el-tab-pane>
        <el-tab-pane label="COA搜索">
          <div class="coa_search">
            <el-row>
              <el-col :span="10" style="border-right: 1px solid #E9E9E9;">
                <div class="text1">质检报告（COA）文件</div>
                <el-form label-position="top" label-width="80px" :model="formLabelAlign">
                  <el-form-item label="产品编号（Item Number）">
                    <el-input v-model="formLabelAlign.name"></el-input>
                  </el-form-item>
                  <el-form-item label="批号（Lot Number）">
                    <el-input v-model="formLabelAlign.region"></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary">查询并下载</el-button>
                  </el-form-item>
                </el-form>
              </el-col>
              <el-col :span="12">
                <div class="text1">如何获取质检报告(COA)?</div>
                <div class="text2">请输入编号(Item Number)和一个与之匹配的批号(Lot Number).</div>
                <div class="text3">
                  <div>例如：</div>
                  <span>货号：AD033419</span><span>批号：AD033419-18082201</span>
                </div>
                <div class="text4">
                  <div>在货品标签上如何找到编号和批号？</div>
                  <span>查看示例</span>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-tab-pane>
        <el-tab-pane label="MSDS搜索">
          <div class="coa_search">
            <el-row>
              <el-col :span="10">
                <div class="text1">搜索化学品安全技术说明（MSDS)</div>
                <el-form label-position="top" label-width="80px" :model="formLabelAlign">
                  <el-form-item label="请输入产品编号">
                    <el-input v-model="formLabelAlign.name"></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary">查询并下载</el-button>
                  </el-form-item>
                </el-form>
              </el-col>
            </el-row>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: "search",
  data() {
    return {
      batch:{
        radio:1,
        textarea:'',
      },
      formLabelAlign:''
    };
  },
  created() {},
  methods: {
    batch_search(){
      localStorage.setItem('search_radio',this.batch.radio)
      localStorage.setItem('search_arr',JSON.stringify(this.batch.textarea.split('\n')))
      this.$router.push({
        path: "/Menu",
        name: "Menu",
      });
    },
  }
};
</script>

<style scoped>
.credit .el-table {font-size: 12px;margin-top: 26px;}
.credit .el-table /deep/ .el-table__header th{color: #333333;font-size: 12px;font-weight: normal;background: #D9D9D9;}
h1{font-size: 18px;color: #333333;font-weight: bold;}
h2{color: #333333;font-size: 12px;font-weight: normal;}
h3{color: #00AAEA;font-size: 12px;font-weight: normal;cursor: pointer;}
.heard{background: #F5F5F5;display: flex;align-items: center;justify-content: space-between;padding: 0px 14px;}
.heard_a{display: flex;align-items: center;justify-content: space-between;}
.heard_a div{margin-right: 30px;}
.credit /deep/ .el-dialog .el-dialog__header{
    color: #333333;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    border-bottom: 1px solid #DDDDDD;
    padding: 14px 0px;
}
.credit /deep/ .el-dialog .el-dialog__close{display: none;}
.credit /deep/ .el-dialog .el-form .el-form-item__content{font-size: 12px;color: #666666;line-height: 20px;}
.credit /deep/ .el-dialog .el-form .el-form-item__label{font-size: 12px;color: #666666;line-height: 20px;}
.credit /deep/ .el-dialog .el-dialog__footer{text-align: center;}
.credit /deep/ .el-dialog .el-dialog__footer .el-button{width:200px;}
</style>

<template>
  <div class="credit">
    <div class="heard">
        <div class="heard_a">
            <div>
                <h1>{{newData.intergral}}</h1>
                <h2>我的积分</h2>
            </div>
        </div>
        <h3 @click="dialogVisible=true">积分获取及抵扣规则</h3>
    </div>
    <el-table :data="data.list" stripe>
      <el-table-column align="center" label='变动前积分'>
          <template slot-scope="scope">
              <span style="color:#00AAEA;">{{scope.row.before_intergral}}</span>
          </template>
      </el-table-column>
      <el-table-column align="center" label="变动积分">
          <template slot-scope="scope">
              <el-tag :type="Number(scope.row.change_intergral)>0?'success':'danger'">{{scope.row.change_intergral}}</el-tag>
          </template>
      </el-table-column>
      <el-table-column align="center" label="变动后积分">
          <template slot-scope="scope">{{(Number(scope.row.before_intergral)+Number(scope.row.change_intergral)).toFixed(2)}}</template>
      </el-table-column>
      <el-table-column align="center" label="时间">
        <template slot-scope="scope">{{scope.row.create_time}}</template>
      </el-table-column>
      <el-table-column align="center" label="备注">
        <template slot-scope="scope">{{scope.row.remark}}</template>
      </el-table-column>
    </el-table>

    <el-pagination
            style="margin:20px 0px;text-align:right;"
            background
            :page-size="$root.pageSize"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            layout="prev, pager, next"
            :total="data.total"
    ></el-pagination>

    <el-dialog
        title="积分获取及兑换商品规则"
        :visible.sync="dialogVisible"
        width="25%">
        <el-form label-position="left" label-width="80px">
            <el-form-item label="我的积分：">
                <span>
                    在官方商城购物付款完成并且经工作人员确认后
                    按照一定比例获得积分（可能会一些延迟）, 我的
                    积分包含可用积分。
                </span>
            </el-form-item>
            <el-form-item label="积分用途：">
                <span>可兑换指定商品。</span>
            </el-form-item>
            <el-form-item label="特殊说明：">
                <span>
                    如发生订单金额调整，所获得积分也将进行调整，
                    详细的积分变化情况可在账户中心查看。
                </span>
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "personal_credit",
  data() {
    return {
      data:{},
      newData:{},
      queryList:{page:1},
      currentPage:1,
      dialogVisible:false,
    };
  },
  created () {
    this.fetchat()
  },
  methods: {
    fetchat(){
      this.newData =JSON.parse(localStorage.getItem('newData'))
      this.$post('/intergralLog').then(res=>{
          if (res && res.code == 200){
              this.data = res.data
          }else{
              this.$message.error(res.msg);
          }
      }).catch(function(error) {
          console.log(error)
      });
    },
    handleCurrentChange(page_current) {
      this.queryList.page = this.currentPage = page_current;
      this.fetchat();
    },
  }
};
</script>

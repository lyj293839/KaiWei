<style scoped>
.amount{color: #333333;}
.amount_right{background: #C5F0FC;font-size: 13px;padding: 0px 13px 56px 13px;}
.amount_right .text1{font-weight: bold;font-size: 15px;line-height: 40px;}
.amount_left .table_a{width: 100%;border-collapse: collapse;line-height: 40px;text-align: center;}
.amount_left .table_a td{padding: 10px 0px;font-size: 16px;}
.amount_left .table_a td .text1{font-size: 22px;color: #00AAEA;line-height: 30px;}
.amount_left .el-table {font-size: 12px;margin-top: 10px;}
.amount_left .el-table /deep/ .el-table__header th{color: #666;font-size: 12px;font-weight: normal;}
</style>
<template>
<div class="amount">
    <el-row type="flex" justify="space-between">
        <el-col :span="17">
            <div class="amount_left">
                <table 
                    border="1"
                    class="table_a"
                    bordercolor="#E9E9E9">
                    <tr>
                        <td>
                            <div>总额度</div>
                            <div class="text1">{{newData.total_money}}</div>
                        </td>
                        <td>
                            <div>剩余额度</div>
                            <div class="text1">{{(Number(newData.total_money)-Number(newData.used_money)).toFixed(2)}}</div>
                        </td>
                        <td>
                            <div>等待还款</div>
                            <div class="text1">{{newData.used_money}}</div>
                        </td>
                        <td>
                            <el-button type="primary" @click="to_order()">去还款</el-button>
                        </td>
                    </tr>
                </table>
                <el-table :data="data.list">
                    <el-table-column align="center" label='变动前金额' width="120">
                        <template slot-scope="scope">
                            <span style="color:#00AAEA;">{{scope.row.sure_money}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column align="center" label="变动金额" width="120">
                        <template slot-scope="scope">
                            <el-tag :type="Number(scope.row.change_money)>0?'success':'danger'">{{scope.row.change_money}}</el-tag>
                        </template>
                    </el-table-column>
                    <el-table-column align="center" label="变动后金额" width="120">
                        <template slot-scope="scope">{{(Number(scope.row.sure_money)+Number(scope.row.change_money)).toFixed(2)}}</template>
                    </el-table-column>
                    <el-table-column align="center" label="时间" width="90">
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
            </div>
        </el-col>
        <el-col :span="6">
            <div class="amount_right">
                <div class="text1">凯为提醒您~</div>
                <div>
                    信用额度是根据您的综合因素审批的
                    您可用信用额度进行选购，当月选购
                    后，请与收到发票日后尽快还款哦～
                    如对你的额度有任何疑问或不懂可点
                    击侧边连联系客服按钮进行解答。
                    凯为祝您生活愉快每一天～～
                </div>
            </div>
        </el-col>
    </el-row>
</div>
</template>

<script>
export default {
  name: 'personal_amount',
  data () {
    return {
        data:{},
        newData:{},
        queryList:{
            page:1,
        },
        currentPage:1,
    }
  },
  created () {
    this.fetchat()
  },
  methods: {
    fetchat(){
      this.$post('/creditLogs',this.queryList).then(res=>{
          if (res && res.code == 200){
              this.data = res.data
              this.newData = JSON.parse(localStorage.getItem("newData"))
          }else{
              this.$message.error(res.msg);
          }
      }).catch(function(error) {
          console.log(error)
      });
    //   this.$post('/newData').then(res=>{
    //         if (res && res.code == 200){
    //             var a = JSON.stringify(res.data)
    //             localStorage.setItem('newData',a)
    //             localStorage.setItem('shopNum',res.data.cart_num)
    //             this.newData = res.data
    //         }else{
    //             this.$message.error(res.msg);
    //         }
    //     }).catch(function(error) {
    //         console.log(error)
    //     });
    },
    handleCurrentChange(page_current){
      this.queryList.page = this.currentPage = page_current;
      this.fetchat();
    },
    to_order(){
        this.$router.push({
            path: "/amount_order",
            name: "amount_order",
        });
    }
  }
}
</script>

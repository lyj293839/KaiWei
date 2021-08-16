<style scoped>
.bill .el_row{display:-webkit-box; flex-wrap: wrap;}
.bill .el_row .el-col{padding: 0px 10px;margin-bottom: 20px;}
.bill_a{
    border: 1px solid #00AAEA;
    font-size: 12px;
    color: #333;
    padding: 10px 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 120px;
}
.bill_a .bill_add{text-align: center;line-height: 120px;font-size: 36px;cursor: pointer;}
.bill_a .text1{display: flex;align-items: center;padding-bottom: 10px;border-bottom: 1px solid #DDDDDD;}
.bill_a .text1 img{margin-right: 5px;}
.bill_a .text2 div{margin-top: 10px;}
.bill_a .text3 {text-align: right; margin-top: 10px;}
.bill_a .text3 .el-button{font-size: 12px;color: #00AAEA;padding: 0px;}

.bill /deep/ .el-dialog .el-dialog__header{
    color: #333333;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    border-bottom: 1px solid #DDDDDD;
    padding: 14px 0px;
}
.bill /deep/ .el-dialog .el-dialog__close{display: none;}
.bill /deep/ .el-dialog .el-dialog__body{padding: 20px 50px;}
/* .bill /deep/ .el-form-item {margin-bottom: 10px;}
.bill /deep/ .el-form-item .el-form-item__label{padding: 0px;}
.bill /deep/ .el-form .el-radio-group .el-radio-button{border: 1px solid #DDDDDD;margin-right: 10px;}
.bill /deep/ .el-form .el-radio-group .el-radio-button__inner{border: none;background: white;font-size: 16px;border-radius:0px;} */
.bill .foot{display: flex;justify-content: space-between;align-items: center;}
</style>

<template>
  <div class="bill">
      <el-row class='el_row'>
          <el-col :span="6">
              <div class="bill_a">
                <div class="bill_add" @click="Add()">
                    <i class="el-icon-plus"></i>
                </div>
              </div>
          </el-col>
          <el-col :span="6" v-for="item in data.list">
              <div class="bill_a">
                <div>
                    <div class="text1">
                        <img src="@/assets/image/组 3344@2x.png" width="16" height="16">
                        <span>税号：{{item.duty_paragraph}}</span>
                    </div>
                    <div class="text2">
                        <div>类型：{{item.type==1?'普通发票':'其他发票'}}</div>
                        <div>电话：{{item.mobile}}</div>
                    </div>
                </div>
                <div class="text3">
                    <el-button type="text" @click="Edit(item)">重新编辑</el-button>
                    <el-button type="text" style="color:red;" @click="del(item.id)">删除</el-button>
                </div>
              </div>
          </el-col>
      </el-row>

    <el-dialog
        title="发票信息"
        class="dialog"
        :visible.sync="bill_Visible"
        @close='close_bill()'
        width="812px">
        <Bill ref="child"></Bill>
    </el-dialog>
  </div>
</template>

<script> 
import Bill from "./commponents/add_bill";
export default {
  name: 'personal_bill',
  components:{Bill},
  data () {
    return {
        bill_Visible:false,
        data:{},
    }
  },
  created () {
      this.fetchat()
  },
  methods: {
    fetchat(){
        this.$post('/invoiceList ').then(res=>{
          if (res && res.code == 200){
              this.data = res.data
          }else{
              this.$message.error(res.msg);
          }
        }).catch(function(error) {
            console.log(error)
        });
    },
    Add(){
        this.bill_Visible = true
        setTimeout(()=>{
          this.$refs.child.Add()
        },200)
    },
    Edit(item){
        this.bill_Visible = true
        setTimeout(()=>{
          this.$refs.child.Edit(item)
        },200)
    },
    save_bill(){
        this.bill_Visible = false
        this.fetchat()
    },
    del(id){
        this.$confirm('此操作将删除该地址, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$post('/delInvoice',{id}).then(res=>{
              if (res && res.code == 200){
                this.$message.success(res.msg);
                this.fetchat()
              }else{
                this.$message.error(res.msg);
              }
          }).catch(function(error) {
              console.log(error)
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    },
    close_bill(){
      this.$refs.child.resetForm()
      this.bill_Visible = false
    },
  }
}
</script>

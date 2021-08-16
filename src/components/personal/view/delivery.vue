<style scoped>
h1 {
  font-size: 15px;
  color: #333333;
  font-weight: bold;
}
.heard {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #dddddd;
}
.delivery .el-table {font-size: 12px;margin-top: 26px;}
.delivery .el-table /deep/ .el-table__header th{color: #333333;font-size: 12px;font-weight: normal;background: #D9D9D9;}
.delivery /deep/ .el-dialog .el-dialog__header{
    color: #333333;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    border-bottom: 1px solid #DDDDDD;
    padding: 14px 0px;
}
.delivery /deep/ .el-dialog .el-dialog__close{display: none;}
.delivery /deep/ .el-dialog .el-dialog__body{padding: 20px 50px;}
/* .delivery /deep/ .el-dialog .el-form .el-input{width: 300px;} */
.dialog /deep/ .el-form .el-radio-group .el-radio-button{border: 1px solid #DDDDDD;margin-right: 10px;}
.dialog /deep/ .el-form .el-radio-group .el-radio-button__inner{border: none;background: white;font-size: 16px;border-radius:0px;}
.dialog .foot{display: flex;justify-content: space-between;align-items: center;}
.dialog /deep/ .el-form-item .el-form-item__label{padding: 0px;}

.delivery .el-pagination{text-align: right;}
/* .delivery /deep/ .el-pager li {
  width: 40px;
  height: 40px;
  line-height: 38px;
  border: 2px solid #eaeaea;
  color: #6c6c6c;
  background: transparent;
}
.delivery /deep/ .el-pager li:not(.disabled).active {
  border: 2px solid #00aaea;
  color: #00aaea;
  background-color: transparent;
}
.delivery /deep/ .el-pager li:hover {
  border: 2px solid #00aaea;
  color: #00aaea;
}
.delivery /deep/ .btn-prev,
.delivery /deep/ .btn-next {
  width: 40px;
  height: 40px;
  line-height: 40px;
} */
</style>

<template>
  <div class="delivery">
    <div class="heard">
      <h1>收货地址</h1>
      <el-button type="primary" size="small" plain @click="Add_delivery()">新增收货地址</el-button>
    </div>
    <el-table :data="data.list" stripe>
      <el-table-column align="left" label="收货人" width="100">
        <template slot-scope="scope">
          <span>{{scope.row.username}}</span>
        </template>
      </el-table-column>
      <el-table-column align="left" label="所在地区" >
        <template slot-scope="scope">
          {{scope.row.province_name}}-
          {{scope.row.city_name}}-
          {{scope.row.area_name}}-
          {{scope.row.address}}
        </template>
      </el-table-column>
      <el-table-column align="left" label="电话" width="200">
        <template slot-scope="scope">{{scope.row.mobile}}</template>
      </el-table-column>
      <el-table-column align="left" label="状态" width="100">
        <template slot-scope="scope">
          <el-tag>{{scope.row.label==1?'公司':'家'}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="left" label="操作" width="100">
        <template slot-scope="scope">
            <el-button type="text" @click="deliveryEdit(scope.row)">编辑</el-button>
            <el-button type="text" @click="deliveryDel(scope.row.address_id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
        title="收货地址"
        class="dialog"
        :visible.sync="dialogVisible"
        @close='close_delivery'
        width="812px">
        <AddDelivery ref="child" ></AddDelivery>
    </el-dialog>

    <!-- <el-dialog
        title="编辑收货地址"
        class="dialog"
        :visible.sync="dialogEdit"
        @close='editClose'
        width="812px">
        <el-form label-position="top" label-width="100px">
            <el-row type="flex" justify="space-between">
                <el-col :span="11">
                    <el-form-item label="联系人" required>
                        <el-input v-model="editData.username" placeholder="请输入内容"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="11">
                    <el-form-item label="联系电话" required>
                        <el-input v-model="editData.mobile" placeholder="请输入内容"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row type="flex" justify="space-between">
                <el-col :span="11">
                    <el-form-item label="邮政编码">
                        <el-input v-model="editData.postcode" placeholder="请输入内容"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row type="flex" justify="space-between">
                <el-col :span="7">
                    <el-form-item label="省" required>
                        <el-select v-model="editData.province_id" placeholder="请选择" @change="provinceChange()">
                            <el-option
                                v-for="item in provinceList"
                                :key="item.id"
                                :label="item.name"
                                :value="item.id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="7">
                    <el-form-item label="市" required>
                        <el-select v-model="editData.city_id" placeholder="请选择" @change="cityChange()">
                            <el-option
                                v-for="item in cityList"
                                :key="item.id"
                                :label="item.name"
                                :value="item.id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="7">
                    <el-form-item label="区" required>
                        <el-select v-model="editData.area_id" placeholder="请选择">
                            <el-option
                                v-for="item in areaList"
                                :key="item.id"
                                :label="item.name"
                                :value="item.id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-form-item label="街道地址" required>
                <el-input v-model="editData.address" placeholder="请输入内容" style="width:100%;"></el-input>
            </el-form-item>
            <el-form-item label="积分用途：">
                <div class="foot">
                    <el-radio-group v-model="editData.label" fill="#00AAEA">
                        <el-radio-button :label="1">公司</el-radio-button>
                        <el-radio-button :label="2">家</el-radio-button>
                    </el-radio-group>
                    <div>
                        <el-button type="primary" :loading="loading" @click="editAddress()">确定</el-button>
                        <el-button @click='editClose()'>取消</el-button>
                    </div>
                </div>
            </el-form-item>
        </el-form>
    </el-dialog> -->

    <el-pagination
            style="margin:20px 0px;"
            background
            :page-size="$root.pageSize"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            layout="prev, pager, next"
            :total="data.total"
    ></el-pagination>
  </div>
</template>

<script>
import AddDelivery from "./commponents/add_delivery";
export default {
  name: "personal_delivery",
  components:{
    AddDelivery,
  },
  data() {
    return {
        dialogVisible:false,
        data:{},
        queryList:{
          page:1,
        },
        currentPage:1,
    };
  },
  created () {
    this.fetchat()
  },
  methods: {
    fetchat(){
      this.$post('/addressList',this.queryList).then(res=>{
          if (res && res.code == 200){
              this.data = res.data
          }else{
              this.$message.error(res.msg);
          }
      }).catch(function(error) {
          console.log(error)
      });
    },
    handleCurrentChange(page_current){
      this.queryList.page = this.currentPage = page_current;
      this.fetchat();
    },
    Add_delivery(){
      this.dialogVisible = true
      this.$refs.child.Add()
    },
    deliveryDel(id){
      this.$confirm('此操作将删除该地址, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$post('/delAddress',{address_id:id}).then(res=>{
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
    deliveryEdit(item){
      this.dialogVisible = true
      setTimeout(()=>{
        this.$refs.child.Edit(item)
      },200)
    },
    save_delivery(){
      this.dialogVisible = false
      this.fetchat()
    },
    close_delivery(){
      this.dialogVisible = false
    }
  }
}
</script>

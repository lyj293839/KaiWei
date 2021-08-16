<style scoped>
.hot_list{display: flex;flex-wrap: wrap;width: 100%;}
.hot_list li {
  width: 24%;
  height: 356px;
  background: #ffffff;
  margin-top: 5px;
  border: 1px solid #e9e9e9;
  text-align: center;
  margin-right: 6px;
}
.hot_list_name {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 217px;
  margin: 0px auto;
  font-size: 12px;
  line-height: 16px;
  text-align: left;
}
.hot_list_price {
  width: 217px;
  font-size: 16px;
  line-height: 21px;
  color: #d70000;
  text-align: left;
  margin: 0px auto;
  margin-top: 28px;
  margin-bottom: 6px;
}
.hot_list_inqu{
  color: #D71900;
  border: 1px solid #d71900;
  cursor: pointer;
  display: inline-block;
  margin: 26px 0px 5px 6px;
  font-size: 11px;
  padding: 3px 8px;
}
.hot_list .el-row {
  border-top: 1px solid #e9e9e9;
}
.hot_list .el-row .el-col {
  font-size: 9px;
  line-height: 23px;
  text-align: left;
  padding:0px 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #666;
}
.collect .el-pagination{text-align: right;}
.collect /deep/ .el-pager li {
  width: 40px;
  height: 40px;
  line-height: 38px;
  border: 2px solid #eaeaea;
  color: #6c6c6c;
  background: transparent;
}
.collect /deep/ .el-pager li:not(.disabled).active {
  border: 2px solid #00aaea;
  color: #00aaea;
  background-color: transparent;
}
.collect /deep/ .el-pager li:hover {
  border: 2px solid #00aaea;
  color: #00aaea;
}
.collect /deep/ .btn-prev,
.collect /deep/ .btn-next {
  width: 40px;
  height: 40px;
  line-height: 40px;
}
</style>

<template>
  <div class="collect">
      <ul class="hot_list" v-if="data&&data.length">
        <li v-for="item in data" @click="to_prodDetail(item)">
          <img :src="item.img" width="100%" height="230" />
          <div class="hot_list_name">
            <span v-if="item.prod_name!='N/A'&&item.prod_name">{{item.prod_name}}</span>
            <span v-else>
              <span v-if="item.prod_ename!='N/A'&&item.prod_ename">{{item.prod_ename}}</span>
              <span v-else></span>
            </span>
          </div>
          <div style="text-align:left;">
            <div v-if="item.is_inquiry==1" class="hot_list_price">¥{{item.price}}</div>
            <div v-else class="hot_list_inqu" @click.stop="toInquiry(item)">
              点击询价
            </div>
          </div>
          <el-row>
            <el-col :span="14">
              <el-tooltip class="item" effect="dark" :disabled="!item.prod_no" :content="item.prod_no" placement="top">
                <span>产品编号：{{item.prod_no}}</span>
              </el-tooltip>
            </el-col>
            <el-col :span="10">
              <el-tooltip class="item" effect="dark" :disabled="!item.mdl_no" :content="item.mdl_no" placement="top">
                <span>编号：{{item.mdl_no}}</span>
              </el-tooltip>
            </el-col>
            <el-col :span="24">CAS No.：{{item.cas_no}}</el-col>
          </el-row>
        </li>
      </ul>

      <div v-if="!data||data.length==0" style="display:flex;justify-content: center;margin-top:30px;">
        <img src="@/assets/image/none.png" width="260" height="260" />
      </div>
  </div>
</template>

<script>
export default {
  name: 'personal_history',
  data () {
    return {
      data:{},
      queryList:{
        page:1
      },
      currentPage:1
    }
  },
  created () {
    this.fetchat()
  },
  methods: {
    fetchat(){
      this.$post('/prodBrowseHistory',this.queryList).then(res=>{
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
    to_prodDetail(item){
      this.$All.historyProd(item)
      this.$router.push({
        path: "/prod_detail",
        name: "prod_detail",
        query: {
          cas_no: item.cas_no
        }
      });
    },
    toInquiry(item){
      let name = ''
      if(item.prod_name!='N/A'&&item.prod_name){
        name = item.prod_name
      }else{
        if(item.prod_ename!='N/A'&&item.prod_ename){
          name = item.prod_ename
        }else{
          name = ''
        }
      }
      this.$router.push({
        path: "/inquiry",
        name: "inquiry",
        query: {
          prod_name:name,
          cas_no:item.cas_no
        }
      });
    }
  }
}
</script>

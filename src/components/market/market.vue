<style scoped>
.wind{background: #f6f6f6;}
.banner {
  width: 100%;
  height: auto;
  /* background: url("../../assets/image/图像52@2x.png") no-repeat center;
  background-size: 100% 100%; */
}
.wind_a{
    width: 1200px;
    margin: 0px auto;
    padding: 12px 0px;
    color: #333;
}
.search_title{
    font-size: 14px;
    text-align: left;
    padding: 6px 12px;
    font-weight: bold;
    border: 1px solid #FFFFFF;
    background: white;
}
.search_req{
    display: flex;
    align-items: center;
    margin-top: 12px;
    font-size: 14px;
}
.search_req /deep/ .el-radio-button__inner{
  border-radius: 0px;
  font-size: 14px;
  border: 0px;
  background: #f6f6f6;
  box-shadow: none;
  margin-left: 12px;
  padding: 5px 10px;
}
.search_req /deep/ .el-radio-button__orig-radio:checked+.el-radio-button__inner{
  background-color:#00AAEA;
}
.goods{
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 17px 0px;
}
.goods li{
  width: 236px;
  background: white;
  font-size: 12px;
  padding-bottom: 13px;
  border: 1px solid #E9E9E9;
  margin-top: 7px;
  margin-right: 2px;
}
.goods_name{
  margin-top: 11px;
}
.goods_num{
  color: #D70000;
  font-size: 16px;
  margin-top: 20px;
}
.el-pagination /deep/ .el-pager li{
    width: 40px;
    height: 40px;
    line-height: 38px;
    border: 2px solid #EAEAEA;
    color: #6C6C6C;
    background: transparent;
}
.el-pagination /deep/ .el-pager li:not(.disabled).active{border: 2px solid #00AAEA;color: #00AAEA;background-color:transparent;}
.el-pagination /deep/ .el-pager li:hover{border: 2px solid #00AAEA;color: #00AAEA;}
.el-pagination /deep/ .btn-prev,.el-pagination /deep/ .btn-next{
    width: 40px;
    height: 40px;
    line-height: 40px;
}
</style>
<template>
  <div class="wind">
    <div class="banner">
      <img src="@/assets/image/图像52@2x.png" width="100%" height="100%">
    </div>
    <div class="wind_a">
        <div class="search_title">礼品筛选</div>
        <!-- <ul class="search_req">
            <li class="unable">礼品类型</li>
            <li>不限</li>
            <li>热门兑换</li>
            <li>文具用品</li>
            <li>家居生活</li>
            <li>电子数码</li>
        </ul> -->
        <!-- <ul class="search_req">
            <li class="unable">积分范围</li>
            <li>不限</li>
            <li>可兑换</li>
        </ul> -->
        <div class="search_req">
          <span>积分范围</span>
          <el-radio-group v-model="queryList.type" size="mini" @change="search()">
            <el-radio-button :label="0">不限</el-radio-button>
            <el-radio-button :label="1" v-if="isLogin">可兑换</el-radio-button>
          </el-radio-group>
        </div>
        <ul class="goods" ref="goods_list">
          <li v-for="item in goodsList.list" @click="goods_detail(item)">
            <img :src="item.img" width="230" height="230">
            <div class="goods_name">{{item.goods_name}}</div>
            <div class="goods_num">所需积分：{{item.integral}}</div>
          </li>
        </ul>
        <div v-if="!goodsList.list||goodsList.list.length==0" style="display:flex;justify-content: center;margin-top:50px;">
          <img src="@/assets/image/none.png" width="260" height="260" />
        </div>
        <el-pagination
            background
            style="margin:20px 0px;"
            :page-size="$root.pageSize"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            layout="prev, pager, next"
            :total="goodsList.total">
        </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "market",
  data() {
    return {
      radio1:1,
      goodsList:[],
      currentPage:1,
      isLogin:false,
      loadingInstance:'',
      queryList:{
        page:1,
        type:0
      }
    };
  },
  created() {
    this.fetchat()
    if(localStorage.getItem('token')){
      this.isLogin = true
    }else{
      this.isLogin = false
    }
  },
  methods: {
    fetchat(){
      this.$post('/goodsList', this.queryList).then(res=>{
        if(res&&res.code==200){
          this.goodsList = res.data
          if(this.loadingInstance){
            this.loadingInstance.close()
          }
        }else{
          this.$message.error(res.msg)
          if(this.loadingInstance){
            this.loadingInstance.close()
          }
        }
      }).catch(function(error) {
        console.log(error)
        if(this.loadingInstance){
            this.loadingInstance.close()
          }
      });
    },
    search(){
      this.queryList.page =this.currentPage= 1
      this.loadingInstance = this.$loading({
        target:this.$refs.goods_list,
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(255, 255, 255, 0.7)'
      });
      this.fetchat()
    },
    handleCurrentChange(page_current) {
      this.queryList.page = this.currentPage = page_current;
      this.fetchData();
    },
    goods_detail(item){
      localStorage.setItem('goods_detail',JSON.stringify(item))
      this.$router.push({
        path: '/goods_detail',
        name: 'goods_detail',
      })
    }
  }
};
</script>

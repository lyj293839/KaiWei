<style scoped>
.index {
  width: 1200px;
  margin: 0px auto;
  color: #27282c;
}
.prod_menu{
  display: flex;
  margin-top: 20px;
}
.list {
  padding: 0px;
  list-style: none;
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #7d7e80;
  flex-wrap: wrap;
}
.list li {
  position: relative;
  margin-right: 30px;
  margin-bottom: 5px;
}
.list .list_text {
  padding: 10px 0px;
  width: 110px;
  font-size: 13px;
  cursor: pointer;
  background: white;
  position: relative;
  /* z-index: 2; */
}
.list li:hover .list_text {
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.16);
  color: #333;
}
.list_text_hov{
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.16);
  color: #333;
}
/* .list li:hover .list_item {
  display: block;
} */
.prod_menu .list_a {
  margin: 0px 30px 0px 14px;
  font-size: 14px;
  color: #27282c;
  padding: 10px 0px;
  width: auto;
  text-align: left;
  white-space:nowrap;
}
.list .el-dropdown {
  font-size: 13px;
  color: #7d7e80;
}
.el-dropdown-menu__item {
  font-size: 12px;
  padding: 0px 10px;
}
.el-dropdown-menu {
  width: 176px;
  padding: 10px 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.list_item {
  position: absolute;
  top: 145%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.16);
  display: none;
  width: 170px;
  z-index: 1;
  text-align: center;
  padding: 8px 5px;
  font-size: 12px;
  line-height: 20px;
  background: white;
  color: #333;
}
.list_item .el-col {
  cursor: pointer;
}
.list_item .el-col:hover {
  /* background: #00aaea;
  color: white; */
  font-weight: bold;
  /* font-size: 14px; */
}
.wind {
  width: 1200px;
  margin: 0px auto;
}
.wind ul {
  list-style: none;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 0px;
  margin: 0px;
  color: #333333;
}
.wind ul li:hover {
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.2);
  border-top: 3px solid #00aaea;
}
.hot_list li {
  width: 236px;
  height: 356px;
  background: #ffffff;
  margin-top: 5px;
  border: 1px solid #e9e9e9;
  margin-right: 2px;
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
.wind /deep/ .el-pager li {
  width: 40px;
  height: 40px;
  line-height: 38px;
  border: 2px solid #eaeaea;
  color: #6c6c6c;
  background: transparent;
}
.wind /deep/ .el-pager li:not(.disabled).active {
  border: 2px solid #00aaea;
  color: #00aaea;
  background-color: transparent;
}
.wind /deep/ .el-pager li:hover {
  border: 2px solid #00aaea;
  color: #00aaea;
}
.wind /deep/ .btn-prev,
.wind /deep/ .btn-next {
  width: 40px;
  height: 40px;
  line-height: 40px;
}
</style>
<template>
  <div class="index">
    <div class="prod_menu">
      <div class="list_a">目录：</div>
      <ul class="list">
        <li><div :class="index?'list_text':'list_text list_text_hov'" @click="Search()">全部</div></li>
        <li v-for="(item,index_) in productSearch">
          <div :class="index==item.id?'list_text list_text_hov':'list_text'" @click="Search(item.id)">{{item.name}}</div>
          <!-- <div class="list_item" v-if="item.children&&item.children.length>0">
            <el-row>
              <el-col :span="12" v-for="i in item.children"><div @click="Search(i)">{{i.name}}</div> </el-col>
            </el-row>
          </div> -->
        </li>
      </ul>
    </div>
    
    <div class="wind">
      <ul class="hot_list" ref="prod_list">
        <li v-for="item in productList.list" @click="prod_detail(item)">
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
      <div v-if="!productList.list||productList.list.length==0" style="display:flex;justify-content: center;margin-top:50px;">
        <img src="@/assets/image/none.png" width="260" height="260" />
      </div>
      <el-pagination
            style="margin:20px 0px;"
            v-if="productList.list&&productList.list.length>0"
            background
            :page-size="$root.pageSize"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            layout="prev, pager, next"
            :total="productList.total"
    ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      productList:{},
      index:'',
      productSearch:[
        // {name:'吲哚和吲哚类',id:1},{name:'123',id:2},{name:'123',id:3},{name:'123',id:1},
        // {name:'123',id:1},{name:'123',id:1},{name:'123',id:1},{name:'123',id:1},
        // {name:'123',id:1},{name:'123',id:1},{name:'123',id:1},{name:'123',id:1},
        // {name:'123',id:1},{name:'123',id:1},{name:'123',id:1},{name:'123',id:1}
      ],
      currentPage:1,
      loadingInstance:'',
      queryList:{
        page:1,
        category_id:'',
        keyword:'',
        name:'',
        cas:'',
        smiles:'',
        smiles_type:'',
      }
    };
  },
  created() {
    if(this.$route.query){
      this.queryList.category_id = this.$route.query.category_id?this.$route.query.category_id:''
      this.index = this.$route.query.category_id?this.$route.query.category_id:''
      this.queryList.keyword = this.$route.query.keyword?this.$route.query.keyword:''
    }else{
      this.queryList={
        page:1,
        category_id:'',
        keyword:'',
        name:'',
        cas:'',
        smiles:'',
        smiles_type:'',
      }
    }
    this.fetchat()
  },
  methods: {
    fetchat(){
      // this.queryList.keyword = localStorage.getItem('keyword')?localStorage.getItem('keyword'):''
      if(localStorage.getItem('search_radio')==1){
        this.queryList.cas = localStorage.getItem('search_arr')?JSON.parse(localStorage.getItem('search_arr')):''
      }else if(localStorage.getItem('search_radio')==2){
        this.queryList.name = localStorage.getItem('search_arr')?JSON.parse(localStorage.getItem('search_arr')):''
      }else{
        this.queryList.name = ''
        this.queryList.cas=''
      }
      this.queryList.smiles = localStorage.getItem('smiles')?localStorage.getItem('smiles'):''
      this.queryList.smiles_type = localStorage.getItem('smiles_type')?localStorage.getItem('smiles_type'):''
      this.$post('/productList', this.queryList).then(res=>{
        if (res && res.code == 200){
          this.productList = res.data
          if(this.loadingInstance){this.loadingInstance.close()}
        }else{
          this.$message.error(res.msg);
          if(this.loadingInstance){this.loadingInstance.close()}
        }
        // localStorage.removeItem('keyword');
        localStorage.removeItem('search_radio');
        localStorage.removeItem('search_arr');
        localStorage.removeItem('smiles');
        localStorage.removeItem('smiles_type');
      }).catch(function(error) {
        console.log(error) 
        if(this.loadingInstance){this.loadingInstance.close()}});
      this.productSearch = JSON.parse(sessionStorage.getItem('GEnum'))
    },
    handleCurrentChange(page_current) {
      this.queryList.page = this.currentPage = page_current;
      this.$All.goTop()
      this.fetchat();
    },
    Search(id){
      this.queryList.page = this.currentPage = 1
      this.queryList.category_id = id?id:''
      this.index = id?id:''
      this.queryList.keyword = ''
      this.loadingInstance = this.$loading({
          target:this.$refs.prod_list,
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(255, 255, 255, 0.7)'
        });
      this.fetchat()
    },
    prod_detail(item) {
      // if(JSON.stringify(arr).indexOf(JSON.stringify(item))==-1){
      //      arr.push(item);
      //      if(arr.length>10){
      //        arr.splice(1,1)
      //      }
      // }
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
};
</script>

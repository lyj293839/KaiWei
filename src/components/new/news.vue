<style scoped>
.wind{position: relative;background: #f6f6f6;}
.wind_a{
  width: 1103px;
  margin: 0px auto;
  padding-top: 50px;
  color: #fff;
  text-align: left;
  font-size: 35px;
  position:relative;
  z-index: 2;
}
.banner {
  width: 100%;
  height: auto;
  /* background: url("../../assets/image/309169388@2x.png") no-repeat center;
  background-size: 100% 100%; */
  position: absolute;
  top: 0px;
  z-index: 1;
  background: #333333;
  opacity: 0.8;
}
.el-breadcrumb{margin: 15px 0px;}
.el-tabs /deep/ .el-tabs__header{margin: 0px;}
.el-breadcrumb__item /deep/ .el-breadcrumb__inner{color: white !important;font-size: 16px;}
.el-breadcrumb__item /deep/ .el-icon-d-arrow-right{color: white !important;font-size: 16px;}
.new_list{
  background: white;
  font-size: 13px;
  min-height: 1000px;
  padding: 16px 19px;
  color: #666666;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.16);
}
.el-tabs /deep/ .el-tabs__item{color: #666666;}
.el-tabs /deep/ .is-active{color: #333333 !important;}
.new_list ul li{
  display: flex;
  align-items: center;
  padding: 15px 0px;
  border-bottom: 1px solid #DDDDDD;
}
.list{
  padding:0px 15px;
  height: 89px;
  display: flex;
  flex-direction:column;
  justify-content: space-between;
  width: 80%;
}
.list_title{
  font-size: 14px;
  color: #27282C;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.list_see{color: #00AAEA;cursor: pointer;}
.index{
  position: relative;
  height:950px;
}
.el-pagination{
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translate(-50%, -50%);
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
      <!-- <img src="@/assets/image/309169388@2x.png" width="100%" height="100%" style="z-index:1;"> -->
      <!-- <img src="@/assets/image/309169388_@2x.png" width="100%" height="100%" style="opacity: 0.3;"> -->
      <img src="@/assets/image/309169388@2x.png" width="100%" height="100%" style="opacity: 0.6;">
    </div>
    <div class="wind_a">
      <div class="title">新闻资讯  NEWS</div>
      <!-- <el-breadcrumb separator-class="el-icon-d-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>新闻资讯</el-breadcrumb-item>
      </el-breadcrumb> -->
      <div class="new_list">
        <el-tabs value="first" @tab-click="handleClick">
          <el-tab-pane label="新闻资讯" name="first">
            <div class="index">
              <ul>
                <li v-for="item in newsList.list">
                  <img :src="item.img" width="157" height="89">
                  <div class="list">
                    <div class="list_title">
                      <div>{{item.title}}</div>
                      <div>{{item.create_time}}</div>
                    </div>
                    <div>
                      {{item.introduction}}
                    </div>
                    <div class="list_see" @click="new_detail(item)">查看详情<i class="el-icon-arrow-right"></i></div>
                  </div>
                </li>
              </ul>
              <div v-if="!newsList.list||newsList.list.length==0" style="display:flex;justify-content: center;">
                <img src="@/assets/image/none.png" width="260" height="260"/>
              </div>
              <el-pagination
                  background
                  style="margin:20px 0px;"
                  :page-size="$root.pageSize"
                  @current-change="handleCurrentChange"
                  :current-page.sync="currentPage"
                  layout="prev, pager, next"
                  :total="newsList.total">
              </el-pagination>
            </div>
          </el-tab-pane>
          <el-tab-pane label="企业资讯" name="second">
            <div class="index">
              <ul>
                <li v-for="item in newsList.list">
                  <img :src="item.img" width="157" height="89">
                  <div class="list">
                    <div class="list_title">
                      <div>{{item.title}}</div>
                      <div>{{item.create_time}}</div>
                    </div>
                    <div>
                      {{item.introduction}}
                    </div>
                    <div class="list_see" @click="new_detail(item)">查看详情<i class="el-icon-arrow-right"></i></div>
                  </div>
                </li>
              </ul>
              <div v-if="!newsList.list||newsList.list.length==0" style="display:flex;justify-content: center;">
                <img src="@/assets/image/none.png" width="260" height="260"/>
              </div>
              <el-pagination
                  background
                  style="margin:20px 0px;"
                  :page-size="$root.pageSize"
                  @current-change="handleCurrentChange"
                  :current-page.sync="currentPage"
                  layout="prev, pager, next"
                  :total="newsList.total">
              </el-pagination>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "news",
  data() {
    return {
      newsList:{},
      currentPage:1,
      queryList:{
        page:1,
        type:2
      }
    };
  },
  created() {
    this.fetchat()
  },
  methods: {
    fetchat(){
      this.$post('/newsList', this.queryList).then(res=>{
        if(res&&res.code==200){
          this.newsList = res.data
        }else{this.$message.error(res.msg)}
      }).catch(function(error) {
        console.log(error)
      });
    },
    handleCurrentChange(page_current) {
      this.queryList.page = this.currentPage = page_current;
      this.fetchData();
    },
    handleClick(tab, event){
      if(tab.name=='second'){
        this.queryList = {
          page:1,
          type:1
        }
      }else{
        this.queryList = {
          page:1,
          type:2
        }
      }
      this.fetchat()
    },
    new_detail(item){
      var obj = {
        content:item.content,
        title:item.title,
        create_time:item.create_time,
        type: this.queryList.type
      }
      localStorage.setItem('newDetail',JSON.stringify(obj))
      this.$router.push({
        path: '/new_detail',
        name: 'news_detail',
      })
    }
  }
};
</script>

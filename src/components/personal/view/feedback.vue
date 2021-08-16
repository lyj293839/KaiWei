<style scoped>
.heard{display: flex;justify-content: space-between;align-items: center;}
.heard .is_active{background: #00AAEA;color: white;}
ul{width: 100%;font-size: 12px;text-align: left;}
.inq_title{display: flex;justify-content: space-between;margin: 16px 0px 10px 0px;}
.inq_title li{
    background: #F5F5F5;
    color: #333;
    padding-left: 20px;
    line-height: 30px;
    width: 49%;
    border-right: 1px solid #DDDDDD;
}
.inq_title .text1{font-weight: bold;color: #00AAEA;border: none;padding-left: 19px;}
.inq_content{
    border: 1px solid #DDDDDD;
    display: flex;
    justify-content: space-between;
    margin: 14px 0px;
}
.inq_content li{border-right: 1px solid #dddddd;width: 49%;padding-left: 20px;}
h1{color: #333;font-size: 12px;font-weight: bold;}
h2{color: #666666;font-size: 12px;font-family:'msyh';font-weight: normal;}
h3{color: #666666;font-size: 12px;font-family:'msyh';font-weight: normal;line-height: 60px;}
.inq_content .text1{padding: 10px;border: none;}
.inq_content .text1 .text1_a{
    background: #F5F5F5;
    position: relative;
    display: flex;
    align-items: stretch;
    width: 100%;
    min-height: 100%;
}
.inq_content .text1 .text1_a div{padding:0px 10px;}
</style>

<template>
  <div>
    <div class="heard">
      <div>
        <el-button round size="mini" :class="queryList.type==0?'is_active':''" @click="queryList.type=0">全部</el-button>
        <el-button round size="mini" :class="queryList.type==1?'is_active':''" @click="queryList.type=1">已回复</el-button>
        <el-button round size="mini" :class="queryList.type==2?'is_active':''" @click="queryList.type=2">未回复</el-button>
      </div>
      <div>
        <el-date-picker
            v-model="queryList.start_time"
            type="date"
            size="mini"
            value-format='yyyy-MM-dd'
            style="width:170px;"
            placeholder="开始日期">
        </el-date-picker>
        <el-date-picker
            v-model="queryList.end_time"
            type="date"
            size="mini"
            value-format='yyyy-MM-dd'
            style="width:170px;"
            placeholder="结束日期">
        </el-date-picker>
        <el-button type="primary" size="mini" :loading="search_loading" @click="Search()">查询</el-button>
      </div>
    </div>
    <div>
        <ul class="inq_title">
            <li>我的询问</li>
            <li class="text1">官方回复</li>
        </ul>

        <ul class="inq_content" v-for="item in data.list">
            <li>
                <h1>我的询问</h1>
                <h2>内容：{{item.content}}</h2>
                <h3>时间：{{item.create_time}}</h3>
            </li>
            <li class="text1">
                <div class="text1_a">
                    <div>
                        <h2 v-if="item.reply_content">{{item.reply_content}}</h2>
                        <h2 v-else>暂未回复。（如长时间未回复，可主动与我们联系）</h2>
                    </div>
                </div>
            </li>
        </ul>
        <div v-if="!data.list||data.list.length==0" style="display:flex;justify-content: center;margin-top:50px;">
          <img src="@/assets/image/none.png" width="260" height="260" />
        </div>
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
  </div>
</template>

<script>
export default {
  name: "personal_feedback",
  data() {
    return {
        data:{},
        queryList:{
            page:1,
            type:0,
            start_time:'',
            end_time:''
        },
        search_loading:false,
        currentPage:1,
    };
  },
  created () {
    this.fetchat()
  },
  methods: {
    fetchat(){
      this.$post('/opinionList',this.queryList).then(res=>{
          if (res && res.code == 200){
              this.data = res.data
              this.search_loading = false
          }else{
              this.$message.error(res.msg);
              this.search_loading = false
          }
      }).catch(function(error) {
          console.log(error)
          this.search_loading = false
      });
    },
    handleCurrentChange(page_current) {
      this.queryList.page = this.currentPage = page_current;
      this.fetchData();
    },
    Search(){
      this.queryList.page =this.currentPage= 1
      this.search_loading = true
      this.fetchat()
    },
  }
};
</script>

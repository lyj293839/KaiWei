<style scoped>
.banner {
  width: 100%;
  height: auto;
  /* background: url("../../assets/image/组3421@2x.png") no-repeat center;
  background-size: 100% 100%; */
}
.wind {
  width: 1200px;
  margin: 0px auto;
  padding: 27px 0px 96px 0px;
}
.wind .el-tabs /deep/ .el-tabs__item {
  text-align: center;
  color: #333333;
  font-size: 13px;
  width: 272px;
  height: 58px;
  line-height: 58px;
}
.wind .el-tabs /deep/ .el-tabs__header {
  margin-right: 28px;
}
.wind .el-tabs /deep/ .is-disabled {
  background: #eeeeee;
}
.wind .el-tabs /deep/ .el-tabs__item.is-active {
  border: 1px solid #00aaea !important;
}
.row_heard {
  width: 100%;
  line-height: 58px;
}
.row_heard_b {
  width: 75%;
  line-height: 20px;
}
/* .row_heard_b .el-col{
  line-height: 20px;
} */
.el-collapse /deep/ .el-collapse-item__header {
  height: 58px;
}
.el-collapse /deep/ .is-disabled .el-collapse-item__header {
  background: #eeeeee;
  color: #333333;
  cursor: text;
}
.el-collapse /deep/ .is-disabled .el-collapse-item__arrow {
  display: none;
}
.el-collapse /deep/ .el-collapse-item__arrow {
  margin: 0px auto;
}
.row_content {
  color: #666;
  font-size: 12px;
  line-height: 16px;
  text-align: left;
  padding: 0px 70px;
  list-style: none;
}
.row_tip {
  margin: 10px 0px;
}
</style>
<template>
  <div>
    <div class="banner">
      <img src="@/assets/image/组3421@2x.png" width="100%" height="100%" />
    </div>
    <div class="wind">
      <el-tabs :value="Index" tab-position="left" type="card" @tab-click="handleClick">
        <el-tab-pane label="全部岗位" name="0" disabled>
          <el-collapse>
            <el-collapse-item name="1" disabled>
              <template slot="title">
                <el-row class="row_heard">
                  <el-col :span="6">职位</el-col>
                  <el-col :span="6">部门</el-col>
                  <el-col :span="6">地点</el-col>
                  <el-col :span="6">查看</el-col>
                </el-row>
              </template>
            </el-collapse-item>
          </el-collapse>
        </el-tab-pane>
        <el-tab-pane v-for="item in departmentList" :label="item.name" :name="(item.id).toString()">
          <el-collapse>
            <el-collapse-item name="1" disabled>
              <template slot="title">
                <el-row class="row_heard">
                  <el-col :span="6">职位</el-col>
                  <el-col :span="6">部门</el-col>
                  <el-col :span="6">地点</el-col>
                  <el-col :span="6">查看</el-col>
                </el-row>
              </template>
            </el-collapse-item>
            <el-collapse-item v-for="i in jobList" :name="(i.name).toString()">
              <template slot="title">
                <el-row class="row_heard_b" type="flex" align="middle">
                  <el-col :span="8">
                    {{i.name}}
                  </el-col>
                  <el-col :span="8">
                    {{item.name}}
                  </el-col>
                  <el-col :span="8">
                          {{i.province_name}}-{{i.area_name}}-{{i.city_name}}-{{i.address}}
                    </el-col>
                </el-row>
              </template>
              <ul class="row_content">
                <!-- <li>
                  <div class="row_tip">职责</div>
                  <div>
                    <div>1.开拓市场，负责新客户开发，维护客户关系;</div>
                    <div>2.进行日常销售工作，完成销售目标;</div>
                    <div>3.定期走访客户，开拓新区域目标客户;</div>
                    <div>4.确保日长销售回款工作</div>
                  </div>
                </li> -->
                <li>
                  <div class="row_tip">要求:</div>
                  <div v-html="i.describr">
                  </div>
                </li>
              </ul>
            </el-collapse-item>
          </el-collapse>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: "recruit",
  data() {
    return {
      Index:'',
      departmentList: [],
      jobList:[]
    };
  },
  created() {
    this.fetchat();
  },
  methods: {
    fetchat() {
      this.$post("/departmentList", "")
        .then(res => {
          if (res && res.code == 200) {
            this.departmentList = res.data;
            this.Index = res.data[0]?res.data[0].id.toString():''
            var obj = {
              name:res.data[0].id
            }
            this.handleClick(obj)
          } else {
            this.$message.error(res.msg);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    handleClick(tab){
        var obj = {
            department_id:tab.name
        }
        this.$post("/jobList", obj)
        .then(res => {
          if (res && res.code == 200) {
            this.jobList = res.data.list;
          } else {
            this.$message.error(res.msg);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

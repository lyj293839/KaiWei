<style scoped>
.wind{width: 1200px;margin: 0px auto;}
.el-menu{background: #009BD5;padding-bottom: 60px;border-right:0px;}
.el-menu .el-menu-item{text-align: left;padding: 0px 10px !important;color: white;border-bottom: 1px solid #3FB6E0;}
.el-menu .el-menu-item:hover{background: #007AA8;}
.el-menu /deep/ .is-active{background: #007AA8;}
.el-menu /deep/ .is-disabled{background: #009BD5;color: white;font-weight: bold;text-align: center;cursor: text;opacity:1;}
.wind_a{padding: 16px 12px;text-align: left;color: #333333;background: white;}
</style>
<template>
  <div>
      <div class="wind">
          <el-row style="background:#009BD5;" type="flex" >
              <el-col :span="4" style="width:231px;">
                  <el-menu
                    :default-active="path"
                    router
                    class="el-menu-vertical-demo">
                    <el-menu-item index="" disabled>
                        <span slot="title">{{hello}}，欢迎来到凯为~</span>
                    </el-menu-item>
                    <el-menu-item index="/personal_center">
                        <img src="@/assets/image/组 3459@2x.png" width="30" height="30">
                        <span slot="title">个人中心</span>
                    </el-menu-item>
                    <el-menu-item index="/personal_order">
                        <img src="@/assets/image/组 3458@2x.png" width="30" height="30">
                        <span slot="title">我的订单</span>
                    </el-menu-item>
                    <el-menu-item index="/personal_amount">
                        <img src="@/assets/image/组 3630@2x.png" width="30" height="30">
                        <span slot="title">我的额度</span>
                    </el-menu-item>
                    <el-menu-item index="/personal_inquire">
                        <img src="@/assets/image/组 3457@2x.png" width="30" height="30">
                        <span slot="title">我的询单</span>
                    </el-menu-item>
                    <el-menu-item index="/personal_collect">
                        <img src="@/assets/image/组 3456@2x.png" width="30" height="30">
                        <span slot="title">我的收藏</span>
                    </el-menu-item>
                    <el-menu-item index="/personal_credit">
                        <img src="@/assets/image/组 3455@2x.png" width="30" height="30">
                        <span slot="title">我的积分</span>
                    </el-menu-item>
                    <el-menu-item index="/personal_delivery">
                        <img src="@/assets/image/组 3454@2x.png" width="30" height="30">
                        <span slot="title">收货地址</span>
                    </el-menu-item>
                    <el-menu-item index="/personal_history">
                        <img src="@/assets/image/组 3453@2x.png" width="30" height="30">
                        <span slot="title">浏览历史</span>
                    </el-menu-item>
                    <el-menu-item index="/personal_feedback">
                        <img src="@/assets/image/组 3452@2x.png" width="30" height="30">
                        <span slot="title">意见与反馈</span>
                    </el-menu-item>
                    <el-menu-item index="" disabled>
                    </el-menu-item>
                    <el-menu-item index="/personal_account">
                        <img src="@/assets/image/组 3461@2x.png" width="30" height="30">
                        <span slot="title">账户设置</span>
                    </el-menu-item>
                    <el-menu-item index="/personal_bill">
                        <img src="@/assets/image/组 3451@2x.png" width="30" height="30">
                        <span slot="title">发票信息</span>
                    </el-menu-item>
                    <el-menu-item index="/personal_changePassworld">
                        <img src="@/assets/image/组 3450@2x.png" width="30" height="30">
                        <span slot="title">修改密码</span>
                    </el-menu-item>
                    <!-- <el-menu-item index="/personal_changeEmail">
                        <img src="@/assets/image/组 3449@2x.png" width="30" height="30">
                        <span slot="title">修改邮箱</span>
                    </el-menu-item> -->
                </el-menu>
              </el-col>
              <el-col :span="20" class="wind_a"><router-view ></router-view></el-col>
          </el-row>
      </div>
  </div>
</template>

<script>
export default {
  name: "personal",
  data() {
    return {
        path:'',
        hello:''
    };
  },
  created() {
    this.getCurrentMenu()
    this.Times()
  },
  watch: {
    $route(to,from){
      this.getCurrentMenu()
      this.$All.goTop()
      this.$All.title_change({title:'个人中心'})
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      this.$router.push({
            path: key,
          })
    },
    getCurrentMenu () {
    // 获取当前页面 菜单刷新后能自动选中
      let that = this;
      let currentUrl = window.location.href
      let currentPage = currentUrl.split('#')[1];
      if(currentPage=='/personal'){
        that.path = '/personal_center'
        this.handleSelect(that.path)
      }else if(currentPage=='/order_package'){
        that.path = '/personal_order'
      }else{
        that.path = currentPage
      }
    },
    new_detail(){
      this.$router.push({
        path: '/new_detail',
        name: 'news_detail',
        query:{
          id:1,
        }
      })
    },
    Times(){
      var now = new Date();
      var hour = now.getHours();
      if (hour < 12){this.hello = "上午好"}
      else if (hour < 18){this.hello = "下午好"}
      else {this.hello = "晚上好"}
    }
  }
};
</script>

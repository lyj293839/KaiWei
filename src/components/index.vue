<style scoped>
.menu{
  width: 100%;
  background: #00AAEA;
  height: 38px;
}
.menu_list{
  width: 1200px;
  margin: 0px auto;
}
.menu_list ul{
  height: 38px;
  list-style: none;
  display: flex;
  align-items: center;
  color: white;
  font-size: 14px;
  padding: 0px;
}
.menu_list ul li{
  padding: 0px 36px;
  cursor: pointer;
}
.menu_list .list_prod{
  padding: 0px;
  width: 231px;
  color: white;
  text-align: left;
}
.menu .el-menu{
  width: 1200px;
  margin: 0px auto;
  border-bottom: none !important;
}
.menu .prod_list{
  width: 231px;
  text-align: left;
  padding: 0px;
}
.el-menu /deep/ .el-menu{padding: 0px !important;}
.el-submenu .el-row{opacity: 0.6;}
.menu_text{font-size: 12px;padding: 4px 0px;}
.menu .el-menu .el-menu-item{height: 38px;line-height: 38px;border: none;}
.menu .el-menu .el-submenu{height: 38px;line-height: 38px;}
.menu .is-active{background: #009BD5 !important;}
.menu .el-submenu /deep/ .el-submenu__title{height: 38px;line-height: 38px;border: none;background: transparent !important;}
li /deep/.el-submenu .el-menu{padding: 0px !important;box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);}
li /deep/.el-submenu .el-submenu__title{height:51px;line-height: 20px;padding-left: 14px !important;}
li /deep/.el-submenu .el-menu-item{background: white !important;color:#27282C !important;font-size: 11px;height: 25.5px !important;line-height: 25.5px !important;}
li /deep/.el-submenu .el-menu-item:hover {background: #00AAEA !important;color: white !important;}
li /deep/.el-submenu .el-submenu__title .el-row{font-size: 11px;}
li /deep/ .el-submenu__icon-arrow{display: none;}
.menu_text_a{
  width: 100px;
  text-align: center;
}
.aaa{background: white !important;color: #333 !important;width: 100px;}
.aaa:hover {background: #00AAEA !important;color: white !important;}
.bbb /deep/ .el-menu--horizontal{top: 0px !important;}
.menu /deep/ .into .el-submenu__title{padding-left: 20px !important;width: 100px;}
.el-main{padding: 0px;overflow:hidden;}
.xxx{
  max-height:297px;
  overflow:auto;
}
.xxx::-webkit-scrollbar-track{
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 6px;
  background-color: #00ADEB;
}
.xxx::-webkit-scrollbar {
  width: 8px;
  background-color: #00ADEB;
}
.xxx::-webkit-scrollbar-thumb {
  border-radius: 6px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
  background-color: #008ABC;
}
</style>
<template>
<div>
  <heard></heard>
  <div class="menu">
    <el-menu
      :default-active="path"
      @select="handleSelect"
      :default-openeds="openeds"
      :unique-opened='true'
      :menu-trigger='make_type'
      class="el-menu-demo"
      mode="horizontal"
      background-color="#00AAEA"
      text-color="#fff"
      active-text-color="#fff">
      <el-submenu index="/prod" class="prod_list">
        <template slot="title">产品目录</template>
        <div class="xxx">
        <el-menu-item v-for="(item,index) in productSearch" :index="(item.id).toString()" style="width:231px;">{{item.name}}</el-menu-item>
        <!-- <el-submenu v-for="(item,index) in productSearch" :key="index" :index='index.toString()' style="width:231px;" :class="index!==0?'':'bbb'">
          <template slot="title">
            <div>
              <div class="menu_text">{{item.name}}</div>
            </div>
          </template>
          <el-menu-item :index="(i.id).toString()" v-for="i in item.children">{{i.name}}</el-menu-item>
        </el-submenu> -->
        </div>
      </el-submenu>
      <el-menu-item index="/menu">全部商品</el-menu-item>
      <el-submenu class="into" index='2'>
        <template slot="title">走进凯为</template>
        <el-menu-item index="/understand" class="menu_text_a aaa">关于我们</el-menu-item>
        <el-menu-item index="/recruit" class="menu_text_a aaa">人才招聘</el-menu-item>
      </el-submenu>
      <el-menu-item index="/contact">联系我们</el-menu-item>
      <el-menu-item index="/news">新闻资讯</el-menu-item>
      <el-menu-item index="/market">积分商城</el-menu-item>
    </el-menu>
  </div>
  <el-main>
    <router-view @foot_message='foot_message' @Menu='menu' ref="child"></router-view>
  </el-main>
  <foot :foot_show="foot_show"></foot>
</div>
</template>

<script>
import heard from "./heard_foot/heard";
import foot from "./heard_foot/foot"
export default {
  name: 'index',
  components:{
    heard,
    foot
  },
  data () {
    return {
      foot_show: true,
      make_type:'click',
      path:'/',
      openeds:[],
      productSearch:[
        // {name:'吲哚和吲哚类',id:1},{name:'123',id:2},{name:'123',id:3},{name:'123',id:1},
        // {name:'123',id:1},{name:'123',id:1},{name:'123',id:1},{name:'123',id:1},
        // {name:'123',id:1},{name:'123',id:1},{name:'123',id:1},{name:'123',id:1},
        // {name:'123',id:1},{name:'123',id:1},{name:'123',id:1},{name:'123',id:1}
      ]
    }
  },
  created() {
    this.getCurrentMenu()
    this.fetchat()
    delete this.$route.query.noLogin
    // let imgSize = this.$refs['imgSize'].offsetHeight;
  },
  watch: {
    $route(to,from){
      this.$All.goTop()
      this.getCurrentMenu()
      this.$All.title_change(to.meta)
      if(to.name=='home'){
        this.openeds = ['/prod']
        this.make_type = 'click'
      }else{
        this.openeds = []
        this.make_type = 'hover'
      }
      to.meta.footHiddle?this.foot_show = false:this.foot_show = true
      if(to.query.noLogin&&!localStorage.getItem('token')){
        this.$emit('getMessage', to.query.noLogin);
        delete to.query.noLogin
        delete from.query.noLogin
      }
      if(to.name=='Menu'){
        if(JSON.stringify(to.query)!="{}"&&JSON.stringify(to.query)!==JSON.stringify(from.query)){
          if(from.name!='prod_detail'){
            location.reload()
          }
        }else if(localStorage.getItem('keyword')&&from.name=='Menu'){
          location.reload()
        }
      }
    }
  },
  methods: {
    fetchat(){
      this.$post('/productCategory', '').then(res=>{
        if (res && res.code == 200){
          sessionStorage.setItem('GEnum', JSON.stringify(res.data));
          this.productSearch = res.data
        }else{
          this.$message.error(res.msg);
        }
      }).catch(function(error) {console.log(error)});
    },
    getCurrentMenu () {
    // 获取当前页面 菜单刷新后能自动选中
      let that = this;
      let currentUrl = window.location.href
      let currentPage = currentUrl.split('#')[1];
      that.path = currentPage
    },
    handleSelect(key, keyPath) {
      if(keyPath[0]=='/prod'){
        this.$router.push({
            path: '/Menu',
            query: {
              category_id: keyPath[keyPath.length-1]
            }
          })
      }else{
        this.$router.push({
            path: key,
          })
      }
    },
    login_dialog(val){
      this.$emit('getMessage', val);
    },
    foot_message(val){
      this.foot_show = false
    },
    menu(val){
      val?this.openeds = ['/prod']:this.openeds = []
    }
  }
}
</script>

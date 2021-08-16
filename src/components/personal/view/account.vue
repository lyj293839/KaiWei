<style scoped>
.account{color: #333;}
.account ul{margin-top: 30px;}
.account ul li{
    border-bottom: 1px solid #DDDDDD;
    padding: 0px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;
}
.account ul li:hover{background: #E7F8FD;}
.account ul li /deep/ .el-button{font-size: 17px;margin-left: 10px;}
/* .account ul li /deep/ .el-input__inner{border: 0px;} */
.account .foot{text-align: center;margin-top: 40px;}
.account .foot .el-button{width: 300px;}
h1{font-size: 14px;font-weight: normal;line-height: 20px;}
h2{font-size: 22px;font-weight: bold;line-height: 20px;}
h3{font-size: 14px;font-weight: normal;opacity: 0.6;line-height: 20px;}
h4{font-size: 17px;font-weight: normal;line-height: 20px;min-width: 100px;}
h4 span{margin-left: 20px;}
</style>

<template>
  <div class="account">
      <div>
          <h1>会员账号</h1>
          <h2>{{data.mobile}}</h2>
          <h3>用户登录和验证身份，同时也是您个人信息的一部分</h3>
      </div>
      <ul>
          <li>
              <h4>姓名:<span>{{data.true_name}}</span></h4>
          </li>
          <li>
              <h4>企业名称:<span v-if="show2">{{data.company}}</span></h4>
              <el-input v-if='!show2' v-model="data.company" placeholder="请输入内容"></el-input>
              <el-button type="text" @click='show2=!show2'>{{show2?'修改':'完成'}}</el-button>
          </li>
          <li>
              <h4>邮政编码:<span v-if="show3">{{data.postcode}}</span></h4>
              <el-input v-if='!show3' v-model="data.postcode" placeholder="请输入内容"></el-input>
              <el-button type="text" @click='show3=!show3'>{{show3?'修改':'完成'}}</el-button>
          </li>
          <li>
              <h4>邮箱:<span v-if="show4">{{data.email}}</span></h4>
              <el-input v-if='!show4' v-model="data.email" placeholder="请输入内容"></el-input>
              <el-button type="text" @click='show4=!show4'>{{show4?'修改':'完成'}}</el-button>
          </li>
          <li>
              <h4>详细地址:<span v-if="show5">{{data.address}}</span></h4>
              <el-input v-if='!show5' v-model="data.address" placeholder="请输入内容"></el-input>
              <el-button type="text" @click='show5=!show5'>{{show5?'修改':'完成'}}</el-button>
          </li>
      </ul>
      <div class="foot">
           <el-button type="primary" @click="update()" :loading="loading">更新资料</el-button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'personal_account',
  data () {
    return {
        form:{},
        data:{},
        show1:true,
        show2:true,
        show3:true,
        show4:true,
        show5:true,
        loading:false
    }
  },
  created () {
      this.fetchat()
  },
  methods: {
    fetchat(){
        this.show1=true
        this.show2=true
        this.show3=true
        this.show4=true
        this.show5=true
        this.data = JSON.parse(localStorage.getItem('memberInfo'))
        // this.$post('/memberInfo').then(res=>{
        //     if (res && res.code == 200){
        //         localStorage.setItem('memberInfo',JSON.stringify(res.data))
        //         this.data = {
        //             name:res.data.true_name,
        //             company:res.data.company,
        //             postcode:res.data.postcode?res.data.postcode:'',
        //             email:res.data.email,
        //             address:res.data.address?res.data.address:'',
        //             mobile:res.data.mobile
        //         }
        //     }else{
        //         this.$message.error(res.msg);
        //     }
        // }).catch(function(error) {
        //     console.log(error)
        // });
    },
    update(){
        this.loading = true
        this.$post('/editMember',this.data).then(res=>{
            if (res && res.code == 200){
                this.$message.success(res.msg);
                this.loading = false
                var a = JSON.parse(localStorage.getItem('memberInfo'))
                a.company = this.data.company
                a.postcode = this.data.postcode
                a.email = this.data.email
                a.address = this.data.address
                a.mobile = this.data.mobile
                localStorage.setItem('memberInfo',JSON.stringify(a))
                this.fetchat()
            }else{
                this.$message.error(res.msg);
                this.loading = false
            }
        }).catch(function(error) {
            console.log(error)
            this.loading = false
        });
    },
  }
}
</script>

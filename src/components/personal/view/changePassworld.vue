<style scoped>
.passworld{color: #333;}
.passworld_right{background: #C5F0FC;font-size: 13px;padding: 0px 13px 110px 13px;margin-top: 40px;}
.passworld_right .text1{font-weight: bold;font-size: 15px;line-height: 40px;}
.passworld .el-button{width: 326px;}
.passworld /deep/ .el-form-item {margin: 10px;}
.passworld /deep/ .el-form-item .el-form-item__label{padding: 0px;}
.passworld /deep/ .el-form-item .el-input__inner{border-radius: 0px;}
.passworld /deep/ .el-form-item .el-input__prefix{line-height: 4px;}
.passworld /deep/ .el-form-item .el-input__clear{font-size: 20px;}
.img{
    background: url('../../../assets/image/组3346@2x.png') no-repeat center;
    background-size: 17px 23px;
}
</style>

<template>
  <div class="passworld">
      <el-row type="flex" justify="space-between">
          <el-col :span="10">
            <el-form label-position="top" label-width="100px" :model="formLabelAlign" :rules="rules" ref="Form">
                <el-form-item label="输入旧密码" required prop="old_password">
                    <el-input v-model="formLabelAlign.old_password" show-password>
                        <div class="img el-input__icon" slot="prefix"></div>
                    </el-input>
                </el-form-item>
                <el-form-item label="输入新密码" required prop="password">
                    <el-input v-model="formLabelAlign.password" show-password>
                        <div class="img el-input__icon" slot="prefix"></div>
                    </el-input>
                </el-form-item>
                <el-form-item label="再次确认密码" required prop="passwordCheck">
                    <el-input v-model="formLabelAlign.passwordCheck" show-password>
                        <div class="img el-input__icon" slot="prefix"></div>
                    </el-input>
                </el-form-item>
            </el-form>
          </el-col>
          <el-col :span='10'>
              <div class="passworld_right">
                <div class="text1">凯为提醒您~</div>
                <div>
                    请勿把您的个人密码透露给其他人哦，您的密码是您唯
                    一的凭证，如您忘记旧密码可联系客服提供下单记录或
                    其他证据举证，人工重置密码哦！
                </div>
            </div>
          </el-col>
      </el-row>
      <div style="text-align:center;margin-top:86px;"><el-button type="primary" :loading="loading" @click="updatePoss('Form')">更新资料</el-button></div>
  </div>
</template>

<script>
export default {
  name: 'personal_changePassworld',
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.formLabelAlign.passwordCheck !== '') {
          this.$refs.Form.validateField('passwordCheck');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.formLabelAlign.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
        formLabelAlign:{
            old_password:'',
            password:'',
            passwordCheck:''
        },
        loading:false,
        rules:{
            old_password:[
            {required: true, message: "请输入密码", trigger: 'blur'}
            ],
            password:[
            { validator: validatePass, trigger: 'blur'},
            ],
            passwordCheck:[
            { validator: validatePass2, trigger: 'blur'},
            ],
        }
    }
  },
  created () {
  },
  methods: {
    updatePoss(formName){
        this.$refs[formName].validate((valid) => {
            if(valid){
                this.loading = true
                this.$post('/editPassword',this.formLabelAlign).then(res=>{
                    if (res && res.code == 200){
                        this.$message.success(res.msg);
                        this.loading = false
                        this.$refs[formName].resetFields();
                        this.loginOut()
                    }else{
                        this.$message.error(res.msg);
                        this.loading = false
                    }
                }).catch(function(error) {
                    console.log(error)
                    this.loading = false
                });
            }else{
                console.log('error submit!!');
            return false;
            }
      })
    },
    loginOut(){
        this.$post('/outLogin').then(res=>{
            if (res && res.code == 200){
              this.$store.commit('logout')
              setTimeout(() => {
                location.reload() // 强制刷新
              }, 500)
            }else{
                this.$message.error(res.msg);
            }
        }).catch(function(error) {
            console.log(error)
        });
    }
  }
}
</script>

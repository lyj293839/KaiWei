<style scoped>
.wind{width: 1200px;margin: 0px auto;color: #27282C;padding-bottom: 59px;}
.el-breadcrumb {margin: 12px 0px;}
.el-breadcrumb /deep/ .el-breadcrumb__inner{color: #27282C;}
.heard{
    font-size: 28px;
    font-weight: bold;
    padding: 11px 0px;
    border-bottom: 1px solid #E9E9E9;
}
.heard_a{
    font-size: 16px;
    color: #666;
    padding: 23px 0px;
}
.heard_a span{color: #00AAEA;cursor: pointer;}
.form{
    background: white;
    height: 491px;
    padding: 23px 277px 49px 277px;
}
.form .el-form .el-form-item{margin-bottom: 20px;text-align:left;}
.form .el-form /deep/ .el-form-item__label{line-height: normal;}
.form .el-row{margin-bottom: 20px;}
.form .button{margin-top: 54px;}
.form .el-button{width: 138px;}
.form img{margin: 91px 0px 35px 0px;}
.form /deep/ .el-input__inner,.el-button{border-radius: 0px;}
</style>
<template>
<div style="background: #F9F9F9;">
    <div class="wind">
        <!-- <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>首页</el-breadcrumb-item>
            <el-breadcrumb-item>产品目录</el-breadcrumb-item>
            <el-breadcrumb-item>糖类化合物</el-breadcrumb-item>
            <el-breadcrumb-item>糖类化合物</el-breadcrumb-item>
            <el-breadcrumb-item>#N/A</el-breadcrumb-item>
        </el-breadcrumb> -->
        <div>
            <div class="heard">大包装询价</div>
            <div class="heard_a">
                在下面提供详细信息，描述您要的产品,将帮助我们生成准确报价，我们的团队将审核您的请求并尽快回复。如果您已经<span>登录</span>
                ，并且已完善了个人信息，联系信息将自动填充
                注：已提交的询价可在您的 个人中心－我的<span>询价</span>选项中查看。
            </div>
            <div class="form">
                <div v-if="success">
                    <el-form label-position='top' label-width="80px" :model="formLabelAlign" :rules="rules" ref="Form">
                        <el-row :gutter="30" style="margin-bottom:0px;">
                            <el-col :span="12">
                                <el-form-item label="产品信息" prop="prod_name">
                                    <el-input v-model="formLabelAlign.prod_name"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="Cas No" prop="cas_no">
                                    <el-input v-model="formLabelAlign.cas_no"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-row type="flex" justify="space-between" gutter="10" style="margin-bottom:0px;">
                                    <el-col :span="12">
                                        <el-form-item label="数量" prop="num">
                                            <el-input v-model="formLabelAlign.num"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="12">
                                        <el-form-item label="纯度" prop="purity">
                                            <el-input v-model="formLabelAlign.purity"></el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="备注">
                                    <el-input v-model="formLabelAlign.remake"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row :gutter="30">
                            <el-col :span="12">
                                <el-form-item label="姓名" prop="username">
                                    <el-input v-model="formLabelAlign.username"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="邮件地址" prop="email">
                                    <el-input v-model="formLabelAlign.email"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="电话号码" required prop="mobile">
                                    <el-input v-model="formLabelAlign.mobile"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="企业名称" prop="company">
                                    <el-input v-model="formLabelAlign.company"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form>
                    <div class="button">
                        <el-button @click="back()" style="border-color:#00AAEA;color:#00AAEA;">返回</el-button>
                        <el-button type="primary" style="background:#00AAEA;" :loading="loading" @click="save('Form')">提交询价单</el-button>
                    </div>
                </div>
                <div v-else class='success'>
                    <img src="@/assets/image/页面-1@2x.png" width="184" height="120">
                    <div>
                        感谢您的询价！ 我们的销售人员将尽快答复您（如果您已登录账户，可以在个人中心查看询单记录）
                        我们将尽快通过电子邮件回复，如果您的询价很紧急，可以及时与我们联系。
                    </div>
                    <div class="button" style="margin-top:105px;">
                        <el-button @click="back()">返回</el-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: "inquiry",
  data() {
    var mobileCheck = (rule, value, callback) => {
      if (!value) {
        callback(new Error('电话不能为空'));
      } else {
        if(this.$All.isPhone(value)){
            callback();
        }else{
            callback(new Error('电话格式不对'));
        }
      }
    };
    var emailCheck = (rule, value, callback) => {
      if (!value) {
        callback(new Error('邮箱不能为空'));
      } else {
        if(this.$All.isEmail(value)){
            callback();
        }else{
            callback(new Error('邮箱格式不对'));
        }
      }
    };
    return {
        formLabelAlign:{
            prod_name:'',
            email:'',
            cas_no:'',
            username:'',
            mobile:'',
            company:'',
            remake:'',
            num:'',
            purity:''
        },
        loading:false,
        success:true,
        rules:{
            prod_name:[
            {required: true, message: "产品名称不能为空", trigger: 'blur'},
            ],
            email:[
            { validator: emailCheck, trigger: 'blur'},
            ],
            cas_no:[
            { required: true, message: "CAS不能为空", trigger: 'blur'},
            ],
            username:[
            { required: true, message: "姓名不能为空", trigger: 'blur'},
            ],
            mobile:[
            { validator: mobileCheck, trigger: 'blur'},
            ],
            company:[
            { required: true, message: "企业不能为空", trigger: 'blur'},
            ],
            num:[
            { required: true, message: "数量不能为空", trigger: 'blur'},
            ],
            purity:[
            { required: true, message: "纯度不能为空", trigger: 'blur'},
            ],
        }
    };
  },
  created() {
    if(this.$route.query.prod_name){this.formLabelAlign.prod_name = this.$route.query.prod_name}else{this.formLabelAlign.prod_name=''}
    if(this.$route.query.cas_no){this.formLabelAlign.cas_no = this.$route.query.cas_no}else{this.formLabelAlign.cas_no=''}
    let data = JSON.parse(localStorage.getItem('memberInfo'))
    this.formLabelAlign.username = data.true_name
    this.formLabelAlign.email = data.email
    this.formLabelAlign.mobile = data.mobile
    this.formLabelAlign.company = data.company
  },
  methods: {
    save(formName){
        this.$refs[formName].validate((valid) => {
            if(valid){
                this.loading = true
                this.$post('/createInquiry',this.formLabelAlign).then(res=>{
                    if (res && res.code == 200){
                        this.$message.success(res.msg);
                        this.loading = false
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
    back(){
    //     var cas = this.$route.query.cas_no
    //     this.$refs['Form'].clearValidate();
    //   this.$router.push({
    //     path: "/prod_detail",
    //     name: "prod_detail",
    //     query: {
    //       cas_no: cas
    //     }
    //   });
    this.$router.back(-1)
    }
  }
};
</script>
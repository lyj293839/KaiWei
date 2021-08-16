<style scoped>
.bill /deep/ .el-form-item {margin-bottom: 10px;text-align: left;}
.bill /deep/ .el-form-item .el-form-item__label{padding: 0px;}
.bill /deep/ .el-form .el-radio-group .el-radio-button{border: 1px solid #DDDDDD;margin-right: 10px;}
.bill /deep/ .el-form .el-radio-group .el-radio-button__inner{border: none;background: white;font-size: 16px;border-radius:0px;}
</style>
<template>
<div class="bill">
    <el-form label-position="top" label-width="100px" ref="Form" :model="formData" :rules="rules1">
        <el-row type="flex" justify="space-between">
            <el-col :span="11">
                <el-form-item label="类型" required>
                    <el-select v-model="formData.type" @change="change_type()" placeholder="请选择" style="width:100%;">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
            </el-col>
            <el-col :span="11">
                <el-form-item label="联系电话" prop='mobile'>
                    <el-input v-model="formData.mobile" placeholder="请输入内容"></el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-form-item label="发票税号" prop='duty_paragraph'>
            <el-input v-model="formData.duty_paragraph" placeholder="请输入内容"></el-input>
        </el-form-item>
        <div v-if="formData.type==1">
            <el-form-item label="发票抬头" prop='rise'>
                <el-input v-model="formData.rise" placeholder="请输入内容"></el-input>
            </el-form-item>
        </div>
        <div v-else>
            <el-form-item label="开户银行" prop='open_bank'>
                <el-input v-model="formData.open_bank" placeholder="请输入内容"></el-input>
            </el-form-item>
            <el-form-item label="开户账号" prop='bank_no'>
                <el-input v-model="formData.bank_no" placeholder="请输入内容"></el-input>
            </el-form-item>
            <el-form-item label="企业注册地址" prop='register_address'>
                <el-input v-model="formData.register_address" placeholder="请输入内容"></el-input>
            </el-form-item>
            <el-form-item label="企业注册电话" prop='company_mobile'>
                <el-input v-model="formData.company_mobile" placeholder="请输入内容"></el-input>
            </el-form-item>
        </div>
        <el-form-item label="省·市·区" prop='province_id'>
            <el-select v-model="formData.province_id" placeholder="省" style="width:32%;" @change="provinceChange()">
                <el-option
                    v-for="item in provinceList"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id">
                </el-option>
            </el-select>
            <el-select v-model="formData.city_id" placeholder="市" style="width:33%;" @change="cityChange()">
                <el-option
                    v-for="item in cityList"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id">
                </el-option>
            </el-select>
            <el-select v-model="formData.area_id" placeholder="区" style="width:33%;">
                <el-option
                    v-for="item in areaList"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id">
                </el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="详细街道" prop='address'>
            <el-input v-model="formData.address" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item style="text-align:right;">
            <el-button type="primary" size="small" :loading="loading" @click="save('Form')">确定</el-button>
            <el-button size="small" @click="close()">取消</el-button>
        </el-form-item>
    </el-form>
</div>
</template>
<script>
export default {
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
    var riseCheck = (rule, value, callback) => {
      if (!value&&this.formData.type==1) {
        callback(new Error('发票抬头不能为空'));
      } else {
        callback();
      }
    };
    var open_bankCheck = (rule, value, callback) => {
      if (!value&&this.formData.type==2) {
        callback(new Error('开户银行不能为空'));
      } else {
        callback();
      }
    };
    var bank_noCheck = (rule, value, callback) => {
      if (!value&&this.formData.type==2) {
        callback(new Error('开户账号不能为空'));
      } else {
        callback();
      }
    };
    var registerCheck = (rule, value, callback) => {
      if (!value&&this.formData.type==2) {
        callback(new Error('企业注册地址不能为空'));
      } else {
        callback();
      }
    };
    var company_mobileCheck = (rule, value, callback) => {
      if (!value&&this.formData.type==2) {
        callback(new Error('企业注册电话不能为空'));
      } else {
        callback();
      }
    };
    var provinceCheck = (rule, value, callback) => {
      if (!value||!this.formData.city_id||!this.formData.area_id) {
        callback(new Error('地区请填写完整'));
      } else {
        callback();
      }
    };
    return {
        loading:false,
        formData:{
            duty_paragraph:'',
            province_id:'',
            city_id:'',
            area_id:'',
            mobile :'',
            address:'',
            type:1,
            company_mobile:'',
            open_bank:'',
            bank_no:'',
            rise:'',
            register_address:''
        },
        options:[
            {label:'普通发票',value:1},
            {label:'其他发票',value:2}
        ],
        provinceList:[],
        cityList:[],
        areaList:[],
        rules1:{
            mobile:[
            {validator: mobileCheck, trigger: 'blur'},
            ],
            duty_paragraph:[
            { required: true, message: "发票税号不能为空", trigger: 'blur'},
            ],
            rise:[
            { required: true,validator: riseCheck, trigger: 'blur'},
            ],
            open_bank:[
            { required: true,validator: open_bankCheck, trigger: 'blur'},
            ],
            bank_no:[
            { required: true,validator: bank_noCheck, trigger: 'blur'},
            ],
            register_address:[
            { required: true,validator: registerCheck, trigger: 'blur'},
            ],
            company_mobile:[
            { required: true,validator: company_mobileCheck, trigger: 'blur'},
            ],
            province_id:[
            { required: true,validator: provinceCheck, trigger: 'blur'},
            ],
            address:[
            { required: true, message: "地址不能为空", trigger: 'blur'},
            ],
        }
    };
  },
  created() {
    this.fetchat()
  },
  methods: {
    fetchat(){
        this.$post('/provinceList').then(res=>{
          if (res && res.code == 200){
              this.provinceList = res.data
          }else{
              this.$message.error(res.msg);
          }
        }).catch(function(error) {
            console.log(error)
        });
    },
    Add(){
        this.formData={
            duty_paragraph:'',
            province_id:'',
            city_id:'',
            area_id:'',
            mobile :'',
            address:'',
            type:1,
            company_mobile:'',
            open_bank:'',
            bank_no:'',
            rise:'',
            register_address:''
        }
    },
    Edit(item){
        this.formData=JSON.parse(JSON.stringify(item))
        this.$post('/childRegion',{id:item.province_id}).then(res=>{
            if (res && res.code == 200){
                this.cityList = res.data
            }else{
                this.$message.error(res.msg);
            }
        }).catch(function(error) {
            console.log(error)
        });
        this.$post('/childRegion',{id:item.city_id}).then(res=>{
          if (res && res.code == 200){
              this.areaList = res.data
          }else{
              this.$message.error(res.msg);
          }
        }).catch(function(error) {
            console.log(error)
        });
    },
    save(formName){
        this.$refs[formName].validate((valid) => {
            if(valid){
                this.loading = true
                if(this.formData.id){
                    this.$post('/editInvoice',this.formData).then(res=>{
                        if (res && res.code == 200){
                            this.$message.success(res.msg);
                            this.loading = false
                            this.resetForm()
                            this.$parent.$parent.save_bill()
                        }else{
                            this.$message.error(res.msg);
                            this.loading = false
                        }
                    }).catch(function(error) {
                        console.log(error)
                        this.loading = false
                    });
                }else{
                    this.$post('/addInvoice',this.formData).then(res=>{
                        if (res && res.code == 200){
                            this.$message.success(res.msg);
                            this.$parent.$parent.save_bill()
                            this.resetForm()
                            this.loading = false
                        }else{
                            this.$message.error(res.msg);
                            this.loading = false
                        }
                    }).catch(function(error) {
                        console.log(error)
                        this.loading = false
                    });
                }
            }else{
                console.log('error submit!!');
                return false;
            }
        })
    },
    close(){
        this.$parent.$parent.close_bill()
    },
    change_type(){
        this.resetForm()
        if(this.formData.type==1){
            this.formData.company_mobile = ''
            this.formData.open_bank = ''
            this.formData.bank_no = ''
            this.formData.register_address = ''
        }else{
            this.formData.rise = ''
        }
    },
    resetForm() {
        this.$refs['Form'].clearValidate();
    },
    provinceChange(){
        this.formData.city_id = ''
        this.formData.area_id = ''
        this.$post('/childRegion',{id:this.formData.province_id}).then(res=>{
            if (res && res.code == 200){
                this.cityList = res.data
            }else{
                this.$message.error(res.msg);
            }
        }).catch(function(error) {
            console.log(error)
        });
    },
    cityChange(){
        this.formData.area_id = ''
        this.$post('/childRegion',{id:this.formData.city_id}).then(res=>{
          if (res && res.code == 200){
              this.areaList = res.data
          }else{
              this.$message.error(res.msg);
          }
        }).catch(function(error) {
            console.log(error)
        });
    },
  }
};
</script>

<style scoped>
div /deep/ .el-form .el-radio-group .el-radio-button{border: 1px solid #DDDDDD;margin-right: 10px;}
div /deep/ .el-form .el-radio-group .el-radio-button__inner{border: none;background: white;font-size: 16px;border-radius:0px;}
div .foot{display: flex;justify-content: space-between;align-items: center;}
div /deep/ .el-form-item {padding: 0px;text-align: left;}
</style>
<template>
<div>
    <el-form label-position="top" label-width="100px">
            <el-row type="flex" justify="space-between">
                <el-col :span="11">
                    <el-form-item label="联系人" required>
                        <el-input v-model="formData.username" placeholder="请输入内容"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="11">
                    <el-form-item label="联系电话" required>
                        <el-input v-model="formData.mobile" placeholder="请输入内容"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row type="flex" justify="space-between">
                <el-col :span="11">
                    <el-form-item label="邮政编码">
                        <el-input v-model="formData.postcode" placeholder="请输入内容"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row type="flex" justify="space-between">
                <el-col :span="8">
                    <el-form-item label="省" required>
                        <el-select v-model="formData.province_id" placeholder="请选择" @change="provinceChange()">
                            <el-option
                                v-for="item in provinceList"
                                :key="item.id"
                                :label="item.name"
                                :value="item.id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="市" required>
                        <el-select v-model="formData.city_id" placeholder="请选择" @change="cityChange()">
                            <el-option
                                v-for="item in cityList"
                                :key="item.id"
                                :label="item.name"
                                :value="item.id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="区" required>
                        <el-select v-model="formData.area_id" placeholder="请选择">
                            <el-option
                                v-for="item in areaList"
                                :key="item.id"
                                :label="item.name"
                                :value="item.id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-form-item label="街道地址" required>
                <el-input v-model="formData.address" placeholder="请输入内容" style="width:100%;"></el-input>
            </el-form-item>
            <el-form-item label="积分用途：">
                <div class="foot">
                    <el-radio-group v-model="formData.label" fill="#00AAEA" size="small">
                        <el-radio-button :label="1">公司</el-radio-button>
                        <el-radio-button :label="2">家</el-radio-button>
                    </el-radio-group>
                    <div>
                        <el-button type="primary" size="small" :loading="loading" @click="createAddress()">确定</el-button>
                        <el-button size="small" @click='deliveryClose()'>取消</el-button>
                    </div>
                </div>
            </el-form-item>
    </el-form>
</div>
</template>
<script>
export default {
  data() {
    return {
        formData:{
            username:'',
            mobile:'',
            province_id:'',
            city_id:'',
            area_id:'',
            address:'',
            postcode:'',
            label:'',
        },
        loading:false,
        provinceList:[],
        cityList:[],
        areaList:[]
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
            username:'',
            mobile:'',
            province_id:'',
            city_id:'',
            area_id:'',
            address:'',
            postcode:'',
            label:'',
        }
    },
    Edit(item){
        this.formData = item
        this.$post('/childRegion',{id:this.formData.province_id}).then(res=>{
          if (res && res.code == 200){
              this.cityList = res.data
          }else{
              this.$message.error(res.msg);
          }
        }).catch(function(error) {
            console.log(error)
        });
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
    createAddress(){
        this.loading = true
        if(this.formData.address_id){
            this.$post('/editAddress',this.formData).then(res=>{
                if (res && res.code == 200){
                    this.$message.success(res.msg);
                    this.loading = false
                    this.$parent.$parent.save_delivery()
                }else{
                    this.$message.error(res.msg);
                    this.loading = false
                }
            }).catch(function(error) {
                console.log(error)
                this.loading = false
            });
        }else{
            this.$post('/createAddress',this.formData).then(res=>{
            if (res && res.code == 200){
                this.$message.success(res.msg);
                this.loading = false
                this.$parent.$parent.save_delivery()
            }else{
                this.$message.error(res.msg);
                this.loading = false
            }
            }).catch(function(error) {
                console.log(error)
                this.loading = false
            });
        }
        
    },
    deliveryClose(){
        this.$parent.$parent.close_delivery()
    },
  }
};
</script>

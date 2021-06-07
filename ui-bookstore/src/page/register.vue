<template>
    <div class="register">
      <el-container direction="vertical">
          <!--   头部和banner-->
          <el-main><pageheader></pageheader></el-main>
          <div class="banner">
            <el-container direction="horizontal" class="search">
              <el-main>
                <el-image :src="require('@/assets/img/logo.png')" style="width: 230px;height: 88px"></el-image>
              </el-main>
              <el-container direction="vertical">
                <el-main class="search-input">
                  <el-input placeholder="请输入内容" style="width:320px"></el-input> <el-button><span>搜索</span></el-button></el-main>
                <el-main class="history">
                  <ul class="history">
                    <li class="his-li">莫言</li>
                    <li class="his-li">余光中</li>
                    <li class="his-li">毛姆</li>
                    <li class="his-li">追风筝的人</li>
                    <li class="his-li">莫言</li>
                    <li class="his-li">余光中</li>
                  </ul>

                </el-main>
              </el-container>
            </el-container>
          </div>


        <el-main style="width: 100%">
          <div class="reg-form">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="头像" class="userImg">
          <el-upload
            class="avatar-uploader"
            action
            ::limit="1"
            :show-file-list="false"
            :on-change="handleChange"
            :before-upload="beforeUpload"
            accept="image/png, image/gif, image/jpg, image/jpeg">
            <img v-if="ruleForm.userImg" :src="ruleForm.userImg" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="账号">
          <el-input v-model="ruleForm.account"></el-input>
        </el-form-item>
        <el-form-item label="昵称">
          <el-input v-model.number="ruleForm.userName"></el-input>
        </el-form-item>
        <el-form-item
          label="邮箱">
          <el-input v-model="ruleForm.email"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-radio v-model="ruleForm.sex" label="0">男</el-radio>
          <el-radio v-model="ruleForm.sex" label="1">女</el-radio>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="ruleForm.password" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码">
          <el-input type="password" v-model="ruleForm.checkpwd" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item class="form-btn">
        <el-button type="primary" @click="resetForm('ruleForm')">取 消</el-button>
        <el-button type="primary" @click="submitForm('ruleForm')">注 册</el-button>
        </el-form-item>
      </el-form>
          </div>
        </el-main>
        <pagefooter></pagefooter>
      </el-container>
    </div>
</template>

<script>
  import pageheader from "../components/pageheader";
  import pagefooter from "../components/pagefooter";
  import {register} from "../axios/api";
  export default {
        name: "register",
      components: {
        pageheader,
        pagefooter
      },
      data() {
        var checkNum = (rule, value, callback) => {
          if (!value) {
            return callback(new Error('账号不能为空'));
          }
          setTimeout(() => {
            if (!Number.isInteger(value)) {
              callback(new Error('请输入数字值'));
            } else {
              var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
              if (!myreg.test(value) ) {
                callback(new Error('请输入正确的手机号码'));
              } else {
                callback();
              }

            }
          }, 1000);
        };
        var validatePass = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入密码'));
          } else {

            callback();
          }
        };
        return {
          ruleForm: {
            userId:'',
            account:'',
            password: '',
            userName: '',
            sex:'',
            email:'',
            role:'2',
            createDate:'',
            disabled:'1',
            userImg:'',
          },
          checkpwd:'',
          rules: {
            password: [
              { validator: validatePass, trigger: 'blur' }
            ],

            userName: [
              { validator: checkNum, trigger: 'blur' }
            ]
          },
        };
      },
      methods: {
          submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              //提交成功做的动作
             console.log("注册信息"+JSON.stringify(this.ruleForm));
              this.ruleForm.createDate=new Date().getDay();
              var formparams=this.ruleForm;
              register(formparams).then(res=>{
                console.log(res);
                if(res.status==200){
                  this.$message({
                    type: 'success',
                    message: '注册成功'
                  })
                  this.$router.push("/index");
                }else{
                  this.$message.error('注册异常');
                }

              })
              //表单验证失败
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        },
        handleChange(file) {
          const isLt2M = file.size / 1024 / 1024 < 2;
          if (isLt2M) {
            // uploadImgToBase64()返回一个Promise对象，通过.then()获取其数据。其中data.result是图片转成的base64值
            this.uploadImgToBase64(file.raw).then((data) => {
              this.ruleForm.userImg= data.result;
            });
          } else {
            this.$message.error("上传图片大小不能超过 2MB!");
          }
        },
        uploadImgToBase64(file) {
          // 核心方法，将图片转成base64字符串形式
          return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () {
              // 图片转base64完成后返回reader对象
              resolve(reader);
            };
            reader.onerror = reject;
          });
        },
        beforeUpload(file) {
          return false;
        },
      }
    }
</script>

<style scoped>
  @import "../assets/css/register.css";
</style>

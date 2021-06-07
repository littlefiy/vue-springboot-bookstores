<template>
  <div id="pageheader">
      <div class="top">
        <el-container direction="horizontal">
          <el-main style="margin-top: 10px">欢迎使用 乘风 闲置书籍流动平台</el-main>
          <el-main>
            <ul>
              <li><span @click="toIndex">首页</span></li>
            <!--  <li>消息</li>-->
            <!--  <li> <span @click="clearCookie">test</span></li>-->
              <li> <span @click="toRegister">注册</span></li>
              <li><template v-if="!this.$store.state.token"><span @click="loginCheck()">登录</span></template></li>
              <li class="img-no-li"><template v-if="this.$store.state.token" class="img-down">
                <el-dropdown>
                  <span class="el-dropdown-link">
                    <el-avatar :src="this.$store.state.user.userImg" style="border:1px solid #EEEAA0"></el-avatar>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item icon="el-icon-user">
                      <span @click="touserinfo">个人中心</span>
                    </el-dropdown-item>
                    <el-dropdown-item icon="el-icon-user">
                      <span @click="toaddbook">发布闲置书籍</span>
                    </el-dropdown-item>
                    <el-dropdown-item icon="el-icon-user">
                      <span @click="toshoppingcar">购物车</span>
                    </el-dropdown-item>
                    <el-dropdown-item icon="el-icon-circle-close">
                      <span @click="toorderlist">我的订单</span>
                    </el-dropdown-item>
                    <el-dropdown-item icon="el-icon-circle-close">
                      <span @click="logout">退出登录</span>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
               </template> </li>

            </ul>
          </el-main>
        </el-container>
        <!--仔细阅读Dialog的各个属性参数，会影响到布局排版，例如遇到了一个大坑就是没有设置:append-to-body='true'，导致遮罩遮盖整个页面，:lock-scroll="false"没有设置的话，点击前后会感觉到头部导航栏的移动，体验性很不好！！还有设置dialog的宽度width="40%"前面不用加冒号：-->
        <el-dialog title="登录" :visible.sync="dialogFormVisible"  center :append-to-body='true' :lock-scroll="false" width="30%">
          <!--这里可以写各种登录表单-->
          <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
            <el-form-item label="账   号" prop="num">
              <el-input v-model="ruleForm2.account" style="width:250px"></el-input>
            </el-form-item>

            <el-form-item label="密   码" prop="pass">
              <el-input type="password" v-model="ruleForm2.password" auto-complete="off" style="width:250px"></el-input>
            </el-form-item>

            <el-form-item label="记住密码" prop="delivery" class="from-switch">
              <el-switch v-model="delivery" active-color="#E0B41B"></el-switch>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false,resetForm('ruleForm2')">取 消</el-button>
            <el-button type="primary" @click="submitForm('ruleForm2')">登 录</el-button>
          </div>
        </el-dialog>
      </div>


  </div>
</template>
<script>
  import {login} from '../axios/api'
  export default {
    name: "pageheader",
    data() {
      /*插入form方法*/
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
      /*插入form方法*/

      return {
        userImgURl:'',
        delivery: false,
        /*插入form方法*/
        /*设定规则指向*/
        ruleForm2: {
          password: '',
          account: '',

        },
        rules2: {
          password: [
            { validator: validatePass, trigger: 'blur' }
          ],

          account: [
            { validator: checkNum, trigger: 'blur' }
          ]
        },

        /*插入form方法*/
        dialogFormVisible:false,
        dialogTableVisible: false,
        form: {
          name: '',
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
      };
    },
    //页面加载调用获取cookie值
    mounted() {
      this.getCookie();
    },
    methods: {
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            login(this.ruleForm2).then(res=>{
              if(res.data!=""){
                //判断复选框是否被勾选 勾选则调用配置cookie方法
                console.log(res.data);
                if (this.delivery == true) {
                  console.log("checked == true");
                  //传入账号名，密码，和保存天数3个参数
                  this.setCookie(this.ruleForm2.account, this.ruleForm2.password, 7);
                } else {
                  console.log("清空Cookie");
                  //清空Cookie
                  this.clearCookie();
                }
                this.$store.commit('setToken',true);
                this.dialogFormVisible = false;
                this.userImgURl="http://localhost:88/upload/"+res.data.userImg;
                res.data.userImg=this.userImgURl;
                this.$store.commit('setUser',res.data);
                console.log(this.userImgURl)
                console.log(res.data)
                this.$message({
                  type: 'success',
                  message: '欢迎您：'+this.$store.state.user.userName,
                  showClose: true,
                });
              }else{
                this.$message({
                  showClose: true,
                  message: '登录失败，用户名或密码错误',
                  type: 'error'
                });
                this.ruleForm2.account="";
                this.ruleForm2.password="";
                this.delivery=false;
              }
            })
          } else {
            this.$message.error("登录异常");
            return false;
          }
        });
      },
      //设置cookie
      setCookie(c_name, c_pwd, exdays) {
        var exdate = new Date(); //获取时间
        exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays); //保存的天数
        //字符串拼接cookie
        window.document.cookie = "account" + "=" + c_name + ";path=/;expires=" + exdate.toGMTString();
        window.document.cookie = "password" + "=" + c_pwd + ";path=/;expires=" + exdate.toGMTString();
      },
      //读取cookie
      getCookie: function () {
        if (document.cookie.length > 0) {
          var arr = document.cookie.split('; '); //这里显示的格式需要切割一下自己可输出看下
          for (var i = 0; i < arr.length; i++) {
            var arr2 = arr[i].split('='); //再次切割
            //判断查找相对应的值
            if (arr2[0] == 'account') {
              this.ruleForm2.account = arr2[1]; //保存到保存数据的地方
            } else if (arr2[0] == 'password') {
              this.ruleForm2.password = arr2[1];
            }
          }
        }
      },
      //清除cookie
      clearCookie: function () {
        this.setCookie("account", "password", -1); //修改2值都为空，天数为负1天就好了
        this.$store.commit('setToken',false);
      },
      loginCheck: function () {
        if (this.$store.state.token==true) {
          this.$message({
            showClose: true,
            message: '您已经登录了！'
          });
        } else {
          this.dialogFormVisible = true;
        }
      },
      logout: function () {
        if (document.cookie.length > 0) {
          this.clearCookie();
          this.$message({
            showClose: true,
            message: '退出登录',
            type: "success"
          });
        } else {
          this.$message({
            showClose: true,
            message: '您还未登录',
          });
        }

      },
      toshoppingcar(){
        this.$router.push({
          name:"shoppingcar",
          params:{
            fullStorage:null
          }
        });
      },

      toRegister(){
        this.$router.push('/register')
      },
      toIndex(){
        this.$router.push('/')
      },
      toaddbook(){
        this.$store.commit('setUserInfoTag','addbook');
        this.$router.push('/addbook')
      },
      toorderlist(){
        this.$store.commit('setUserInfoTag','myorders');
        this.$router.push('/myorders')
      },
      touserinfo(param){
        this.$store.commit('setUserInfoTag','welcome');
        this.$router.push('/userinfo')
      }
    }
  }
</script>

<style scoped>
  .dialog-footer >>>.el-button--primary{
    background-color: #E0B41B;
    border: 0;

  }
  .dialog-footer >>> .el-button{
    width: 120px;
  }

#pageheader{
  width: 100%;
  background-color: #666752;
  color: white;
  height: 45px;
}
  .top{
    width: 1226px;
    margin:0 auto;
  }
  ul{
    list-style-type:none;
    margin:0px;
    width: 200px;
    position: relative;
    left:360px;
  }
  ul li{
    float: left;
    margin-left: 8px;
    margin-top:10px;
  }
  ul > .img-no-li{
    margin-top: 1px;
  }
</style>

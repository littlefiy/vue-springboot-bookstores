<template>
    <div>
      <el-container direction="vertical" style="width: 100%">
      <!--  顶部标题-->
        <el-main>
          <pageheader></pageheader>
        </el-main>
        <div class="banner">
          <el-container class="search">
            <el-main>
              <el-image :src="require('@/assets/img/userinfo.png')" style="width: 260px;height: 100px"></el-image>
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
        <el-container style="width: 1226px;margin: 0 auto">
      <!--侧标导航栏-->
          <el-aside width="200px" style="overflow: hidden;height: 700px">
            <el-menu
              :default-active="this.defaultActive"
              ref='menu'
              style="min-height: 100%;"
              theme="dark"
              :router="true">
              <el-menu-item index="welcome"><i class="el-icon-menu"></i>个人中心</el-menu-item>
              <el-menu-item index="shoppingcar"><i class="el-icon-menu"></i>购物车</el-menu-item>
              <el-menu-item index="myorders"><i class="el-icon-menu"></i>我的订单</el-menu-item>
              <el-menu-item index="addbook"><i class="el-icon-menu"></i>发布闲置书籍</el-menu-item>
              <el-submenu index="2">
                <template slot="title"><i class="el-icon-document"></i>我的交易</template>
                <el-menu-item index="mybooks">已发布书籍</el-menu-item>
                <el-menu-item index="salebook">已卖出书籍</el-menu-item>
                <el-menu-item index="buybook">已买到书籍</el-menu-item>
              </el-submenu>
              <el-submenu index="3">
                <template slot="title"><i class="el-icon-plus"></i>我的消息</template>
                <el-menu-item index="message">消息列表</el-menu-item>
              </el-submenu>
              <el-submenu index="4">
                <template slot="title"><i class="el-icon-star-on"></i>我的地址</template>
                <el-menu-item index="address">所有收货地址</el-menu-item>
                 <el-menu-item index="addaddress">添加收货地址</el-menu-item>
              </el-submenu>
              <el-submenu index="5">
                <template slot="title"><i class="el-icon-edit"></i>设置</template>
                 <el-menu-item index="updateinfo">修改个人信息</el-menu-item>
                <el-menu-item index="about">关于我们</el-menu-item>
              </el-submenu>
            </el-menu>
          </el-aside>
      <!--右边主体信息-->
          <el-container direction="vertical">

              <!--    导航栏面包屑-->
              <div style="padding-top: 12px">
                <el-breadcrumb separator="/">
                  <el-breadcrumb-item>个人中心</el-breadcrumb-item>
                  <el-breadcrumb-item v-for="(item, index) in $route.meta" :key="index">
                    {{item}}
                  </el-breadcrumb-item>
                </el-breadcrumb>

              </div>
            <el-divider style="height: 1px;margin: 12px 0"></el-divider>

            <el-main>
              <keep-alive>
                <router-view></router-view>
              </keep-alive>
              <!-- </el-col>-->
            </el-main>
          </el-container>


        </el-container>
        <pagefooter></pagefooter>
      </el-container>
    </div>
</template>

<script>
  import pageheader from "../components/pageheader";
  import pagefooter from "../components/pagefooter";
    export default {
        name: "userInfo",
      data(){
        return{
          defaultActive:'welcome'
        }
      },
      mounted() {
      this.changeActive();
      },
      methods:{
        changeActive(){
          this.defaultActive=this.$store.state.userInfoTag;
          console.log(this.$store.state.userInfoTag)
        }
      },
      watch:{   //监听路由变化
        $route( to , from ){
         this.$store.commit("setUserInfoTag",to.fullPath)
          console.log( to)
          // to , from 分别表示从哪跳转到哪，都是一个对象
          // to.path  ( 表示的是要跳转到的路由的地址 eg: /home );
        }
      },
      components:{
          pageheader,pagefooter
        },
    }
</script>

<style scoped>
@import "../assets/css/userinfo.css";
</style>

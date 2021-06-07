<template>
  <div id="index">
    <el-container direction="vertical">
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

  <el-main class="index-body">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="首页" name="first">

        <el-container direction="vertical">
        <el-container>

      <!--图书分类-->
        <el-aside width="250px">
          <div class="type-group">
            <div class="type-header"><span class="type-header-text">图书分类</span>/更多</div>
            <div class="type">
              <div class="type-text"><span>线装古籍/民国旧书</span><i class="el-icon-arrow-right"></i></div>
              <div class="type-text"><span>小说/文字/语言文字</span><i class="el-icon-arrow-right"></i></div>
              <div class="type-text"><span>历史/地理/艺术</span><i class="el-icon-arrow-right"></i></div>
              <div class="type-text"><span>政治/军事/法律</span><i class="el-icon-arrow-right"></i></div>
              <div class="type-text"><span>哲学/社科/综合</span><i class="el-icon-arrow-right"></i></div>
              <div class="type-text"><span>童书/生活/体育</span><i class="el-icon-arrow-right"></i></div>
              <div class="type-text"><span>工程技术/互联网</span><i class="el-icon-arrow-right"></i></div>
              <div class="type-text"><span>自然科学/医药卫生</span><i class="el-icon-arrow-right"></i></div>
              <div class="type-text"><span>教材/教辅/考试</span><i class="el-icon-arrow-right"></i></div>
            </div>
            <div class="type-header"><span class="type-header-text">图书分类</span>/更多</div>
            <div class="type">
              <div class="type-text"><span>线装古籍/民国旧书</span><i class="el-icon-arrow-right"></i></div>
              <div class="type-text"><span>小说/文字/语言文字</span><i class="el-icon-arrow-right"></i></div>
              <div class="type-text"><span>历史/地理/艺术</span><i class="el-icon-arrow-right"></i></div>
              <div class="type-text"><span>政治/军事/法律</span><i class="el-icon-arrow-right"></i></div>
              <div class="type-text"><span>哲学/社科/综合</span><i class="el-icon-arrow-right"></i></div>
              <div class="type-text"><span>童书/生活/体育</span><i class="el-icon-arrow-right"></i></div>
              <div class="type-text"><span>工程技术/互联网</span><i class="el-icon-arrow-right"></i></div>
              <div class="type-text"><span>自然科学/医药卫生</span><i class="el-icon-arrow-right"></i></div>
              <div class="type-text"><span>教材/教辅/考试</span><i class="el-icon-arrow-right"></i></div>
            </div>
            <div class="type-header"><span class="type-header-text">图书分类</span>/更多</div>
            <div class="type">
              <div class="type-text"><span>线装古籍/民国旧书</span><i class="el-icon-arrow-right"></i></div>
              <div class="type-text"><span>小说/文字/语言文字</span><i class="el-icon-arrow-right"></i></div>
              <div class="type-text"><span>历史/地理/艺术</span><i class="el-icon-arrow-right"></i></div>
              <div class="type-text"><span>政治/军事/法律</span><i class="el-icon-arrow-right"></i></div>
              <div class="type-text"><span>哲学/社科/综合</span><i class="el-icon-arrow-right"></i></div>
              <div class="type-text"><span>童书/生活/体育</span><i class="el-icon-arrow-right"></i></div>
              <div class="type-text"><span>工程技术/互联网</span><i class="el-icon-arrow-right"></i></div>
              <div class="type-text"><span>自然科学/医药卫生</span><i class="el-icon-arrow-right"></i></div>
              <div class="type-text"><span>教材/教辅/考试</span><i class="el-icon-arrow-right"></i></div>
            </div>
          </div>


        </el-aside>
        <el-container direction="vertical" class="page-body">
          <!-- 轮播图-->
          <el-main class="index-carousel">
              <el-carousel :interval="4000" type="card" :height="bannerHeight + 'px'">
                <el-carousel-item v-for="item in items" :key="item.url">
                  <el-image :src="item.url" style="height: inherit;width: 100%"></el-image>
                </el-carousel-item>
              </el-carousel>
          </el-main>
          <!--图书列表-->
          <el-main>
            <booklist></booklist>
          </el-main>
          <el-main><booklist></booklist></el-main>
        </el-container>
      </el-container>
        <el-main><booklist></booklist></el-main>

    </el-container></el-tab-pane>

      <el-tab-pane label="最新发布" name="second">最新发布</el-tab-pane>
      <el-tab-pane label="动态" name="third">动态</el-tab-pane>
      <el-tab-pane label="个人中心" name="fourth">个人中心</el-tab-pane>
    </el-tabs>
  </el-main>
      <el-main><pagefooter></pagefooter></el-main>
    </el-container>
  </div>
</template>
  <script>

    import pageheader from '../components/pageheader'
    import pagefooter from '../components/pagefooter'
    import booklist from '../components/booklist'
    export default {
      name: "index",
      data: function () {
        return {
          items: [{
            url: require("@/assets/img/banner/banner1.PNG")
          }, {
            url: require("@/assets/img/banner/banner2.PNG")
          }, {
            url: require("@/assets/img/banner/banner3.PNG")
          }, {
            url: require("@/assets/img/banner/banner4.PNG")
          }],
          // 图片父容器高度
          bannerHeight: 1000,
          // 浏览器宽度
          screenWidth: 0,
          activeName: 'first',
        };
      },
      components: {
        booklist,
        pageheader,
        pagefooter
      },
      methods: {
        setSize: function () {
          // 通过浏览器宽度(图片宽度)计算高度
          this.bannerHeight = 400 / 1920 * this.screenWidth;
        },
        handleClick(tab, event) {
          console.log(tab, event);
        },
        toAddBookByUser(){
          this.$router.push("/addbookbyuser")
        }
      },
      mounted() {
        // 首次加载时,需要调用一次
        this.screenWidth = window.innerWidth;
        this.setSize();
        // 窗口大小发生改变时,调用一次
        window.onresize = () => {
          this.screenWidth = window.innerWidth;
          this.setSize();
        }
      }
    }

</script>

<style>
@import "../assets/css/index.css";

</style>

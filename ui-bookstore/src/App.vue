<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    window.addEventListener('unload', this.saveState)
  },
  methods: {
    saveState() {
      sessionStorage.setItem('state', JSON.stringify(this.$store.state))
    }
  }
}
</script>

<style  lang="css">
/*@import 'style/common.less';*/
  #app{
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    margin: 0 auto;
  }
  body,html{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow-x:hidden;/*隐藏页面底部滚动条*/
  }
  ul{
    list-style-type:none;
  }
.el-main{
  margin: 0;
  padding: 0;
}
.el-input__inner:focus,.el-textarea__inner:focus{
  border-color:#E0B41B
}
.el-dropdown-menu__item:focus,.el-dropdown-menu__item:not(.is-disabled):hover{
  background: rgba(227,227,225,0.6) !important;
  color: #E0B41B !important;
}
.el-button:hover{
  background-color: rgba(224,180,24,0.5);
  color: black;
  border: 1px solid #E0B41B;
}

</style>

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


</style>

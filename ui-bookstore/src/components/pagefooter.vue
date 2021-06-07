<template>
    <div id="pagefooter">
        <div class="footer-context">
            <el-row type="flex" class="row-bg" justify="center">
                <el-col :span="12"><div class="grid-content bg-purple">© 2021-2021 bookstore.ycy.sise.com 乘风二手商城 版权所有</div>
                </el-col>
            </el-row>
        </div>

    </div>
</template>

<script>
    export default {
        name: "pagefooter"
    }
</script>

<style scoped>

  .footer-context{
      width: 1226px;
      margin:0 auto;
  }
    #pagefooter{
        width: 100%;
        background-color: #666752;

    }
</style>

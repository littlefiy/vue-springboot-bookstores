<template>
    <div>
      <el-main >
        <div>
          <el-table
            :data="this.orderlist"
            style="width: 100%">
            <el-table-column type="expand">
              <template slot-scope="props">
                <el-table
                  :data="props.row.itemList"
                  style="width: 100%">
                  <el-table-column
                    prop="book.iSBN"
                    label="ISBN"
                    width="180">
                  </el-table-column>
                  <el-table-column
                    prop="book.bookName"
                    label="书名"
                    width="180">
                  </el-table-column>
                  <el-table-column
                    prop="book.author"
                    label="作者">
                  </el-table-column>
                  <el-table-column
                    prop="buyNum"
                    label="购买数量">
                  </el-table-column>
                </el-table>
              </template>
            </el-table-column>
            <el-table-column
              label="订单编号"
              prop="orderCode">
            </el-table-column>
            <el-table-column
              label="总计"
              prop="amount">
            </el-table-column>
            <el-table-column
              label="下单日期"
              prop="createDate">
              <template slot-scope="scope">{{scope.row.createDate| formatTime}}</template>
            </el-table-column>
          </el-table>
        </div>
      </el-main>


    </div>
</template>

<script>
    import {findorderlist} from "../../axios/api";
    export default {
        name: "myorders",
      data(){
        return{
          orderlist:[]
        }
      },
      mounted() {
        //显示全部订单
        var params=this.$store.state.user.userId;
        findorderlist(params).then(res=>{
          console.log(res.data)
          this.orderlist=res.data
        })

      }
    }
</script>

<style scoped>

</style>

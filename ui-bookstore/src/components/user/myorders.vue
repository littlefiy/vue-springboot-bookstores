<template>
    <div>
<!--      <el-main>-->
<!--        <span>待支付订单</span>-->
<!--       <div v-if="this.unpaylist!=null">-->
<!--&lt;!&ndash;        书名： {{this.unpaylist[0].orderCode}}&ndash;&gt;-->
<!--       </div>-->
<!--        <h4>倒计时00:30:00</h4>-->
<!--      </el-main>-->
      <el-main>

        <div v-if="this.orderlist!=null">
          <el-table
            :data="this.orderlist"
            style="width: 900px;margin-left: 30px">
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
        <div v-else>
          <span>目前没有订单哦~</span>
        </div>
      </el-main>


    </div>
</template>

<script>
  import {findorderlist, findunpayorder} from "../../axios/api";
    export default {
        name: "myorders",
      data(){
        return{
          orderlist:[],
          unpaylist:[]
        }
      },
      mounted() {
        //显示完成订单
        var params=this.$store.state.user.userId;
        findorderlist(params).then(res=>{
          console.log(res.data)
          this.orderlist=res.data
        })
        //未支付订单
      findunpayorder(params).then(res=>{
        console.log(res.data);
        this.unpaylist=res.data;
      })
      }
    }
</script>

<style scoped>

</style>

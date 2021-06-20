<template>
    <div id="userorder">

      <el-container direction="vertical">
        <pageheader></pageheader>
        <el-main style="width: 100%;">
          <h3>收货地址</h3>
          <el-form :model="addrForm" status-icon ref="addrForm" class="address-form" :inline="true">
            <el-form-item label="姓名">
              <el-input v-model="addrForm.account"></el-input>
            </el-form-item>
            <el-form-item label="电话">
              <el-input v-model.number="addrForm.userName"></el-input>
            </el-form-item>
            <el-form-item label="地址">
              <el-input v-model="addrForm.email"></el-input>
            </el-form-item>

          </el-form>
        </el-main>
          <el-main style="width: 100%;">
            <h3>订单详情</h3>
            <div class="car" style="width: 1266px;margin: 0 auto">

              <el-table
                ref="multipleTable"
                :data="orderitem"
                tooltip-effect="dark"
                style="width: 100%"
               >
                <el-table-column
                  label="商品信息"
                  width="120">
                  <template slot-scope="scope">
                    <el-image
                      style="width: 60px; height: 60px"
                      :src="'http://localhost:8088/upload/'+scope.row.book.imgurl[0]"
                    >
                    </el-image>

                  </template>
                </el-table-column>
                <el-table-column
                  label="ISBN"
                  show-overflow-tooltip>
                  <template slot-scope="scope">
                    <span>{{scope.row.book.iSBN}}</span>
                  </template>
                </el-table-column>
                <el-table-column
                  label="书名|作者"
                  show-overflow-tooltip>
                  <template slot-scope="scope">
                    <span>《{{scope.row.book.bookName}}》| <span>{{scope.row.book.author}}</span></span>
                  </template>
                </el-table-column>
                <el-table-column
                  label="出版社"
                  show-overflow-tooltip>
                  <template slot-scope="scope">
                    <span>{{scope.row.book.publisher}}</span>
                  </template>
                </el-table-column>
                <el-table-column
                  label="单价"
                  width="120">
                  <template slot-scope="scope">{{scope.row.book.price*scope.row.book.discount*0.01|formatNumber}}</template>
                </el-table-column>
                <el-table-column
                  label="数量"
                  show-overflow-tooltip>
                  <template slot-scope="scope">
                    {{scope.row.buyNum}}
                  </template>
                </el-table-column>
                <el-table-column
                  label="小计"
                  show-overflow-tooltip>
                  <template slot-scope="scope">{{scope.row.book.price*scope.row.book.discount*scope.row.buyNum*0.01|formatNumber}}</template>
                </el-table-column>
              </el-table>

              <div class="cart-footer" v-show="orderitem.length">
                <div class="cart-footer-desc">
                  共计 <span>{{countAll}}</span> 件商品
                </div>
                <div class="cart-footer-desc">
                  应付总额 <span>¥ {{costAll|formatNumber}}</span>
                </div>
                <div style="margin-top: 20px">
                  <el-button class="buy-btn" @click="submitOrder">提价订单</el-button>
                </div>
              </div>
            </div>
          </el-main>
        <pagefooter></pagefooter>
      </el-container>
    </div>
</template>

<script>
  import {addorder} from '../axios/api'
  import pageheader from "../components/pageheader";
  import pagefooter from "../components/pagefooter";
    export default {
        name: "userorder",
      components: {
        pageheader,
        pagefooter
      },
        data:function(){
          return{
            orderitem:[],
            addrForm:"",
            uporder:{
              carIds:[],
              userId:0,
              amount:0
            }
          }
        },
      computed:{
         countAll(){
           var count=0;
             this.orderitem.forEach(data=>{
               count+=data.buyNum
           })
           return count;
         },
        costAll(){
           var cost=0;
          this.orderitem.forEach(data=>{
            cost+=  data.book.price*data.book.discount*data.buyNum*0.01
          })
          return cost;
        },
        getCarIds(){
           var carIds=[];
          this.orderitem.forEach(data=>{
            carIds.push(data.carId)
          })
          return carIds;
        }
      },
        mounted() {
          JSON.stringify(this.$route.params.orderlist)
          let orderlist=[];
          orderlist=this.$route.params.orderlist
          orderlist.forEach(data=>{
            data.book.imgurl=data.book.imgurl.split(",");
          })
          this.orderitem=orderlist;
        },
      methods:{
        submitOrder(){
          this.uporder.carIds=this.getCarIds
          this.uporder.userId=this.$store.state.user.userId
           this.uporder.amount=this.costAll
          console.log(this.uporder)
          var params=this.uporder;
          addorder(params).then(res=>{
            console.log(res.data)
            this.$message({
              message:'下单成功'
            })
              this.$store.commit('setUserInfoTag','myorders');
              this.$router.push('/myorders')
          })
        }
      }
    }
</script>

<style scoped>
.address-form{
  width: 1226px;
  padding-bottom: 50px;
}
  .address-form .el-form-item >>>.el-input{
    width: 300px;
  }
</style>

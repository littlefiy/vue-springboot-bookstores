<template>
    <div class="shoppingcar">

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
        <!--购物车-->
        <el-main style="width: 100%;">
        <div class="car" style="width: 1266px;margin: 0 auto">
          <el-table
            ref="multipleTable"
            :data="this.$store.state.cartList"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange">
            <el-table-column
              type="selection"
              width="55"
              >
            </el-table-column>
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
              label="书名"
              width="190">
              <template slot-scope="scope">
                <span>{{scope.row.book.bookName}}</span><!--书名-->
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
              <template slot-scope="scope" class="input-number">
                <el-input-number v-model="scope.row.buyNum"  size="small" @change="handleCount($event,scope.$index)" :min="1" :max="scope.row.book.storage" label=""></el-input-number>
             <!--   <span v-show="$route.params.fullStorage" style="size: 4pt;color: red">库存紧张</span>-->
                <span v-if="scope.row.bookId==$route.params.fullStorage" style="size: 4px;color: red">
                  库存紧张
                </span>
              </template>

            </el-table-column>
            <el-table-column
              label="小计"
              show-overflow-tooltip>
              <template slot-scope="scope">{{scope.row.book.price*scope.row.book.discount*scope.row.buyNum *0.01|formatNumber}}</template>
            </el-table-column>
            <el-table-column
              label="管理"
              show-overflow-tooltip>
              <template slot-scope="scope">
                <span @click="toDeletecar(scope.row.carId)">删除</span>
              </template>
            </el-table-column>
          </el-table>
          <div class="page-div">
            <el-button @click="deleteCarList" style="display: block"><i class="el-icon-delete"></i></el-button>
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page.sync="pageInfo.currPage"
              background
              :page-size="5"
              layout="total, prev, pager, next"
              :total="this.pageInfo.totalCount">
            </el-pagination>
          </div>

          <div class="cart-footer" v-show="cartList.length">
            <div class="cart-footer-desc">
              共计 <span>{{ this.multipleSelection.length }}</span> 件商品
            </div>
            <div class="cart-footer-desc">
              应付总额 <span>¥ {{this.costAll*0.01 |formatNumber}}</span>
            </div>
          <div style="margin-top: 20px">
            <el-button class="buy-btn" @click="carSubmit">确定购买</el-button>
          </div></div>
        </div>
        </el-main>
        <pagefooter></pagefooter>
      </el-container>
    </div>
</template>

<script>
    import pageheader from "../components/pageheader";
    import pagefooter from "../components/pagefooter";
    import {findcar, toorder, editcar, delcar} from "../axios/api";

    export default {
        name: "shoppingcar",
      components: {
        pageheader,
        pagefooter
      },

      data:function () {
        return{
          cartinfo:{},
          cartList:[],
          multipleSelection: [],//选中的删除
/*          currentPage:1 ,*/
          buyBooks:[],
          pageInfo:{
            pageSize:0,
            totalPage:1,
            currPage:1
          },
          costAll:0.0,
          carvo:{
            userId:0,
            current:0
          }
        }
      },
      mounted() {
          if(this.$store.state.user.userId!=null){
            this.carvo.userId=this.$store.state.user.userId;
            this.carvo.current=this.pageInfo.currPage;
            var params=this.carvo;
          findcar(params).then(res=>{
            /*console.log(res.data);
            this.cartList=res.data;*/

            console.log(res.data)
            var imglist=[];
            res.data.lists.forEach(data=>{
              imglist=data.book.imgurl.split(",");
              data.book.imgurl=imglist
            })
            this.cartList=res.data.lists;
            this.pageInfo.totalPage=res.data.totalPage;
            this.pageInfo.pageSise=res.data.pageSize;
            this.pageInfo.totalCount=res.data.totalCount;
            this.pageInfo.currPage=res.data.currPage;
            this.$store.commit('setCartList',this.cartList)
            //console.log("store里的cartList"+JSON.stringify(this.$store.state.cartList))
            console.log("是否显示库存不足"+this.$route.params.fullStorage)
          })
          }
      },
      methods: {
        handleSizeChange(val) {
          console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
          console.log(`当前页: ${val}`);
          this.carvo.userId=this.$store.state.user.userId;
          this.carvo.current=val;
          var params=this.carvo;
          findcar(params).then(res=>{
            /*console.log(res.data);
            this.cartList=res.data;*/

            console.log(res.data)
            var imglist=[];
            res.data.lists.forEach(data=>{
              imglist=data.book.imgurl.split(",");
              data.book.imgurl=imglist
            })
            this.cartList=res.data.lists;
            this.pageInfo.currPage=res.data.currPage;
            this.$store.commit('setCartList',this.cartList)
          })
        },
        toggleSelection(rows) {
          if (rows) {
            rows.forEach(row => {
              this.$refs.multipleTable.toggleRowSelection(row);
            });
          } else {
            this.$refs.multipleTable.clearSelection();
          }
        },
        handleSelectionChange(val) {
          var cost=0;
          this.multipleSelection = []
          val.forEach(item => {
            this.multipleSelection.push(item.carId);   //把所有的id放进multipleSelection
            cost+= item.book.price * item.book.discount * item.buyNum;//计算总价
          })
          this.costAll=cost;
          console.log(JSON.stringify(this.multipleSelection))
        },
        toDeletecar(carId) {
          delcar(carId).then(res=>{
            if(res.data!=0)
          this.$store.commit('deleteCart', carId);
        })
        },
        deleteCarList() {
          console.log(this.multipleSelection)
          var carIds = this.multipleSelection;
          carIds.forEach(id => {
              delcar(id).then(res=> {
                this.$store.commit('deleteCart', id);
              })
          })


        },
        handleCount(event,index) {

          console.log(event,index)

          //更新对应商品购买数量
          this.$store.commit('editCartCount',{
            carId: this.cartList[index].carId,
            buyNum: event
          });
        console.log(JSON.stringify(this.$store.state.cartList[index]))
          //更新购物车商品数量
          var cart=this.$store.state.cartList[index];
          this.cartinfo.buyNum=cart.buyNum;
          this.cartinfo.userId=cart.userId;
          this.cartinfo.bookId=cart.bookId;
          editcar(this.cartinfo).then(res=>{
            console.log("更新购物车数量"+res.data);
          })

        },
        carSubmit() {
          var carIds=this.multipleSelection;
          toorder(carIds).then(res=>{
           console.log( res.data);
           this.$router.push({
             name:"userorder",
             params:{
               orderlist:res.data
             }
           })
          })

        }/*,
        handleDelete(index) {
          this.$store.commit('deleteCart', this.cartList[index].carId);
        },*/
         }

    }
</script>

<style scoped>
  @import "../assets/css/shopcar.css";
</style>

<template>
    <div>
      <div class="books-list">
        <div class="book-search">
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="搜索类型">
              <el-select v-model="formInline.region" placeholder="选择搜索类型">
                <el-option label="书名" value="shanghai"></el-option>
                <el-option label="ISBN" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="">
              <el-input v-model="formInline.user" placeholder="请输入搜索信息"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
          </el-form>
        </div>
<!--        单本图书布局-->
        <div class="books" v-if="this.books!=null">
          <el-table
            :data="this.books"
            height="700px"
            border
            style="width: 1000px;">
            <el-table-column label="封面" width="120">
              <template slot-scope="scope">
                <el-image :src="'http://localhost:8088/upload/'+scope.row.imgurl"  style="width: 90px;height: 90px"></el-image>
              </template>
            </el-table-column>
            <el-table-column
              prop="iSBN"
              label="ISBN"
              width="180">
            </el-table-column>
            <el-table-column
              prop="bookName"
              label="书名"
              width="180">
            </el-table-column>
            <el-table-column
              prop="author"
              width="180"
              label="作者">
            </el-table-column>
            <el-table-column
              prop="publisher"
              width="180"
              label="出版社">
            </el-table-column>
            <el-table-column
              prop="price"
              width="180"
              label="价格">
            </el-table-column>
            <el-table-column
              prop="storage"
              label="库存">
            </el-table-column>
            <el-table-column
              prop="tips"
              width="250"
              label="描述">
            </el-table-column>
            <el-table-column
              fixed="right"
              label="操作"
              width="100">
              <template slot-scope="scope">
                <el-button @click="updateBook(scope.row.bookId)" type="text" size="small">编辑</el-button>
                <el-button @click="delBook(scope.row)" type="text" size="small">删除</el-button>
              </template>
            </el-table-column>
          </el-table>

        </div>
        <div v-else>
          <span>未发布闲置</span>
        </div>

      </div>

    </div>
</template>

<script>
  import {delbook, findbookbyid, findbooksbyuser} from "../../../axios/api";

  export default {
        name: "goodlist",
      data(){
          return{
            books:[],
            formInline: {
              user: '',
              region: ''
            }
      }
      },
      mounted() {
        this.showBooks()
      },
    methods:{
      onSubmit() {
        console.log('submit!');
      },
      showBooks(){
            let userId=this.$store.state.user.userId;
            findbooksbyuser(userId).then(res=>{
              if(res.data!=null){
                console.log(res.data);
                let imglist=[];
                res.data.forEach(data=>{
                  imglist=data.imgurl.split(",");
                  data.imgurl=imglist[0]
                })
                this.books=res.data;
              }
            })
          },
      updateBook(bookId){
      //跳转到商品修改页面
        this.$router.push({
          name:"updatebook",
          params:{
            bookId:bookId
          }
        });
      },
      delBook(book){
        delbook(book).then(res=>{
            if(res.data!=0){
              this.$message({
                showClose:true,
                message:"删除成功",
                type:"success"
              })
              this.showBooks()
            }
        })
      }
    }
    }
</script>

<style scoped>
.book{
  width: 800px;
  height: 180px;
  border: 1px solid #000000;
  padding: 10px;
  margin-left: 60px;
}
  .books-list{
    margin-left: 30px;
  }

/deep/ .el-button--primary{
  background-color: #E0B41B;
  border: 1px solid #E0B41B;
  margin-left: 10px;
  width: 100px;
}
  /deep/ .el-select .el-input.is-focus .el-input__inner{
    border: 1px solid #E0B41B;
  }

  /deep/ .el-select .el-input__inner:focus{
    border-color: #666752;
  }
  /deep/ .el-select-dropdown__item.selected  /deep/ .el-button--text{
    color: #E0B41B;
  }
</style>

<template>
    <div id="booklist">
      <el-container direction="vertical">

        <el-breadcrumb separator="/">
          <el-breadcrumb-item><span class="booklist-header"><strong>好书推荐</strong></span></el-breadcrumb-item>
          <el-breadcrumb-item><a href="/" style="">更多</a></el-breadcrumb-item>
        </el-breadcrumb>
        <el-divider></el-divider>
        <el-container  direction="horizontal" style="overflow:hidden; zoom:1;padding:10px 0 5px 0;">

            <ul class="goods">
              <div v-for="(book) in bookdata" :key="book.index"  @click="toDetail(book.bookId)">
                <li class="one">
                  <ul><!--205272e1-fce1-43bb-aa2a-dbc73b586886.png-->
                    <li>
                        <el-image :src="'http://localhost:8088/upload/'+book.imgurl"  style="width: 182px;height: 200px"></el-image>
                    </li>
                    <li>
                      书名：<span style="font-size: 18px">{{book.bookName}}</span>
                    </li>
                    <li>
                     作者：<span style="opacity: 0.6">{{book.author}}</span>
                    </li>
                    <li>
                      价格：<span style="color: #ff6662">￥{{book.price*book.discount}}</span>
                    </li>
                  </ul>
                </li>

              </div>
            </ul>

        </el-container>
      </el-container>


    </div>
</template>

<script>
  import {findbooktop10} from "../axios/api"
    export default {
      name: "booklist",
      data: function () {
        return {
          bookdata:"",
        }
      },
      mounted() {
        findbooktop10().then(res=>{

          console.log(res.data)
          var imglist=[];
          res.data.forEach(data=>{
            imglist=data.imgurl.split(",");
            data.imgurl=imglist[0]
          })
          this.bookdata=res.data;
          console.log(this.bookdata[0].imgurl)
        })
      },
      methods:{
        toDetail(bookId){
          this.$router.push({
            name:'bookdetail',
            params:{
              bookId:bookId
            }
          })
        }
      }
    }
</script>

<style scoped>
  .el-divider--horizontal{
    margin: 8px 0;
  }
  .booklist-header{
    font-size: 22px;
  }

  .goods{
    overflow: hidden;
    width:1114px;
  }
  .one{
    width:230px;
    height:320px;
    float: left;
    margin: 1px;
    border: 1px solid #E3E3E1;
  }
  .one > ul >li{
    margin-top: 10px;
  }
</style>

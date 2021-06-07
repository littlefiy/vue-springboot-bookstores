<template>
    <div id="bookdetail">

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
<!--商品详情+购物车选项-->
        <div  class="bookdetail-body">
          <el-button icon="el-icon-back" type="text"><router-link to="/index" style="color: #333333">返回</router-link> </el-button>
        <el-container>
          <el-container class="book-show">

              <div class="big-img" v-if="book.imgurl">
                <el-image :src="'http://localhost:8088/upload/'+book.imgurl[0]" class="img"></el-image>
              </div>

            <el-main style="margin-left: 20px">
             <span style="font-size: 18px"><strong>{{book.bookName}}</strong></span>
              <div class="book-div-ul">
                <ul class="book-ul">
                  <li>
                    ISBN:<span>{{book.iSBN}}</span>
                  </li>
                  <li>
                    作者：<span>{{book.author}}</span>
                  </li>
                  <li>
                    类型：<span>{{book.code}}</span>
                  </li>
                  <li>
                    出版社：<span>{{book.publisher}}</span>
                  </li>
                  <li>
                    出版日期：<span>{{book.publishTime | formatDate}}</span>
                  </li>
                </ul>

              </div>
              <div class="book-price-ul">
                <ul>
                  <li>
                    售价：<span style="font-size: 18px;color: red">￥{{book.price*book.discount}}</span>
                  </li>
                  <li>
                    原价：<span style="font-size: 15px;opacity: 0.9">{{book.price}}</span>
                    折扣：<span style="font-size: 15px;opacity: 0.9">{{book.discount}}</span>
                  </li>
                </ul>
              </div>
              <el-divider></el-divider>
              <div class="book-date">
                <ul>
                  <li>上新时间：<span>{{book.upDate | formatTime}}</span></li>
                  <li>库存：<span>{{book.storage}}</span></li>
                </ul>
                购买数量：  <el-input-number v-model="car.buyNum" @change="handleChange" :min="1" :max="book.storage" ></el-input-number>
              </div>
              <div class="book-buy-btn">
                <el-button :autofocus="true">立即购买</el-button>
                <el-button :autofocus="true" @click="addcar"><i class="el-icon-shopping-cart-2"></i>加入购物车</el-button>
              </div>
            </el-main>
          </el-container>
          <!--<el-container direction="vertical" style="border: 1px solid;">
            <el-main>
              卖家信息1
            </el-main>
            <el-main>
              卖家信息2
            </el-main>
          </el-container>-->
        </el-container>
<!--        商品详情+评价-->
        <el-main class="book-tabs">
            <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
              <!--商品详情页-->
              <el-tab-pane label="商品详情" name="first">
                <div><span>{{book.tips}}</span></div>
                <div v-if="book.imgurl">
                  <div v-for="img in book.imgurl" :key="img.index">
                    <el-image :src="'http://localhost:8088/upload/'+img" style="width: 300px;height: 300px;margin: 10px 40px"></el-image>
                  </div>
                  </div>
              </el-tab-pane>
              <!--留言板页-->
              <el-tab-pane label="留言板" name="second">
                  <div class="comment-group">
                    <div class="addComment">
                      <el-form ref="addcomment" :model="addcomment">
                        <el-avatar :src="this.$store.state.user.userImg" style="border: 1px solid #E0B41B"></el-avatar>
                        <el-form-item label="">
                          <el-input v-model="addcomment.content"
                                    type="textarea"
                                    :rows="2"
                                    placeholder="看对眼就留言，问问细节吧"
                          style="width: 600px"></el-input>
                        </el-form-item>
                        <el-form-item>
                          <el-button type="primary" @click="subComment" style="background-color: #E0B41B;border: 0">留言</el-button>
                        </el-form-item>
                      </el-form>

                    </div>
                    <div class="comment" v-for="(commentdata) in commentlist" :key="commentdata.index">
                      <el-container>
                          <el-avatar :src="'http://localhost:8088/upload/'+commentdata.user.userImg" style="border: 1px solid #E0B41B"></el-avatar>
                      <el-main style="margin-left: 12px">
                        <div class="commit-name">
                          <span style="font-size: 14px">{{commentdata.user.userName}}</span>
                        <!--  <el-rate
                            v-model="commentdata.star"
                            disabled
                            show-score
                            text-color="#ff9900"
                            score-template="{value}">
                          </el-rate>-->
                          <div style="margin: 10px 0">
                            <span>{{commentdata.content}}</span>
                          </div>
                          <div style="margin: 10px 0;font-size: 14px">
                            <span>{{commentdata.commentDate | formatTime}}</span>
                          </div>

                        </div>
                      </el-main>
                      </el-container>
                      <el-divider></el-divider>
                    </div>
                  </div>
              </el-tab-pane>
            </el-tabs>
        </el-main>
        </div>
        <el-main><pagefooter></pagefooter></el-main>
      </el-container>

    </div>
</template>

<script>
  import pageheader from '../components/pageheader'
  import pagefooter from '../components/pagefooter'
  import {findbookbyid,findbookcomments,addcomment,addcar} from "../axios/api";

  export default {
        name: "bookdetail",
       data: function () {
          return {
            car:{
              buyNum:""
            },
            book:"",
            commentlist:"",
            activeName: 'first',
            addcomment: {
              content:""
            },
            bookId:'',
          }
      },
      components: {
        pageheader,
        pagefooter
      },
      mounted() {
          //获取图书信息
          this.bookId=this.$route.params.bookId;//参数
        if(this.bookId==null){
          this.bookId=14;//测试
        }
           // bookId=14;//测试
        var bid=this.bookId;
        findbookbyid(bid).then(res=>{
          //this.bookinfo=res;
          let imglist=res.data.imgurl.split(",")//从1开始取值
          this.book=res.data;
          this.book.imgurl=imglist;
          console.log(this.book)
          //获取图书留言
          this.getCommentlist();

        })
      },
      methods: {
        handleChange(value) {
          this.car.buyNum=value;
        },
        handleClick(tab, event) {
          console.log(tab, event);
        },
        addcar(){
            this.car.bookId=this.bookId;
            this.car.userId=this.$store.state.user.userId;
            console.log(JSON.stringify(this.car))
              addcar(this.car).then(res=> {
                this.$message({
                  showClose:true,
                  message:"添加成功",
                  type:"success"
                })
                var tag=null;
                if(res.data==0){
                  tag=this.bookId;
                }

              this.$router.push({
                name:"shoppingcar",
                params:{
                  fullStorage:tag
                }
              });
                console.log(tag,res)
          })

          /*this.$store.commit('addCart', 1);
          this.$router.push("/shoppingcar");*/
        },
        subComment(){
          this.addcomment.bookId=this.bookId;
          this.addcomment.userId=this.$store.state.user.userId;
          this.addcomment.commentDate=new Date();
          addcomment(this.addcomment).then(res=>{
            if(res!=0){
              this.$message({
                message:"留言成功",
                showClose:true,
                type:"success"
              })
              this.addcomment="";
              this.getCommentlist()

            }
          })
          console.log(JSON.stringify(this.addcomment));
        },
        getCommentlist(){
          //获取图书留言
          var bid2=this.bookId;
          findbookcomments(bid2).then(res=>{
            this.commentlist=res.data;
            console.log(res);
          })
        }

      }
    }
</script>

<style scoped>
  @import "../assets/css/bookdetail.css";

</style>


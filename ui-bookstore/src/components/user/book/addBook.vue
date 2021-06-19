<template>
    <div>
      <el-form :model="bookForm" status-icon  ref="bookForm" label-width="80px" class="book-form">
        <el-form-item  label="ISBN" class="">
          <el-input v-model="bookForm.iSBN"></el-input>
        </el-form-item>
        <el-form-item label="书名">
          <el-input v-model="bookForm.bookName"></el-input>
        </el-form-item>
        <el-form-item label="作者">
          <el-input v-model="bookForm.author"></el-input>
        </el-form-item>
        <el-form-item label="出版社">
          <el-input v-model="bookForm.publisher"></el-input>
        </el-form-item>
        <el-form-item label="出版日期">
          <el-date-picker
            v-model="bookForm.publishTime"
            type="month"
            format="yyyy-MM"
            value-format="yyyy-MM-dd"
            placeholder="选择年月">
          </el-date-picker>

        </el-form-item>
        <el-form-item label="数量">
<!--          <el-input v-model.number="bookForm.storage"></el-input>-->
          <el-input-number v-model="bookForm.storage" size="large" controls-position="right"  :min="1" :max="999" style="width: auto">
          </el-input-number>
        </el-form-item>
        <el-form-item label="单价">
          <el-input v-model="bookForm.price"></el-input>
        </el-form-item>
        <el-form-item label="折扣">
          <el-input v-model="bookForm.discount" placeholder="请输入百分比折扣" @change="formatDiscount">
            <template slot="append">%</template>
          </el-input>

        </el-form-item>
        <el-form-item label="现价">
          <el-input v-model="newprice" readonly></el-input>
        </el-form-item>
        <el-form-item label="书本描述">
          <el-input
            type="textarea"
            :rows="4"
            maxlength="100"
            show-word-limit
            placeholder="几成新呢，描述下你的书吧"
            v-model="bookForm.tips"
            style="width: 400px"></el-input>
        </el-form-item>
        <el-form-item label="添加书本图片" class="upload-item">
          <el-upload
            action=""
            multiple
            list-type="picture-card"
            :file-list="filelist"
            :auto-upload="false"
            :on-change="handleAddChange"
            :on-exceed="handleExceed"
            :on-remove="handleRemove"
            :limit="limitCount"
            :class="{hideUpload:hideUploadAdd}"
          >
            <i class="el-icon-plus" ></i>
            <div class="el-upload__tip" slot="tip">（最多上传4张图片）</div>
            <div slot="file" slot-scope="{file}">
              <img
                class="el-upload-list__item-thumbnail"
                :src="file.url" alt=""
              >
              <span class="el-upload-list__item-actions">
        <span
          class="el-upload-list__item-preview"
          @click="handlePictureCardPreview(file)"
        >
          <i class="el-icon-zoom-in"></i>
        </span>
        <span
          v-if="!disabled"
          class="el-upload-list__item-delete"
          @click="handleRemove(file)"
        >
          <i class="el-icon-delete"></i>
        </span>
      </span>
            </div>
          </el-upload>
          <!--    放大图-->
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
        </el-form-item>

        <el-form-item class="form-btn">
          <el-button type="primary" @click="resetForm('bookForm')">取 消</el-button>
          <el-button type="primary" @click="submitForm('bookForm')">发 布</el-button>
        </el-form-item>
      </el-form>

    </div>
</template>

<script>
    import {addbook} from "../../../axios/api";

    export default {
      name: "addBook",
      data:function () {
        return{
          bookForm:{
            code:'',
            userId:'',
            iSBN:'',
            bookName:'',
            author:'',
            imgurl:'',
            publisher:'',
            publishTime:'',
            price:'',
            discount:'',
            upDate:'',
            storage:'',
            tips:'',
            imgList:[],
          },
          dialogImageUrl: '',
          dialogVisible: false,
          disabled: false,
          hideUploadAdd:false,
          filelist:[],
          limitCount:4
        }
      },
      computed:{
        newprice:function () {
          let val=this.bookForm.price*this.bookForm.discount*0.01
          let price=Number(val).toFixed(3)
          let realVal = price.substring(0, price.length - 1)
          return  Number(realVal);
        }
      },
      methods: {
        formatDiscount(val){
          const r = /^\+?[1-9][0-9]*$/;//正整数
            if(!r.test(val)){
              this.$message({
                type:"warning",
                message:"折扣输入格式有误",
                showClose:true
              })
          }
        },
        newTransformBase64(list, callback, errorCallback) {
          let promise = [];
          list.forEach((item, index) => {
            let p = new Promise((resolve, reject) => {
              let reader = new FileReader();
              let obj;
              if (item.raw) {
                reader.readAsDataURL(item.raw);
                reader.onload = function (e) {
                  obj = reader.result;
                  resolve(obj);
                }
              }
            })
            promise.push(p);
          })

          Promise.all(promise).then(results => {
            callback(results);
          }).catch(error => {
            errorCallback && errorCallback();
            this.$message.error("错误");
          });
        },
        // 上传change事件
        handleAddChange(file){

          // 图片大小限制
          const isLt20M = file.size / 1024 / 1024 < 20;
          if (!isLt20M) {
            this.$message.error("上传图片大小不能超过 20MB!");
            this.filelist.splice(-1, 1);
          } else {
            this.filelist.push(file);
          }
          this.hideUploadAdd=this.filelist.length>=this.limitCount;
        },

        // 多选大于限制个数时做提示
        handleExceed(file) {
          // 上传文件>=限制个数时隐藏上传组件
            this.hideUploadAdd=true;
            this.$message({
              message: "上传文件超出限制个数！",
              type: "warning"
            })


        },
        handleRemove(file) {
          //从filelist当前图片uid
          var list=this.filelist;
          list.forEach((item,index)=>{
            if(item.uid==file.uid){
              console.log("uid配对")
              this.filelist.splice(index,1)
            }
          })
          this.hideUploadAdd=this.filelist.length>=this.limitCount;
        },
        handlePictureCardPreview(file) {
          this.dialogImageUrl = file.url;
          this.dialogVisible = true;
        },
        submitForm(formname){
          this.newTransformBase64(this.filelist, (results) => {
            this.bookForm.imgList=results;
            this.bookForm.userId=this.$store.state.user.userId;//添加该书本的用户
            console.log("当前用户id"+this.$store.state.user.userId);
            this.bookForm.code='10001';//图书类型id
            addbook(this.bookForm).then(res=>{
              if(res.data!=0){
                console.log(res.data)
                this.$message({
                  showClose:true,
                  message:"发布成功",
                  type:'success'
                })
                //跳转到详情页
                this.$router.push({
                  name:'bookdetail',
                  params:{
                    bookId:res.data
                  }
                })
              }
            })
          })


        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        },
      }
    }
</script>

<style scoped>
.hideUpload /deep/ .el-upload{
    display: none;
  }
  /deep/ .el-form-item .el-input{
    width: 300px;
    margin: 0 auto;
  }
  .book-form{
    width: 1000px;
    margin: 0 auto;
  }
  .form-btn>>>.el-button--primary{
    background-color: #E0B41B;
    border: 1px solid #E0B41B;
    margin-left: 60px;
    width: 120px;
  }
</style>

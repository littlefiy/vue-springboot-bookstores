<template>
    <div>
      <el-form :model="bookForm" status-icon  ref="bookForm" label-width="100px" class="book-form">
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
            type="date"
            placeholder="选择日期"
            format="yyyy 年 MM 月 dd 日"
            value-format="yyyy-MM-dd">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="数量">
          <el-input v-model.number="bookForm.storage"></el-input>
        </el-form-item>
        <el-form-item label="单价">
          <el-input v-model="bookForm.price"></el-input>
        </el-form-item>
        <el-form-item label="折扣">
          <el-input v-model="bookForm.discount"></el-input>
        </el-form-item>
        <el-form-item label="现价">
          <el-input v-model="newprice" readonly></el-input>
        </el-form-item>
        <el-form-item label="书本描述">
          <el-input
            type="textarea"
            :rows="4"
            placeholder="几成新呢，描述下你的书吧"
            v-model="bookForm.tips"
            style="width: 400px"></el-input>
        </el-form-item>
        <el-form-item label="添加书本图片">
          <el-upload
            action=""
            multiple
            :data="bookForm"
            list-type="picture-card"
            :file-list="filelist"
            :auto-upload="false"
            :class="{hide:hideUploadAdd}"
            :on-change="handleAddChange"
            :on-exceed="handleExceed"
            :on-remove="handleRemove"
            ref="upload"
          >
            <i slot="default" class="el-icon-plus"></i>
            <div class="el-upload__tip" slot="tip">（最多上传5张图片）</div>
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
          filelist:[]
        }
      },
      computed:{
        newprice:function () {
          return this.bookForm.price*this.bookForm.discount;
        }
      },
      methods: {
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
        handleAddChange(file, fileList){
          // 图片大小限制
          const isLt20M = file.size / 1024 / 1024 < 20;
          if (!isLt20M) {
            this.$message.error("上传图片大小不能超过 20MB!");
            fileList.splice(-1, 1);
          } else {
            this.filelist.push(file);
          }
        },

        // 多选大于限制个数时做提示
        handleExceed(file, fileList) {
          // 上传文件>=限制个数时隐藏上传组件
          if (fileList.length >= 5) {
            this.hideUploadAdd = true;
            this.$message({
              message: "上传文件超出限制个数！",
              type: "warning"
            });
          }
        },
        handleRemove(file,fileList) {
          this.$refs[upload].clearFiles(file)
        },
        handlePictureCardPreview(file) {
          this.dialogImageUrl = file.url;
          this.dialogVisible = true;
        },
        submitForm(formname){
          this.newTransformBase64(this.filelist, (results) => {
            this.bookForm.imgList=results;
            // console.log(JSON.stringify(this.bookForm))
            var bookparam=this.bookForm;
            this.bookForm.userId=this.$store.state.user.userId;//添加该书本的用户
            console.log(this.$store.state.user.userId);
            //this.bookForm.upDate=new Date();//获得当前系统时间
            // this.bookForm.upDate=this.$moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
            this.bookForm.code='10001';//图书类型id
            var bookparam=this.bookForm;
            addbook(bookparam).then(res=>{
              if(res.data!=0){
                console.log(res.data)
                this.$message({
                  showClose:true,
                  message:"发布成功",
                  type:'success'
                })
                //this.bookForm.upDate=this.$moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
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
  .book-form >>> .el-form-item .el-input{
    width: 300px;
    margin: 0 auto;
  }
  .book-form{

    width: 1000px;
    margin: 0 auto;
  }
</style>

webpackJsonp([15],{7651:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var n=t("//Fk"),i=t.n(n),l=t("c2Ch"),s={name:"addBook",data:function(){return{bookForm:{code:"",userId:"",iSBN:"",bookName:"",author:"",imgurl:"",publisher:"",publishTime:"",price:"",discount:"",upDate:"",storage:"",tips:"",imgList:[]},dialogImageUrl:"",dialogVisible:!1,disabled:!1,hideUploadAdd:!1,filelist:[],limitCount:4}},computed:{newprice:function(){var e=this.bookForm.price*this.bookForm.discount*.01,o=Number(e).toFixed(3),t=o.substring(0,o.length-1);return Number(t)}},methods:{formatDiscount:function(e){/^\+?[1-9][0-9]*$/.test(e)||this.$message({type:"warning",message:"折扣输入格式有误",showClose:!0})},newTransformBase64:function(e,o,t){var n=this,l=[];e.forEach(function(e,o){var t=new i.a(function(o,t){var n=new FileReader,i=void 0;e.raw&&(n.readAsDataURL(e.raw),n.onload=function(e){i=n.result,o(i)})});l.push(t)}),i.a.all(l).then(function(e){o(e)}).catch(function(e){t&&t(),n.$message.error("错误")})},handleAddChange:function(e){e.size/1024/1024<20?this.filelist.push(e):(this.$message.error("上传图片大小不能超过 20MB!"),this.filelist.splice(-1,1)),this.hideUploadAdd=this.filelist.length>=this.limitCount},handleExceed:function(e){this.hideUploadAdd=!0,this.$message({message:"上传文件超出限制个数！",type:"warning"})},handleRemove:function(e){var o=this;this.filelist.forEach(function(t,n){t.uid==e.uid&&(console.log("uid配对"),o.filelist.splice(n,1))}),this.hideUploadAdd=this.filelist.length>=this.limitCount},handlePictureCardPreview:function(e){this.dialogImageUrl=e.url,this.dialogVisible=!0},submitForm:function(e){var o=this;this.newTransformBase64(this.filelist,function(e){o.bookForm.imgList=e,o.bookForm.userId=o.$store.state.user.userId,console.log("当前用户id"+o.$store.state.user.userId),o.bookForm.code="10001",Object(l.a)(o.bookForm).then(function(e){0!=e.data&&(console.log(e.data),o.$message({showClose:!0,message:"发布成功",type:"success"}),o.$router.push({name:"bookdetail",params:{bookId:e.data}}))})})},resetForm:function(e){this.$refs[e].resetFields()}}},a=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[t("el-form",{ref:"bookForm",staticClass:"book-form",attrs:{inline:!0,model:e.bookForm,"status-icon":"","label-width":"80px"}},[t("el-form-item",{attrs:{label:"ISBN"}},[t("el-input",{model:{value:e.bookForm.iSBN,callback:function(o){e.$set(e.bookForm,"iSBN",o)},expression:"bookForm.iSBN"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"书名"}},[t("el-input",{model:{value:e.bookForm.bookName,callback:function(o){e.$set(e.bookForm,"bookName",o)},expression:"bookForm.bookName"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"作者"}},[t("el-input",{model:{value:e.bookForm.author,callback:function(o){e.$set(e.bookForm,"author",o)},expression:"bookForm.author"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"出版社"}},[t("el-input",{model:{value:e.bookForm.publisher,callback:function(o){e.$set(e.bookForm,"publisher",o)},expression:"bookForm.publisher"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"出版日期"}},[t("el-date-picker",{attrs:{type:"month",format:"yyyy-MM","value-format":"yyyy-MM-dd",placeholder:"选择年月"},model:{value:e.bookForm.publishTime,callback:function(o){e.$set(e.bookForm,"publishTime",o)},expression:"bookForm.publishTime"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"数量"}},[t("el-input-number",{staticStyle:{width:"auto"},attrs:{size:"large","controls-position":"right",min:1,max:999},model:{value:e.bookForm.storage,callback:function(o){e.$set(e.bookForm,"storage",o)},expression:"bookForm.storage"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"单价"}},[t("el-input",{model:{value:e.bookForm.price,callback:function(o){e.$set(e.bookForm,"price",o)},expression:"bookForm.price"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"折扣"}},[t("el-input",{attrs:{placeholder:"请输入百分比折扣"},on:{change:e.formatDiscount},model:{value:e.bookForm.discount,callback:function(o){e.$set(e.bookForm,"discount",o)},expression:"bookForm.discount"}},[t("template",{slot:"append"},[e._v("%")])],2)],1),e._v(" "),t("el-form-item",{attrs:{label:"现价"}},[t("el-input",{attrs:{readonly:""},model:{value:e.newprice,callback:function(o){e.newprice=o},expression:"newprice"}})],1),e._v(" "),t("div",{staticStyle:{width:"280px",height:"10px"}}),e._v(" "),t("el-form-item",{attrs:{label:"书本描述"}},[t("el-input",{staticStyle:{width:"400px"},attrs:{type:"textarea",rows:4,maxlength:"100","show-word-limit":"",placeholder:"几成新呢，描述下你的书吧"},model:{value:e.bookForm.tips,callback:function(o){e.$set(e.bookForm,"tips",o)},expression:"bookForm.tips"}})],1),e._v(" "),t("div",{staticStyle:{width:"280px",height:"10px"}}),e._v(" "),t("el-form-item",{staticClass:"upload-item",attrs:{label:"添加书本图片"}},[t("el-upload",{class:{hideUpload:e.hideUploadAdd},attrs:{action:"",multiple:"","list-type":"picture-card","file-list":e.filelist,"auto-upload":!1,"on-change":e.handleAddChange,"on-exceed":e.handleExceed,"on-remove":e.handleRemove,limit:e.limitCount},scopedSlots:e._u([{key:"file",fn:function(o){var n=o.file;return t("div",{},[t("img",{staticClass:"el-upload-list__item-thumbnail",attrs:{src:n.url,alt:""}}),e._v(" "),t("span",{staticClass:"el-upload-list__item-actions"},[t("span",{staticClass:"el-upload-list__item-preview",on:{click:function(o){return e.handlePictureCardPreview(n)}}},[t("i",{staticClass:"el-icon-zoom-in"})]),e._v(" "),e.disabled?e._e():t("span",{staticClass:"el-upload-list__item-delete",on:{click:function(o){return e.handleRemove(n)}}},[t("i",{staticClass:"el-icon-delete"})])])])}}])},[t("i",{staticClass:"el-icon-plus"}),e._v(" "),t("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("（最多上传4张图片）")])]),e._v(" "),t("el-dialog",{attrs:{visible:e.dialogVisible},on:{"update:visible":function(o){e.dialogVisible=o}}},[t("img",{attrs:{width:"100%",src:e.dialogImageUrl,alt:""}})])],1),e._v(" "),t("div",{staticStyle:{width:"280px",height:"10px"}}),e._v(" "),t("el-form-item",{staticClass:"form-btn"},[t("el-button",{attrs:{type:"primary"},on:{click:function(o){return e.resetForm("bookForm")}}},[e._v("取 消")]),e._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:function(o){return e.submitForm("bookForm")}}},[e._v("发 布")])],1)],1)],1)};a._withStripped=!0;var r={render:a,staticRenderFns:[]},m=r;var d=!1;var u=t("VU/8")(s,m,!1,function(e){d||t("yP1Y")},"data-v-2807dc30",null);u.options.__file="src/components/user/book/addBook.vue";o.default=u.exports},xB73:function(e,o,t){(e.exports=t("FZ+f")(!0)).push([e.i,"\n.hideUpload[data-v-2807dc30] .el-upload{\n    display: none;\n}\n[data-v-2807dc30] .el-form-item .el-input{\n    width: 300px;\n    margin: 0 auto;\n}\n.book-form[data-v-2807dc30]{\n    width: 1000px;\n    margin: 0 auto;\n}\n.form-btn[data-v-2807dc30] .el-button--primary{\n    background-color: #E0B41B;\n    border: 1px solid #E0B41B;\n    margin-left: 60px;\n    width: 120px;\n}\n","",{version:3,sources:["C:/StudyProject/GitPro/vue-springboot-bookstores/ui-bookstore/src/components/user/book/src/components/user/book/addBook.vue"],names:[],mappings:";AA+PA;IACA,cAAA;CACA;AACA;IACA,aAAA;IACA,eAAA;CACA;AACA;IACA,cAAA;IACA,eAAA;CACA;AACA;IACA,0BAAA;IACA,0BAAA;IACA,kBAAA;IACA,aAAA;CACA",file:"addBook.vue",sourcesContent:['<template>\n    <div>\n      <el-form :inline="true" :model="bookForm" status-icon  ref="bookForm" label-width="80px" class="book-form">\n        <el-form-item  label="ISBN" class="">\n          <el-input v-model="bookForm.iSBN"></el-input>\n        </el-form-item>\n        <el-form-item label="书名">\n          <el-input v-model="bookForm.bookName"></el-input>\n        </el-form-item>\n        <el-form-item label="作者">\n          <el-input v-model="bookForm.author"></el-input>\n        </el-form-item>\n        <el-form-item label="出版社">\n          <el-input v-model="bookForm.publisher"></el-input>\n        </el-form-item>\n        <el-form-item label="出版日期">\n          <el-date-picker\n            v-model="bookForm.publishTime"\n            type="month"\n            format="yyyy-MM"\n            value-format="yyyy-MM-dd"\n            placeholder="选择年月">\n          </el-date-picker>\n\n        </el-form-item>\n        <el-form-item label="数量">\n\x3c!--          <el-input v-model.number="bookForm.storage"></el-input>--\x3e\n          <el-input-number v-model="bookForm.storage" size="large" controls-position="right"  :min="1" :max="999" style="width: auto">\n          </el-input-number>\n        </el-form-item>\n        <el-form-item label="单价">\n          <el-input v-model="bookForm.price"></el-input>\n        </el-form-item>\n        <el-form-item label="折扣">\n          <el-input v-model="bookForm.discount" placeholder="请输入百分比折扣" @change="formatDiscount">\n            <template slot="append">%</template>\n          </el-input>\n\n        </el-form-item>\n        <el-form-item label="现价">\n          <el-input v-model="newprice" readonly></el-input>\n        </el-form-item>\n       <div style="width: 280px;height: 10px"></div>\n        <el-form-item label="书本描述">\n          <el-input\n            type="textarea"\n            :rows="4"\n            maxlength="100"\n            show-word-limit\n            placeholder="几成新呢，描述下你的书吧"\n            v-model="bookForm.tips"\n            style="width: 400px"></el-input>\n        </el-form-item>\n        <div style="width: 280px;height: 10px"></div>\n        <el-form-item label="添加书本图片" class="upload-item">\n          <el-upload\n            action=""\n            multiple\n            list-type="picture-card"\n            :file-list="filelist"\n            :auto-upload="false"\n            :on-change="handleAddChange"\n            :on-exceed="handleExceed"\n            :on-remove="handleRemove"\n            :limit="limitCount"\n            :class="{hideUpload:hideUploadAdd}"\n          >\n            <i class="el-icon-plus" ></i>\n            <div class="el-upload__tip" slot="tip">（最多上传4张图片）</div>\n            <div slot="file" slot-scope="{file}">\n              <img\n                class="el-upload-list__item-thumbnail"\n                :src="file.url" alt=""\n              >\n              <span class="el-upload-list__item-actions">\n        <span\n          class="el-upload-list__item-preview"\n          @click="handlePictureCardPreview(file)"\n        >\n          <i class="el-icon-zoom-in"></i>\n        </span>\n        <span\n          v-if="!disabled"\n          class="el-upload-list__item-delete"\n          @click="handleRemove(file)"\n        >\n          <i class="el-icon-delete"></i>\n        </span>\n      </span>\n            </div>\n          </el-upload>\n          \x3c!--    放大图--\x3e\n          <el-dialog :visible.sync="dialogVisible">\n            <img width="100%" :src="dialogImageUrl" alt="">\n          </el-dialog>\n        </el-form-item>\n        <div style="width: 280px;height: 10px"></div>\n        <el-form-item class="form-btn">\n          <el-button type="primary" @click="resetForm(\'bookForm\')">取 消</el-button>\n          <el-button type="primary" @click="submitForm(\'bookForm\')">发 布</el-button>\n        </el-form-item>\n      </el-form>\n\n    </div>\n</template>\n\n<script>\n    import {addbook} from "../../../axios/api";\n\n    export default {\n      name: "addBook",\n      data:function () {\n        return{\n          bookForm:{\n            code:\'\',\n            userId:\'\',\n            iSBN:\'\',\n            bookName:\'\',\n            author:\'\',\n            imgurl:\'\',\n            publisher:\'\',\n            publishTime:\'\',\n            price:\'\',\n            discount:\'\',\n            upDate:\'\',\n            storage:\'\',\n            tips:\'\',\n            imgList:[],\n          },\n          dialogImageUrl: \'\',\n          dialogVisible: false,\n          disabled: false,\n          hideUploadAdd:false,\n          filelist:[],\n          limitCount:4\n        }\n      },\n      computed:{\n        newprice:function () {\n          let val=this.bookForm.price*this.bookForm.discount*0.01\n          let price=Number(val).toFixed(3)\n          let realVal = price.substring(0, price.length - 1)\n          return  Number(realVal);\n        }\n      },\n      methods: {\n        formatDiscount(val){\n          const r = /^\\+?[1-9][0-9]*$/;//正整数\n            if(!r.test(val)){\n              this.$message({\n                type:"warning",\n                message:"折扣输入格式有误",\n                showClose:true\n              })\n          }\n        },\n        newTransformBase64(list, callback, errorCallback) {\n          let promise = [];\n          list.forEach((item, index) => {\n            let p = new Promise((resolve, reject) => {\n              let reader = new FileReader();\n              let obj;\n              if (item.raw) {\n                reader.readAsDataURL(item.raw);\n                reader.onload = function (e) {\n                  obj = reader.result;\n                  resolve(obj);\n                }\n              }\n            })\n            promise.push(p);\n          })\n\n          Promise.all(promise).then(results => {\n            callback(results);\n          }).catch(error => {\n            errorCallback && errorCallback();\n            this.$message.error("错误");\n          });\n        },\n        // 上传change事件\n        handleAddChange(file){\n\n          // 图片大小限制\n          const isLt20M = file.size / 1024 / 1024 < 20;\n          if (!isLt20M) {\n            this.$message.error("上传图片大小不能超过 20MB!");\n            this.filelist.splice(-1, 1);\n          } else {\n            this.filelist.push(file);\n          }\n          this.hideUploadAdd=this.filelist.length>=this.limitCount;\n        },\n\n        // 多选大于限制个数时做提示\n        handleExceed(file) {\n          // 上传文件>=限制个数时隐藏上传组件\n            this.hideUploadAdd=true;\n            this.$message({\n              message: "上传文件超出限制个数！",\n              type: "warning"\n            })\n\n\n        },\n        handleRemove(file) {\n          //从filelist当前图片uid\n          var list=this.filelist;\n          list.forEach((item,index)=>{\n            if(item.uid==file.uid){\n              console.log("uid配对")\n              this.filelist.splice(index,1)\n            }\n          })\n          this.hideUploadAdd=this.filelist.length>=this.limitCount;\n        },\n        handlePictureCardPreview(file) {\n          this.dialogImageUrl = file.url;\n          this.dialogVisible = true;\n        },\n        submitForm(formname){\n          this.newTransformBase64(this.filelist, (results) => {\n            this.bookForm.imgList=results;\n            this.bookForm.userId=this.$store.state.user.userId;//添加该书本的用户\n            console.log("当前用户id"+this.$store.state.user.userId);\n            this.bookForm.code=\'10001\';//图书类型id\n            addbook(this.bookForm).then(res=>{\n              if(res.data!=0){\n                console.log(res.data)\n                this.$message({\n                  showClose:true,\n                  message:"发布成功",\n                  type:\'success\'\n                })\n                //跳转到详情页\n                this.$router.push({\n                  name:\'bookdetail\',\n                  params:{\n                    bookId:res.data\n                  }\n                })\n              }\n            })\n          })\n\n\n        },\n        resetForm(formName) {\n          this.$refs[formName].resetFields();\n        },\n      }\n    }\n<\/script>\n\n<style scoped>\n.hideUpload /deep/ .el-upload{\n    display: none;\n  }\n  /deep/ .el-form-item .el-input{\n    width: 300px;\n    margin: 0 auto;\n  }\n  .book-form{\n    width: 1000px;\n    margin: 0 auto;\n  }\n  .form-btn>>>.el-button--primary{\n    background-color: #E0B41B;\n    border: 1px solid #E0B41B;\n    margin-left: 60px;\n    width: 120px;\n  }\n</style>\n'],sourceRoot:""}])},yP1Y:function(e,o,t){var n=t("xB73");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);t("rjj0")("62eafd2a",n,!1,{})}});
//# sourceMappingURL=15.52e11f8ad514bf1122fe.js.map
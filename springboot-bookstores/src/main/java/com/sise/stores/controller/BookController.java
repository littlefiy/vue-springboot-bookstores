package com.sise.stores.controller;



import com.sise.stores.domain.*;
import com.sise.stores.service.impl.*;
import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.Base64Utils;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.xml.ws.Action;
import java.io.File;
import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.UUID;

/*@RestController*/
@Controller
@RequestMapping("/book")
public class BookController {

    @Autowired
    private BookServiceImpl bookService;

    @Autowired
    private CommentServiceImpl commentService;

    @RequestMapping("/addByUser")
    @ResponseBody
    public String addBookByUser(@RequestBody Book book, HttpServletRequest request) throws Exception {

        String dataPrix = "";
        String data = "";
        String dirPath = "";
        String imgurl="";

        //遍历图片列表  进行图片上传
        for (Object img : book.getImgList()) {
            /*   base64图片处理, 文件上传*/
            System.out.println(img);
            String imgdata=img.toString();
            String[] d = imgdata.split("base64,");
            if (d != null && d.length == 2) {
                dataPrix = d[0];
                data = d[1];
            }
            System.out.println(dataPrix);
            String suffix = "";//图片后缀
            if("data:image/jpeg;".equalsIgnoreCase(dataPrix)){//data:image/jpeg;base64,base64编码的jpeg图片数据
                suffix = ".jpg";
            } else if("data:image/x-icon;".equalsIgnoreCase(dataPrix)){//data:image/x-icon;base64,base64编码的icon图片数据
                suffix = ".ico";
            } else if("data:image/gif;".equalsIgnoreCase(dataPrix)){//data:image/gif;base64,base64编码的gif图片数据
                suffix = ".gif";
            } else if("data:image/png;".equalsIgnoreCase(dataPrix)){//data:image/png;base64,base64编码的png图片数据
                suffix = ".png";
            }else{
                throw new Exception("上传图片格式不合法");
            }
            String tempFileName =UUID.randomUUID().toString() + suffix;
            System.out.println(tempFileName);
         /*   data = data.replaceAll("\r|\n", "");
            data = data.trim();*/
            System.out.println(data);
            byte[] bs = Base64Utils.decodeFromString(data);
            try{
                //使用apache提供的工具类操作流
                //写入文件

                String imgPath = "static/upload";
               /* dirPath =request.getSession().getServletContext().getRealPath("static/upload") ;*/
                dirPath=new String("src/main/resources/" + imgPath);
                File filePath = new File(dirPath);
                // 如果保存文件的地址不存在，就先创建目录
                if (!filePath.exists()) {
                    filePath.mkdirs();
                }
                FileUtils.writeByteArrayToFile(new File(dirPath +File.separator + tempFileName), bs);
                System.out.println(dirPath +File.separator + tempFileName);
                if(imgurl==null||imgurl==""){
                    imgurl=tempFileName;
                }else{
                    imgurl+=","+tempFileName;//存进数据库的图片列表
                }


            }catch(Exception ee){
                throw new Exception("上传失败，写入文件失败，"+ee.getMessage());
            }
    }
        System.out.println("这里是图片名称字符串："+imgurl);
        book.setImgurl(imgurl);
        int bookId=bookService.addBook(book);
        System.out.println(book);

        return String.valueOf(bookId);
    }


    @RequestMapping("/findBookById")
    @ResponseBody
    public Book findBookById(@RequestBody String bookId){
        int bid=Integer.valueOf(bookId);
        Book book=bookService.findBookById(bid);
        System.out.println(book);
        return book;
    }

    @RequestMapping("/findBookComments")
    @ResponseBody
    public List<Comment> findBookComments(@RequestBody String bookId){
        int bid=Integer.valueOf(bookId);
        List<Comment> commentList=commentService.findBookComments(bid);
        return commentList;
    }

    @RequestMapping("/findBookTop10")
    @ResponseBody
    public List<Book> findBookTop10(){
        return bookService.findTop10Book();
    }

    @RequestMapping("/addComment")
    @ResponseBody
    public String addComment(@RequestBody Comment comment){
        int flag=commentService.addComment(comment);
        return String.valueOf(flag);
    }
}

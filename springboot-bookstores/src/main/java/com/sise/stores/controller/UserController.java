package com.sise.stores.controller;


import com.sise.stores.domain.User;
import com.sise.stores.service.impl.UserServiceImpl;
import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.Base64Utils;
import org.springframework.web.bind.annotation.*;
import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.util.UUID;

@RestController
@RequestMapping("/user")
public class UserController {
@Autowired
private UserServiceImpl userService;

@RequestMapping("/login")
public User login(@RequestBody User user){
    User u=userService.login(user);
    return u;
}


@RequestMapping("/register")
    public String register(@RequestBody User user,HttpServletRequest request){
    System.out.println(user);
  /*  base64图片处理,文件上传*/
    try{
        String dataPrix = "";
        String data = "";
        String dirPath="";
        if(user.getUserImg() == null || "".equals(user.getUserImg())){
            throw new Exception("上传失败，上传图片数据为空");
        }else{
            String [] d = user.getUserImg().split("base64,");
            if(d != null && d.length == 2){
                dataPrix = d[0];
                data = d[1];
            }else{
                throw new Exception("上传失败，数据不合法");
            }
        }

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
        String tempFileName =user.getAccount()+UUID.randomUUID().toString() + suffix;
        System.out.println(data);
        //因为BASE64Decoder的jar问题，此处使用spring框架提供的工具包
        byte[] bs = Base64Utils.decodeFromString(data);
        try{
            //使用apache提供的工具类操作流
            //写入文件
            String imgPath = "static/upload";
            /* dirPath =request.getSession().getServletContext().getRealPath("static/upload") ;*/
            dirPath=new String("src/main/resources/" + imgPath);
            System.out.println(dirPath);
            File filePath = new File(dirPath);
            // 如果保存文件的地址不存在，就先创建目录
            if (!filePath.exists()) {
                filePath.mkdirs();
            }
            FileUtils.writeByteArrayToFile(new File(dirPath +File.separator + tempFileName), bs);
        }catch(Exception ee){
            throw new Exception("上传失败，写入文件失败，"+ee.getMessage());
        }
        //上传成功
        System.out.println("上传文件名"+tempFileName);
        user.setUserImg(tempFileName);
        int flag=userService.addUser(user);
        return "ok";
        /*return "success";*/
    }catch (Exception e) {
        return "";
        //上传失败
       /* return "error";*/
    }
}


}

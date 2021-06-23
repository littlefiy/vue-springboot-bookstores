# vue-springboot-bookstores
## 目前系统包括买家购物交易模块，商品评论模块，卖家管理商品模块<br>
### 技术：
springboot+mybatis+redis+vue+element-ui<br>
### 环境：
mysql5.6+tomcat8.0+maven<br>

### 目录介绍：<br>
* ui-bookstores:vue项目
* springboot-bookstores：springboot项目

### 部署：<br>
两种方法：<br>
1、直接运行springboot，vue项目已打包为dist放在resources下：<br>
需要将config/GoWebMvcConfigurerAdapter下的部分代码取消注释
```java
  .addResourceLocations("classpath:dist/")//vue打包到springboot
 ```
 访问地址：http://localhost:8088/index.html<br>
 2、前后端分离：<br>
  ui-bookstores:(端口8080)<br>
  npm install<br>
  npm dev <br>
  springboot-bookstores：(端口8088)<br>
  run "StoresApplication“<br>
  
  
 ### 项目部分页面：<br>
#### 首页：<br>
![商城首页](https://user-images.githubusercontent.com/56253578/123126959-6c1ff900-d47c-11eb-96e7-978bf38f2f9a.png)
#### 个人中心：<br>
![个人中心](https://user-images.githubusercontent.com/56253578/123126982-717d4380-d47c-11eb-9c25-91ee72e05670.png)
#### 发布闲置：<br>
![发布闲置](https://user-images.githubusercontent.com/56253578/123129855-d76aca80-d47e-11eb-897d-be5d6826f844.png)
#### 商品详情：<br>
![商品详情页](https://user-images.githubusercontent.com/56253578/123129869-dafe5180-d47e-11eb-87a6-bce177f1252f.png)
<br>
 本项目为课程总结所做，粗糙得很，有错误或不规范的地方希望大佬们指出！
  
  
 
 





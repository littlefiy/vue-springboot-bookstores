package com.sise.stores.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Configuration
public class GoWebMvcConfigurerAdapter extends WebMvcConfigurerAdapter {
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        //配置静态资源处理
        registry.addResourceHandler("/**")
                .addResourceLocations("classpath:static/")
               /* .addResourceLocations("classpath:dist/")//vue打包到springboot*/
                //将上传图片的路径与本地路径对应，解决上传图片后不能立即访问的问题（需要重启才能访问)
                //如果访问不了图片就修改这个路径
                //你的项目下的static在本地的路径
                .addResourceLocations("file:///C:/StudyProject/GitPro/vue-springboot-bookstores/springboot-bookstores/src/main/resources/static/");
    }
}

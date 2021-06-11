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
                /*.addResourceLocations("classpath:dist/")//vue打包到springboot*/
                .addResourceLocations(" file:///C:/StudyProject/GitPro/vue-springboot-bookstores/springboot-bookstores/src/main/resources/static/");
    }
}

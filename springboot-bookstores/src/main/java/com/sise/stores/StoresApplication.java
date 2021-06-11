package com.sise.stores;

import org.mybatis.spring.annotation.MapperScan;
import org.mybatis.spring.annotation.MapperScans;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.ServletComponentScan;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
@MapperScan(basePackages = "com.sise.stores.mapper")
public class StoresApplication extends SpringBootServletInitializer {
    @Override
    protected SpringApplicationBuilder
    configure(SpringApplicationBuilder builder){
        return builder.sources(StoresApplication.class);
    }

    public static void main(String[] args) {

        SpringApplication.run(StoresApplication.class, args);
    }

}

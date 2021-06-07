package com.sise.stores;

import org.mybatis.spring.annotation.MapperScan;
import org.mybatis.spring.annotation.MapperScans;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan(basePackages = "com.sise.stores.mapper")
public class StoresApplication {

    public static void main(String[] args) {

        SpringApplication.run(StoresApplication.class, args);
    }

}

package com.sise.stores.service;

import com.sise.stores.domain.Shopcar;
import com.sise.stores.domain.vo.PageBean;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface ShopcarService {
    int addCar(Shopcar shopcar);
    PageBean findCarInfoByUserId(int userId, int current);
    List<Shopcar> findCarByIds(@Param("carIds") List<Integer> carIds);
    int editCar(Shopcar shopcar);
    int delCar(int carId);
}

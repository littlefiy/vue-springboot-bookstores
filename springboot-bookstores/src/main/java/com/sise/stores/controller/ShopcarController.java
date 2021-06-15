package com.sise.stores.controller;



import com.sise.stores.domain.Shopcar;
import com.sise.stores.domain.vo.CarVO;
import com.sise.stores.domain.vo.PageBean;
import com.sise.stores.service.impl.ShopcarServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/car")
public class ShopcarController {
    @Autowired
    private ShopcarServiceImpl shopcarService;

    @RequestMapping("/addCar")
    public String addCar(@RequestBody Shopcar shopcar){
        int flag=shopcarService.addCar(shopcar);
        return String.valueOf(flag);
    }
    @RequestMapping("/findCar")
    public PageBean findCar(@RequestBody CarVO cv){
        return shopcarService.findCarInfoByUserId(cv.getUserId(),cv.getCurrent());
    }
    @RequestMapping("/editCar")
    public String editCar(@RequestBody Shopcar shopcar){
        int flag=shopcarService.editCar(shopcar);
        return String .valueOf(flag);
    }

    @RequestMapping("/delCar")
    public String delCar(@RequestBody int carId){
        int flag=shopcarService.delCar(carId);
        return String .valueOf(flag);
    }
}

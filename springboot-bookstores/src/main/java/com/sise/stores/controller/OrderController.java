package com.sise.stores.controller;



import com.sise.stores.domain.*;
import com.sise.stores.domain.vo.OrderVO;
import com.sise.stores.service.impl.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/order")
public class OrderController {
    @Autowired
    private OrderServiceImpl orderService;

    @Autowired
    private ShopcarServiceImpl shopcarService;
    @RequestMapping("/toOrder")
    public List<Shopcar> createOrder(@RequestBody List<Integer> carIds){
        List<Shopcar> shopcarList=shopcarService.findCarByIds(carIds);
        return shopcarList;
    }

    @RequestMapping("/createOrder")
    public String createOrder(@RequestBody OrderVO ov){
        String code=orderService.addOrder(ov.getCarIds(),ov.getUserId(),ov.getAmount());
        return code;
    }
    @RequestMapping("/findOrderList")
    public List<Order> findOrderList(@RequestBody int userId){
        return orderService.findOrderByUserId(userId);
    }
}

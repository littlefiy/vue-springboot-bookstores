package com.sise.stores.service.impl;


import com.sise.stores.domain.*;
import com.sise.stores.mapper.*;
import com.sise.stores.service.OrderService;
import com.sise.stores.service.RedisService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@Service("orderService")
public class OrderServiceImpl implements OrderService {
    @Autowired
    private ShopcarCao shopcarCao;
    @Autowired
    private OrderDao orderDao;
    @Autowired
    private OrderItemDao orderItemDao;
    @Autowired
    private BookDao bookDao;
    @Autowired
    private RedisService redisService;

    @Override
    public String addOrder(List<Integer> carIds,int userId,int amount) {
        //插入ec_order,插入ec_order_item,删除购物车已购商品，减少库存数量，返回订单号。
//1
        Date now = new Date();
        String code = "b-";//订单号
        code += new SimpleDateFormat("yyyyMMddHHmmss").format(now);
        code += "-" + userId;


        Order order=new Order();
        order.setUserId(userId);
        order.setCreateDate(now);
        order.setAmount(amount);
        order.setOrderCode(code);
        order.setStatus("下单成功");
        System.out.println(order);
        orderDao.addOrder(order);
        //2
        List<Shopcar> itemList = shopcarCao.findCarByIds(carIds);
        for (Shopcar sc : itemList) {
            OrderItem o = new OrderItem();
            o.setOrderId(order.getOrderId());
            o.setBookId(sc.getBookId());
            o.setBuyNum(sc.getBuyNum());
            System.out.println(o);
            orderItemDao.addOrderItem(o);
//3
            shopcarCao.delCar(sc.getCarId());
            //4
            bookDao.editBookStorage(-1 * sc.getBuyNum(), sc.getBookId());
            redisService.del("book:book_"+sc.getBookId());
        }
        //订单变更，删除缓存
        redisService.del("list:order_unpay_"+userId);//订单提交后，即清除缓存
        redisService.del("list:order_"+userId);
        redisService.del("list:shopcar_"+userId);

        return code;
    }

    @Override
    public List<Order> findOrderByUserId(int userId) {
        List<Order> orders=null;
        String key="list:order_"+userId;
        if(redisService.exists(key)){
            orders=(List<Order>)redisService.get(key,Order.class);
        }else{
            orders=orderDao.findOrderByUserId(userId);
            redisService.set(key,orders,-1);
        }
        return orders;
        //return orderDao.findOrderByUserId(userId);
    }

    //取出缓存中未提交的订单
//    @Override
//    public Order findUnPayOrder(int userId) {
//        Order orders=null;
//        String key="list:order_unpay_"+userId;
//        if(redisService.exists(key)){
//            System.out.println("存在");
//            orders=(Order)redisService.getBean(key);
//        }
//        return orders;
//    }

}

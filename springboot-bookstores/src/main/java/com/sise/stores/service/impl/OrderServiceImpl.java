package com.sise.stores.service.impl;


import com.sise.stores.domain.*;
import com.sise.stores.mapper.*;
import com.sise.stores.service.OrderService;
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
        }
        return code;
    }

    @Override
    public List<Order> findOrderByUserId(int userId) {
        return orderDao.findOrderByUserId(userId);
    }
     /*   Date now=new Date();
        String code="op-";
        code+=new SimpleDateFormat("yyyyMMddHHmmss").format(now);
        code+="-"+userId;
        System.out.println(code);

        List<ShopCar> itemList=shopCarDao.findListByIds(items);
        for(ShopCar sc:itemList){
            if(sc.getBuyNum()>sc.getStorage()){
                throw new RuntimeException(sc.getTitle()+"库存不足");
            }
        }

        double sum=shopCarService.caclTotal(itemList);

        Order order=new Order();
        order.setCreateDate(now);
        order.setSendDate(null);
        order.setStatus("下单成功");
        order.setOrderCode(code);
        order.setUserId(userId);
        order.setAmount(sum);
        orderDao.addOrder(order);
//2
        for(ShopCar sc:itemList) {
            OrderItem o = new OrderItem();
            o.setOrderId(order.getId());
            o.setArticleId(sc.getArticleId());
            o.setOrderNum(sc.getBuyNum());
            orderItemDao.addOrderItem(o);

//3
            shopCarDao.delGoods(sc.getId());
//4
            articleDao.editStorage(-1 * sc.getBuyNum(), sc.getArticleId());*/


}

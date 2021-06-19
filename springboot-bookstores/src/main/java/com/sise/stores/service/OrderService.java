package com.sise.stores.service;



import com.sise.stores.domain.Order;

import java.util.List;

public interface OrderService {
    String addOrder(List<Integer> carIds,int userId,int amount);
    List<Order> findOrderByUserId(int userId);
//    Order findUnPayOrder(int userId);
}

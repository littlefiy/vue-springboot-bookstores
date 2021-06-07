package com.sise.stores.domain;

import java.util.Date;
import java.util.List;

public class Order {
    private int orderId;
    private String orderCode;
    private int userId;
    private Date createDate;
    private String status;
    private int amount;
    //一对多查询
    private List<OrderItem> itemList;
    //接收carIds
    private List<Integer> carIds;


    public List<Integer> getCarIds() {
        return carIds;
    }

    public void setCarIds(List<Integer> carIds) {
        this.carIds = carIds;
    }

    @Override
    public String toString() {
        return "Order{" +
                "orderId=" + orderId +
                ", orderCode='" + orderCode + '\'' +
                ", userId=" + userId +
                ", createDate=" + createDate +
                ", status='" + status + '\'' +
                ", amount=" + amount +
                ", itemList=" + itemList +
                ", carIds=" + carIds +
                '}';
    }

    public Order(int orderId, String orderCode, int userId, Date createDate, String status, int amount, List<OrderItem> itemList, List<Integer> carIds) {
        this.orderId = orderId;
        this.orderCode = orderCode;
        this.userId = userId;
        this.createDate = createDate;
        this.status = status;
        this.amount = amount;
        this.itemList = itemList;
        this.carIds = carIds;
    }

    public Order() {
    }

    public int getOrderId() {
        return orderId;
    }

    public void setOrderId(int orderId) {
        this.orderId = orderId;
    }

    public String getOrderCode() {
        return orderCode;
    }

    public void setOrderCode(String orderCode) {
        this.orderCode = orderCode;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public Date getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public List<OrderItem> getItemList() {
        return itemList;
    }

    public void setItemList(List<OrderItem> itemList) {
        this.itemList = itemList;
    }
}

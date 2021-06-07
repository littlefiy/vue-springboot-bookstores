package com.sise.stores.domain.vo;

import java.util.List;

public class OrderVO {
    private List<Integer> carIds;
    private int userId;
    private int amount;

    public OrderVO() {
    }

    public OrderVO(List<Integer> carIds, int userId, int amount) {
        this.carIds = carIds;
        this.userId = userId;
        this.amount = amount;
    }

    @Override
    public String toString() {
        return "OrderVO{" +
                "carIds=" + carIds +
                ", userId=" + userId +
                ", amount=" + amount +
                '}';
    }

    public List<Integer> getCarIds() {
        return carIds;
    }

    public void setCarIds(List<Integer> carIds) {
        this.carIds = carIds;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }
}

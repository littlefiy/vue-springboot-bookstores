package com.sise.stores.domain.vo;

public class CarVO {
    private int userId;
    private int current;

    @Override
    public String toString() {
        return "CarVO{" +
                "userId=" + userId +
                ", current=" + current +
                '}';
    }

    public CarVO(int userId, int current) {
        this.userId = userId;
        this.current = current;
    }

    public CarVO() {
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public int getCurrent() {
        return current;
    }

    public void setCurrent(int current) {
        this.current = current;
    }
}

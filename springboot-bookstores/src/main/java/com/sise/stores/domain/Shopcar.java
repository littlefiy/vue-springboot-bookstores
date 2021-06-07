package com.sise.stores.domain;

import java.io.Serializable;

public class Shopcar implements Serializable {
    private int carId;
    private int bookId;
    private int userId;
    private int buyNum;
//扩展
    private Book book;

    public Book getBook() {
        return book;
    }

    public void setBook(Book book) {
        this.book = book;
    }

    public int getCarId() {
        return carId;
    }

    public void setCarId(int carId) {
        this.carId = carId;
    }

    public int getBookId() {
        return bookId;
    }

    public void setBookId(int bookId) {
        this.bookId = bookId;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public int getBuyNum() {
        return buyNum;
    }

    public void setBuyNum(int buyNum) {
        this.buyNum = buyNum;
    }

    public Shopcar(int carId, int bookId, int userId, int buyNum, Book book) {
        this.carId = carId;
        this.bookId = bookId;
        this.userId = userId;
        this.buyNum = buyNum;
        this.book = book;
    }

    public Shopcar() {
    }

    @Override
    public String toString() {
        return "Shopcar{" +
                "carId=" + carId +
                ", bookId=" + bookId +
                ", userId=" + userId +
                ", buyNum=" + buyNum +
                ", book=" + book +
                '}';
    }
}

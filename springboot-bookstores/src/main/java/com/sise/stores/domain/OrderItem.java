package com.sise.stores.domain;

public class OrderItem {
    private int orderId;
    private int bookId;
    private int buyNum;

    private Book book;

    public OrderItem(int orderId, int bookId, int buyNum, Book book) {
        this.orderId = orderId;
        this.bookId = bookId;
        this.buyNum = buyNum;
        this.book = book;
    }

    public OrderItem() {
    }

    @Override
    public String toString() {
        return "OrderItem{" +
                "orderId=" + orderId +
                ", bookId=" + bookId +
                ", buyNum=" + buyNum +
                ", book=" + book +
                '}';
    }

    public Book getBook() {
        return book;
    }

    public void setBook(Book book) {
        this.book = book;
    }

    public int getOrderId() {
        return orderId;
    }

    public void setOrderId(int orderId) {
        this.orderId = orderId;
    }

    public int getBookId() {
        return bookId;
    }

    public void setBookId(int bookId) {
        this.bookId = bookId;
    }

    public int getBuyNum() {
        return buyNum;
    }

    public void setBuyNum(int buyNum) {
        this.buyNum = buyNum;
    }
}

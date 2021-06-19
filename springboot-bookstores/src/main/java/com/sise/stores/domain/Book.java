package com.sise.stores.domain;

import org.springframework.format.annotation.DateTimeFormat;

import java.io.Serializable;
import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

public class Book {
        private  int bookId;
        private int code;//图书类型
        private int userId;
        private String iSBN;
        private String bookName;
        private String author;
        private String imgurl;
        private String publisher;
        @DateTimeFormat(pattern = "yyyy-MM")
        private Date publishTime;
        private Double price;
        private Double discount;
        private int storage;
        private Date upDate;
        private Date saleDate;
        private String tips;//卖家描述
        private String status;//在售，卖出
        private int countLook;

        //以上为基础数据库字段
        private List imgList;//接收前端传来的图片列表
        private List<OrderItem> orderItems;//显示用户发布的商品中，多少已被购买
        private List<Comment> commentList;//当前图书有多少条评论 一对多

    public List<Comment> getCommentList() {
        return commentList;
    }

    public void setCommentList(List<Comment> commentList) {
        this.commentList = commentList;
    }

    public List<OrderItem> getOrderItems() {
        return orderItems;
    }

    public void setOrderItems(List<OrderItem> orderItems) {
        this.orderItems = orderItems;
    }

    public Book() {
    }

    public List getImgList() {
        return imgList;
    }

    public void setImgList(List imgList) {
        this.imgList = imgList;
    }

    public int getBookId() {
        return bookId;
    }

    public void setBookId(int bookId) {
        this.bookId = bookId;
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getiSBN() {
        return iSBN;
    }

    public void setiSBN(String iSBN) {
        this.iSBN = iSBN;
    }

    public String getBookName() {
        return bookName;
    }

    public void setBookName(String bookName) {
        this.bookName = bookName;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getImgurl() {
        return imgurl;
    }

    public void setImgurl(String imgurl) {
        this.imgurl = imgurl;
    }

    public String getPublisher() {
        return publisher;
    }

    public void setPublisher(String publisher) {
        this.publisher = publisher;
    }

    public Date getPublishTime() {
        return publishTime;
    }

    public void setPublishTime(Date publishTime) {
        this.publishTime = publishTime;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Double getDiscount() {
        return discount;
    }

    public void setDiscount(Double discount) {
        this.discount = discount;
    }

    public int getStorage() {
        return storage;
    }

    public void setStorage(int storage) {
        this.storage = storage;
    }

    public Date getUpDate() {
        return upDate;
    }

    public void setUpDate(Date upDate) {
        this.upDate = upDate;
    }

    public Date getSaleDate() {
        return saleDate;
    }

    public void setSaleDate(Date saleDate) {
        this.saleDate = saleDate;
    }

    public String getTips() {
        return tips;
    }

    public void setTips(String tips) {
        this.tips = tips;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public int getCountLook() {
        return countLook;
    }

    public void setCountLook(int countLook) {
        this.countLook = countLook;
    }

    public Book(int bookId, int code, int userId, String iSBN, String bookName, String author, String imgurl, String publisher, Date publishTime, Double price, Double discount, int storage, Date upDate, Date saleDate, String tips, String status, int countLook, List imgList, List<OrderItem> orderItems, List<Comment> commentList) {
        this.bookId = bookId;
        this.code = code;
        this.userId = userId;
        this.iSBN = iSBN;
        this.bookName = bookName;
        this.author = author;
        this.imgurl = imgurl;
        this.publisher = publisher;
        this.publishTime = publishTime;
        this.price = price;
        this.discount = discount;
        this.storage = storage;
        this.upDate = upDate;
        this.saleDate = saleDate;
        this.tips = tips;
        this.status = status;
        this.countLook = countLook;
        this.imgList = imgList;
        this.orderItems = orderItems;
        this.commentList = commentList;
    }

    @Override
    public String toString() {
        return "Book{" +
                "bookId=" + bookId +
                ", code=" + code +
                ", userId=" + userId +
                ", iSBN='" + iSBN + '\'' +
                ", bookName='" + bookName + '\'' +
                ", author='" + author + '\'' +
                ", imgurl='" + imgurl + '\'' +
                ", publisher='" + publisher + '\'' +
                ", publishTime=" + publishTime +
                ", price=" + price +
                ", discount=" + discount +
                ", storage=" + storage +
                ", upDate=" + upDate +
                ", saleDate=" + saleDate +
                ", tips='" + tips + '\'' +
                ", status='" + status + '\'' +
                ", countLook=" + countLook +
                ", imgList=" + imgList +
                ", orderItems=" + orderItems +
                ", commentList=" + commentList +
                '}';
    }
}

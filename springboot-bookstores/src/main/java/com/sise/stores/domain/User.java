package com.sise.stores.domain;
import java.util.Date;

public class User {
    private int userId;
    private String account;
    private String password;
    private  String userName;
    private  int sex;
    private  String email;
    private  int role;
    private Date createDate;
    private  int disabled;
    private String userImg;

    public User() {
    }

    public User(int userId, String account, String password, String userName, int sex, String email, int role, Date createDate, int disabled, String userImg) {
        this.userId = userId;
        this.account = account;
        this.password = password;
        this.userName = userName;
        this.sex = sex;
        this.email = email;
        this.role = role;
        this.createDate = createDate;
        this.disabled = disabled;
        this.userImg = userImg;
    }

    public String getUserImg() {
        return userImg;
    }

    public void setUserImg(String userImg) {
        this.userImg = userImg;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getAccount() {
        return account;
    }

    public void setAccount(String account) {
        this.account = account;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public int getSex() {
        return sex;
    }

    public void setSex(int sex) {
        this.sex = sex;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getRole() {
        return role;
    }

    public void setRole(int role) {
        this.role = role;
    }


    public Date getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }

    public int getDisabled() {
        return disabled;
    }

    public void setDisabled(int disabled) {
        this.disabled = disabled;
    }

    @Override
    public String toString() {
        return "User{" +
                "userId=" + userId +
                ", account='" + account + '\'' +
                ", password='" + password + '\'' +
                ", userName='" + userName + '\'' +
                ", sex=" + sex +
                ", email='" + email + '\'' +
                ", role=" + role +
                ", createDate=" + createDate +
                ", disabled=" + disabled +
                ", userImg='" + userImg + '\'' +
                '}';
    }
}

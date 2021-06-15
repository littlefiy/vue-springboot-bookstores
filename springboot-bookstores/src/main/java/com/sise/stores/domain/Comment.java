package com.sise.stores.domain;

import java.io.Serializable;
import java.util.Date;

public class Comment  {

    private int commentId;
    private String content;
    private Date commentDate;
    private int star;
    private int bookId;
    private int userId;
    //以上为数据库字段
    private User user;//当前评论属于哪个用户，一对一

    private Book book;//主表类，一本书有多条评论

    public Comment(int commentId, String content, Date commentDate, int star, int bookId, int userId, User user, Book book) {
        this.commentId = commentId;
        this.content = content;
        this.commentDate = commentDate;
        this.star = star;
        this.bookId = bookId;
        this.userId = userId;
        this.user = user;
        this.book = book;
    }

    public int getStar() {
        return star;
    }

    public void setStar(int star) {
        this.star = star;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Comment() {
    }

    public Book getBook() {
        return book;
    }

    public void setBook(Book book) {
        this.book = book;
    }

    public int getCommentId() {
        return commentId;
    }

    public void setCommentId(int commentId) {
        this.commentId = commentId;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Date getCommentDate() {
        return commentDate;
    }

    public void setCommentDate(Date commentDate) {
        this.commentDate = commentDate;
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

    @Override
    public String toString() {
        return "Comment{" +
                "commentId=" + commentId +
                ", content='" + content + '\'' +
                ", commentDate=" + commentDate +
                ", star=" + star +
                ", bookId=" + bookId +
                ", userId=" + userId +
                ", user=" + user +
                ", book=" + book +
                '}';
    }
}

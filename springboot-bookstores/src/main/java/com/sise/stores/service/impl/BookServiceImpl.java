package com.sise.stores.service.impl;


import com.sise.stores.domain.Book;
import com.sise.stores.mapper.BookDao;
import com.sise.stores.service.BookService;
import com.sise.stores.service.RedisService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service("bookService")
public class BookServiceImpl implements BookService {
    @Autowired
    private BookDao bookDao;

    @Autowired
    private RedisService redisService;

    @Override
    public int addBook(Book book) {
       // book.setStatus("在售");
        book.setUpDate(new Date());
        int flag=bookDao.addBook(book);
        int bookId=book.getBookId();//获得自增ID
        //删除前十缓存
        redisService.del("list:book_top10");
        redisService.del("list:user_books"+book.getUserId());
        return bookId;
    }

    @Override
    public int updateBook(Book book) {
        int flag=bookDao.updateBook(book);
        redisService.del("list:book_top10");
        redisService.del("list:user_books"+book.getUserId());
        redisService.del("book:book_"+book.getBookId());
        return book.getBookId();
    }

    @Override
    public int delBook(Book book) {
        int flag=bookDao.delBook(book.getBookId());
        redisService.del("list:book_top10");
        redisService.del("list:user_books"+book.getUserId());
        return flag;
    }


    @Override
    public Book findBookById(int bookId) {
        Book book=null;
        String key="book:book_"+bookId;
        if(redisService.exists(key)){
            book=(Book)redisService.getBean(key);
        }else{
            book=bookDao.findBookById(bookId);
            redisService.setBean(key,book);
        }
        return book;
        //return bookDao.findBookById(bookId);
    }

    @Override
    public List<Book> findTop10Book() {
        List<Book> books=null;
        String key="list:book_top10";
        if(redisService.exists(key)){
            books=(List<Book>)redisService.get(key,Book.class);
        }else{
            books=bookDao.findTop10Book();
            redisService.set(key,books,-1);
        }
        return books;
    }

    @Override
    public List<Book> findBooksByUser(int userId) {
        List<Book> books=null;
        String key="list:user_books"+userId;
        if(redisService.exists(key)){
            books=(List<Book>)redisService.get(key,Book.class);
        }else{
            books=bookDao.findAllBooksByUserId(userId);
            redisService.set(key,books,-1);
        }
        return books;
    }
}

package com.sise.stores.service.impl;


import com.sise.stores.domain.Book;
import com.sise.stores.mapper.BookDao;
import com.sise.stores.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service("bookService")
public class BookServiceImpl implements BookService {
    @Autowired
    private BookDao bookDao;
    @Override
    public int addBook(Book book) {
       // book.setStatus("在售");
        book.setUpDate(new Date());
        int flag=bookDao.addBook(book);
        int bookId=book.getBookId();//获得自增ID
        return bookId;
    }

    @Override
    public Book findBookById(int bookId) {
        return bookDao.findBookById(bookId);
    }

    @Override
    public List<Book> findTop10Book() {
        return bookDao.findTop10Book();
    }
}

package com.sise.stores.service;



import com.sise.stores.domain.Book;

import java.util.List;

public interface BookService {
    int addBook(Book book);
    Book findBookById(int bookId);
    List<Book> findTop10Book();
}

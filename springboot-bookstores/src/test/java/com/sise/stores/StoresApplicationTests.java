package com.sise.stores;

import com.sise.stores.domain.Book;
import com.sise.stores.domain.Order;
import com.sise.stores.mapper.BookDao;
import com.sise.stores.mapper.OrderDao;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
class StoresApplicationTests {

    @Autowired
    private BookDao bookDao;
    @Autowired
    private OrderDao orderDao;

    @Test
    void contextLoads() {
        Book book=bookDao.findBookById(19);
        System.out.println(book);
    }

    //显示用户在售的商品
    @Test
    void findAllSaledBooksByUserId(){
        List<Book> list=bookDao.findAllBooksByUserId(15);
        for (Book b: list
        ) {
            System.out.println(b);
        }
    }
    //显示用户已出售的商品

    //显示用户所购买的商品
    @Test
    void findBuyBooksByUserId(){
        List<Order> list=orderDao.findOrderByUserId(14);
        for (Order b: list
             ) {
            System.out.println(b);
        }
    }




}

package com.sise.stores;

import com.sise.stores.domain.Book;
import com.sise.stores.domain.Comment;
import com.sise.stores.domain.Order;
import com.sise.stores.mapper.BookDao;
import com.sise.stores.mapper.CommentDao;
import com.sise.stores.mapper.OrderDao;
import com.sise.stores.service.BookService;
import com.sise.stores.service.impl.BookServiceImpl;
import com.sise.stores.service.impl.CommentServiceImpl;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Date;
import java.util.List;

@SpringBootTest
class StoresApplicationTests {

    @Autowired
    private BookDao bookDao;
    @Autowired
    private OrderDao orderDao;
    @Autowired
    private CommentServiceImpl commentService;
    @Autowired
    private BookServiceImpl bookService;
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
    @Test
    void findSaledBooksByUserId(){
        List<Book> list=bookDao.findSaleBooksByUserId(15);
        for (Book b: list
        ) {
            System.out.println(b);
        }
    }
    //显示用户所购买的商品
    @Test
    void findBuyBooksByUserId(){
        List<Order> list=orderDao.findOrderByUserId(14);
        for (Order b: list
             ) {
            System.out.println(b);
        }
    }


    @Test
    public void CommentRedisTest(){
        List<Comment> comments= (List<Comment>)commentService.findBookComments(33);
        for (Comment c:comments){
            System.out.println(c);
        }
    }

    @Test
    public void addCommentRedisTest(){
        Comment comment=new Comment();
        comment.setBookId(33);
        comment.setCommentDate(new Date());
        comment.setContent("aaaaa");
        comment.setUserId(15);
        commentService.addComment(comment);

    }

    @Test
    public void getBookRedisTest(){
        Book book=bookService.findBookById(33);
        System.out.println(book);
    }
}

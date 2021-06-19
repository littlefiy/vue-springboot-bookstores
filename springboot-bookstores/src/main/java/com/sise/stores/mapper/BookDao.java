package com.sise.stores.mapper;
import com.sise.stores.domain.Book;
import com.sise.stores.domain.User;
import org.apache.ibatis.annotations.*;
import org.apache.ibatis.mapping.FetchType;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
@Mapper
public interface BookDao {
    @Insert("insert into tb_book(code,user_id,iSBN,book_name,author,imgurl,publisher,publish_time,price,discount,storage,up_date,sale_date,tips,status,count_look)" +
            "values(#{code},#{userId},#{iSBN},#{bookName},#{author},#{imgurl},#{publisher},#{publishTime},#{price},#{discount},#{storage},#{upDate},#{saleDate},#{tips},#{status},#{countLook})")
    @Options(useGeneratedKeys=true,keyProperty="bookId")
    int addBook(Book book);

    @Select("select * from tb_book where book_id=#{bookId}")
    Book findBookById(int bookId);

    //显示最新10条记录
    @Select("select * from tb_book where storage>0 ORDER BY up_date DESC LIMIT 0,10")
    List<Book> findTop10Book();

    @Update("update tb_book set storage=storage+(#{storage}) where book_id=#{bookId}")
    int editBookStorage(@Param("storage") int storage,@Param("bookId") int bookId);

    //用户所发布的商品
    @Select("select * from tb_book WHERE user_id=#{userId}")
    List<Book> findAllBooksByUserId(int userId);

    //显示发布者已被购买的商品
    @Select("select * from tb_book WHERE user_id=#{userId}")
    @Results({
            @Result(id=true,column="book_id", property="bookId"),
            @Result(column="iSBN",property="iSBN"),
            @Result(column="book_name",property="bookName"),
            @Result(column="author",property="author"),
            @Result(column="storage",property="storage"),
            @Result(column="book_id",property="orderItems",
                    many=@Many(select="com.sise.stores.mapper.OrderItemDao.findOrderByBookId",fetchType=FetchType.EAGER))
    })
    List<Book> findSaleBooksByUserId(int userId);

    @Update("update tb_book set iSBN=#{iSBN}, book_name=#{bookName},author=#{author},imgurl=#{imgurl},publisher=#{publisher}" +
            ",publish_time=#{publishTime},price=#{price},discount=#{discount},storage=#{storage},tips=#{tips} where book_id=#{bookId}")
    int updateBook(Book book);

    @Delete("delete from tb_book where book_id=#{bookId}")
    int delBook(int bookId);
}

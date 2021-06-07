package com.sise.stores.mapper;
import com.sise.stores.domain.Book;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

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
}

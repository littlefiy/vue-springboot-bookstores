package com.sise.stores.mapper;


import com.sise.stores.domain.Shopcar;
import org.apache.ibatis.annotations.*;
import org.apache.ibatis.mapping.FetchType;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
@Mapper
public interface ShopcarCao {
    @Insert("insert into tb_shopcar(book_id,user_id,buy_num)" +
            "values(#{bookId},#{userId},#{buyNum})")
    int addCar(Shopcar shopcar);


    @Select("select * from tb_shopcar where user_id=#{userId} limit #{start},#{end}")
    @Results({
            @Result(id=true,column="car_id", property="carId"),
            @Result(column="book_id",property="bookId"),
            @Result(column="user_id",property="userId"),
            @Result(column="buy_num",property="buyNum"),
            @Result(column="book_id",property="book",
                    one=@One(select="com.sise.stores.mapper.BookDao.findBookById",fetchType= FetchType.EAGER))
    })
    List<Shopcar> findCarInfoByUserId(@Param("userId") int userId,@Param("start") int start,@Param("end") int end);


    @Select("select count(*) from tb_shopcar where user_id=#{userId}")
    int countCarByUserId(int userId);

    @Select("select * from tb_shopcar where user_id=#{userId} and book_id=#{bookId}")
    Shopcar findCarCheckOne(@Param("bookId") int bookId,@Param("userId") int userId);


    @Update("update tb_shopcar set buy_num=#{buyNum} where book_id=#{bookId} and user_id=#{userId}")
    int editCar(Shopcar shopcar);


    @Delete("delete from tb_shopcar where car_id=#{carId}")
    int delCar(int carId);

    @Select("<script> " +
            "select * from tb_shopcar where car_id in <foreach item='item' index='index' collection='carIds' open='(' separator=',' close=')'> #{item} </foreach> " +
            "</script>")
    @Results({
            @Result(id=true,column="car_id", property="carId"),
            @Result(column="buy_num",property="buyNum"),
            @Result(column="user_id",property="userId"),
            @Result(column="book_id",property="bookId"),
            @Result(column="book_id",property="book",
                    one=@One(select="com.sise.stores.mapper.BookDao.findBookById",fetchType= FetchType.EAGER))
    })
    List<Shopcar> findCarByIds(@Param("carIds") List<Integer> carIds);
}

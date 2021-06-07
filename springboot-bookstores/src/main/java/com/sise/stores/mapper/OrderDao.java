package com.sise.stores.mapper;


import com.sise.stores.domain.Order;
import org.apache.ibatis.annotations.*;
import org.apache.ibatis.mapping.FetchType;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;
@Repository
@Mapper
public interface OrderDao {

    @Insert("insert into tb_order(order_code,user_id,create_date,status,amount)" +
            "values(#{orderCode},#{userId},#{createDate},#{status},#{amount})")
    @Options(useGeneratedKeys=true,keyProperty="orderId")
    int addOrder(Order order);

    @Select("select * from tb_order where user_id=#{userId} ORDER BY create_date DESC")
    @Results({
            @Result(id=true,column="order_id", property="orderId"),
            @Result(column="order_code",property="orderCode"),
            @Result(column="create_date",property="createDate"),
            @Result(column="status",property="status"),
            @Result(column="amount",property="amount"),
            @Result(column="order_id",property="itemList",
                    many=@Many(select="com.sise.stores.mapper.OrderItemDao.findOrderItemById",fetchType=FetchType.EAGER))
    })
    List<Order> findOrderByUserId(int userId);
}

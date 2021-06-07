package com.sise.stores.mapper;

import com.sise.stores.domain.OrderItem;
import org.apache.ibatis.annotations.*;
import org.apache.ibatis.mapping.FetchType;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
@Mapper
public interface OrderItemDao {

    @Insert("insert into tb_order_item(order_id,book_id,buy_num)" +
            "values(#{orderId},#{bookId},#{buyNum})")
    int addOrderItem(OrderItem orderItem);

    @Select("select * from tb_order_item where order_id=#{orderId}")
    @Results({
            @Result(column="order_id", property="orderId"),
            @Result(column="buy_num",property="buyNum"),
            @Result(column="book_id",property="book",
                    one=@One(select="com.sise.stores.mapper.BookDao.findBookById",fetchType= FetchType.EAGER))
    })
    List<OrderItem> findOrderItemById(int orderId);
}

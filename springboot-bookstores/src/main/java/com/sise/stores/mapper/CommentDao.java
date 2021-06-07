package com.sise.stores.mapper;


import com.sise.stores.domain.Comment;
import org.apache.ibatis.annotations.*;
import org.apache.ibatis.mapping.FetchType;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
@Mapper
public interface CommentDao {
    //查找图书评论
    @Select("select * from tb_comment where book_id=#{bookId} order by comment_date desc ")
    @Results({
            @Result(id=true,column="comment_id", property="commentId"),
            @Result(column="content",property="content"),
            @Result(column="comment_date",property="commentDate"),
            @Result(column="star",property="star"),
            @Result(column="user_id",property="user",
                    one=@One(select="com.sise.stores.mapper.UserDao.findUserById",fetchType= FetchType.EAGER))
    })
    List<Comment> findBookComments(int bookId);

    @Insert("insert into tb_comment(book_id,user_id,content,comment_date)" +
            "values(#{bookId},#{userId},#{content},#{commentDate})")
    int addComment(Comment comment);

}

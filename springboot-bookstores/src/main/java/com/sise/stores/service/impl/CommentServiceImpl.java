package com.sise.stores.service.impl;


import com.sise.stores.domain.Comment;
import com.sise.stores.mapper.CommentDao;
import com.sise.stores.service.CommentService;
import com.sise.stores.service.RedisService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;
import java.util.concurrent.TimeUnit;

@Service("commentService")
public class CommentServiceImpl implements CommentService {
    @Autowired
    private CommentDao commentDao;

    @Autowired
    private RedisService redisService;

    @Override
    public List<Comment> findBookComments(int bookId) {
        String key="list:comment_"+bookId;
        List<Comment> comments=null;
        if(redisService.exists(key)){
            comments=(List<Comment>) redisService.get(key,Comment.class);
            return comments;
        }else{
            comments=commentDao.findBookComments(bookId);
            redisService.set(key,comments,-1);
        }
        return comments;
       // return commentDao.findBookComments(bookId);
    }

    @Override
    public int addComment(Comment comment) {
        redisService.del("list:comment_"+comment.getBookId());
        redisService.del("book:book_"+comment.getBookId());
        int flag= commentDao.addComment(comment);
        return flag;
    }
}

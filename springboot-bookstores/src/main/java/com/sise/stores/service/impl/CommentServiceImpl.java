package com.sise.stores.service.impl;


import com.sise.stores.domain.Comment;
import com.sise.stores.mapper.CommentDao;
import com.sise.stores.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;

@Service("commentService")
public class CommentServiceImpl implements CommentService {
    @Autowired
    private CommentDao commentDao;

    @Override
    public List<Comment> findBookComments(int bookId) {
        return commentDao.findBookComments(bookId);
    }

    @Override
    public int addComment(Comment comment) {
        return commentDao.addComment(comment);
    }
}

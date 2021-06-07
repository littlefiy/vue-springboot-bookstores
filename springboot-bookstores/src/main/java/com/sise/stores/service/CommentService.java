package com.sise.stores.service;



import com.sise.stores.domain.Comment;

import java.util.List;

public interface CommentService {
    List<Comment> findBookComments(int bookId);
    int addComment(Comment comment);
}

package com.sise.stores.service;


import com.sise.stores.domain.User;

public interface UserService {
    int addUser(User user);
    User login(User user);
}

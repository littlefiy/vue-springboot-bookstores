package com.sise.stores.service.impl;


import com.sise.stores.domain.*;
import com.sise.stores.mapper.*;
import com.sise.stores.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service("userService")
public class UserServiceImpl implements UserService {
    @Autowired
    private UserDao userDao;

    @Override
    public int addUser(User user) {
        //设置权限等
        user.setCreateDate(new Date());
        user.setRole(0);
        user.setDisabled(1);
        return userDao.addUser(user);
    }

    @Override
    public User login(User user) {
        return userDao.login(user);
    }
}

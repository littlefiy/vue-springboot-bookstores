package com.sise.stores.service.impl;


import com.sise.stores.domain.*;
import com.sise.stores.mapper.*;
import com.sise.stores.service.RedisService;
import com.sise.stores.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service("userService")
public class UserServiceImpl implements UserService {
    @Autowired
    private UserDao userDao;
    @Autowired
    private RedisService redisService;
    @Override
    public int addUser(User user) {
        redisService.del("user:user_"+user.getAccount());

        //设置权限等
        user.setCreateDate(new Date());
        user.setRole(0);
        user.setDisabled(1);
        return userDao.addUser(user);
    }

    @Override
    public User login(User user) {
        User u=null;
        String key="user:user_"+user.getAccount();
        if(redisService.exists(key)){
            u=(User)redisService.getBean(key);
        }else{
            u=userDao.login(user);
            redisService.setBean(key,u);
        }
        return u;
    }
}

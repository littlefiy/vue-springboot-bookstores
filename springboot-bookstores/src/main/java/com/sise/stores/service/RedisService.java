package com.sise.stores.service;

import com.alibaba.fastjson.JSON;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

@Service
public class RedisService {
    @Autowired
    private RedisTemplate redisTemplate;

    /**
     * 设置对象
     * @param key  键
     * @param value  值
     * @param exTime  过期时间
     * @param <T> 返回类型
     * @return
     */
    public <T> boolean set(String key,T value,int exTime) {
        String str = beanToString(value);
        if (str == null || str.length() <= 0) {
            return false;
        }
        //设置过期时间
        if(exTime <= 0) {
            redisTemplate.opsForValue().set(key, str);
        } else {
            redisTemplate.opsForValue().set(key, str,exTime);
        }
        return true;
    }


    public <T> boolean setBean(String key,T value){
        if(value==null){
            return false;
        }else{
            redisTemplate.opsForValue().set(key,value);
            return true;
        }
    }

    public <T> T getBean(String key) {
        T str = (T) redisTemplate.opsForValue().get(key);
        return str;
    }
    /**
     * 根据key获取对象返回
     * @param key
     * @param clazz
     * @param <T>
     * @return
     */
    public <T> T get(String key,Class<T> clazz) {
        String str = (String) redisTemplate.opsForValue().get(key);
        T t = stringToBean(str,clazz);
        return t;
    }

    /**
     * bean 转 String
     * @param value
     * @param <T>
     * @return
     */
    public static <T> String beanToString(T value) {
        if(value == null) {
            return null;
        }
        Class<?> clazz = value.getClass();
        if(clazz == int.class || clazz == Integer.class) {
            return ""+value;
        }else if(clazz == String.class) {
            return (String)value;
        }else if(clazz == long.class || clazz == Long.class) {
            return ""+value;
        }else {
            return JSON.toJSON(value).toString();
        }
    }


    /**
     * string转bean
     * @param str
     * @param clazz
     * @param <T>
     * @return
     */
    public static <T> T stringToBean(String str, Class<T> clazz) {
        if(str == null || str.length() <= 0 || clazz == null) {
            return null;
        }
        if(clazz == int.class || clazz == Integer.class) {
            return (T)Integer.valueOf(str);
        }else if(clazz == String.class) {
            return (T)str;
        }else if(clazz == long.class || clazz == Long.class) {
            return  (T)Long.valueOf(str);
        }else {
            return (T) JSON.parseArray(str,clazz);
        }
    }

    /**
     * 关闭连接
     * @param jedis
     */
/*    private void returnToPool(Jedis jedis) {
        if(jedis != null) {
            jedis.close();
        }
    }*/

    /**
     * 判断key是否存在
     * */
    public <T> boolean exists(String key) {
        return  redisTemplate.hasKey(key);
    }

 /*   删除缓存*/
    public <T> boolean del(String key) {
        return  redisTemplate.delete(key);
    }
}

package com.sise.stores.mapper;


import com.sise.stores.domain.User;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Options;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
@Mapper
public interface UserDao {
    @Insert("insert into tb_user(account,password,user_name,sex,email,role,create_date,disabled,user_img) " +
            "values(#{account},#{password},#{userName},#{sex},#{email},#{role},#{createDate},#{disabled},#{userImg})")
    int addUser(User user);

    @Select("select * from tb_user where account=#{account} and password=#{password}")
    User login(User user);

    @Select("select * from tb_user where user_id=#{userId}")
    User findUserById(int userId);



}

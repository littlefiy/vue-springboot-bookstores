package com.sise.stores.service.impl;


import com.sise.stores.domain.*;
import com.sise.stores.domain.vo.PageBean;
import com.sise.stores.mapper.*;
import com.sise.stores.service.ShopcarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("/shopcarService")
public class ShopcarServiceImpl implements ShopcarService {

    @Autowired
    private ShopcarCao shopcarCao;
    @Autowired
    private BookDao bookDao;
    @Override
    public int addCar(Shopcar shopcar) {
        //检查购物车是否存在该商品
        Shopcar sc=shopcarCao.findCarCheckOne(shopcar.getBookId(),shopcar.getUserId());
        if(sc==null){
            return shopcarCao.addCar(shopcar);
        }else{
            //购物车存在该商品
            //1 判断所添加的商品数量+购物车已有数量 是否超过库存
            //1-1 若超过存库，给出tag
            //1-2 若没有，编辑购物车数量
            //1-3 若相加超过库存数量，设置购买数量为库存数，并给出tag
            Book book=bookDao.findBookById(shopcar.getBookId());
            //图书库存
            int storage=book.getStorage();
            //购物车已有数量
            int carNum=sc.getBuyNum();
            //添加数量
            int addNum=shopcar.getBuyNum();
            int count=carNum+addNum;
            //库存足够
            if(count<=storage){
                shopcar.setBuyNum(count);
               return  shopcarCao.editCar(shopcar);
            }else{
                return 0;
            }

       /*     shopcar.setBuyNum(sc.getBuyNum()+shopcar.getBuyNum());
            return shopcarCao.editCar(shopcar);*/
        }
    }
//分页显示
    @Override
    public PageBean findCarInfoByUserId(int userId, int current) {
        int size=5;
        PageBean<Shopcar> pageBean = new PageBean<Shopcar>();
        pageBean.setCurrPage(current);
        pageBean.setPageSize(size);
        int count=shopcarCao.countCarByUserId(userId);
        pageBean.setTotalCount(count);

        //总页数
        double tc = count;
        Double num =Math.ceil(tc/size);//向上取整
        pageBean.setTotalPage(num.intValue());

        int start=(current-1)*size;
        List<Shopcar> shopcarList=shopcarCao.findCarInfoByUserId(userId,start,pageBean.getPageSize());

        pageBean.setLists(shopcarList);

        return pageBean;
    }

    @Override
    public List<Shopcar> findCarByIds(List<Integer> carIds) {
        return shopcarCao.findCarByIds(carIds);
    }

    @Override
    public int editCar(Shopcar shopcar) {


        return shopcarCao.editCar(shopcar);
    }
}

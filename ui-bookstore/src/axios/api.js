import request from './request'
//登录请求
export function login(data) {
  return request({
    url: `user/login`,
    method: 'post',
    data: data
  })
}
//注册
export function register(data) {
  return request({
    url: `user/register`,
    method: 'post',
    data: data
  })
}
//发布书本
export function addbook(data) {
  return request({
    url: `book/addByUser`,
    method: 'post',
    data: data
  })
}

//根据bookId查询图书信息
export function findbookbyid(data) {
  return request({
    url: `book/findBookById`,
    method: 'post',
    data: data
  })
}
//根据bookId查询图书评论信息
export function findbookcomments(data) {
  return request({
    url: `book/findBookComments`,
    method: 'post',
    data: data
  })
}


//根据bookId查询图书留言信息
export function findbooktop10(data) {
  return request({
    url: `book/findBookTop10`,
    method: 'post',
    data: data
  })
}

//添加图书留言
export function addcomment(data) {
  return request({
    url: `book/addComment`,
    method: 'post',
    data: data
  })
}

//添加购物车
export function addcar(data) {
  return request({
    url: `car/addCar`,
    method: 'post',
    data: data
  })
}
//删除购物车
export function delcar(data) {
  return request({
    url: `car/delCar`,
    method: 'post',
    data: data
  })
}

//显示购物车
export function findcar(data) {
  return request({
    url: `car/findCar`,
    method: 'post',
    data: data
  })
}

//更新购物车
export function editcar(data) {
  return request({
    url: `car/editCar`,
    method: 'post',
    data: data
  })
}

//下单去订单页
export function toorder(data) {
  return request({
    url: `order/toOrder`,
    method: 'post',
    data: data
  })
}
//提交订单
export function addorder(data) {
  return request({
    url: `order/createOrder`,
    method: 'post',
    data: data
  })
}


//显示用户全部订单
export function findorderlist(data) {
  return request({
    url: `order/findOrderList`,
    method: 'post',
    data: data
  })
}

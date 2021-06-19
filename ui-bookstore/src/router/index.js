import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: resolve => require(['@/page/index'],resolve)
    },
    {
      path: '/index',
      name: 'index',
      component: resolve => require(['@/page/index'],resolve)
    },
    {
      path: '/bookdetail',
      name: 'bookdetail',
      component: resolve => require(['@/page/bookdetail'],resolve)
    }
    ,
    {
      path: '/shoppingcar',
      name: 'shoppingcar',
      component: resolve => require(['@/page/shoppingcar'],resolve)
    }
    ,
    {
      path: '/register',
      name: 'register',
      component: resolve => require(['@/page/register'],resolve)
    }
    ,
    {
      path: '/userorder',
      name: 'userorder',
      component: resolve => require(['@/page/userorder'],resolve)
    },
    {
      path: '/updatebook',
      name: 'updatebook',
      component: resolve => require(['@/components/user/book/updateBook'],resolve)
    },
    //个人中心导航栏
    {
      // 我的交易--懒加载
      path: '/userinfo',
      component: resolve => require(['@/page/userInfo'], resolve),
      children: [
        {
          path: '',
          component: resolve => require(['@/page/welcome'], resolve),
          meta: [],
        },{
          path: '/mybooks',
          component: resolve => require(['@/components/user/book/mybooks'], resolve),
          meta: ['我的交易', '已发布书籍'],
      },{
          path: '/salebook',
          component: resolve => require(['@/components/user/book/saleBook'], resolve),
          meta: ['我的交易', '已卖出书籍'],
        },
        {
          path: '/buybook',
          component: resolve => require(['@/components/user/book/buyBook'], resolve),
          meta: ['我的交易', '已买到书籍'],
        }, {
        path: '/message',
        component: resolve => require(['@/components/user/message/list'], resolve),
        meta: ['我的消息', '消息列表'],
      },{
        path: '/address',
        component: resolve => require(['@/components/user/address/address'], resolve),
        meta: ['我的地址', '所有收货地址'],
      }, {
          path: '/addaddress',
          component: resolve => require(['@/components/user/address/addAddress'], resolve),
          meta: ['我的地址', '添加收货地址'],
      },{
        path: '/updateinfo',
        component: resolve => require(['@/components/user/setting/updateInfo'], resolve),
        meta: ['设置', '修改个人信息'],
      },{
        path: '/about',
        component: resolve => require(['@/components/user/setting/about'], resolve),
        meta: ['设置', '关于我们'],
      },
        {
          path: '/myorders',
          component: resolve => require(['@/components/user/myorders'], resolve),
          meta: ['我的订单'],
        },
        {
          path: '/addbook',
          component: resolve => require(['@/components/user/book/addBook'], resolve),
          meta: ['发布闲置书籍'],
        },
        {
          path: '/welcome',
          component: resolve => require(['@/page/welcome'], resolve),
          meta: [],
        }
      ]
    }
  ]
})

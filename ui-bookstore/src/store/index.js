import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state:sessionStorage.getItem('state') ? JSON.parse(sessionStorage.getItem('state')): {
    //这里放全局参数
    user:[],
    token:false,
    cartList:[],
    userInfoTag:''
  },

  mutations: {
    //这里是set方法
    setUser(state,user){
      state.user = user
    },
    setUserInfoTag(state,userInfoTag){
      state.userInfoTag = userInfoTag
    },
    setToken(state,token){
      state.token = token
    },
    setCartList(state,cartList){
      state.cartList = cartList
    },
    // 修改购物车中商品数量
    editCartCount(state, payload) {
      const product = state.cartList.find(item => item.carId === payload.carId);
      product.buyNum = payload.buyNum;
    },
    // 删除购物车中商品
    deleteCart(state,id ) {
      const index = state.cartList.findIndex(item => item.carId === id);
      state.cartList.splice(index, 1);
    },
    // 清空购物车
    emptyCart(state) {
      state.cartList = [];
    }


  },

  getters: {     
      //这里是get方法 
    getUser: state => state.user,
    getToken: state => state.token,
    getCartList: state => state.cartList,
    getUserInfoTag: state => state.userInfoTag,
      }/*,
  actions: {

    //这个部分暂时用不上

  }*/
})


/*    modules: {

//这里是我自己理解的是为了给全局变量分组，所以需要写提前声明其他store文件，然后引入这里

    }*/



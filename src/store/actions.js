import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutations_types'

import { getCategoryContent,getCategoryTitle } from '@/network/category'

export default {
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      
    // 1.查找之前数组中是否有该商品
    let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)

    // 2.判断oldProduct
    if (oldProduct) { // 数量+1
      // oldProduct.count += 1
      context.commit(ADD_COUNTER,oldProduct)
      resolve('当前商品数量+1')
    } else { // 添加新的商品
      payload.count = 1
      // context.state.cartList.push(payload)
      context.commit(ADD_TO_CART,payload)
      resolve('加入购物车成功')
    }
    })
  },
  // 获取分类标题
  getTitle(context) {
    getCategoryTitle().then(res => {
      context.state.categoryTitle = res.data.category.list
      // console.log(context.state.categoryTitle)
    })
  },
  // 获取分类内容
  getContent(context,stateMaitKey=3627) {
    getCategoryContent(stateMaitKey).then(res => {
      context.state.categoryContent = res.data.list
      context.state.maitKey = stateMaitKey
      context.state.newMaitKey = res.key
      // console.log(context.state.maitKey)
      console.log(res)
      // console.log(context.state.newMaitKey)
    })
  }

}

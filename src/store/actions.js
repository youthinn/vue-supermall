/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-05-14 22:53:43
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-07-09 19:32:07
 * @FilePath: \Vue\05-vue\01-supermall\src\store\actions.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutations_types'

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
      resolve('添加新的商品')
    }
    })
  }
}

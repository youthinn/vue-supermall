<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-04-07 17:33:06
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-07-09 16:08:08
 * @FilePath: \Vue\05-vue\01-supermall\src\views\cart\Cart.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="cart">
    <!-- 导航 -->
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{ length }})</div>
    </nav-bar>
    
    <!-- 商品列表 -->
    <cart-list class="cart-list"/>

    <!-- 底部汇总 -->
    <cart-botton-bar />
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";

import CartList from './childComponents/CartList.vue';
import CartBottonBar from './childComponents/CartBottonBar.vue'
import { mapGetters } from "vuex";

export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
    CartBottonBar,
  },
  computed: {
    ...mapGetters({
      length: "cartLength",
    }),
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
#cart {
  height: 100vh;
  position: relative;
}
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
  
  font-weight: 700; 
}
</style>
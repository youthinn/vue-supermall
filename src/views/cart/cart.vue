<template>
  <div id="cart">
    <!-- 导航 -->
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{ length }})</div>
    </nav-bar>

    <!-- 商品列表 -->
    <cart-list />

    <!-- 底部汇总 -->
    <cart-botton-bar />
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";

import CartList from "./childComponents/CartList.vue";
import CartBottonBar from "./childComponents/CartBottonBar.vue";
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

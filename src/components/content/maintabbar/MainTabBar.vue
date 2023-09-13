<template>
  <tab-bar ref="homeTabBar">
    <tab-bar-item path="/home">
      <!--  activateColor="green" 默认底部菜单字体颜色为红色，可以用此修改颜色-->
      <img slot="item-icon" src="~assets/img/tabbar/首页.png" alt="" />
      <img
        slot="item-icon-activate"
        src="~assets/img/tabbar/首页route.png"
        alt=""
      />
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img slot="item-icon" src="~assets/img/tabbar/分类.png" alt="" />
      <img
        slot="item-icon-activate"
        src="~assets/img/tabbar/分类route.png"
        alt=""
      />
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img slot="item-icon" src="~assets/img/tabbar/购物车.png" alt="" />
      <img
        slot="item-icon-activate"
        src="~assets/img/tabbar/购物车route.png"
        alt=""
      />
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/proflie">
      <img slot="item-icon" src="~assets/img/tabbar/我的.png" alt="" />
      <img
        slot="item-icon-activate"
        src="~assets/img/tabbar/我的route.png"
        alt=""
      />
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar.vue";
import TabBarItem from "components/common/tabbar/TabBarItem.vue";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style scoped></style>

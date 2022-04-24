<template>
  <div id="app">
    <!-- keep-view:保证组件不会被重复销毁/创建 -->
    <keep-alive exclude="Detail"> 
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from "components/content/maintabbar/MainTabBar";

export default {
  name: "App",
  components: {
    MainTabBar,
  },
};
</script>

<style scoped>
@import "assets/css/base.css";
</style>

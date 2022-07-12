<template>
  <div id="category">
    <!-- 标题 -->
    <nav-bar class="nav-bar">
      <div slot="center">分类</div>
    </nav-bar>

    <!-- 分类内容 -->
    <div class="category-content">
      <!-- 标题 -->
      <category-title class="left" />

      <!-- 内容 -->
      <category-content class="right" />

    </div>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
import Scroll from '@/components/common/scroll/Scroll.vue'
import CategoryTitle from "./childComponents/CategoryTitle.vue"
import CategoryContent from "./childComponents/CategoryContent.vue"

export default {
  name: 'Category',
  components: {
    NavBar,
    CategoryTitle,
    CategoryContent,
    Scroll
  }
}
</script>

<style scoped>
#categroy {
  height: 100%;
  position: relative;
}

.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
  font-weight: 700;
}

.category-content {
  display: flex;
  height: 100%;
  width: 100%;
}

.left {
  widows: 100px;
  height: calc(100vh - 44px - 49px);
}

.right {
  flex: 1;
  height: calc(100vh - 44px - 49px);
}
</style>
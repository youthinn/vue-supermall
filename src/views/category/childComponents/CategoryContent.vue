<template>
  <div class="right">
    <Scroll class="scroll-right">
      <div v-for="item in showGoods" class="content-item">
        <a :href="item.link">
          <img :src="item.image" alt="">
          <p>{{ item.title }}</p>
        </a>
      </div>
    </Scroll>
  </div>
</template>

<script>
// import Scroll from '@/components/common/scroll/Scroll.vue'
import Scroll from '@/components/common/scroll/Scroll.vue'
import { mapActions } from 'vuex'

export default {
  name: 'CategoryContent',
  components: {
    Scroll
  },
  data() {
    return {
      contentList: [],
    }
  },
  created() {
    this.getContent()
  },
  methods: {
    ...mapActions(['getContent']),
  },
  computed: {
    showGoods() {
      return this.$store.state.categoryContent
    }
  }
}
</script>

<style scoped>
.right {
  height: calc(100% - 44px - 49px);
  display: flex;
}

.scroll-right {
  height: 100%;
  overflow: hidden;
}

.content-item {
  font-size: 13px;
  text-align: center;
  padding: 12px;
  float: left;
  overflow: hidden;
  width: 33.3%;
}

.content-item img {
  width: 100%;

}
</style>
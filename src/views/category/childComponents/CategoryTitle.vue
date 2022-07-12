<template>
  <div class="left">
    <Scroll class="scroll-left">
      <div v-for="(item, index) in gTitle" :class="['title', { isclick: currentIndex === index }]"
        @click="titleClick(item.maitKey, index)">
        <p>{{ item.title }}</p>
      </div>
    </Scroll>
  </div>
</template>

<script>
import Scroll from '@/components/common/scroll/Scroll.vue'
import { mapActions } from 'vuex'

export default {
  name: 'CategoryTitle',
  components: {
    Scroll
  },
  data() {
    return {
      categoryTitle: this.$store.state.categoryTitle,
      currentIndex: 0,
    }
  },
  methods: {
    ...mapActions(['getTitle', 'getContent']),
    titleClick(maitKey, itemindex) {
      this.currentIndex = itemindex;
      this.getContent(maitKey);
    }
  },
  created() {
    this.getTitle()
  },
  computed: {
    gTitle() {
      return this.$store.state.categoryTitle
    },
    getContentMaitkey() {
      return this.$store.state.newMaitKey
    },
  }
}
</script>

<style scoped>
.left {
  height: calc(100% - 44px - 49px);
  display: flex;
}

.scroll-left {
  height: 100%;
  overflow: hidden;
}

.title {
  line-height: 44px;
  width: 100px;
  text-align: center;
  background-color: #ebebeb;
}

.isclick {
  border-left: 3px solid #ff5777;
  background-color: white;
  width: 100px;
}
</style>
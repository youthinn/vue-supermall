<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad:{
      type:Boolean,
      default:false
    }
  },
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    // 1.创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad:this.pullUpLoad
    });

    // 2.监听滚动的位置
    this.scroll.on('scroll',(position) => {
      // console.log("🚀 ~ file: Scroll.vue ~ line 36 ~ this.scroll.on ~ position", position)
      this.$emit('scroll',position)
    }) 

    // 3.监听上拉加载更多
    this.scroll.on('pullingUp',() => {
      console.log(this)
      this.$emit('pullingUp')
    })
  },
  methods: {
    scrollTo(x, y, time = 500) {
      this.scroll.scrollTo(x, y, time);
    },
    finishPullUp(){
      this.scroll.finishPullUp()
    }
  },
};
</script>

<style scoped>
</style>
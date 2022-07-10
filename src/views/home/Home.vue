<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control :titles="['流行', '新款', '精选']" @tabClick="tabClick" ref="TabControl1" class="tab-control-fixed"
      v-show="isTabFixed"></tab-control>
    <scroll class="content" ref="scroll" :probeType="3" @scroll="contentScroll" :pull-up-load="true"
      @pullingUp="loadMore">
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <featrue-view></featrue-view>
      <tab-control :titles="['流行', '新款', '精选']" @tabClick="tabClick" ref="TabControl2"></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>

    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import TabControl from "components/content/tabControl/TabControl.vue";
import GoodsList from "components/content/goods/GoodsList.vue";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";

import HomeSwiper from "./childComponents/HomeSwiper";
import RecommendView from "./childComponents/RecommendView.vue";
import FeatrueView from "./childComponents/FeatureView.vue";

import { getHomeMultidata, getHomeGoods } from "network/home";
import { debouce } from "common/utils";
import {itemListenerMixin} from "common/mixin"

export default {
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatrueView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      curremtType: "pop",
      isShowBackTop: false,
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0,
    };
  },
  mixins:[itemListenerMixin],
  created() {
    // 1.请求多个数据  这里使用的是下面methods定义的方法
    this.getHomeMultidata();

    // 2.请求商品数据  这里使用的是下面methods定义的方法
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 0)
    this.$refs.scroll.refresh()
  },
  deactivated() {
    // 1.保存Y值
    this.saveY = this.$refs.scroll.getScrollY();

    // 2.取消全局事件的监听
    this.$bus.$off('itemImgLoad', this.itemImgListener)
  },
  mounted() {
  },
  computed: {
    showGoods() {
      return this.goods[this.curremtType].list;
    },
  },
  methods: {
    /**
     * 事件监听相关的方法
     */

    tabClick(index) {
      switch (index) {
        case 0:
          this.curremtType = "pop";
          break;
        case 1:
          this.curremtType = "new";
          break;
        case 2:
          this.curremtType = "sell";
          break;
      }
      //让两个tabControl的currentIndex保持
      this.$refs.TabControl1.currentIndex = index
      this.$refs.TabControl2.currentIndex = index
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    contentScroll(position) {
      // 1.判断BackTop是否显示
      this.isShowBackTop = -position.y > 1000;

      // 2.决定tabControl是否吸顶(position:fixed)
      this.isTabFixed = (-position.y) > this.tabOffsetTop
    },
    loadMore() {
      this.getHomeGoods(this.curremtType);
      // console.log("加载更多");
      this.$refs.scroll.scroll.refresh(); //对异步加载的图片进行刷新
    },
    swiperImageLoad() {
      // 2.获取tabControl的offsetTop
      // 所有的组件都有一个属性$el:用于获取组件中的元素
      this.tabOffsetTop = this.$refs.TabControl2.$el.offsetTop
    },

    /**
     *网络请求相关的方法
     */
    getHomeMultidata() {
      //下面使用的getHomeMultidata是从import导入的方法
      getHomeMultidata().then((res) => {
        // console.log(res);
        // this.result = res
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },

    getHomeGoods(type) {
      //下面使用的getHomeGoods是从import导入的方法
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        // 完成上拉加载更多
        this.$refs.scroll.finishPullUp();
      });
    },
  },
};
</script>

<style scoped>
#home {
  /* padding-top: 44px; */
  height: 100vh;
  position: relative;
}

.home-nav {
  background-color: var(--color-tint);
  color: #fff;

  /* 原生浏览器滚动才这么设置 */
  /* position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9; */
}

.content {
  overflow: hidden;
  /* 设置滚动的具体区域 */
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}

/* .content {
  height: calc(100%-93px);
  overflow: hidden;
  margin-top: 44px;
} */

.tab-control-fixed {
  position: relative;
  z-index: 9;
}
</style>
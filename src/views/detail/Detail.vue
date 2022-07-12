<template>
  <div id="detail">
    <detail-nav-bar class="datail-nav" @titleClick="titleClick" ref="nav"></detail-nav-bar>
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
      <detail-param-info ref="params" :param-info="paramsInfo"></detail-param-info>
      <detail-comment-info ref="comment" :comment-info="commentInfo"></detail-comment-info>
      <goods-list ref="recommends" :goods="recommends"></goods-list>
    </scroll>
    <detail-bottom-bar @addCart="addToCart"></detail-bottom-bar>

    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import DetailNavBar from "./childComponents/DetailNavBar.vue";
import DetailSwiper from "./childComponents/DetailSwiper.vue";
import DetailBaseInfo from "./childComponents/DetailBaseInfo.vue";
import DetailShopInfo from "./childComponents/DetailShopInfo.vue";
import DetailGoodsInfo from "./childComponents/DetailGoodsInfo.vue";
import DetailParamInfo from "./childComponents/DetailParamInfo.vue";
import DetailCommentInfo from "./childComponents/DetailCommentInfo.vue";
import DetailBottomBar from "./childComponents/DetailBottomBar.vue";

import { mapActions } from "vuex";

import Scroll from "components/common/scroll/Scroll";
import GoodsList from "components/content/goods/GoodsList.vue";

import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommend,
} from "network/detail.js";
import { debouce } from "common/utils";
import { itemListenerMixin, backTopMixin } from "common/mixin";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,

  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramsInfo: {},
      commentInfo: {},
      recommends: [],
      itemImgListener: null,
      themeTopYs: [],
      getThemTopY: null,
      currentIndex: 0,
      isShowBackTop: false
    };
  },
  mixins: [itemListenerMixin, backTopMixin],
  created() {
    // 1.保存传入的iid
    this.iid = this.$route.params.iid;

    // 2.根据iid请求详情数据
    getDetail(this.iid).then((res) => {
      // 2.1获取res的轮播图数据
      const data = res.result; //将数据保存到data变量中，方便调用
      // console.log("🚀 ~ file: Detail.vue ~ line 31 ~ getDetail ~ data", data);
      this.topImages = data.itemInfo.topImages;

      // 2.2获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );

      // 2.3创建店铺信息的对象
      this.shop = new Shop(data.shopInfo);

      // 2.4保存商品的详情数据
      this.detailInfo = data.detailInfo;

      // 2.5获取参数的信息
      this.paramsInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );

      // 2.7取出评论的信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }

      /*this.$nextTick(() => {
        // 根据最新的数据，对应的DOM元素是已经被渲染出来
        // 但是图片依然是没有加载完(目前获取到offsetTop不包含其中的图片)
        // offsetTop值不对的时候，都是因为图片的问题
        this.themeTopYs = [];

        this.themeTopYs.push(0);
        this.themeTopYs.push(this.$refs.params.$el.offsetTop);
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
        this.themeTopYs.push(this.$refs.recommends.$el.offsetTop);
      
        console.log(
          "🚀 ~ file: Detail.vue ~ line 106 ~ mounted ~ themeTopYs",
          this.themeTopYs
        );
      });*/
    });

    // 3.请求推荐数据
    getRecommend().then((res) => {
      // console.log("🚀 ~ file: Detail.vue ~ line 89 ~ getRecommend ~ res", res)
      this.recommends = res.data.list;
    });
    // 4.给getThemTopY赋值(对this.getThemTopY进行防抖操作)
    this.getThemTopY = debouce(() => {
      this.themeTopYs = [];

      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      this.themeTopYs.push(this.$refs.recommends.$el.offsetTop);
      this.themeTopYs.push(Number.MAX_VALUE);

      // console.log(
      //   "🚀 ~ file: Detail.vue ~ line 106 ~ mounted ~ themeTopYs",
      //   this.themeTopYs
      // );
    }, 200);
  },
  mounted() { },
  updated() { },
  destroyed() {
    this.$bus.$on("itemImgLoad", this.itemImgListener);
  },
  methods: {
    ...mapActions(['addCart']),// 映射vuex里面的actions
    imageLoad() {
      this.$refs.scroll.refresh();
      this.getThemTopY();
    },
    titleClick(index) {
      // console.log("🚀 ~ file: Detail.vue ~ line 109 ~ titleClick ~ index", index)
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 200);
    },
    //滚动内容显示对应标题
    contentScroll(position) {
      // 1.获取y值
      const positionY = -position.y;

      // 2.positionY和主题中值进行对比
      //[0, 6933, 7398, 7710]
      // positionY 在 0 和 6933 之间，index = 0
      // positionY 在 =6933 和 7398 之间，index = 1
      // positionY 在 =7398 和 7710 之间，index = 2
      // positionY 超过 7710 值，index = 3

      let length = this.themeTopYs.length;
      // 方式二
      for (let i = 0; i < length - 1; i++) {
        if (
          this.currentIndex !== i &&
          positionY >= this.themeTopYs[i] &&
          positionY < this.themeTopYs[i + 1]
        ) {
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }

      // 方式一
      // for(let i = 0; i < length; i++) {
      //   if((this.currentIndex !== i) && ((i < length - 1 && positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1]) || (i === length - 1 && positionY >= this.themeTopYs[i]))) {
      //     this.currentIndex = i;
      //     this.$refs.nav.currentIndex = this.currentIndex
      //   }
      // }

      // 3.是否显示回到顶部
      this.listenShowBackTop(position);
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    addToCart() {
      // 1.获取购物车需要展示的信息
      const product = {}
      product.image = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.realPrice
      product.iid = this.iid

      console.log(product)

      // 2.将商品添加到购物车里
      // this.$store.commit('addCart')
      this.addCart(product).then((res) => {
        //显示添加进入购物车成功
        this.$toast.show(res, 1500)

      })

      // this.$store.dispatch('addCart', product).then((res) => {
      //   console.log(res)  
      // })

      // this.$toast.show('添加购物车成功',2000)
    }
  },
};
</script>


<style scoped>
#detail {
  position: relative;
  z-index: 10000;
  background-color: #fff;
  height: 100vh;
}


.detail-nav {
  position: relative;
  z-index: 10000;
  background-color: #fff;
}

.content {
  background-color: #fff;
  overflow: hidden;
  height: calc(100% - 44px - 49px);
}
</style>
</style>
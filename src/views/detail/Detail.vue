<template>
  <div id="detail">
    <detail-nav-bar class="datail-nav" @titleClick="titleClick"></detail-nav-bar>
    <scroll class="content" ref="scroll">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
      <detail-param-info :param-info="paramsInfo"></detail-param-info>
      <detail-comment-info :comment-info="commentInfo"></detail-comment-info>
      <goods-list :goods="recommends"></goods-list>
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from "./childComponents/DetailNavBar.vue";
import DetailSwiper from "./childComponents/DetailSwiper.vue";
import DetailBaseInfo from "./childComponents/DetailBaseInfo.vue";
import DetailShopInfo from "./childComponents/DetailShopInfo.vue";
import DetailGoodsInfo from "./childComponents/DetailGoodsInfo.vue"
import DetailParamInfo from "./childComponents/DetailParamInfo.vue"
import DetailCommentInfo from "./childComponents/DetailCommentInfo.vue"

import Scroll from "components/common/scroll/Scroll";
import GoodsList from 'components/content/goods/GoodsList.vue';

import { getDetail, Goods, Shop, GoodsParam, getRecommend } from "network/detail.js";
import { debouce } from 'common/utils'
import {itemListenerMixin} from "common/mixin"

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
    };
  },
  mixins:[itemListenerMixin],
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
      this.detailInfo = data.detailInfo

      // 2.5获取参数的信息
      this.paramsInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)

      // 2.7取出评论的信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0]
      }
    });

    // 3.请求推荐数据
    getRecommend().then(res => {
      // console.log("🚀 ~ file: Detail.vue ~ line 89 ~ getRecommend ~ res", res)
      this.recommends = res.data.list
    })
  },
  mounted() {
  },
  destroyed() {
    this.$bus.$on('itemImgLoad', this.itemImgListener)
  },
  methods: {
    imageLoad() {
      this.$refs.scroll.refresh();
    },
    titleClick(index) {
    console.log("🚀 ~ file: Detail.vue ~ line 109 ~ titleClick ~ index", index)

    }
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 10;
  background-color: #fff;
  /* 窗口视图高度 */
  height: 100vh;
}

.datail-nav {
  /* position: relative; */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  background-color: #fff;
}

.content {
  height: calc(100% - 44px);
}
</style>
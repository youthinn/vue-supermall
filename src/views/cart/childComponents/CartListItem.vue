<template>
  <div id="shop-item">
    <div class="item-selector">
      <!-- <CheckButton :isChecked="itemInfo.checked" @click.native="checkClick"/> -->
      <check-button
        :is-checked="itemInfo.checked"
        @click.native="checkClick"
      ></check-button>
    </div>
    <!-- <div class="item-img">
      <img :src="itemInfo.image" alt="商品图片" />
    </div>
    <div class="item-info">
      <div class="item-title">{{ itemInfo.title }}</div>
      <div class="item-desc">商品描述: {{ itemInfo.desc }}</div>
      <div class="info-bottom">
        <div class="item-price left">¥{{ itemInfo.price }}</div>
        <div class="item-count right">x{{ itemInfo.count }}</div>
      </div>
    </div> -->
    <van-swipe-cell>
      <van-card
        :price="itemInfo.price"
        :desc="itemInfo.desc"
        :title="itemInfo.title"
        class="goods-card"
        :thumb="itemInfo.image"
      >
        <template #footer>
          <button class="bth_add" @click="addCount">+</button>
          <div class="goods_count">{{ itemInfo.count }}</div>
          <button
            class="bth_minus"
            :disabled="itemInfo.count <= 1"
            @click="minusCount"
          >
            -
          </button>
        </template>
      </van-card>
      <template #right>
        <van-button square text="删除" type="danger" class="delete-button" />
      </template>
    </van-swipe-cell>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton.vue";

export default {
  name: "CartListItem",
  props: {
    itemInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  components: {
    CheckButton,
  },
  methods: {
    checkClick() {
      this.itemInfo.checked = !this.itemInfo.checked;
    },
    addCount() {
      console.log("addCount");
      this.itemInfo.count++;
    },
    minusCount() {
      this.itemInfo.count--;
    },
  },
};
</script>

<style scoped>
:deep(.van-image) {
  padding: 0px;
}
:deep(.van-card) {
  background: transparent;
}

:deep(.van-card__price) {
  color: orangered;
}

:deep(.van-card__footer) {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
}

.goods_count {
  margin: 0 8px;
}

.bth_add,
.bth_minus {
  width: 20px;
  height: 20px;
}

.goods-card {
  margin: 0;
  background-color: @white;
}

.delete-button {
  height: 100%;
}

#shop-item {
  width: 100%;
  display: flex;
  font-size: 0;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}

.item-selector {
  min-width: 8%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.item-title,
.item-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.item-img {
  padding: 5px;
  /*border: 1px solid #ccc;*/
}

.item-img img {
  width: 80px;
  height: 100px;
  display: block;
  border-radius: 5px;
}

.item-info {
  font-size: 17px;
  color: #333;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
}

.item-info .item-desc {
  font-size: 14px;
  color: #666;
  margin-top: 15px;
}

.info-bottom {
  margin-top: 10px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
}

.info-bottom .item-price {
  color: orangered;
}
</style>

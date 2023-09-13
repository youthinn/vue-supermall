<template>
  <div class="order_form">
    <van-nav-bar
      title="确认订单"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      default-tag-text="默认"
      @add="addAddress"
      @edit="onEdit"
    />
    <van-submit-bar
      :price="getPrice"
      button-text="提交订单"
      @submit="onSubmit"
    />
    <div class="goods_item_info" v-for="item in $store.state.cartList">
      <van-card
        :num="item.count"
        :price="item.price"
        :desc="item.desc"
        :title="item.title"
        :thumb="item.image"
      />
    </div>
    <!-- <div style="height: 110vh"></div> -->
  </div>
</template>

<script>
export default {
  name: "OrderForm",
  beforeCreate() {},
  async created() {
    this.$refs.homeTabBar.style.display = "none";
    this.totalPrice = await this.$store.state.cartList
      .filter((item) => {
        return item.checked;
      })
      .reduce((preValue, item) => {
        return preValue + item.price * item.count;
      }, 0);
  },
  mounted() {
    this.$bus.$on("changeAddressInfo", (content) => {
      console.log("this.$bus.$on" + content);
      let newAdderss = content.city + content.county + content.addressDetail;
      this.list[0].name = content.name;
      this.list[0].tel = content.tel;
      this.list[0].address = newAdderss;
    });

    // console.log(this.goodsList);
  },
  beforeDestroy() {
    this.allPrice = 0;
  },
  computed: {
    getPrice() {
      return this.$store.state.totalPrice * 100;
    },
  },
  data() {
    return {
      chosenAddressId: "1",
      list: [
        {
          id: "1",
          name: "张三",
          tel: "13000000000",
          address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室",
          isDefault: true,
        },
      ],
      goodsList: null,
      totalPrice: 0,
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onEdit(item, index) {
      console.log("编辑地址:" + item);
      this.$router.push("/changeorder");
    },
  },
};
</script>

<style scoped>
:deep(.van-nav-bar .van-icon) {
  color: #ff8198;
}
:deep(.van-address-list__bottom) {
  background: #f9f9f9;
}
:deep(.van-address-list__add) {
  display: none;
}

:deep(.van-address-list) {
  padding: 3.2vw;
}

:deep(.van-card) {
  background: #fff;
}
.order_form {
  min-height: 100vh;
  min-width: 100vw;
  background: #f9f9f9;
}

.goods_item_info {
  margin: 10px 3.2vw;
}

:deep(.van-card__thumb) {
  width: 120px;
  height: 120px;
}

:deep(.van-card__title) {
  font-size: 16px;
  line-height: 1.5;
  max-height: 20vw;
}
</style>

<template>
  <div class="change_order_form">
    <van-nav-bar
      title="编辑收货地址"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <van-address-edit
      :area-list="areaList"
      show-postal
      :show-delete="false"
      show-set-default
      show-search-result
      :address-info="addressInfo"
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="changeAddressInfo"
      @delete="onDelete"
      @change-detail="onChangeDetail"
      save-button-text="确认修改"
    />
    <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit" />
  </div>
</template>

<script>
import { Toast } from "vant";
import { areaList } from "@vant/area-data";

export default {
  data() {
    return {
      areaList,
      searchResult: [],
      addressInfo: {
        id: "1",
        name: "张三",
        tel: "13000000000",
        address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室",
        isDefault: true,
      },
    };
  },
  methods: {
    onDelete() {
      Toast("delete");
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "黄龙万科中心",
            address: "杭州市西湖区",
          },
        ];
      } else {
        this.searchResult = [];
      }
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    changeAddressInfo(content) {
      // content.address = content.addressDetail;
      let newAdderss = content.city + content.county + content.addressDetail;
      content.address = newAdderss;
      this.$bus.$emit("changeAddressInfo", content);

      this.$router.push("/orderform");
      console.log("changeAddressInfo" + content);
      this.$toast.show("修改成功");
    },
  },
};
</script>

<style scoped>
:deep(.van-nav-bar .van-icon) {
  color: #ff8198;
}

:deep(.van-submit-bar__text, ) {
  display: none;
}

:deep(.van-submit-bar__button--danger) {
  display: none;
}
</style>

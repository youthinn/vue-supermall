<template>
  <div class="my">
    <div class="list">
      <div class="list-item">
        <img src="~assets/img/profile/message.png" alt="">
        <span>我的消息</span>
      </div>
      <div class="list-item">
        <img src="~assets/img/profile/super.png" alt="">
        <span>积分商城</span>
      </div>
      <div class="list-item noline">
        <img src="~assets/img/profile/vip.png" alt="">
        <span style="border:none">会员卡</span>
      </div>

    </div>

    <div class="app">
      <div class="list-item">
        <img src="~assets/img/profile/cart.png" alt="">
        <span>我的购物车</span>
      </div>
      <div class="list-item noline">
        <img src="~assets/img/profile/app.png" alt="">
        <span style="border:none">下载APP</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileList',
  components: {
  }
}
</script>

<style scoped>
.my {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  max-width: 100%;

  overflow-x: hidden;
}

.list {
  height: 180px;
  border-bottom: 12px solid #f2f2f2;

}

.list-item {
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin-top: 20px;
  margin-left: 20px;
  box-sizing: border-box;
}

.list-item img {
  width: 30px;
  height: 30px;
  /* line-height: 30px; */
}

.list-item span {
  position: relative;
  top: -8px;
  left: 14px;
  display: inline-block;
  width: 80%;
  border-bottom: 1px solid #ebebeb;
}
</style>
<template>
  <div class="list">
    <div class="list-item">
      <h5><span>0.0</span>元</h5>
      <p>我的余额</p>
    </div>
    <div class="list-item">
      <h5><span>0</span>个</h5>
      <p>我的优惠</p>
    </div>
    <div class="list-item">
      <h5><span>0</span>分</h5>
      <p>我的积分</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileMoney',
  components: {
  }
}
</script>

<style scoped>
.list {
  box-sizing: border-box;
  position: relative;
  border-bottom: 12px solid #f2f2f2;
  height: 110px;
}

.list-item {
  float: left;
  width: 33.3%;
  height: 110px;
  text-align: center;
  /* 设置文本水平、垂直居中 */
  /* display: flex; */
  /* align-items:center; */
  /* justify-content:center; */
  padding-top: 20px;
}

.list span {
  color: #ff5f3e;
  font-size: 28px;
  font-weight: 100;
}

.list-item p {
  padding-top: 8px;
}
</style>
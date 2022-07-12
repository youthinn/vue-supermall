<template>
  <div class="profile-user">
    <div class="user-message">
      <div>
        <img src="~assets/img/profile/userimg.jpg" alt="userimg">
      </div>
      <div class="user-text">
        <h4>人间日常</h4>
        <p class="user-phone">166****2283</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileUser',
  components: {
  }
}
</script>

<style scoped>
.profile-user {}

.user-message {
  width: 100%;
  height: 140px;
  background-color: #ff8198;
  position: relative;
}
.user-message div {
  float: left;
}
.user-message img {
  width: 80px;
  height: 80px;
  border-radius: 50px;
  border: 3px solid #f2f2f2;
  position: relative;
  top: 30px;
  left: 20px;
} .user-text {
  position: relative;
  top:40px;
  left: 40px;
  color: #fff;
  line-height: 28px;
  /* align-items:center */
}
.user-phone {
  background-image: url(../../../assets/img/profile/phone.png);
  background-size: 20px 20px;
  background-position-y: 3px;
  background-repeat: no-repeat;
  padding-left: 22px;
}
</style>
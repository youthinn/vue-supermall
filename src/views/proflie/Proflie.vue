<template>
  <div>
    <nav-bar class="nav-bar">
      <div slot="center">个人中心</div>
    </nav-bar>
    <profile-user />
    <profile-money />
    <profile-list />
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
import ProfileUser from './childComponents/ProfileUser.vue'
import ProfileMoney from './childComponents/ProfileMoney.vue'
import ProfileList from './childComponents/ProfileList.vue'

export default {
  name: 'Proflie',
  components: {
    NavBar,
    ProfileUser,
    ProfileMoney,
    ProfileList,
  }
}
</script>

<style scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
  font-weight: 700;
}
</style>
<template>
  <!-- <div class="TabBarItem">
    <img src="../../assets/img/tabbar/首页02.png" alt="" />
    <div>首页</div>
  </div> -->
  <div class="TabBarItem" @click="itemClick">
    <div v-if="!isActivate"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-activate"></slot></div>
    <div :style="activateStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props:{
    path:String,
    activateColor:{
      type:String,
      default:'red'
    }
  },
  data() {
    return {
      // isActivate:true
    }
  },
  computed:{
    isActivate(){
      return this.$route.path.indexOf(this.path) !== -1  //判断
    },
    activateStyle(){
      return this.isActivate ? {color:this.activateColor} : {}
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path)
    }
  },
};
</script>

<style scoped>
.TabBarItem {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}

.TabBarItem img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}

/* .activate{
  color: red;
} */
</style>
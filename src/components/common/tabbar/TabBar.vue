<template>
<div id="tab-bar">
  <slot></slot>
</div>
</template>

<script>

export default {
  name:'TabBar',
  components:{
    
  }
}
</script>

<style  scoped>
#tab-bar{
   display: flex;
   background: #f6f6f6;
   position: fixed;
   left: 0;
   right: 0;
   bottom: 0;
   box-shadow: 0px -1px 1px rgba(0 , 0, 0, 0.08);
 }

</style>
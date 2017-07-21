<template>
  <div class='containerh'>
    <router-view></router-view>
  </div>
</template>
<script type='text/ecmascript-6'>
  export default{
  }
</script>
<style lang='stylus' rel='stylesheet/stylus'>
  .containerh
    display: flex
    flex: 1
    justify-content: space-around
    position: relative
    -webkit-box-flex: 1
    -webkit-flex: 1
    overflow: auto
    -webkit-overflow-scrolling: touch
</style>

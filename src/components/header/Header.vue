<template>
  <div class='header'>
    <div class='header-nav'>
      <router-link to='/indexh/zhuxingtu'>
        <div class='nav-zhuxingtu'>
          <span class='text'>柱型图</span>
        </div>
      </router-link>
      <router-link to='/indexh/yuanquan'>
        <div class='nav-yuanquan'>
          <span class='text'>圆圈图</span>
        </div>
      </router-link>
      <router-link to='/indexh/quxianmianji'>
        <div class='nav-quxianmianji'>
          <span class='text'>血糖曲线下面积图</span>
        </div>
      </router-link>
      <router-link to='/indexh/kongfu'>
        <div class='nav-kongfu'>
          <span class='text'>空腹血糖曲线图</span>
        </div>
      </router-link>
      <router-link to='/indexh/canhouzao'>
        <div class='nav-canhouzao'>
          <span class='text'>餐后两小时图（早）</span>
        </div>
      </router-link>
      <router-link to='/indexh/canhouzhong'>
        <div class='nav-canhouzhong'>
          <span class='text'>餐后两小时图（中）</span>
        </div>
      </router-link>
      <router-link to='/indexh/canhouwan'>
        <div class='nav-canhouwan'>
          <span class='text'>餐后两小时图（晚）</span>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script type='text/ecmascript-6'>
  export default{
    data () {
      return {
        zhuti: 'light'
      }
    }
  }
</script>
<style lang='stylus' rel='stylesheet/stylus'>
  /*flex头部*/
  .header 
    overflow: hidden
    .header-nav 
      display: flex
      flex: 1
      justify-content: space-around
      height: 4rem
      line-height: 6rem
      .nav-zhuxingtu
        display: flex
        -webkit-box-flex: 1
        -webkit-flex: 1
        flex:1
        justify-content: space-around
        width: 10em
      .nav-yuanquan
        display: flex
        -webkit-box-flex: 1
        -webkit-flex: 1
        flex:1
        justify-content: space-around
        width: 10em
      .nav-quxianmianji
        display: flex
        -webkit-box-flex: 1
        -webkit-flex: 1
        flex:1
        justify-content: space-around
        width: 10em
      .nav-kongfu
        display: flex
        -webkit-box-flex: 1
        -webkit-flex: 1
        flex:1
        justify-content: space-around
        width: 10em
      .nav-canhouzao
        display: flex
        -webkit-box-flex: 1
        -webkit-flex: 1
        flex:1
        justify-content: space-around
        width: 10em
 </style>

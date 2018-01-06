<template>
  <div class="head">
    <a class="first" href="http://a.app.qq.com/o/simple.jsp?pkgname=com.epet.android.app&ckey=CK1350926861165">
      <img src="https://img2.epetbar.com/nowater/2017-12/13/18/c63b6e6cf483cbb61196f658920a9d6e.jpg@!water" alt="">
    </a>
    <div class="second">
      <!--<svgImage className="icon_style" type="#icon-chahao"/>-->
      <img src="//static.epetbar.com/static_wap/lib/common_images/closebtn_03.png" alt="">
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default{
    computed:{
      ...mapState(['home'])
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
.head
  margin 0
  padding 0
  width 100%
  height 55px
  position fixed
  z-index 100
  .first
    width 100%
    height 100%
    display block
    img
      width 100%
      height 100%
  .second
    width 18.75px
    height 18.75px
    position absolute
    top 15px
    left 8px
    img
      width 18.75px
      height 18.75px
</style>

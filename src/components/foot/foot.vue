<template>
  <div class="tab">
    <div class="tab-item">
      <router-link to="/home">
        <!--<svgImage className="icon_style" type="#icon-house1"/>-->
        <i class="iconfont icon-house1"></i>
        <br><span>首页</span>
      </router-link>
    </div>
    <div class="tab-item">
      <router-link to="/sort">
        <!--<svgImage className="icon_style" type="#icon-sousuo"/>-->
        <i class="iconfont icon-sousuo"></i>
        <br><span>分类</span>
      </router-link>
    </div>
    <div class="tab-item">
      <router-link to="/cart">
        <!--<svgImage className="icon_style" type="#icon-qicheqianlian-"/>-->
        <i class="iconfont icon-gouwuche"></i>
        <br><span>购物车</span>
      </router-link>
    </div>
    <div class="tab-item">
      <router-link to="/login">
        <!--<svgImage className="icon_style" type="#icon-xiaolian"/>-->
        <i class="iconfont icon-xiaolian"></i>
        <br><span>我的E宠</span>
      </router-link>
    </div>
  </div>
</template>
<script>
  export default{}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .tab
    height 55px
    width 100%
    border-top 1px solid (rgba(7,17,27,0.1))
    position fixed
    bottom 0
    left 0
    right: 0
    background-color white
    z-index 100
    /*line-height 55px*/
    .tab-item
      float left
      height 100%
      width 25%
      text-align center
      color rgb(7,17,27)
      a
        display block
        font-size 15px
        text-decoration none
        margin-top 3px
        &.router-link-active
          color rgb(0,255,0)
        .iconfont
          font-size 25px

</style>

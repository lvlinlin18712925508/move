<template>
 <div class="wrap" v-if="home">
   <div class="guide-wrap">
    <div class="guide-header">
      <div class="header-first">
        <div class="first">
          <a href="https://wap.epet.com/place.html?pet_type=dog&fw=0">
            <span>狗狗站</span>
            <span>|</span>
            <span>重庆</span>
            <i></i>
          </a>
        </div>
        <p>
          <a href="https://wap.epet.com/search.html?pet_type=dog&fw=0">
            <input type="search" placeholder="搜索商品和品牌" disabled="disabled">
            <span class="eico"></span>
          </a>
        </p>
        <a href='http://wap.epet.com/wappms/pms.html?fw=0' class="cr">
          <img src="//static.epetbar.com/static_web/wap/src/images/mydope.png" alt="">
        </a>
      </div>
    </div>
    <div class="foot-wrap" ref="foot">
     <ul>
       <li v-for="(menu,index) in home.menus" :key="index" @click="heada(index)">
         <a href="###" :class="{active:isShow===index}">
           <span>{{menu.menu_name}}</span>
           <i :class="{active:isShow===index}" :style="{width:font(menu.menu_name.length)+'px',left:mf(menu.menu_name.length)+'px'}"></i>
         </a>
       </li>
     </ul>
    </div>
  </div>
   <div class="content-wrap">
     <div class="c-wrap">
      <mt-swipe class="c-first" :auto="4000">
        <mt-swipe-item class="inner" v-for="(value,index) in home.datas[0].value" :key="index">
            <a :href="value.target.param">
              <img :src="value.image" alt="">
            </a>
        </mt-swipe-item>
      </mt-swipe>
    </div>
     <div class="center-wrap">
       <ul>
         <li v-for="(menu,index) in home.datas[1].menus">
           <a :href="menu.target.param">
             <img :src="menu.image" alt="">
           </a>
         </li>
       </ul>
     </div>
     <div class="kh"></div>
     <div class="xr">
       <a href="https://sale.epet.com/m/1706/newWelfare.html?pet_type=dog&fw=0">
         <img src="https://img2.epetbar.com/nowater/2017-12/18/09/60c354a5d94be9fd114523ee77259c73.gif" alt="">
       </a>
     </div>
     <div class="center-day">
       <div class="center-date">
         <div class="wld">
           <img src="//static.epetbar.com/static_web/wap/src/images/suprice.png" alt="">
         </div>
         <div class="rem">距離下一場</div>
         <div class="time">
           <span time-1></span>
           <span time-z>:</span>
           <span time-1></span>
           <span time-z>:</span>
           <span time-1></span>
         </div>
       </div>
       <div class="center-foot"></div>
     </div>
  </div>
 </div>
</template>
<script>
 import BScroll from 'better-scroll'
 import {mapState} from 'vuex'


  export default{
    data(){
      return{
        isShow:0
      }
    },
    methods:{
      heada(index){
        this.isShow=index
      },
      font(x){
        return x*13
      },
      mf(y){
        var w=74.5-y*13
        return w/2
      }
    },
    computed:{
      ...mapState(['home'])
    },
    mounted(){
      this.$store.dispatch('getHome',()=>{
        this.$nextTick(()=>{
          new BScroll(this.$refs.foot, {
            click: true,// 分发点击事件
            scrollX:true,
          })
        })
      })
    },

  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
.wrap
  width 100%
  margin 0px
  padding 0px
  .guide-wrap
    width 100%
    height 86px
    position fixed
    top 55px
    z-index 100
    background-color white
    .guide-header
      height 51px
      width 100%
      box-sizing border-box
      padding 5px
      padding-left 10px
      padding-right 10px
      .header-first
        height 41px
        width 100%
        text-align center
        box-sizing border-box
        background #fff
        padding 8px 0
        .first
          /*position relative*/
          width 82.07px
          height 22px
          line-height 22px
          margin-right 20px
          float left
          span
            color #898989
          a
            text-decoration none
            font-size 14px
            color #333
            position relative
            -webkit-tap-highlight-color rgba(0,0,0,0)
            i
              position: absolute;
              top: 10px;
              right: -11px;
              border-width: 4px;
              font-size: 0;
              line-height: 0;
              border-style: solid solid dotted;
              border-color: #898989 transparent transparent;
        p
          width 219.93px
          height 25px
          margin 0px
          padding 0px
          float left
          position relative
          input
            width 100%
            height 25px
            border 0
            background #e9e9e9
            border-radius 4px
            color #bcbcbc
            text-indent 10px
            font-size 13px
            outline 0
          .eico
            margin 0px
            padding 0px
            width 11px
            height 11px
            position absolute
            right 5px
            top 0
            bottom 0
            margin auto 0
            background-position 0 0
            background url(../images/search.png) no-repeat
            background-size 11px auto
        .cr
          height 25px
          display block
          color #333
          text-decoration none
          float left
          img
            display block
            width 25px
            height 100%
            margin-left 8px
            border 0
            vertical-align  middle
    .foot-wrap
      height 35px
      width 375px
      position relative
      overflow hidden
      ul
        position absolute
        width 525px
        height 35px
        li
          display block
          float left
          width 74.5px
          height 100%
          margin 0px
          padding 0px
          a
            display block
            position relative
            width 100%
            height 100%
            text-align center
            line-height 35px
            font-size 14px
            &.active
              color greenyellow
            i
              position absolute
              bottom 1px
              border 1px
              height 2px
              /*left 22px*/
              background-color  white
              /*width 30px*/
              &.active
                background-color greenyellow

  .content-wrap
    width 100%
    position absolute
    top 141px
    .c-wrap
      width 100%
      .c-first
        width 100%
        height 160px
        position relative
        overflow hidden
        .inner
          width 100%
          height 100%
          img
            width 100%
            height 100%

    .center-wrap
      width 100%
      height 190.18px
      ul
        width 100%
        height 190.13px
        li
          display block
          width 75px
          height 95.59px
          /*background-color red*/
          float left
          a
            width 75px
            height 95.59px
            display block
            img
              display block
              width 75px
              height 95.59px

    .kh
      width 100%
      height 10px
      background: #f3f4f5;
    .xr
      width 100%
      height 120px
      a
        width 100%
        height 120px
        display block
        img
          width 100%
          height 120px
          display block
    .center-day
      width 100%
      height 195.57px
      .center-date
        width 100%
        height 60px
        box-sizing border-box
        padding 10px
        .wld
          width 85.12px
          height 24px
          float left
          img
            display block
            height 24px
            width 85.12px
            margin-left -18px
        .rem
          float left
          margin-left 10px
          font-size 13px
          width 65px
          height 20.5px
        .time
          float left
          margin 0px
          padding 0
          width 82px
          height 35px
          .time-1
            height 23px
            width 23px
            border 1px solid gray
            display block





</style>

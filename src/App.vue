<template>
 <div class="wrap">
   <ele-foot/>
   <router-view/>
 </div>
</template>
<script>
  import axios from 'axios'
  import foot from './components/foot/foot.vue'
  export default{
    mounted(){

    },
    components:{
      'ele-foot':foot,
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
body,html
  margin 0px
  padding 0px
.wrap
  height 100%
  width 375px
</style>

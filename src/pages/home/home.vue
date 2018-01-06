<template>
<div class="ele">
  <ele-header/>
  <ele-content/>
</div>
</template>
<script>
  import content from '../../components/content/content.vue'
  import header from '../../components/header/header.vue'
  export default{
    components:{
      'ele-content':content,
      'ele-header':header
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>

<template>
  <div id="app">
    <loading ref="loading"></loading>
    <top></top>
    <side></side>
    <router-view></router-view>
    <foot></foot>
  </div>
</template>

<script>
  import Loading from '@/components/Loading/Loading'
  import './assets/reset.css'
  import Top from '@/components/Top/Top'
  import Side from '@/components/Side/Side'
  import Foot from '@/components/Foot/Foot'
  export default {
    name: 'app',
    components: {
      loading: Loading,
      top: Top,
      side: Side,
      foot: Foot
    },
    mounted () {
      this.$refs.loading.$refs.loadingPage.classList.remove('load')
    }
  }
</script>

<style lang="scss">
  #app {
    min-width: 1200px;
    font-family: -apple-system, "Helvetica Neue", Helvetica, "Nimbus Sans L", Arial, "Liberation Sans", "PingFang SC", "Hiragino Sans GB", "Source Han Sans CN", "Source Han Sans SC", "Microsoft YaHei", "Wenquanyi Micro Hei", "WenQuanYi Zen Hei", "ST Heiti", SimHei, "WenQuanYi Zen Hei Sharp", sans-serif;
  }
</style>

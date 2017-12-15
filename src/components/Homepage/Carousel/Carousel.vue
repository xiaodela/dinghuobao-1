<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div v-for="slide in slides" class="swiper-slide">
        <a :href="slide.src">
          <img :src="slide.src">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  /* eslint-disable no-new */

  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

  export default {
    name: 'Carousel',
    props: {
      slides: {
        type: Array,
        default: function () {
          return []
        }
      }
    },
    mounted: function () {
      new Swiper('.swiper-container', {
        slidesPerView: 1,
        loop: true,
        speed: 1000,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        }
      })
    }
  }
</script>

<style lang="scss" scoped>
  .swiper-container {
    position: relative;
    width: 100%;
    height: 620px;
    margin-left: auto;
    margin-right: auto;
    > .swiper-wrapper {
      > .swiper-slide {
        text-align: center;
        background: #fff;
        a {
          width: 100%;
          height: 100%;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
</style>

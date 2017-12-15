<template>
  <div class="loadingPage load" ref="loadingPage">
    <div class="loading"></div>
  </div>
</template>

<script>
  export default {
    name: 'Loading'
  }
</script>

<style lang="scss">
  .loadingPage {
    width: 100%;
    height: 100%;
    display: none;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
    background-color: #efefef;
    &.load {
      display: flex;
    }
    .loading {
      width: 200px;
      height: 200px;
      position: relative;
      &::before, &::after {
        content: '';
        width: 0;
        height: 0;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        position: absolute;
        background-color: #000;
        border-radius: 50%;
        animation: loading 1.5s linear infinite;
      }
      &::after {
        animation-delay: 0.75s;
      }
    }
  }

  @keyframes loading {
    0% {
      opacity: 1;
      width: 0;
      height: 0;
    }
    100% {
      opacity: 0;
      width: 50px;
      height: 50px;
    }
  }
</style>

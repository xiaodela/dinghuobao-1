<template>
  <div class="foot">
    <div class="top">
      <div class="top-first">
        <img src="../../assets/foot/phone.png">
        <span>400-8066-081</span>
      </div>
      <div class="top-second">
        <ul class="first"></ul>
        <ul class="second"></ul>
        <ul class="third"></ul>
      </div>
    <div class="bottom">
      <p>软件企业编号：川R-2010-0006 | 软件著作权登记号：2011SR027284 | 蜀ICP备12027494号-5 | 公安机关备案号  51010702000508</p>
      <p>成都阿商信息技术有限公司 版权所有 © 2005-2017  </p>
    </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Foot'
  }
</script>

<style lang="scss">
  .foot {
    width: 100%;
    padding-top: 105px;
    background-color: #3E4147;
    .top {
      .top-first {
        line-height: 45px;
        font-size: 45px;
        text-align: center;
        color: #fff;
        img {
          vertical-align: middle;
          display: inline-block;
          width: 49px;
          height: 49px;
        }
        span {
          vertical-align: middle;
          display: inline-block;
        }
      }
      .top-second {
        .first {}
        .second {}
        .third {}
      }
    }
    .bottom {
      height: 125px;
      padding-top: 40px;
      background-color: #28292F;
      p {
        line-height: 24px;
        font-size: 14px;
        text-align: center;
        color: #999;
      }
    }
  }
</style>

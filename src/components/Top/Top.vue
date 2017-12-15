<template>
  <div class="header" @scroll="handlerScroll" ref="header">
    <div class="left">
      <img class="logo" src="../../assets/logo_trs.png" ref="logo">
      <div class="tabs">
        <div class="tab">
          <router-link class="link" to="/Homepage">首页</router-link>
        </div>
        <div class="tab">
          <router-link class="link" to="/Goods">产品</router-link>
        </div>
        <div class="tab platform">
          <router-link class="link" to="/Platform">平台版</router-link>
        </div>
        <div class="tab">
          <router-link class="link" to="/Price">价格</router-link>
        </div>
        <div class="tab">
          <router-link class="link" to="/Example">案例</router-link>
        </div>
        <div class="tab">
          <router-link class="link" to="/Join">加盟</router-link>
        </div>
        <div class="tab">
          <router-link class="link" to="/Activity">活动</router-link>
        </div>
        <div class="tab">
          <router-link class="link" to="/News">资讯</router-link>
        </div>
      </div>
    </div>
    <div class="right">
      <span class="num">400-8066-081</span>
      <span class="btn taste">立即体验</span>
      <span class="btn open">免费开通</span>
      <span class="btn login">登录</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Top',
    data () {
      return {
        lastScrollY: 0
      }
    },
    methods: {
      handlerScroll () {
        let st = window.scrollY
        if (window.scrollY > 770) {
          if (st < this.lastScrollY) {
            this.$refs.header.style.display = 'flex'
            this.$refs.header.classList.add('active')
            this.$refs.logo.setAttribute('src', require('assets/logo.png'))
          } else {
            this.$refs.header.style.display = 'none'
          }
          this.lastScrollY = st
        } else {
          this.$refs.header.classList.remove('active')
          this.$refs.logo.setAttribute('src', require('assets/logo_trs.png'))
        }
      }
    },
    created () {
      window.addEventListener('scroll', this.handlerScroll)
    }
  }
</script>

<style lang="scss" scoped>
  .header {
    position: fixed;
    width: 100%;
    height: 95px;
    display: flex;
    justify-content: space-between;
    padding: 0 30px;
    background-color: transparent;
    color: #fff;
    z-index: 5;
    &.active {
      color: #000;
      background-color: #fff;
      box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24);
      .left {
        .logo {
          margin: 26px 0 25px 0;
          width: 90px;
          height: 44px;
          background: no-repeat center center;
          background-size: cover;
        }
        .tabs {
          .tab {
            .link {
              font-size: 18px;
              color: #000;
            }
          }
        }
      }
      .right {
        .num {
          color: #d79077;
        }
      }
    }
    .left {
      display: flex;
      align-items: center;

      .logo {
        margin: 26px 0 25px 0;
      }

      .tabs {
        margin: 50px 0 25px 30px;
        display: flex;
        align-items: center;

        .tab {
          width: 60px;
          &.platform {
            margin-right: 20px;
          }
          .link {
            font-size: 18px;
            color: #fff;

            &.active {
              color: #D79077;
            }
          }
        }
      }
    }
    .right {
      margin-bottom: 25px;
      display: flex;
      align-items: flex-end;
      .num {
        margin: 0 10px 0 0;
        font-size: 25px;
        font-weight: bold;
        color: #fff;
        white-space: nowrap;
      }
      .btn {
        margin: 0 15px;
        width: 90px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        font-size: 14px;
        border-radius: 4px;
        &:last-child {
          margin-right: 0;
        }
        &.taste {
          color: #D79077;
          background-color: #fff;
          border: 1px solid #D79077;
          &:hover {
            color: #fff;
            background-color: #D79077;
          }
        }
        &.open {
          color: #fff;
          background-color: #D79077;
          &:hover {
            color: #D79077;
            background-color: #fff;
          }
        }
        &.login {
          color: #D79077;
          background-color: #fff;
          border: 1px solid #D79077;
          &:hover {
            color: #fff;
            background-color: #D79077;
          }
        }
      }
    }
  }
</style>

<template>
  <div class="sides">
    <div class="side" v-for="(side, index) in sides" ref="side">
      <a v-if="index === 3" @click="goTop">
        <img :src="side.src">
        <p>{{ side.text }}</p>
        <div class="side-hover">
          <p>{{ side.description }}</p>
          <div class="triangle"></div>
        </div>
      </a>
      <a v-else href="javascript: void(0)">
        <img :src="side.src">
        <p>{{ side.text }}</p>
        <div class="side-hover">
          <p>{{ side.description }}</p>
          <div class="triangle"></div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Side',
    data () {
      return {
        sides: [
          {src: require('assets/sides/side_service.png'), text: '在线客服', description: '有问题尽管问哦~'},
          {src: require('assets/sides/side_phone.png'), text: '电话咨询', description: '请拨打400-8066-081'},
          {src: require('assets/sides/side_register.png'), text: '快速注册', description: '注册即享新手礼包'},
          {src: require('assets/sides/side_top.png'), text: '回到顶部', description: '飞回顶部~'}
        ]
      }
    },
    methods: {
      goTop () {
        let speed = 10
        let timer = setInterval(() => {
          this.scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
          if (this.scrollTop > 0) {
            this.scrollTop = (this.scrollTop - speed > 0) ? (this.scrollTop - speed) : 0
            speed += 20
            window.scrollTo(0, this.scrollTop)
          } else {
            clearInterval(timer)
          }
        }, 20)
      }
    }
  }
</script>

<style lang="scss">
  .sides {
    position: fixed;
    bottom: 78px;
    right: 10px;
    font-size: 14px;
    z-index: 3;
    .side {
      position: relative;
      margin-bottom: 5px;
      a {
        width: 60px;
        height: 60px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #FF9332;
        cursor: pointer;
        img {
          margin-bottom: 5px;
        }
        p {
          line-height: 16px;
          font-size: 12px;
          font-weight: 400;
          text-align: center;
          color: #fff;
        }
        &:hover {
          background-color: #EA5B24;
          .side-hover {
            display: flex;
          }
        }
        .side-hover {
          position: absolute;
          right: 85px;
          bottom: 0;
          display: none;
          width: 230px;
          height: 60px;
          background: #6E6F78;
          p {
            width: 100%;
            line-height: 68px;
            text-align: center;
            color: #fff;
            word-spacing: 8px;
            letter-spacing: 2px;
          }
          .triangle {
            position: absolute;
            left: 100%;
            top: 20px;
            border: 10px solid transparent;
            border-right: 15px solid transparent;
            border-left: 15px solid #6E6F78;
          }
        }
      }
    }
  }
</style>

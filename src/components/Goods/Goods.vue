<template>
  <div class="goods">
    <div class="bac"></div>
    <section class="internet">
      <div class="wrapper">
        <div class="top">
          <h2 class="title">互联网+渠道批发</h2>
          <h2 class="title">让渠道批发业务电商化、移动化、互联网化</h2>
        </div>
        <div class="middle">
          <div class="left">
            <h3 class="title">订货端</h3>
            <p class="text">订货方通过电脑、手机、微信等进行可视化订货操作，可以实时获知商品信息、订单进度、物流状况等，并能即时获取新品、促销、活动等信息</p>
          </div>
          <div class="center">
            <img src="./logo.png">
            <p class="text">为您打造专属封闭的</p>
            <p class="text">订货平台</p>
          </div>
          <div class="right">
            <h3 class="title">管理端</h3>
            <p class="text">供货方通过管理端建立全渠道在线订货平台，通过电脑、手机、微信进行订单、发货、款项、库存、客户等管理，实现业务高效便捷管理。</p>
          </div>
        </div>
        <a class="bottom">免费试用</a>
      </div>
    </section>
    <section class="mall">
      <h2 class="title">商城式订货体验，方便舒适更易上手</h2>
      <div class="content">
        <div class="left">
          <img :src="imgsrc[i].src">
        </div>
        <div class="right">
          <ol class="msg" ref="msg">
            <li v-for="(item, index) in mallmsg" class="msg-li" :class="{active: !index}" @mouseenter="replace($event)">
              <p class="title">{{ item.title }}</p>
              <p class="text">{{ item.text }}</p>
            </li>
          </ol>
          <div class="taste">免费试用</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'Goods',
    data () {
      return {
        i: 0,
        xxx: require('@/components/Goods/trans1.png'),
        mallmsg: [],
        imgsrc: [
          {src: require('@/components/Goods/trans1.png')},
          {src: require('@/components/Goods/trans2.png')},
          {src: require('@/components/Goods/trans3.png')},
          {src: require('@/components/Goods/trans4.png')}
        ]
      }
    },
    methods: {
      replace (event) {
        this.i = ([].indexOf.call(event.target.parentNode.childNodes, event.target))
        event.target.classList.add('active')
        let a = []
        let p = event.target.parentNode.children
        for (let j = 0; j < p.length; j++) {
          if (p[j] !== event.target) {
            a.push(p[j])
          }
        }
        for (let k = 0; k < a.length; k++) {
          a[k].classList.remove('active')
        }
      }
    },
    created () {
      axios.get('https://www.easy-mock.com/mock/5a3a6ab6eddc762bf5078f51/dhb/dhb')
        .then((response) => {
          this.mallmsg = response.data.data.mallmsg
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
</script>

<style lang="scss">
  .goods {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .bac {
      width: 100%;
      height: 444px;
      background: url("./swiper.jpg") no-repeat center center;
      background-size: cover;
    }
    .internet {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      background-color: #FAFAFA;
      .wrapper {
        width: 1200px;
        padding: 85px 130px 85px 130px;
        text-align: center;
        .top {
          padding-bottom: 43px;
          .title {
            line-height: 45px;
            font-size: 30px;
            font-weight: 500;
            color: #000;
          }
        }
        .middle {
          position: relative;
          width: 940px;
          height: 370px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          .left, .right {
            display: inline-block;
            width: 370px;
            height: 370px;
            padding: 85px 50px;
            border-radius: 50%;
            border: 1px dashed #EA5B24;
            .title {
              margin-bottom: 35px;
              color: #EA5B24;
              font-size: 30px;
              font-weight: 500;
            }
            .text {
              line-height: 26px;
              color: #666;
              font-size: 14px;
              font-weight: 400;
              text-align: left;
            }
          }
          .center {
            position: absolute;
            left: 345px;
            top: 75px;
            display: block;
            width: 250px;
            height: 250px;
            padding: 58px 0;
            border-radius: 50%;
            background: #EA5B24;
            img {
              margin-bottom: 20px;
              width: 120px;
            }
            .text {
              line-height: 24px;
              color: #fff;
              font-size: 14px;
              font-weight: 400;
            }
          }
          .right {
            border: 1px dashed #0092EF;
            .title {
              color: #0092EF;
            }
          }
        }
        .bottom {
          display: inline-block;
          padding: 10px 40px;
          font-size: 16px;
          color: #EA5B24;
          border: 1px solid #EA5B24;
          &:hover {
            color: #fff;
            background-color: #EA5B24;
          }
        }
      }
    }
    .mall {
      width: 100%;
      padding-top: 107px;
      padding-bottom: 98px;
      height: auto;
      background: #fff;
      > .title {
        margin-bottom: 100px;
        line-height: 45px;
        font-size: 30px;
        font-weight: 500;
        text-align: center;
        color: #000;
      }
      .content {
        display: flex;
        flex-direction: row;
        justify-content: center;
        .left {
          max-width: 750px;
          height: 471px;
          img {
            width: 720px;
          }
        }
        .right {
          width: 450px;
          height: 395px;
          margin-left: 30px;
          .msg {
            width: 100%;
            height: auto;
            .msg-li {
              padding-bottom: 19px;
              text-align: left;
              cursor: pointer;
              &.active {
                .title {
                  color: #EA5B24;
                }
                .text {
                  color: #EA5B24;
                }
              }
              .title {
                line-height: 45px;
                font-size: 20px;
                color: #000;
              }
              .text {
                line-height: 24px;
                font-size: 14px;
                color: #666;
              }
            }
          }
          .taste {
            display: inline-block;
            padding: 10px 40px;
            font-size: 16px;
            color: #EA5B24;
            border: 1px solid #EA5B24;
            &:hover {
              color: #fff;
              background-color: #EA5B24;
            }
          }
        }
      }
    }
  }
</style>

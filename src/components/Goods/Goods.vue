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
    <section class="slide">
      <h2 class="title">像电商平台一样展示您的商品</h2>
      <div class="content">
        <transition-group name="slide" class="items" tag="ul">
          <li class="item" v-for="(slide,index) in slides" :key="index">
            <h3 class="title">{{ slide.text }}</h3>
            <p class="text">{{ slide.description }}</p>
            <img :src="slide.src">
          </li>
        </transition-group>
        <img src="./pre.png" class="pre" @click="previous">
        <img src="./next.png" class="next" @click="next">
      </div>
    </section>
    <section class="fix">
      <div class="fix-wrapper">
        <h2 class="title">企业用的，就用成熟的</h2>
        <p class="text">七年沉淀，五百多次实地调研，三千多项功能升级，七十万用户实际应用检验</p>
        <a href="javascript: void(0)" class="link">免费开通，享新手礼包</a>
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
        isShow: true,
        nowIndex: 0,
        xxx: require('@/components/Goods/trans1.png'),
        mallmsg: [],
        imgsrc: [
          {src: require('@/components/Goods/trans1.png')},
          {src: require('@/components/Goods/trans2.png')},
          {src: require('@/components/Goods/trans3.png')},
          {src: require('@/components/Goods/trans4.png')}
        ],
        slides: [
          {
            src: require('@/components/Goods/slide1.png'),
            text: '不同的规格，不同的价格',
            description: '红色、黑色、大码、小码不同规格随意搭配，规格不同价格当然也不同！'
          },
          {
            src: require('@/components/Goods/slide2.png'),
            text: '双单位、多仓库一切如您所需',
            description: '支持大小单位转换，按只按箱均可订货，支持多仓库发货及更高数字精度。'
          },
          {
            src: require('@/components/Goods/slide3.png'),
            text: '展示商品何须频繁更换产品图册',
            description: '瞬间变身大牌商城，快捷简便的批量订货方式，客户更易上手。'
          },
          {
            src: require('@/components/Goods/slide4.png'),
            text: '价格按等级、按订货量或者指定',
            description: '是按客户的等级定价、还是订的越多越优惠，甚至单独指定价格，随您！'
          }
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
      },
      next () {
        const first = this.slides.shift()
        this.slides = this.slides.concat(first)
      },
      previous () {
        const last = this.slides.pop()
        this.slides = [last].concat(this.slides)
      }
    },
    computed: {
      preIndex () {
        if (this.nowIndex === 0) {
          return this.slides.length - 1
        } else {
          return this.nowIndex - 1
        }
      },
      nextIndex () {
        if (this.nowIndex === this.slides.length - 1) {
          return 0
        } else {
          return this.nowIndex + 1
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
    .slide {
      padding-top: 54px;
      width: 100%;
      background: url("./bg123.jpg") no-repeat center;
      background-size: cover;
      > .title {
        margin-bottom: 48px;
        font-size: 30px;
        font-weight: 500;
        text-align: center;
        color: #fff;
      }
      .content {
        position: relative;
        margin: auto;
        width: 1200px;
        .items {
          margin: auto;
          width: 1000px;
          height: 675px;
          display: flex;
          flex-direction: row;
          overflow: hidden;
          .item {
            opacity: 1;
            transform: translateZ(0) scale(1.0, 1.0);
            transition: transform 0.3s ease-in-out;
            &:first-child {
              opacity: 1;
            }
            &:last-child {
              opacity: 0;
            }
            .title {
              margin-bottom: 20px;
              font-size: 20px;
              font-weight: 500;
              text-align: center;
              color: #fff;
            }
            .text {
              font-size: 14px;
              font-weight: 400;
              text-align: center;
              color: #fff;
            }
          }
        }
        .pre {
          position: absolute;
          left: 0;
          bottom: 300px;
        }
        .next {
          position: absolute;
          right: 0;
          bottom: 300px;
        }
      }
    }
    .fix {
      position: relative;
      width: 100%;
      height: 354px;
      background: url("../../assets/fix.jpg") no-repeat top fixed;
      background-size: cover;
      .fix-wrapper {
        padding-top: 105px;
        text-align: center;
        color: #fff;
        .title {
          margin-bottom: 25px;
          font-size: 32px;
          font-weight: 400;
        }
        .text {
          margin-bottom: 35px;
          font-size: 16px;
        }
        .link {
          display: block;
          margin: auto;
          width: 250px;
          height: 45px;
          line-height: 45px;
          color: #fff;
          background: #F58A36;
          border-radius: 5px;
          &:hover {
            background: #EA5B24;
          }
        }
      }
    }
  }
</style>

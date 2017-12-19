<template>
  <div class="homepage">
    <div class="top">
      <carousel :slides="slides"></carousel>
    </div>
    <div class="guides" ref="guide">
      <a :href="guide.src" v-for="guide in guides" class="guide" @scroll="reChild">
        <img :src="guide.src">
        <h3 class="title">{{ guide.text }}</h3>
        <span class="desc">{{ guide.description }}</span>
        <div class="background"></div>
      </a>
    </div>
    <section class="activity">
      <h2 class="sec-title">让渠道批发业务融入互联网，构建专属订货平台</h2>
      <div class="content">
        <ul class="left">
          <li v-for="info in leftmsg" class="infos">
            <h4 class="title">{{ info.title }}</h4>
            <p class="info">{{ info.text }}</p>
            <p class="info">{{ info.description }}</p>
          </li>
        </ul>
        <div class="center-img"></div>
        <ul class="right">
          <li v-for="info in rightmsg" class="infos">
            <h4 class="title">{{ info.title }}</h4>
            <p class="info">{{ info.text }}</p>
            <p class="info">{{ info.description }}</p>
          </li>
        </ul>
      </div>
    </section>
    <section class="advantage">
      <h2 class="sec-title">升级传统渠道批发环节</h2>
      <h2 class="sec-title">让您的生意不再难做</h2>
      <ul class="content">
        <li class="item" v-for="info in sec2msg">
          <img :src="info.src" class="icon">
          <div class="text">
            <h3>{{ info.text }}</h3>
            <p>{{ info.description }}</p>
          </div>
        </li>
      </ul>
    </section>
    <section class="try">
      <h2>订货宝 + 微信企业号</h2>
      <p>强强联合，微信分销、移动管理。海量工具集成，让您的企业站在行业的最前端</p>
      <a href="#">免费试用</a>
    </section>
    <section class="photos">
      <h2 class="title">更先进的工作方式，让企业的各环节全面提升</h2>
      <ul class="photo-list">
        <li class="photo" v-for="photo in photosmsg">
          <img :src="photo.src">
          <div class="text">
            <h3>{{ photo.text }}</h3>
            <p>{{ photo.description }}</p>
          </div>
          <div class="enter">
            <div class="top">
              <h3>{{ photo.toptitle }}</h3>
              <p>{{ photo.toptext }}</p>
            </div>
            <div class="bottom">
              <h3>{{ photo.bottomtitle }}</h3>
              <p>{{ photo.bottomtext }}</p>
            </div>
          </div>
        </li>
      </ul>
    </section>
    <section class="phone">
      <div class="left">
        <h2 class="title">更多丰富的扩展功能</h2>
        <h2 class="title">助您搭建完善的业务管理体系</h2>
        <a href="#" target="_blank" class="link">马上试用</a>
      </div>
      <div class="right"></div>
    </section>
    <section class="goods">
      <h2 class="title">25大行业，700,000用户的智慧之选</h2>
      <div class="content">
        <ul class="first-line">
          <li v-for="first in goods1" class="first" :style="{backgroundImage: 'url(' + first.src + ')'}">
            <h3 class="title">{{ first.text }}</h3>
            <div class="enter">
              <div class="top">
                <img src="../../assets/goods/icon1.png" class="icon1">
                <p>{{ first.description }}</p>
                <img src="../../assets/goods/icon2.png" class="icon2">
              </div>
              <div class="bottom">
                <img :src="first.avatar" class="avatar">
                <div class="text">
                  <h3 class="name">{{ first.name }}</h3>
                  <p class="job">{{ first.job }}</p>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <ul class="second-line">
          <li v-for="second in goods2" class="second">
            <img :src="second.src">
            <h3 class="title">{{ second.text }}</h3>
          </li>
        </ul>
      </div>
    </section>
    <section class="news">
      <h2 class="title">中国主流媒体认可与报道</h2>
      <ul class="items">
        <li class="item" v-for="item in news">
          <a href="javascript: void(0)">
            <h3 class="news-title">{{ item.text }}</h3>
            <p class="content">{{ item.description }}</p>
            <img :src="item.src">
          </a>
        </li>
      </ul>
    </section>
    <section class="platform">
      <div class="wrapper">
        <div class="left">
          <img src="../../assets/platform.png">
        </div>
        <div class="right">
          <h2 class="title">不想只管自己的业务</h2>
          <h2 class="title">想与其他供应商联合打造线上供货平台？</h2>
          <p class="color-orange">订货宝平台版<span>,如您所需</span></p>
          <a href="#" target="_blank" class="link">了解详情</a>
        </div>
      </div>
    </section>
    <section class="partner">
      <h2 class="partner-title">合作伙伴</h2>
      <ul class="lists">
        <li class="list" v-for="partner in partners">
          <img :src="partner.src">
          <h3>{{ partner.title }}</h3>
          <p>{{ partner.p1 }}</p>
          <p>{{ partner.p2 }}</p>
        </li>
      </ul>
    </section>
    <section class="fix">
      <div class="fix-wrapper">
        <h2 class="title">企业用的，就用成熟的</h2>
        <p class="text">七年沉淀，五百多次实地调研，三千多项功能升级，七十万用户实际应用检验</p>
        <a href="javascript: void(0)" class="link">免费开通，享新手礼包</a>
      </div>
    </section>
    <section class="footer">
    </section>
  </div>
</template>

<script>
  import Carousel from '@/components/Homepage/Carousel/Carousel'

  export default {
    name: 'Homepage',
    components: {
      carousel: Carousel
    },
    data () {
      return {
        slides: [
          {src: require('assets/carousel/carousel1.jpg')},
          {src: require('assets/carousel/carousel2.jpg')},
          {src: require('assets/carousel/carousel3.jpg')},
          {src: require('assets/carousel/carousel4.jpg')},
          {src: require('assets/carousel/carousel5.jpg')}
        ],
        guides: [
          {src: require('assets/guides/guide1.jpg'), text: '免费注册', description: '享新手礼包'},
          {src: require('assets/guides/guide2.jpg'), text: '立即体验', description: '实际感受订货宝'},
          {src: require('assets/guides/guide3.jpg'), text: '下载APP', description: '用手机管业务'},
          {src: require('assets/guides/guide4.jpg'), text: '观看视频', description: '快速了解订货宝'},
          {src: require('assets/guides/guide5.jpg'), text: '帮助中心', description: '产品快速上手'}
        ],
        leftmsg: [
          {title: '建平台', text: '专属分销平台', description: '业务全面电商化'},
          {title: '管商品', text: '商品图文并茂', description: '库存实时清晰'},
          {title: '管订单', text: '告别错单漏单', description: '提升订货效率'},
          {title: '管货款', text: '对账便捷', description: '加快企业资金回笼'}
        ],
        rightmsg: [
          {title: '管客户', text: '客户多频互动', description: '分地区、分级别'},
          {title: '管业务员', text: '跑店代下单', description: '业绩提成一目了然'},
          {title: '做营销', text: '丰富的营销策略', description: '享微信移动分销'},
          {title: '更多功能', text: '', description: ''}
        ],
        sec2msg: [
          {
            src: require('assets/icons/icon1.png'),
            text: '促进互联网化转型',
            description: '建专属订货平台，告别传统电话、手写单等订货方式，让客户像网购一样订货，支持电脑、手机APP、微信操作。'
          },
          {
            src: require('assets/icons/icon2.png'),
            text: '提升业务效率',
            description: '客户自主订货，商品图文并茂，价格库存实时同步，政策即时生效，无需咨询与讨价还价，繁琐操作用系统搞定。'
          },
          {
            src: require('assets/icons/icon3.png'),
            text: '增强客户管理',
            description: '将客户进行系统化管理，建立直接沟通渠道。打破传统层层传话的管理方式，更加直接高效，客户更可控！'
          },
          {
            src: require('assets/icons/icon4.png'),
            text: '拓展生意渠道',
            description: '招商拓展到网上、微信上。独有的游客访问模式可让陌生客户了解您，丰富的促销手段让您更易打动他们。'
          },
          {
            src: require('assets/icons/icon5.png'),
            text: '加快资金流转',
            description: '可对接支付宝、微信、银联等在线支付方式，且支持预付、预售模式，更有配套金融服务可由第三方先垫付货款。'
          },
          {
            src: require('assets/icons/icon6.png'),
            text: '辅助经营决策',
            description: '订单、销量、货款…企业经营数据实时产生即时呈现，让您随时了解企业状况，制定针对性经营策略。'
          }
        ],
        photosmsg: [
          {
            src: require('assets/photos/photo1.png'),
            text: '我是企业老板',
            description: '企业状况实时掌控，更高效',
            toptitle: '订货宝模式',
            toptext: '打开手机就可看到商家的所有商品，价格、规格、库存实时详尽，图文并茂更有详细说明。一键下单、付款太方便，打开订单就能知道货到哪了，新品促销第一时间知道！',
            bottomtitle: '传统模式',
            bottomtext: '商家有啥完全不清楚，提交订单几天才告诉我没货了！订一次货反复电话确认我也累。有新品、有活动我完全不知情，隔壁店都卖最新款了，我的产品目录还是去年的！我怎么去竞争？'
          },
          {
            src: require('assets/photos/photo2.png'),
            text: '我是销售主管',
            description: '业务线上处理，促销更即时',
            toptitle: '订货宝模式',
            toptext: '打开手机就可看到商家的所有商品，价格、规格、库存实时详尽，图文并茂更有详细说明。一键下单、付款太方便，打开订单就能知道货到哪了，新品促销第一时间知道！',
            bottomtitle: '传统模式',
            bottomtext: '商家有啥完全不清楚，提交订单几天才告诉我没货了！订一次货反复电话确认我也累。有新品、有活动我完全不知情，隔壁店都卖最新款了，我的产品目录还是去年的！我怎么去竞争？'
          },
          {
            src: require('assets/photos/photo3.png'),
            text: '我是财务主管',
            description: '款项订单对应，一键可对账',
            toptitle: '订货宝模式',
            toptext: '打开手机就可看到商家的所有商品，价格、规格、库存实时详尽，图文并茂更有详细说明。一键下单、付款太方便，打开订单就能知道货到哪了，新品促销第一时间知道！',
            bottomtitle: '传统模式',
            bottomtext: '商家有啥完全不清楚，提交订单几天才告诉我没货了！订一次货反复电话确认我也累。有新品、有活动我完全不知情，隔壁店都卖最新款了，我的产品目录还是去年的！我怎么去竞争？'
          },
          {
            src: require('assets/photos/photo4.png'),
            text: '我是业务人员',
            description: '资料信息手机查，可代下单',
            toptitle: '订货宝模式',
            toptext: '打开手机就可看到商家的所有商品，价格、规格、库存实时详尽，图文并茂更有详细说明。一键下单、付款太方便，打开订单就能知道货到哪了，新品促销第一时间知道！',
            bottomtitle: '传统模式',
            bottomtext: '商家有啥完全不清楚，提交订单几天才告诉我没货了！订一次货反复电话确认我也累。有新品、有活动我完全不知情，隔壁店都卖最新款了，我的产品目录还是去年的！我怎么去竞争？'
          },
          {
            src: require('assets/photos/photo5.png'),
            text: '我是订货客户',
            description: '新品政策实时看，下单方便',
            toptitle: '订货宝模式',
            toptext: '打开手机就可看到商家的所有商品，价格、规格、库存实时详尽，图文并茂更有详细说明。一键下单、付款太方便，打开订单就能知道货到哪了，新品促销第一时间知道！',
            bottomtitle: '传统模式',
            bottomtext: '商家有啥完全不清楚，提交订单几天才告诉我没货了！订一次货反复电话确认我也累。有新品、有活动我完全不知情，隔壁店都卖最新款了，我的产品目录还是去年的！我怎么去竞争？'
          }
        ],
        goods1: [
          {
            src: require('assets/goods/1-1.png'),
            text: '快消品',
            description: '通过订货宝我们真的做到了互联网+了，营销面更广了，企业效率提升十分明显。',
            avatar: require('assets/goods/qinxian.png'),
            name: '覃献',
            job: '总经理'
          },
          {
            src: require('assets/goods/1-2.png'),
            text: '餐饮连锁',
            description: '我们现在连锁店订货这块都在使用订货宝，解决了在订货、货款方面的很多问题。',
            avatar: require('assets/goods/sxf.png'),
            name: '高勇',
            job: 'COO'
          },
          {
            src: require('assets/goods/1-3.png'),
            text: '服装服饰',
            description: '订货宝具有很强的可操作性，操作简单，很容易上手，客户非常快的就能使用。',
            avatar: require('assets/goods/hzhw.png'),
            name: '高峰',
            job: 'CEO'
          },
          {
            src: require('assets/goods/1-4.png'),
            text: '数码电器',
            description: '从最初的疑虑，到初用后的惊喜，再到深入合作后的信赖，我们对订货宝越来越认可。',
            avatar: require('assets/goods/sbyc.png'),
            name: '销售部',
            job: '斯宝亚创'
          }
        ],
        goods2: [
          {src: require('assets/goods/2-1.png'), text: '化妆品'},
          {src: require('assets/goods/2-2.png'), text: '商品百贸'},
          {src: require('assets/goods/2-3.png'), text: '箱包配饰'},
          {src: require('assets/goods/2-4.png'), text: '医疗保健'},
          {src: require('assets/goods/2-5.png'), text: '母婴玩具'},
          {src: require('assets/goods/2-6.png'), text: ''}
        ],
        news: [
          {
            src: require('assets/news/tencent.jpg'),
            text: '从1.5万起家到获千万融资 一个草根的曲线创业路',
            description: '随着互联网的普及、云计算的兴起，以及用户需求的多样化、个性化，传统的订货管理也顺应潮流迈入云时代。蒋韬，一个从小将创立自己的企业作为梦想的人，经过起起落落的十年创业路，现在，他不仅实现了的梦想，他的订...'
          },
          {
            src: require('assets/news/tuobi.jpg'),
            text: '订货宝蒋韬：互联网+快消品，用SaaS切入的发展模式更具优势',
            description: '托比网相关数据显示，进入2016年以来，快消品B2B发展速度惊人，行业内诞生了超过200家以上的B2B平台，中国各地多点开花。在订货宝创始人兼CEO蒋韬看来，目前互联网+快消品平台主要分为以SaaS管...'
          },
          {
            src: require('assets/news/soho.jpg'),
            text: '简单沟通下的复杂SaaS服务：亿万级订货管理市场写生',
            description: '机遇和挑战，要么升级服务要么被“革命”\n' +
            '\n' +
            '　　沟通，一个看似简单的词语却花费了BAT巨头之一的腾讯，十多年的时间去经营构筑。近年来，随着各行各业在互联网+的机遇下，百花齐放。传统行业和传统商路正在...'
          }
        ],
        partners: [
          {src: require('assets/partner/wx.png'), title: '微信企业号', p1: '微信企业号战略合作', p2: '企业号市场首批入驻产品'},
          {src: require('assets/partner/ali.jpg'), title: '阿里云', p1: '阿里云金牌合作伙伴', p2: '云计算联盟核心合作伙伴'},
          {src: require('assets/partner/lt.png'), title: '中国联通', p1: '联通专版战略合作', p2: ''},
          {src: require('assets/partner/yzf.png'), title: '易极付', p1: '在线支付与供应链金融服', p2: '务战略合作伙伴'}
        ]
      }
    },
    methods: {
      reChild () {
        let offsetTop = this.$refs.guide.offsetTop
        let height = this.$refs.guide.clientHeight
        let totalHeight = offsetTop + height
        return totalHeight
      }
    },
    created () {
      window.addEventListener('scroll', this.reChild)
    }
  }
</script>

<style lang="scss">
  .homepage {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .top {
      width: 100%;
    }
    .guides {
      width: 100%;
      height: 150px;
      display: flex;
      .guide {
        position: relative;
        flex: 1;
        img {
          width: 100%;
          height: 100%;
        }
        .title {
          position: absolute;
          bottom: 55px;
          right: 30px;
          color: #fff;
          font-size: 30px;
          font-weight: 500;
        }
        .desc {
          position: absolute;
          bottom: 20px;
          right: 30px;
          color: #fff;
          font-size: 14px;
          font-weight: 400;
        }
        .background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          &:hover {
            background-color: transparent;
          }
        }
      }
    }
    .activity {
      width: 100%;
      background-color: #FAFAFA;
      .sec-title {
        padding-top: 90px;
        text-align: center;
        font-weight: 500;
        font-size: 30px;
        color: #666;
      }
      .content {
        padding: 80px 0 60px 0;
        display: flex;
        justify-content: center;
        .left, .right {
          width: 200px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          .infos {
            width: 100%;
            margin-bottom: 35px;
            .title {
              margin-bottom: 20px;
              font-size: 20px;
              font-weight: 500;
              color: #EA5B24;
            }
            .info {
              line-height: 20px;
              font-size: 14px;
              color: #666;
            }
          }
        }
        .center-img {
          margin-top: 15px;
          width: 800px;
          height: 395px;
          background: url("../../assets/section1.png") no-repeat center center;
        }
        .right {
          text-align: right;
        }
      }
    }
    .advantage {
      width: 1200px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-bottom: 90px;
      .sec-title {
        text-align: center;
        font-weight: 500;
        font-size: 30px;
        color: #666;
        &:first-child {
          padding-top: 115px;
        }
      }
      .content {
        padding-top: 95px;
        display: flex;
        flex-wrap: wrap;
        .item {
          margin-bottom: 60px;
          width: 400px;
          display: flex;
          .icon {
            width: 39px;
            height: 39px;
            margin-right: 20px;
          }
          .text {
            h3 {
              margin-bottom: 10px;
              line-height: 39px;
              font-weight: 500;
              font-size: 25px;
              color: #666;
            }
            p {
              width: 220px;
              line-height: 20px;
              font-size: 14px;
              color: #999;
            }
          }
        }
      }
    }
    .try {
      padding-top: 80px;
      width: 100%;
      height: 305px;
      display: flex;
      flex-direction: column;
      align-items: center;
      background: url("../../assets/try.png") no-repeat center;
      h2 {
        color: #fff;
        font-size: 30px;
        font-weight: 500;
      }
      p {
        margin-top: 20px;
        color: #fff;
        font-size: 14px;
        font-weight: 500;
      }
      a {
        margin-top: 50px;
        line-height: 50px;
        width: 200px;
        height: 50px;
        text-align: center;
        font-size: 14px;
        color: #fff;
        background: #008CEE;
        box-shadow: 2px 2px 2px #666;
        border-radius: 8px;
        &:hover {
          color: #000;
          background: #fff;
        }
      }
    }
    .photos {
      padding: 115px 0 105px 0;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: #242634;
      .title {
        font-size: 30px;
        font-weight: 500;
        color: #fff;
      }
      .photo-list {
        margin-top: 105px;
        width: 1200px;
        display: flex;
        justify-content: center;
        .photo {
          position: relative;
          width: 20%;
          height: 746px;
          overflow: hidden;
          &:hover {
            .text {
              display: none;
            }
          }
          &:hover .enter {
            left: 0;
            z-index: 1;
          }
          img {
            width: 100%;
            height: 100%;
          }
          .text {
            position: absolute;
            bottom: 65px;
            padding: 0 30px;
            h3 {
              line-height: 30px;
              font-size: 20px;
              font-weight: 500;
              color: white;
            }
            p {
              margin-top: 15px;
              line-height: 26px;
              font-size: 14px;
              font-weight: 500;
              color: #fff;
            }
          }
          .enter {
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            width: 100%;
            left: -100%;
            height: 746px;
            padding: 30px 0;
            background-color: rgba(0, 104, 238, 0.6);
            transition: all .3s;
            z-index: -1;
          }
          .top, .bottom {
            height: 343px;
            padding: 50px 30px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.8);
            word-break: break-all;
            h3 {
              line-height: 30px;
              font-size: 20px;
              font-weight: 500;
              color: #fff;
            }
            p {
              margin-top: 40px;
              line-height: 26px;
              font-size: 14px;
              font-weight: 500;
              color: #fff;
            }
          }
          .bottom {
            padding: 50px 30px;
            border-bottom: none;
          }
        }
      }
    }
    .phone {
      padding-top: 50px;
      width: 1200px;
      display: flex;
      justify-content: space-between;
      .left {
        .title {
          line-height: 45px;
          font-size: 30px;
          font-weight: 500;
          color: #666;
          &:first-child {
            padding-top: 115px;
          }
        }
        .link {
          display: block;
          margin-top: 100px;
          width: 200px;
          height: 50px;
          line-height: 50px;
          font-size: 14px;
          text-align: center;
          background: #EA5B24;
          color: #fff;
          &:hover {
            background: #F78268;
          }
        }
      }
      .right {
        width: 704px;
        height: 517px;
        background: url("../../assets/phone.png") no-repeat center;
        background-size: contain;
      }
    }
    .goods {
      width: 100%;
      height: 817px;
      background: url("../../assets/goods/background.png") no-repeat center center;
      background-size: cover;
      padding: 115px 0 80px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      .title {
        color: #fff;
        font-size: 30px;
        font-weight: 500;
      }
      .content {
        width: 80%;
        min-width: 1200px;
        margin: 95px auto auto auto;
        .first-line, .second-line {
          display: flex;
          flex-direction: row;
          .first {
            position: relative;
            width: 25%;
            background: no-repeat center center;
            background-size: cover;
            height: 250px;
            overflow: hidden;
            cursor: pointer;
            &:hover {
              .title {
                display: none;
              }
              .enter {
                left: 0;
              }
            }
            .title {
              position: absolute;
              bottom: 40px;
              left: 50px;
              line-height: 30px;
              font-size: 20px;
              font-weight: 500;
              color: white;
            }
            .enter {
              position: absolute;
              padding: 50px 30px;
              left: -100%;
              top: 0;
              width: 100%;
              height: 250px;
              background: url("../../assets/goods/fisrt-bac.png") no-repeat center center;
              background-size: cover;
              overflow: hidden;
              transition: all .3s;
              .top {
                width: 100%;
                .icon1 {
                  position: absolute;
                  top: 30px;
                  left: 8%;
                }
                p {
                  padding: 0 20px;
                  width: 100%;
                  height: 70px;
                  line-height: 24px;
                  font-size: 14px;
                  color: #fff;
                }
                .icon2 {
                  position: absolute;
                  right: 8%;
                  top: 115px;
                }
              }
              .bottom {
                margin-top: 40px;
                height: 48px;
                display: flex;
                flex-direction: row;
                .avatar {
                  width: 108px;
                  height: 48px;
                }
                .text {
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                  height: 48px;
                  padding-left: 30px;
                  margin-left: 30px;
                  border-left: 1px solid #fff;
                  .name {
                    font-size: 20px;
                    font-weight: 500;
                    color: #fff;
                  }
                  .job {
                    margin-top: 10px;
                    font-size: 14px;
                    font-weight: 400;
                    color: #fff;
                  }
                }
              }
            }
          }
        }
        .second-line {
          .second {
            position: relative;
            width: 16.66%;
            background: no-repeat center center;
            background-size: cover;
            height: 250px;
            overflow: hidden;
            transition: transform 0.25s ease;;
            cursor: pointer;
            &:hover img {
              transform: scale(1.2);
            }
            img {
              width: 100%;
              height: 100%;
              transition: transform .8s ease;
            }
            .title {
              position: absolute;
              bottom: 40px;
              left: 50px;
              line-height: 30px;
              font-size: 20px;
              font-weight: 500;
              color: white;
            }
          }
        }
      }
    }
    .news {
      width: 100%;
      height: 812px;
      padding: 0 280px;
      line-height: 1.1;
      font-size: 14px;
      background: url("../../assets/news/background.png") no-repeat center center;
      background-size: cover;
      .title {
        padding: 130px 0 80px 0;
        font-size: 30px;
        font-weight: 500;
        text-align: center;
        color: #666;
      }
      .items {
        display: flex;
        justify-content: center;
        .item {
          margin-right: 28px;
          min-width: 381px;
          height: 425px;
          position: relative;
          background: #fff;
          border: 1px solid #DFDFDF;
          overflow: hidden;
          transition: all .8s;
          &:hover {
            transform: scale(1.1);
          }
          &:last-child {
            margin-right: 0;
          }
          a {
            position: relative;
            display: block;
            padding: 50px;
            width: 100%;
            height: 100%;
            .news-title {
              margin-bottom: 45px;
              max-height: 43px;
              line-height: 24px;
              color: #666;
              font-size: 16px;
              font-weight: normal;
              overflow: hidden;
            }
            .content {
              line-height: 24px;
              max-height: 120px;
              color: #999;
              font-size: 14px;
              overflow: hidden;
            }
            img {
              position: absolute;
              left: 0;
              bottom: 0;
              width: 100%;
            }
          }
        }
      }
    }
    .platform {
      width: 100%;
      display: flex;
      justify-content: center;
      background: #fff;
      .wrapper {
        min-width: 1200px;
        padding: 85px 0;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        .left {
          width: 50%;
          img {
            width: 600px;
          }
        }
        .right {
          margin: 90px 0 0 90px;
          .title {
            margin: 15px auto;
            font-size: 20px;
            font-weight: normal;
            color: #666;
          }
          .color-orange {
            margin: 20px 0 15px 0;
            font-size: 30px;
            color: #ea5b24;
            span {
              color: #666;
            }
          }
          .link {
            display: inline-block;
            margin-top: 30px;
            padding: 0 40px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            font-size: 18px;
            letter-spacing: 3px;
            color: #fff;
            background-color: #ea5b24;
            &:hover {
              background-color: #F78268;
            }
          }
        }
      }
    }
    .partner {
      width: 100%;
      height: 680px;
      background-color: #FAFAFA;
      .partner-title {
        padding: 110px 0 85px 0;
        font-size: 30px;
        font-weight: 500;
        text-align: center;
        color: #666;
      }
      .lists {
        margin: 0 auto;
        width: 1200px;
        height: 680px;
        display: flex;
        justify-content: center;
        .list {
          margin-right: 113px;
          display: flex;
          flex-direction: column;
          align-items: center;
          &:last-child {
            margin-right: 0;
          }
          img {
            width: 215px;
            height: 215px;
          }
          h3 {
            margin: 45px 0 20px 0;
            font-size: 20px;
            font-weight: 500;
            color: #666;
          }
          p {
            line-height: 24px;
            font-size: 14px;
            font-weight: 400;
            color: #999;
          }
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

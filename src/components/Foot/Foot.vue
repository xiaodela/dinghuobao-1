<template>
  <div class="foot">
    <div class="top">
      <div class="top-first">
        <img src="../../assets/foot/phone.png">
        <span>400-8066-081</span>
      </div>
      <div class="top-second">
        <ul class="first">
          <li class="first-li" v-for="msg in firstLi">
            <span class="title">{{ msg.title }}</span>
            <a href="javascript: void(0)" class="link">{{ msg.p1 }}</a>
            <a href="javascript: void(0)" class="link">{{ msg.p2 }}</a>
            <a href="javascript: void(0)" class="link">{{ msg.p3 }}</a>
            <a href="javascript: void(0)" class="link">{{ msg.p4 }}</a>
            <a href="javascript: void(0)" class="link">{{ msg.p5 }}</a>
          </li>
        </ul>
        <ul class="second">
          <div class="second-top">
            <span>联系我们</span>
            <a href="javascript: void(0)"><img src="../../assets/foot/web_icon.png" alt="微博"></a>
            <a href="javascript: void(0)"><img src="../../assets/foot/qq_icon.png" alt="QQ"></a>
          </div>
          <ul class="contact">
            <li class="contact-li"><img src="../../assets/foot/message.png"><span>dhb@rsung.com</span></li>
            <li class="contact-li"><img src="../../assets/foot/phone_icon.png"><span>400-8066-081(咨询)</span></li>
            <li class="contact-li"><img src="../../assets/foot/phone_icon.png"><span>400-6311-887(售后)</span></li>
            <li class="contact-li"><img src="../../assets/foot/phone_icon.png"><span>400-6311-682(渠道)</span></li>
            <li class="contact-li"><img src="../../assets/foot/location_icon.png"><span>成都市高新区天府五街200号
	                                    菁蓉国际广场6栋6层</span></li>
          </ul>
        </ul>
        <ul class="third">
          <li class="third-li"><img src="../../assets/foot/app_code.png"><p>扫码下载APP</p></li>
          <li class="third-li"><img src="../../assets/foot/app_weixin.png"><p>关注微信公众号</p></li>
        </ul>
      </div>
      <div class="bottom">
        <p>软件企业编号：川R-2010-0006 | 软件著作权登记号：2011SR027284 | 蜀ICP备12027494号-5 | 公安机关备案号 51010702000508</p>
        <p>成都阿商信息技术有限公司 版权所有 © 2005-2017 </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Foot',
    data () {
      return {
        firstLi: [
          {title: '关于我们', p1: '企业介绍', p2: '加入我们', p3: '服务条款', p4: '隐私保护', p5: ''},
          {title: '产品介绍', p1: '产品功能', p2: '产品价格', p3: '客户案例', p4: '用户服务', p5: '产品下载'},
          {title: '行业资讯', p1: '企业动态', p2: '媒体报道', p3: '客户报道', p4: '系统更新', p5: '行业发展'},
          {title: '帮助中心', p1: '视频教程', p2: '常见问题', p3: '在线培训', p4: '功能模块', p5: '使用手册'}
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .foot {
    width: 100%;
    padding-top: 105px;
    background-color: #3E4147;
    .top {
      .top-first {
        line-height: 46px;
        font-size: 46px;
        font-weight: 400;
        text-align: center;
        color: #fff;
        img {
          vertical-align: middle;
          display: inline-block;
          width: 50px;
          height: 50px;
        }
        span {
          vertical-align: middle;
          display: inline-block;
        }
      }
      .top-second {
        margin-top: 60px;
        display: flex;
        justify-content: center;
        .first {
          width: 540px;
          display: flex;
          flex-direction: row;
          .first-li {
            margin-right: 70px;
            width: 65px;
            display: flex;
            flex-direction: column;
            font-size: 16px;
            color: #eee;
            .title {
              margin-bottom: 30px;
            }
            .link {
              line-height: 26px;
              font-size: 14px;
              color: #999;
              &:hover {
                color: #EBEBEC;
              }
            }
          }
        }
        .second {
          .second-top {
            margin-bottom: 30px;
            span {
              vertical-align: top;
              font-size: 16px;
              color: #eee;
            }
            a {
              img {
                vertical-align: middle;
                margin: 0 5px 0 15px;
              }
              &:last-child img {
                margin: 0;
              }
            }
          }
          .contact {
            margin-bottom: 30px;
            .contact-li {
              img {
                vertical-align: middle;
                display: inline-block;
                margin-right: 15px;
              }
              span {
                vertical-align: middle;
                display: inline-block;
                width: 180px;
                line-height: 26px;
                color: #999;
                font-size: 14px;
              }
              &:last-child {
                img {
                  vertical-align: top;
                  margin-top: 5px;
                }
                span {
                  vertical-align: top;
                }
              }
            }
          }
        }
        .third {
          margin-left: 70px;
          margin-top: 19px;
          display: flex;
          flex-direction: row;
          .third-li {
            margin-right: 60px;
            img {
              width: 130px;
              height: 130px;
              border: 1px solid #999;
            }
            p {
              margin-top: 10px;
              font-size: 14px;
              text-align: center;
              color: #999;
            }
          }
        }
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

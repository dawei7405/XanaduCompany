<template>
  <div class="wrap-block">
    <div class="service-item-1">
          <div class="service-item-1-title">
            <p>关于并济</p>
          </div>
          <div class="service-item-1-centent">
            <p class="service-info-subtitle"> 四川并济科技有限公司成立于2020年07月，注册资本为 10000
              万元人民币，系四川弘智远大控股子公司及内江市东兴区招商引资企业，已被认定为国家高新技术企业、四川省专精特新中小企业、内江市企业技术中心等，公司致力于人工智能算力中心建设及服务，多类型业务应用兼顾。</p>
            <p class="service-info-subtitle">
              四川并济科技有限公司自2020年起专注于AI算力服务，拥有国内最大的商业化A100私有云算力服务体系，并涵盖A100、A800、H800多品类的算力服务，为下游客户提供高效智能算力服务。2023年11月21日，并济科技现有股东与NVIDIA
              Elite Partner(英伟达精英级合作伙伴）上海信弘智能科技有限公司签署增资扩股协议，获得过亿元战略投资。</p>
            <p class="service-info-subtitle">
              公司已通过相关行业的权威认证，专注产品的自主研发，已获多项专利证书，资质卓越。公司拥有过渡数据中心和智能超算中心，建设规模宏大，服务能力强，公司还会继续不断扩大自身知识产权储备，在人工智能、区块链、云计算、大数据领域内不断更新换代，致力于通过技术创新、数据赋能和应用场景的深度融合，为政府、企业、市民以及地方产业等提供高效、节约、品质的综合服务平台。</p>
          </div>
    </div>
    <div class=" service-item-2">
      <div class="service-content-mg">
      </div>

      <div class="service-item-2-title">
        企业优势
      </div>
      <div class="service-item-2-centent">
        并济科技项目产品优势和技术优势显著，并济算力中心算力设备使用的算力显卡，能够广泛应用于大规模训练场景。对标未调优产品，并济定制技术方案，算力性能较高。除此之外，内江政府大力支持科技研发，给予了优惠的用电和采购补贴政策。目前，并济业务已经打通上下游供应链，对标常规数据中心建设。经过建设完善，并济科技能够快速满足多类客户需求，已形成稳定客户来源。同时，公司与众多知名企业和高校建立了长期战略合作伙伴关系，取得了良好的口碑和业绩。
      </div>
      <div class="service-content-mgs">
        <div class="div-itemf">
          <div class="div-item" v-for="(item, index) in divBgList" :key="index">
            <div class="div-item-tip"><p>{{ item.tip }}</p></div>
            <div class="div-item-desc"><p>{{ item.desc }}</p></div>
          </div>
        </div>
      </div>

      <div class="service-item-2-title">
        荣誉资质
      </div>
      <div class="service-content-rongyu">
        <el-carousel trigger="click" type="card" :interval="2500" arrow="never" indicator-position="none">
          <el-carousel-item v-for="(item,index) in ryzsList" :key="index">
            <div class="item-div">
              <img :src="item.path" class="item-div-img "/>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup name="">
  import {onBeforeMount, onMounted, ref} from 'vue'


  // 这里演示一下如何实现复杂类型的定义，使用ts接口继承
  interface BaseItem {
    path: string;
  }

  interface ServiceItem extends BaseItem {
    description: string;
  }

  interface ImgItem extends BaseItem {
    name: string;
  }

  interface CaseItem extends BaseItem {
    desc: string;
  }

  type InfoData = {
    ideaTitle: string;
    ideaSubTitle: string;
    ideaDesc: string;
  }

  type divItem = {
    path: string;
    desc: string;
    tip: string;
  }

  type ryzsItem = {
    path: string;
    desc: string;

  }


  const divBgList = ref<divItem[]>([])

  const ryzsList = ref<ryzsItem[]>([])

  const serviceList = ref<ServiceItem[]>([])
  const serviceIdeaInfo = ref<InfoData>({
    ideaTitle: '服务理念',
    ideaSubTitle: 'SERVICE IDEA',
    ideaDesc: '通过提供灵活、高性能的计算资源，解放了创新力，推动了科技的不断前进。它为用户提供了低成本、高效的解决方案，无论是企业还是个人，都能够受益于这种共享计算资源的模式。随着算力服务平台的发展，可以预见科技创新将迎来更广阔的发展空间，为未来的科技进步和社会发展贡献更多的动力。'
  })
  const serviceIdeaImg = ref<ImgItem[]>([])
  const caseList = ref<CaseItem[]>([])
  const percentage = ref('50')
  onBeforeMount(() => {
    ryzsList.value = [
      {
        path: require('../assets/img/aboutus/ry/gjjkjxzxqy.jpg'),
        desc: '国家级科技型中小企业证书'
      },
      {
        path: require('../assets/img/aboutus/ry/gxjsqytp.jpg'),
        desc: '高新技术企业证书'
      }, {
        path: require('../assets/img/aboutus/ry/njsqyjszxtp.jpg'),
        desc: '内江市企业技术中心证书'
      }, {
        path: require('../assets/img/aboutus/ry/zjtxtp.jpg'),
        desc: '四川省专精特新中小企业证书'
      }
    ]
    divBgList.value = [
      {
        path: require('../assets/img/aboutus/bg1.jpg'),
        tip: '产品优势',
        desc: "并济算力中心的核心竞争力源于其卓越的算力设备，其中NVIDIA 显卡占据主导地位。这些显卡中绝大多数为针对大规模训练场景而量身打造的 A100 类算力显卡，使其在市场竞争中独具优势，尽显卓越性能。"
      }, {
        path: require('../assets/img/aboutus/bg2.jpg'),
        tip: "技术优势",
        desc: "并济业务突破地打通上下游供应链，对标常规数据中心建设，体系完善。在建设成本上，公司可节省资金约20%以上。对标未调优产品，并济科技定制技术方案，算力性能可提升40%-60%。"
      }, {
        path: require('../assets/img/aboutus/bg3.jpg'),
        tip: "渠道优势",
        desc: "先发经验优势：秉持着开拓创新的精神，公司携手航天云网、云丛科技、电子科技大学等客户，合作进行算力服务，积累了大量的大模型智能运算经验及案例。\n" +
          "深度定制调优：在相关运算应用过程中，公司汇聚了国内AIC(Nvidia显卡授权生产厂商)首席工程师团队技术能力，在技术、资源、软件等领域进行深度调优开发。"
      },
      {
        path: require('../assets/img/aboutus/bg4.jpg'),
        tip: "客户优势",
        desc: "在科技业务中，并济凭借过硬的专业技术，能够快速满足多类客户需求，定制专业的解决方案，构建了稳定的客户基础。"
      }
    ]
    serviceList.value = [
      {
        description: '算力服务',
        path: require('../assets/img/index/bigData.webp')
      },
      {
        description: '云服务器',
        path: require('../assets/img/index/media.webp')
      },
      {
        description: '互联网',
        path: require('../assets/img/index/internet.webp')
      },
      {
        description: '云计算',
        path: require('../assets/img/index/cloud.webp')
      }
    ]
    serviceIdeaImg.value = [
      {
        name: 'lefImg',
        path: require('../assets/img/index/service1.png')
      },
      {
        name: 'rightImg',
        path: require('../assets/img/index/service2.png')
      }
    ]
    caseList.value = [
      {
        desc: '私家智能定制APP',
        path: require('../assets/img/index/app1.jpg')
      },
      {
        desc: '公司业绩统计管理系统',
        path: require('../assets/img/index/system1.jpg')
      },
      {
        desc: '私家智能定制APP',
        path: require('../assets/img/index/app1.jpg')
      },
      {
        desc: '公司业绩统计管理系统',
        path: require('../assets/img/index/system2.jpg')
      }
    ]
  })
</script>
<style lang="less" scoped>
  .wrap-block {
    position: relative;
    padding-top: 154px;

    .content-block {
      position: relative;
      overflow: hidden;
    }
  }

  .service-item-1 {
    max-width: 1440px;
    //height: 400px;
    margin: 0 auto;
    text-align: center;
    overflow-x: hidden;

    .service-item-1-title {
      font-weight: 700;
      font-size: 32px;
      position: relative;
      margin: 10px 0px;

    }
    .service-item-1-centent{
      border-radius: 40px;
      background-color: #d2efe1;
      padding: 20px 0px;
      font-size: 16px;
      line-height: 1.5;
      margin-top: 30px;
      margin-left: 100px;
      margin-right: 100px;
      text-align: left !important;
      text-indent: 2em;
      padding-left: 2em;


      .service-info-subtitle {
        font-size: 16px;
        line-height: 1.5;
        margin-top: 1px;
        text-align: left !important;
        text-indent: 2em;
        padding-left: 2em
      }
    }

  }

  .service-item-2 {
    width: 100%;
    padding-bottom: 20px;
    padding-top: 20px;
    text-align: center;

    .service-content-mg {
      height: 316px;
      width: 68%;
      background: url('../assets/img/aboutus/bgsnj.jpg') no-repeat;
      margin: 0 auto;
      border-radius: 10px;
    }

    .service-item-2-title {
      font-weight: 700;
      font-size: 32px;
      position: relative;
      margin: 20px 0px;
      //padding: 30px 0px;
    }

    .service-item-2-centent {
      border-radius: 40px;
      background-color: #d2efe1;
      padding: 20px 4px;
      font-size: 16px;
      line-height: 1.5;
      margin-top: 30px;
      margin-left: 100px;
      margin-right: 100px;
      text-align: left !important;
      text-indent: 2em;
      padding-left: 2em
    }


    .service-content-mgs {
      width: 92%;
      margin: 25px auto;

      .div-itemf {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;

        .div-item {
          margin-bottom: 2%;
          width: 22%;
          padding: 10px;
          height: 300px;
          display: flex;
          justify-content: flex-start;
          overflow: hidden;
          background: #b1c6e7;
          border-radius: 15px;
          flex-direction: column;

          .div-item-tip {
            font-size: 20px;
            text-align: center;
            border-radius: 50px;
            border: 1px solid #f1c1c1;

          }

          .div-item-desc {
            font-size: 16px;
            text-align: left;
          }
        }
      }
    }

    .div-item:hover {
      transform: scale(1.1);

    }


    .service-content-rongyu {
      padding-top: 50px;
      background-color: #e75252;
      border-radius: 15px;
      height: 400px;
      margin-left: 250px;
      margin-right: 250px;

      .item-div {
        border-radius: 5px;
        .item-div-img {
          padding-bottom: 10px;
          width: 75%;
          height: auto;
          padding-left: 50px;
          padding-right: 50px;
        }
      }
    }

    .service-item-3 {

    }

  }

  .service-case {
    background-color: #FFFFFF;
    width: 100%;

    .service-case {
      max-width: 1440px;
      //height: 700px;
      overflow: hidden;
      margin: 0 auto;
      text-align: center;
      padding-top: 50px;

      .case-title {
        font-weight: 700;
        font-size: 32px;
        position: relative;
        bottom: 2px;
        //padding-top: 60px;
      }

      .case-subtitle {
        font-size: 16px;
        line-height: 1.5;
        color: #646a73;
        margin-top: 10px;
      }

      .case-list {
        display: flex;
        justify-content: space-evenly;
      }

      .el-card {
        width: 247px;
        height: 217px;
        margin-top: 40px;
      }

      .el-progress {
        margin-top: 10px;
      }

      /deep/ .el-progress-bar__outer {
        height: 2px !important;
      }

      .case-desc {
        margin-top: 30px;
        margin-bottom: 60px;
        font-weight: 500;
        font-size: 14px;
      }
    }
  }
</style>

<template>
  <div class="wrap-block">
    <div class="content-blok service-block">
      <div class="servie-block">
        <div class="block-line"></div>
        <p class="service-info-title">关于并济</p>
        <p class="service-info-subtitle"> 四川并济科技有限公司成立于2020年07月，注册资本为 10000 万元人民币，系四川弘智远大控股子公司及内江市东兴区招商引资企业，已被认定为国家高新技术企业、四川省专精特新中小企业、内江市企业技术中心等，公司致力于人工智能算力中心建设及服务，多类型业务应用兼顾。</p>
         <p class="service-info-subtitle"> 四川并济科技有限公司自2020年起专注于AI算力服务，拥有国内最大的商业化A100私有云算力服务体系，并涵盖A100、A800、H800多品类的算力服务，为下游客户提供高效智能算力服务。2023年11月21日，并济科技现有股东与NVIDIA Elite Partner(英伟达精英级合作伙伴）上海信弘智能科技有限公司签署增资扩股协议，获得过亿元战略投资。</p>
        <p class="service-info-subtitle"> 公司已通过相关行业的权威认证，专注产品的自主研发，已获多项专利证书，资质卓越。公司拥有过渡数据中心和智能超算中心，建设规模宏大，服务能力强，公司还会继续不断扩大自身知识产权储备，在人工智能、区块链、云计算、大数据领域内不断更新换代，致力于通过技术创新、数据赋能和应用场景的深度融合，为政府、企业、市民以及地方产业等提供高效、节约、品质的综合服务平台。</p>
        <div class="service-list">
          <div class="service-title" v-for="(item, index) in serviceList" :key="index">
            <div class="is-hover-shadow">
              <div class="service-title-shadow ">
                <img :src="item.path" alt="">
              </div>
            </div>
            <p class="service-name">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="content-blok service-idea">
      <div class="service-idea">
        <div class="idea-left">
          <img :src="serviceIdeaImg[0].path" :alt="serviceIdeaImg[0].name">
        </div>
        <div class="idea-right">
<!--          <div class="block-line"></div>-->
          <p class="idea-title">{{ serviceIdeaInfo.ideaTitle }}</p>
          <p class="idea-subtitle">{{ serviceIdeaInfo.ideaSubTitle }}</p>
          <img :src="serviceIdeaImg[1].path" :alt="serviceIdeaImg[1].name">
          <p class="idea-desc">{{ serviceIdeaInfo.ideaDesc }}</p>
          <router-link to="/news">
            <el-button type="primary" round>了解更多</el-button>
          </router-link>
        </div>
      </div>
    </div>
    <div class="content-blok service-case">
      <div class="service-case">
        <div class="block-line"></div>
        <p class="case-title">我们的服务</p>
        <p class="case-subtitle">我们已定制多套解决方案，助您轻松跨入“互联网+”时代</p>
        <div class="case-list">
          <div class="case-info" v-for="(item, index) in caseList" :key="index">
            <el-card :body-style="{ padding: '0px' }" shadow="hover">
              <img :src="item.path" :alt="item.desc">
            </el-card>
            <el-progress :percentage="50" :show-text="false"></el-progress>
            <p class="case-desc">{{ item.desc }}</p>
          </div>
        </div>
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

  // 其实不用这么复杂，只是演示而已
  type InfoData = {
    ideaTitle: string;
    ideaSubTitle: string;
    ideaDesc: string;
  }
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
    padding-top: 54px;

    .content-block {
      position: relative;
      overflow: hidden;
    }
  }

  .service-block {
    max-width: 1440px;
    height: 500px;
    margin: 0 auto;
    text-align: center;
    overflow-x: hidden;

    .block-line {
      margin: 0 auto 12px;
      width: 24px;
      height: 4px;
      background-color: #3370ff;
      border-radius: 100px;
    }

    .service-info-title {
      font-weight: 700;
      font-size: 32px;
      position: relative;
      bottom: 2px;
      //padding-top: 60px;
    }

    .service-info-subtitle {
      font-size: 16px;
      line-height: 1.5;
      color: #646a73;
      margin-top: 30px;
      margin-left: 100px;
      margin-right: 100px;
      text-align: left !important;
      text-indent: 2em;
      padding-left:2em
    }

    .service-list {
      display: flex;
      justify-content: space-evenly;
      text-align: center;
      margin: 70px auto 0 auto;
    }

    .service-title-shadow {
      width: 111px;
      height: 111px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: .3s;
    }

    .service-title-shadow:hover {
      width: 111px;
      height: 111px;
      border-radius: 50%;
      transform: scale(1.05) translateY(-1px);
      box-shadow: 0 6px 20px 0 rgba(0, 0, 0, .15);
    }

    .service-name {
      margin-top: 30px;
      font-weight: 600;
      font-size: 20px;
    }
  }

  .service-idea {
    background-color: #F5F5F5;
    width: 100%;

    .service-idea {
      max-width: 1440px;
      overflow: hidden;
      display: flex;
    }

    .idea-left img {
      width: 600px;
    }

    .idea-right {
      height: 500px;
      width: calc(100% - 600px);
      margin-left: 100px;
      padding-top: 50px;

      .block-line {
        margin: 0 0 12px 0;
        width: 24px;
        height: 4px;
        background-color: #3370ff;
        border-radius: 100px;
      }

      .idea-title {
        font-weight: 700;
        font-size: 32px;
        position: relative;
        bottom: 2px;
        //padding-top: 60px;
      }

      .idea-subtitle {
        font-size: 16px;
        line-height: 1.5;
        color: #646a73;
        margin-top: 10px;
      }

      img {
        width: 500px;
        height: 200px;
        object-fit: cover;
        margin-top: 40px;
        margin-bottom: 30px;
        padding: 10px;
        border: #d3dce6 2px dashed;
      }

      .idea-desc {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
        overflow: hidden;
        max-height: 88px;
        max-width: 550px;
        font-size: 14px;
        line-height: 30px;
        color: #646a73;
      }

      .el-button {
        margin-top: 40px;
      }
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

      .block-line {
        margin: 0 auto 12px;
        width: 24px;
        height: 4px;
        background-color: #3370ff;
        border-radius: 100px;
      }

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

<template>
  <div class="wrap-block">
    <div class="service-item-1">
          <div class="service-item-1-title">
            <p>关于并济</p>
          </div>
          <div class="service-item-1-centent">
            <p class="service-info-subtitle">
              并济科技是一家将人工智能、云计算及大数据技术应用于数字经济领域的智算服务提供商，作为成渝地区首家以算力为核心业务的民企集团，始终锚定“一流数字经济生态营造者”的发展愿景和“做优做强数字经济领域”的使命责任，公司响应国家“东数西算”工程布局战略规划,先后在内江、成都、邢台、乌兰察布、哈密等地布局现代一体化高性能智算中心，打造新质生产力高地，辐射国家八大核心枢纽节点，依托自有的高性能运算服务器与数字基础设施，已搭建并运营不低于8000P的人工智能算力集群及公共服务平台，规划建设算力规模不低于20000P，多个在建项目入选省重点、国家重点储备项目。
            </p>
            <p class="service-info-subtitle">
              公司高度重视可持续发展，积极引入前沿的先进技术、理念与高层次人才，将底层硬件资源与人工智能计算框架及高效的调度算法相结合，联合国家级重点实验室、运营商、政府平台公司等共同探索一体化算力体系建设、异构算力网调度、算电协同融合、生成式智能创新应用等人工智能前沿科技，已储备不低于100件自主知识产权，获评国家高新技术企业、四川省专精特新企业等多项荣誉
            </p>
            <p class="service-info-subtitle">
              未来，公司将坚定不移地围绕“算力、算法、数据”三大要素，进一步构建多元异构异地算力调度和运营服务能力，支撑本地人工智能企业发展，培育自主可控算力产业生态，构建智能算力产业生态链。为高校研究院及各领域企业等提供包括Paas层在内的全套人工智能算力服务和算法解决方案，定制”AI算力+传统行业”一站式智能化改造数字化转型服务。
            </p>
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
          <div class="div-item" v-for="(item, index) in divYsList" :key="index">
            <div class="div-item-tip"><p>{{ item.tip }}</p></div>
            <div class="div-item-desc"><p>{{ item.desc }}</p></div>
          </div>
        </div>
      </div>


      <div class="service-item-2-title">
        核心能力
      </div>
<!--      <div class="service-item-2-centent">-->
<!--        公司自 2020 年起专注于 AI 算力服务，拥有国内最大的商业化私有云算力服务体系，并涵盖 A 系列、H 系列多品类的算力服务，为下游客户提供高效智能算力。-->
<!--      </div>-->
      <div class="service-content-hxnl">
        <div class="service-content-hxnl-up">
          <div class="service-content-hxnl-up-left">
            <p class="service-content-hxnl-title">天府云——四川省能投天府云数据产业基地</p>
            <img :src="require('../assets/img/aboutus/jd/tianfuyun.png')" class="service-content-hxnl-img"/>
            <div class="service-content-hxnl-ms" >
              <p>IT 功率：8300KW（一期）<br>
              机柜数：216 个 <br>
              算力规模：不低于3200P（FP16）  <br>
              建设地址：简阳市天府云数智产业园     <br>
              投资金额：5-30 亿元             <br>
              建设进度：一期项目已经改造完成，正在逐步上架服务器，已投产    <br>
              建设内容：智算中心整体按照 A 级机房标准设计改造，单机柜负荷 42KW，能源效率指（PUE）控制在 1.20 以内，一期规划投运 240 台 8 卡高性能服务器及配套网络、存储、安全设备
              </p>
            </div>
          </div>
          <div class="service-content-hxnl-up-right">
            <p class="service-content-hxnl-title">成渝中心——川南智能运算中心</p>
            <img :src="require('../assets/img/aboutus/jd/chuannan.png')" class="service-content-hxnl-img"/>
            <div class="service-content-hxnl-ms" >
              <p> IT 功率：20000KW  <br>
              机柜数：300+个  <br>
              算力规模：不低于4000P（FP16）  <br>
              建设地址：内江市东兴区科创路  <br>
              投资金额：3-16 亿元  <br>
              建设进度：11月底完成130+个算力基础设施建设  <br>
              建设内容：占地 7.36 亩，建筑面积约 14000 ㎡，新建机房 8 个，根据目前电力规划接入可部署高性能运算服务器约 2000 台</p>
            </div>
          </div>
        </div>
        <div class="service-content-hxnl-down">
          <div class="service-content-hxnl-down-left">
            <p class="service-content-hxnl-title">成渝中心——川南过渡数据备份中心</p>
            <img :src="require('../assets/img/aboutus/jd/chuannanguodu.png')" class="service-content-hxnl-img"/>
            <div class="service-content-hxnl-ms" >
              <p>IT 功率：2500KW  <br>
              机柜数：67个  <br>
              算力规模：1800P（FP16）  <br>
              建设地址：内江市东兴区西南循环经济产业园  <br>
              投资金额：1.8-5 亿元  <br>
              建设进度：建成并投运  <br>
              建设内容：改造 1100 ㎡老旧厂房，包含模块化机房 2 个，标准机房 1 个，其中已在运行高性能运算服务器、人工智能云计算服务器超过 500 台</p>
            </div>
          </div>
          <div class="service-content-hxnl-down-right">
            <p class="service-content-hxnl-title">天府节点——简阳智能过渡数据中心</p>
            <img :src="require('../assets/img/aboutus/jd/jianyang.png')" class="service-content-hxnl-img"/>
            <div class="service-content-hxnl-ms" >
              <p>IT 功率：1200KW  <br>
              机柜数：40 个  <br>
              算力规模：1000P（FP16）  <br>
              建设地址：简阳市大华国际  <br>
              投资金额：3 亿元  <br>
              建设进度：已建成投运  <br>
              建设内容：“人工智能+财税金融”科技服务大数据平台，建设智能绿色数据中心，提供数据保护、算法培训、实验推理、性能优化等功能场景需求</p>
            </div>
          </div>
        </div>
      </div>


      <div class="service-item-2-title">
        技术创新
      </div>

      <div class="service-content-jscx">
        <div class="service-content-jscx-up">
          <div class="service-content-jscx-up-left">
            <div class="service-content-jscx-imgs">
              <img :src="require('../assets/img/aboutus/js/js1.png')" class="service-content-jscx-img"/>
            </div>
            <div class="service-content-jscx-ms" >
             <p class="service-content-jscx-ms-title" >微模块搭建</p>
             <p class="service-content-jscx-ms-content">安装集成采用模块化供电、模块化机柜和模块化机房。响应国家节能减排要求，推动绿色节能、提高能源利用效率，促进大科学装置整体可持续发展。目前单机柜负荷可根据业务需求建设 20KW-43KW，根据客户不同型号服务器及组网线路，量身定制。</p>
            </div>
          </div>
          <div class="service-content-jscx-up-right">
            <div class="service-content-jscx-imgs">
              <img :src="require('../assets/img/aboutus//js/js2.png')" class="service-content-jscx-img"/>
            </div>
            <div class="service-content-jscx-ms" >
              <p class="service-content-jscx-ms-title" >制冷系统</p>
              <p class="service-content-jscx-ms-content">机房整体采用风冷或水冷散热大模型的技术路线，建设室外冷却塔，并铺设相关水冷管道。机房湿度控制系统由精密空调末端控制，对机房湿度进行调节，精密空调自带监测功能，可检测自身工作状态。后续将进一步采用液冷散热大模型，PUE 值低至 1.15以下。</p>
            </div>
          </div>
        </div>
        <div class="service-content-jscx-up">
          <div class="service-content-jscx-up-left">
            <div class="service-content-jscx-imgs">
              <img :src="require('../assets/img/aboutus/js/js3.png')" class="service-content-jscx-img"/>
            </div>
            <div class="service-content-jscx-ms" >
              <p class="service-content-jscx-ms-title" >节能软件</p>
              <p class="service-content-jscx-ms-content">集团公司总计 130 余项自主知识产权，所有项目均采用智能网关管理系统，通过虚拟化技术和自动化技术，实现硬件资源和软件资源统一管理、统一分配、统一部署、统一监控和统一备份回收资源。</p>
            </div>
          </div>
          <div class="service-content-jscx-up-right">
            <div class="service-content-jscx-imgs">
              <img :src="require('../assets/img/aboutus/js/js4.png')" class="service-content-jscx-img"/>
            </div>
            <div class="service-content-jscx-ms" >
              <p class="service-content-jscx-ms-title" >合作优势</p>
              <p class="service-content-jscx-ms-content">公司与国内知名高校成立联合实验室，将获得国内人工智能领域的全面技术支持，它将成为人工智能领域前沿研究和创新标杆，旨在通过协同研究、培训和实践应用，推动人工智能领域的创新和卓越，以市场需求导向大力突破关键数字核心技术。</p>
            </div>
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
  const divYsList = ref<divItem[]>([])

  const ryzsList = ref<ryzsItem[]>([])

  const serviceList = ref<ServiceItem[]>([])
  const serviceIdeaInfo = ref<InfoData>({
    ideaTitle: '服务理念',
    ideaSubTitle: 'SERVICE IDEA',
    ideaDesc: '通过提供灵活、高性能的计算资源，解放了创新力，推动了科技的不断前进。它为用户提供了低成本、高效的解决方案，无论是企业还是个人，都能够受益于这种共享计算资源的模式。随着算力服务平台的发展，可以预见科技创新将迎来更广阔的发展空间，为未来的科技进步和社会发展贡献更多的动力。'
  })
  const serviceIdeaImg = ref<ImgItem[]>([])
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
    divYsList.value= [
      {
        path: '',
        tip: '设备优势',
        desc: "并济算力中心的核心竞争力源于公司卓越的算力设备，其中NVIDIA高性能算力卡系列产品占主导地位。这使得公司在服务品类和算力性能上具备双重市场优势。此外，通过与运营商建立的战略合作伙伴关系，我们能够为各领域客户提供所需的大模型带宽支持，进一步巩固了公司在高性能计算领域的领先地位。"
      },
      {
        path: '',
        tip: '技术优势',
        desc: "并济凭借其完整的NVIDIA先进算力供应链，在建设成本上为客户节约高达20%的资金。公司在大规模数据训练领域积累了丰富经验，能够显著提升未调优大模型的算力性能40%-60%。此外，通过创新的跨代算力异构集群构建能力，我们有效提高了综合算力效能，并优化了能耗，帮助用户实现超过20%的节能效果。"
      },
      {
        path: '',
        tip: '资源优势',
        desc: "在技术资源上，公司汇聚了国内 AIC(Nvidia 显卡授权生产厂商)首席工程师团队技术能力，在技术、资源、软件等领域进行深度调优开发。在客户资源上，公司凭借过硬的专业技术、快速响应需求服务、以及整体解决方案实战能力，构建了稳定客户基础。"
      },
    ]
    divBgList.value = [
      {
        path: '',
        tip: '微模块搭建',
        desc: "安装集成采用模块化供电、模块化机柜和模块化机房。响应国家节能减排要求，推动绿色节能、提高能源利用效率，促进大科学装置整体可持续发展。目前单机柜负荷可根据业务需求建设 20KW-43KW，根据客户不同型号服务器及组网线路，量身定制。"
      }, {
        path: '',
        tip: "制冷系统",
        desc: "机房整体采用风冷或水冷散热大模型的技术路线，建设室外冷却塔，并铺设相关水冷管道。机房湿度控制系统由精密空调末端控制，对机房湿度进行调节，精密空调自带监测功能，可检测自身工作状态。后续将进一步采用液冷散热大模型，PUE 值低至 1.15 以下。"
      }, {
        path: '',
        tip: "节能软件",
        desc: "集团公司总计 130 余项自主知识产权，所有项目均采用智能网关管理系统，通过虚拟化技术和自动化技术，实现硬件资源和软件资源统一管理、统一分配、统一部署、统一监控和统一备份回收资源。"
      }, {
        path: '',
        tip: "合作优势",
        desc: "公司与国内知名高校成立联合实验室，将获得国内人工智能领域的全面技术支持，它将成为人工智能领域前沿研究和创新标杆，旨在通过协同研究、培训和实践应用，推动人工智能领域的创新和卓越，以市场需求导向大力突破关键数字核心技术。"
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
      background-color: #e4eefc;
      padding: 20px 0px;
      font-size: 16px;
      line-height: 1.5;
      margin-top: 30px;
      margin-left: 50px;
      margin-right: 50px;
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
      margin: 50px 0px;
      //padding: 30px 0px;
    }

    .service-item-2-centent {
      border-radius: 40px;
      background-color: #e4eefc;
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

    .service-content-hxnl{
      //background-color: #e4eefc;
      width: 85%;
      margin: 25px auto;
      height: 1200px;
      //border: 1px solid red;

      .service-content-hxnl-up{
        margin: 40px  auto ;
        width: 100%;
        height: 500px;
        //border: 2px solid green;
        display: flex;

        .service-content-hxnl-up-left{
          margin: 40px 40px;
          background-color:  #e4eefc;
          width: 50%;
          height: 500px;
          border: 1px solid #6fe0e7;
          border-radius: 14px;

        }
        .service-content-hxnl-up-right{
          margin: 40px 40px;
          background-color:  #e4eefc;
          width: 50%;
          height: 500px;
          border: 1px solid #6fe0e7;
          border-radius: 14px;
        }
      }
      .service-content-hxnl-down{
        width: 100%;
        height: 500px;
        //border: 2px solid green;
        display: flex;
        margin: 80px  auto ;
        .service-content-hxnl-down-left{
          margin: 40px 40px;
          background-color:  #e4eefc;
          width: 50%;
          height: 500px;
          border: 1px solid #6fe0e7;
          border-radius: 14px;
        }
        .service-content-hxnl-down-right{
          margin: 40px 40px;
          background-color:  #e4eefc;
          width: 50%;
          height: 500px;
          border: 1px solid #6fe0e7;
          border-radius: 14px;
        }
      }
      .service-content-hxnl-title{
        //background-color: #b2ecd4;
        font-size: 20px;
        text-align: center;
        //border-radius: 50px;
        //border: 1px solid #6fe0e7;
      }

      .service-content-hxnl-img{
        width: 35%;
        height: 35%;
        padding-right: 0px;
        border-radius: 50%; /* 将div变成圆形 */
        overflow: hidden; /* 隐藏超出部分 */
      }
      .service-content-hxnl-ms{
        //background-color: #a5dde0;
        text-align: left;
        margin-left: 20px;
        margin-right: 20px;
        border-radius:  4px;
      }
    }



    .service-content-jscx{
      //background-color: #e4eefc;
      width: 92%;
      margin: 2px auto;
      height: 900px;
      //border: 1px solid red;
      .service-content-jscx-up{
        margin: 20px  auto ;
        width: 100%;
        height: 400px;
        //border: 2px solid green;
        display: flex;
        .service-content-jscx-up-left{
          margin: 40px 40px;
          background-color:  #e4eefc;
          width: 50%;
          height: 400px;
          border: 1px solid #6fe0e7;
          border-radius: 14px;
          display: flex;
          .service-content-jscx-imgs{
            margin: 30px 10px ;
            width: 50%;  /* 设置你的图片宽度 */
            height: auto; /* 设置你的图片高度 */
            border-radius: 50%; /* 将div变成圆形 */
            overflow: hidden; /* 隐藏超出部分 */
            display: flex;
            align-items: center;
            justify-content: center;
            .service-content-jscx-img{
              width: 100%;
              height: 100%;
              padding-right: 0px;
            }
          }
          .service-content-jscx-ms{
            width: 50%;
            height: 100%;
            .service-content-jscx-ms-title{
              margin-top:50px ;
              font-size: 21px;
              border-radius: 50px;
              border: 1px solid #6fe0e7;
            }
            .service-content-jscx-ms-content{
              text-align: left;
              margin: 30px 20px 30px 5px
            }
          }
        }
        .service-content-jscx-up-right{
          margin: 40px 40px;
          background-color:  #e4eefc;
          width: 50%;
          height: 400px;
          border: 1px solid #6fe0e7;
          border-radius: 14px;
          display: flex;
          .service-content-jscx-imgs{
            margin: 30px 10px ;
            width: 50%;  /* 设置你的图片宽度 */
            height: auto; /* 设置你的图片高度 */
            border-radius: 50%; /* 将div变成圆形 */
            overflow: hidden; /* 隐藏超出部分 */
            display: flex;
            align-items: center;
            justify-content: center;
            .service-content-jscx-img{
              width: 100%;
              height: 100%;
              padding-right: 0px;
            }
          }
          .service-content-jscx-ms{
            width: 50%;
            height: 100%;
            .service-content-jscx-ms-title{
              margin-top:50px ;
              font-size: 21px;
              border-radius: 50px;
              border: 1px solid #6fe0e7;
            }
            .service-content-jscx-ms-content{
              text-align: left;
              margin: 30px 20px 30px 5px
            }
          }
        }
      }
      .service-content-jscx-down{
        width: 100%;
        height: 400px;
        //border: 2px solid green;
        display: flex;
        .service-content-jscx-down-left{
          background-color: #e4eefc;
          width: 50%;
          height: 400px;
          border: 1px solid #6fe0e7;
          border-radius: 14px;
        }
        .service-content-jscx-down-right{
          background-color: #e4eefc;
          width: 50%;
          height: 400px;
          border: 1px solid #6fe0e7;
          border-radius: 14px;
        }
      }
      .service-content-jscx-title{
        //background-color: #b2ecd4;
        font-size: 20px;
        text-align: center;
        border-radius: 50px;
        border: 1px solid #6fe0e7;
      }


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
          background: #e4eefc;
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

      :deep .el-progress-bar__outer {
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

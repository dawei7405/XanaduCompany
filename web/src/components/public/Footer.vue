<template>
  <div class="footer_container" :style="footerHeight + 'px'">
    <div class="footer_content">
      <div class="footer_logo footer-content-column">
        <div class="logo-container">
          <img :src="logo_url" alt="">
        </div>
        <h2>四川并济科技有限公司</h2>
        <h2>地址：四川省内江市东兴区川南电商中心A座</h2>
        <h2>邮编: 641000</h2>
        <h2>传真: 0832-5350555</h2>
      </div>

      <div class="focus_us footer-content-column">
        <div class="media">
          <div :class="item.name" v-for="(item, index) in focus_icon" :key="index">
            <el-popover placement="top" trigger="hover">
              <template #reference>
                <div class="qr_popover">
                  <img :src="item.qr" alt="">
                  <h2>{{ item.info }}</h2>
                </div>
              </template>
              <img :src="item.path" :alt="item.name">
            </el-popover>
          </div>
        </div>
        <div class="contact_us footer-content-column">
          <el-button type="text" @click="dialog = true">联系我们</el-button>
        </div>
      </div>


        <el-drawer class="el-drawer"
                   style="text-align: center"
                   title="联系我们"
                   :show-close="false"
                   v-model="dialog"
                   direction="rtl"
                   custom-class="footer-drawer"
                   ref="drawer">

          <div class="message-drawer__content">
            <el-form :model="form" :rules="ruleform" ref="formRef">
              <el-form-item label="反馈信息" :label-width="formLabelWidth" prop="desc">
                <el-input type="textarea" maxlength="500" show-word-limit="true" placeholder="请填写反馈信息"
                          rows="5" v-model="form.desc"></el-input>
              </el-form-item>
              <el-form-item label="您的姓名" :label-width="formLabelWidth" prop="username">
                <el-input v-model="form.username" maxlength="100" placeholder="请填写您的姓名"></el-input>
              </el-form-item>
              <el-form-item label="您的手机号" :label-width="formLabelWidth" prop="phone">
                <el-input v-model="form.phone" maxlength="20" placeholder="请填写您的手机号"></el-input>
              </el-form-item>
              <el-form-item label="您的邮箱" :label-width="formLabelWidth" prop="email">
                <el-input v-model="form.email" maxlength="100" placeholder="请填写您的邮箱"></el-input>
              </el-form-item>
            </el-form>
            <div class="footer-drawer-button">
              <el-button @click="cancelForm">取 消</el-button>
              <el-button
                type="primary"
                @click="conmitForm"
                :loading="loading"
              >{{ loading ? '提交中 ...' : '确 定' }}
              </el-button
              >
            </div>
          </div>
        </el-drawer>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import {onMounted, ref, reactive} from 'vue'
  import {ElMessageBox, ElMessage} from 'element-plus';
  import {submitMessage} from '@/apis/public/footer'
  import {getJobListApi} from "@/apis/job";

  const validatePhone = (rule, value, callback) => {
    const reg = /^1[3-9]\d{9}$/;
    if (!value) {
      return callback(ElMessage.error('手机号码不能为空！'));
    } else if (!reg.test(value)) {
      return callback(ElMessage.error('请输入正确的手机号码！'));
    } else {
      callback();
    }
  };
  const ruleform =
    {
      desc: [{required: true, message: "请填写留言信息", trigger: 'blur'}],
      username: [{required: true, message: "请填写您的姓名", trigger: 'blur'}],
      phone: [{required: true, message: "请填写您的手机号", trigger: 'blur', validator: validatePhone}],
      email: [{required: true, message: "请填写您的邮箱", trigger: ['blur', 'change'], type: 'email'}],
    };


  const form = reactive({
    desc: '',
    phone: '',
    username: '',
    email: '',
  });

  const formRef = ref(null);
  const timer = ref(null);
  const dialog = ref(false);
  const loading = ref(false);
  const formLabelWidth = ref("100px");

  const conmitForm = (done) => {
    if (loading.value) {
      return;
    }
    formRef.value.validate((valid) => {
      if (valid) {
        ElMessageBox
          .confirm('确定要提交反馈信息吗？')
          .then(async (_) => {
            loading.value = true;
            const {data: res} = await submitMessage({form});
            if (res.status !== 200) {
              dialog.value = false;
              loading.value = false;
              ElMessage.success("反馈信息提交失败，请刷新后重试！")
            } else {
              dialog.value = false;
              loading.value = false;
              ElMessage.success("反馈信息提交成功！")
            }

          })
          .catch((_) => {
          });
      } else {
        return false;
      }
    });


  };
  const cancelForm = () => {
    loading.value = false;
    dialog.value = false;
  };


  type ConcatItem = {
    name: string;
    email: string;
  }

  type FocusItem = {
    name: string;
    path: NodeRequire;
    qr: NodeRequire;
    info: string;
  }

  const footerHeight = ref('')
  const curWidth = ref('')
  const logo_url = ref<any>()
  // logo_url.value = require('../../assets/img/index/logoColor.png')
  logo_url.value = require('../../assets/img/index/logo.png')
  const contact_way = ref<ConcatItem[]>([])
  const focus_icon = ref<FocusItem[]>([])

  onMounted(() => {
      contact_way.value =
        [
          {
            name: '媒体问询',
            email: 'master@scmerge.com'
          },
          {
            name: '招聘相关',
            email: 'master@scmerge.com'
          },
          {
            name: '商务合作',
            email: 'master@scmerge.com'
          },
          {
            name: '广告相关',
            email: 'master@scmerge.com'

          }]
      focus_icon.value =
        [
          // {
          //   name: 'weibo',
          //   path: require('../../assets/img/focus/weibo.png'),
          //   qr: require('../../assets/img/focus/qr_weibo.png'),
          //   info: '关注官方微博'
          // },
          {
            name: 'weixin',
            path: require('../../assets/img/focus/qr_weixin.png'),
            qr: require('../../assets/img/focus/qr_weixin.png'),
            // info: '关注官方微信公众号'
            info: '实时动态与招聘信息，扫码关注我们'
          },

          // {
          //   name: 'bilibili',
          //   path: require('../../assets/img/focus/bilibili.png'),
          //   qr: require('../../assets/img/focus/qr_bilibili.png'),
          //   info: '关注官方 bilibili 号'
          // }
        ]
    }
  )
</script>
<style lang="less" scoped>
  * {
    margin: 0;
    padding: 0;
  }

  h2 {
    font-size: 100%;
    font-weight: 400;
    font-variant: normal;
  }

  .footer_container {
    width: 100%;
    background: #1f2329;
    padding-bottom: 60px;
    background-color: #8EC5FC;
    background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);

  }

  .footer_content {
    max-width: 1440px;
    color: #fff;
    margin: 0 auto;
    padding: 69px 0 0;
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    h2 {
      font-size: 14px;
      line-height: 22px;
      margin: 4px 0;
      color: #7b7e81;
    }


    .about_us {
      max-width: 33%;
    }

    .contact_us {
      text-align: center;
    }

    .focus_us {
      text-align: center;
      padding-left: 10px;
      //max-width: 32%;
      width: 50%;
      .media {
        margin-top: 18px;

      }
      h2 {
        text-align: center;
        font-size: 14px;
        font-weight: normal;
        margin-bottom: 4px;
      }
    }

    .footer_logo {
      margin-left: 96px;
      height: 55px;
      text-align: left;
      //max-width: 382px;
      min-width: 350px;
      width: 50%;

      h2 {
        font-size: 14px;
        font-weight: normal;
        margin-bottom: 4px;
      }

      .logo-container {
        display: flex;
        margin-bottom: 9px;

        img {
          height: 50px;
        }

        .logo-text {
          margin-left: 15px;
          position: relative;
          bottom: -6px;
        }

        .text1 {
          font-size: 21px;
          font-weight: bold;
          margin: 0;
        }

        .text2 {
          font-size: 12px;
          margin: 0;
        }
      }
    }
  }

  @media only screen and (max-width: 991px) {
    .footer_content {
      flex-direction: column;

      .footer-content-column {
        text-align: center;
        margin: 0 auto 0;

        h2 {
          text-align: center;
        }

        padding-left: 0;
      }

      .focus_us div:last-of-type > span {
        margin-right: 0;
      }

      .media {
        justify-content: center;
      }

      .logo-container {
        justify-content: center;
        text-align: left;
      }
    }
  }

  .qr_popover {
    //  width: 130px;
    //height: 130px;
    text-align: center;

    img {
      width: 80px;
      height: 80px;
      margin-bottom: 10px;
    }

    //margin-left: 30px;
  }
  /deep/.footer-drawer {
    text-align: center !important;
    height: 90% !important;
    top: 20px !important;
    bottom: 0 !important;
    background-color: #ccdbf3 !important;
    border-radius: 15px;
    margin-right: 10px;
  }
  /deep/.el-form-item {
    margin-bottom: 20px!important;
  }
  /deep/.el-button{
    padding: 8px 15px !important;
  }

  .footer-drawer-button {
    padding: 8px 15px;
    margin-top: 80px;
    text-align: center;
  }

</style>

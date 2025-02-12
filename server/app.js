const Koa = require('koa')
const https = require('https');
const fs=require('fs');
const KStatic = require('koa-static') // 静态资源中间件
const Logger = require('koa-logger') // 日志中间件
const path = require('path')
const moment = require('moment') // 时间格式化插件
const consola = require('consola') //格式化打印插件
// const bodyParser = require('koa-bodyparser') // post请求中间件
const cors = require('koa2-cors')
const koa_jwt = require('koa-jwt')
const koaBody = require('koa-body')
// const { historyApiFallback } = require('koa2-connect-history-api-fallback')
const authorization=require('./middleware/authorization')
const getUploadFileExt = require('./utils/getUploadFileExt')
const getUploadFileName = require('./utils/getUploadFileName')
const checkDirExist = require('./utils/checkDirExist')
const getUploadDirName = require('./utils/getUploadDirName')

const qiniuConfig =require('./config/qiniu_my');

// 路由
const routers = require('./routers/index')
const {isValidImage} = require("./utils/utils");
const {uploadFile} = require("./utils/manageImageWithQiniu");

// 后端服务端口
const staticPath = './static'

// 实例对象
const app = new Koa()
// app.use(historyApiFallback({
//   index: '/index.html',
//   whiteList: ['/api']
// }))
const logger = new Logger(str => {
  console.log(moment().format('YYYY-MM-DD HH:MM:SS') + str)
})
app.use(cors())
// cors({
//   origin: function (ctx) { //设置允许来自指定域名请求
//     if (ctx.url === '/test') {
//       return '*' // 允许来自所有域名请求
//     }
//     return 'http://localhost:9528' //只允许http://localhost:8080这个域名的请求
//   },
//   maxAge: 5, //指定本次预检请求的有效期，单位为秒。
//   credentials: true, //是否允许发送Cookie
//   allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], //设置所允许的HTTP请求方法
//   allowHeaders: ['Content-Type', 'Authorization', 'Accept'], //设置服务器支持的所有头信息字段
//   exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'] //设置获取其他自定义字段
// })

// 中间件挂载
// app.use(bodyParser())
app.use(logger)
app.use(KStatic(path.join(__dirname, staticPath)))


// app.use(test())
// 文件上传
app.use(koaBody({
  multipart: true, // 支持文件上传
  // encoding: 'gzip',
  formidable: {
    uploadDir: path.join(__dirname, 'static/upload/'), // 设置文件上传目录
    keepExtensions: true,    // 保持文件的后缀
    maxFieldsSize: 2 * 1024 * 1024, // 文件上传大小
    onFileBegin: async (name, file) => { // 文件上传前的设置
      // console.log(`name: ${name}`);
      // console.log(file);
      const ext = getUploadFileExt(file.name)
      // console.log(file)
      // 最终要保存到的文件夹目录
      const dirName = getUploadDirName()
      const dir = path.join(__dirname, `static/upload/${dirName}`)
      // console.log(dir)
      // 检查文件夹是否存在如果不存在则新建文件夹
      checkDirExist(dir)
      // 获取文件名称
      const fileName = getUploadFileName(ext);
        // 重新覆盖 file.path 属性
      file.path = `${dir}/${fileName}`
      app.context.uploadpath = app.context.uploadpath ? app.context.uploadpath : {}
      app.context.uploadpath[name] = `${dirName}/${fileName}`
      // console.log(dirName)
    },
    onError: (err) => {
      console.log(err)
    },
  }
}))
app.use(koa_jwt({
  secret: 'Aerowang'
}).unless({
  path: [
    /^\/api\/v1\/web/,
    /^\/api\/v1\/admin\/login/,
    /^\/api\/v1\/admin\/register/,
    /^\/static\/upload/
  ] //除了这个地址，其他的URL都需要验证
}))
// 验证
app.use(authorization())
// 路由加载
app.use(routers.routes()).use(routers.allowedMethods())
app.on('error', err => {
  /*
  你的处理
   */
  console.log(err)
})
// 端口
app.listen(8888, () => {
  consola.success(`Server running at Port:8888 ----http`)
})

// 确保替换以下路径为你的证书和私钥文件的实际路径
const privateKey = fs.readFileSync('config/ssl/bj.honasoft.com.key', 'utf8');
const certificate = fs.readFileSync('config/ssl/bj.honasoft.com_bundle.pem', 'utf8');
const options  = { key: privateKey, cert: certificate };
const httpsServer = https.createServer(options , app.callback());
httpsServer.listen(8890, () => {
  consola.success(`Server running at Port:8890 ----https`)
});


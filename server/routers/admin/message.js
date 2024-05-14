/**
 * @Description:
 * @author Aerowang
 * @date 2021/5/29
 */
const Router = require('koa-router')
const router = new Router()
const messageContrl = require('../../controllers/admin/messageController')
const routers = router
  .get('/messageList', messageContrl.getMessageList)
  .post('/dealMessage', messageContrl.dealMessage)

module.exports = routers

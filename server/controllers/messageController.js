const MessageService = require('../services/messageService')
module.exports = {
  // 提交留言
  submitMessage: async (ctx) => {
    const ms = ctx.request.body.form
    if (ms) {
      const message = {
        phone: ms.phone,
        username: ms.username,
        email: ms.email,
        desc: ms.desc,
      }
      const result = await MessageService.submitMessage(message)
      ctx.body = {
        status: 200,
        msg: '留言成功',
        data: result
      }
    }
  },


}

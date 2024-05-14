const MessageService = require('../../services/admin/messageService')
module.exports = {
    //查询反馈信息
    getMessageList: async ctx => {
        const {
            count,
            rows
        } = await MessageService.getMessageList()
        if (count > 0) {
            const messageList = []
            for (let i = 0; i < rows.length; i++) {
                const data = rows[i].dataValues
                const message = {
                    id: data.id,
                    phone: data.phone,
                    username: data.username,
                    email: data.email,
                    desc: data.desc,
                    result: data.result,
                    createTime: data.create_time,
                    updateTime: data.update_time,
                    status: data.status

                }
                messageList.push(message)
            }
            ctx.body = {
                status: 200,
                msg: '获取成功',
                data: {
                    list: messageList,
                    total: count
                }
            }
        }
    },


    dealMessage: async (ctx) => {
        const data = ctx.request.body
        if (data) {
            const message = {
                id: data.id,
                phone: data.phone,
                username: data.username,
                email: data.email,
                desc: data.desc,
                status: data.status,
                result: data.result,

            }
            const result = await MessageService.dealMessage(data.id,message)
            ctx.body = {
                status: 200,
                msg: '处理反馈信息成功！',
                data: result
            }
        }
    },


}

const {
    message,
} = require('../../models/index')

class MessageService {
    /**
     * web
     */
    async getMessageList() {
        return message.findAndCountAll({
            order: [
                ['status', 'asc'],
                ['create_time', 'desc']
            ]
        })
    }


    async dealMessage(id, ms) {
        await message.update(ms, {
            where: {
                id: id
            }
        })
    }

}

module.exports = new MessageService()

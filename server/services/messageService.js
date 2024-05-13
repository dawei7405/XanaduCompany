const {
  message,
} = require('../models/index')

class MessageService {
  /**
   * web
   */
  async submitMessage (params) {
    return message.create(params)
  }

}

module.exports = new MessageService()

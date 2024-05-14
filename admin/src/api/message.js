import request from "@/utils/request";

export function getMessageList() {
  return request({
    url: '/admin/messageList',
    method: 'get'
  })
}

export function dealMessage(data) {
  return request({
    url: '/admin/dealMessage',
    method: 'post',
    data
  })
}



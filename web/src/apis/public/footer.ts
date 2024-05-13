import request from '@/utils/request'

/**
 * 提交留言
 * @param data
 * @returns
 */
export const submitMessage = (data:any) =>
  request.post('/v1/web/submitMessage', data)

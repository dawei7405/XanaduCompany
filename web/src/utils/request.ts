import axios from 'axios'

export default axios.create({
  timeout: 10000,
  // baseURL: '/api'
  baseURL: 'http://192.168.100.160:3000/api'
  // baseURL: 'bingjikeji-server:3000/api'
})

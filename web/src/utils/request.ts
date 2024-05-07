import axios from 'axios'

export default axios.create({
  timeout: 10000,
  // baseURL: '/api'
  baseURL: 'http://182.135.122.28:8890/api'
  // baseURL: 'bingjikeji-server:8890/api'
})

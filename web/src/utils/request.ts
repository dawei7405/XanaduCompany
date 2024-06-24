import axios from 'axios'

export default axios.create({
  timeout: 10000,
  // 1.本地
  // baseURL: 'http://localhost:8888/api'
  // 2.https
  baseURL: 'https://bj.honasoft.com:8890/api'
  // 3.http
  // baseURL: 'http://192.168.100.100:8888/api'

})

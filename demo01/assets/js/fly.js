/*
 * @Date: 2020-10-13 17:22:27
 * @information: 拦截器配置
 */
const Fly = require('../../utils/fly')
const fly = new Fly()

fly.config.timeout = 10000

fly.interceptors.request.use(requestFun, errorFun)

fly.interceptors.response.use(responseFun, errorFun)


function requestFun(request) {
  let app = getApp()
  request.headers['token'] = app.globalData.token
  return request
}

function responseFun(response) {
  let {data} = response
  let {statusCode, message} = data
  if(statusCode === 1000) {
    return Promise.resolve(data)
  }
  wx.showToast({title: message || '接口出错',  icon: 'none'})
  return Promise.reject(data)
}

function errorFun(error) {
  wx.showToast({title: '网络连接异常',  icon: 'none'})
  return Promise.reject()
}

export default fly


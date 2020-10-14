/*
 * @Date: 2020-03-27 09:07:53
 * @information: 
 */
import new_api from './api/new_api'


App({
  globalData: {
    userInfo: null,
    token: `et54FwVoD7P0CMyPVpQZui6dl4r+hWGBA8EVg82mdEbMjKshDWFD3u+/6YsIZf27i0Tl8UfoAUhXQ5YjP2FJGpdIuKeUOdVhV+UndAkkk9j67V2StNu4RKry5Tt4s+xNxoPbd0N/oXSNflTc2Lhfh5GBCuvhq01qggmba0jCylwCjOp9weMXy5jU4AWSTnLdxeyd9bbMsbDpMGowDmiRZaQz52Yv/g+pYmhMnbUYdtbRkM6BGdoNRvhgyzq8xrrhwaZOTzR+xmL+QwJhrgIZlX2icLzeSOfHEsc61zKADFnJUNWeLltzlXJxXJaLbWpWF6qqr+EFxng2IEp/CG5ngA==`,
  },

  ...new_api,

  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },

})
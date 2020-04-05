//app.js
App({
  globalData: {
    navHeight: null, //导航栏总高度
    navTop: null, //导航栏距离顶部高度
    windowHeight: null, //当前设备总高度
    userInfo: {}, //用户信息
  },
  /**
   * 监听小程序初始化
   */
  onLaunch: function() {
    let menuButtonObj = wx.getMenuButtonBoundingClientRect()
    // 获取设备信息
    wx.getSystemInfo({
      success: res => {
        let statusBarHeight = res.statusBarHeight
        // 胶囊按钮距离顶部高度
        let navTop = menuButtonObj.top
        // 导航高度
        let navHeight = statusBarHeight + menuButtonObj.height + (navTop - statusBarHeight) * 2
        this.globalData.navHeight = navHeight
        this.globalData.navTop = navTop
        this.globalData.windowHeight = res.windowHeight
      },
      fail: err => {
        console.log('获取设备信息出错',err)
      },
    });
    // 获取用户当前的授权状态
    wx.getSetting({
      withSubscriptions: true,
      success: res => {
        let getUserInfo = res.authSetting["scope.userInfo"]
        if(getUserInfo) { // 已授权用户信息
          wx.getUserInfo({
            success: res => {
              this.userInfo = res.userInfo
            },
            fail: err => {
              console.log('获取用户信息失败',err)
            }
          })
        }
      },
      fail: err => {
        console.log('当前用户未授权',err)
      }
    });
  },
})
//app.js
App({
  globalData: {
    navHeight: null, //导航栏总高度
    navTop: null, //导航栏距离顶部高度
    windowHeight: null, //当前设备总高度
  },
  onLaunch: function() {
    let menuButtonObj = wx.getMenuButtonBoundingClientRect()
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
        console.log(err)
      },
    })
  },
})
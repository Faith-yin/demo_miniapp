// pages/page05/page05.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    supportMode: [], //生物支持方式
    isCheckMark: null, //是否可以进行生物认证
  },

  // 获取本机生物信息认证支持方式
  onGetWay() {
    wx.checkIsSupportSoterAuthentication({
      success: (res) => {
        this.setData({supportMode: res.supportMode})
        console.log('生物认证方式：',this.data.supportMode)
        if(!res.supportMode.length) {
          wx.showToast({title: '本机无生物验证功能'})
        }
        if(res.supportMode.length == 1) {
          wx.showToast({title: `本机只有${res.supportMode[0] == 'fingerPrint' ? '指纹' : '面部'}别功能`})
        } else {
          wx.showToast({title: `本机具有指纹和面部别功能`})
        }
      },
    })
  },


  // 开始验证 
  onStart() {
    let {supportMode} = this.data
    if(!supportMode.length) {
      wx.showToast({title: '本机无生物验证功能'})
      return;
    }
    // 本机是否存有生物信息
    wx.checkIsSoterEnrolledInDevice({
      checkAuthMode: supportMode[0], //识别方式(指纹优先)
      success: (res) => {
        // 开始验证
        wx.startSoterAuthentication({
          challenge: '123456',
          requestAuthModes: ['fingerPrint', 'facial'],
          authContent: '请使用面部验证信息',
          success: (res) => {
            console.log('认证成功',res)
            wx.showToast({title: '认证成功'})
          },
          fail: (err) => {
            console.log('认证失败',err)
            wx.showToast({title: '认证失败'})
          }
        })
      },
      fail: (err) => {
        wx.showToast({title: '本机没有存储生物信息'})
      }
    })
  },




  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
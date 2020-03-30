// pages/page02/page02.js
// 导入公用方法
const {randomHexColor} = require('../../utils/public.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    src: null,
    inputValue: null,
    danmuList: [
      {
        text: '第 1s 出现的弹幕',
        color: '#ff0000',
        time: 1
      },
      {
        text: '第 3s 出现的弹幕',
        color: '#ff00ff',
        time: 3
    }],
  },


  // 拍照完成后
  takePhoto: function() {
    const ctx = wx.createCameraContext()
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setData({
          src: res.tempImagePath
        })
      }
    })
  },
  error(e) {
    console.log('加载出错了额...',e.detail)
  },

  // 获取视频
  bindButtonTap: function() {
    let that = this
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      camera: ['front', 'back'],
      maxDuration: 60,
      success: function(res) {
        that.setData({
          src: res.tempFilePath
        })
      }
    })
  },

  // 输入框离开焦点时
  bindInputBlur: function(e) {
    this.setData({
      inputValue: e.detail.value
    })
  },

  // 发送弹幕
  bindSendDanmu: function() {
    this.videoContext.sendDanmu({
      text: this.data.inputValue,
      color: randomHexColor()
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
    this.videoContext = wx.createVideoContext('myVideo')
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
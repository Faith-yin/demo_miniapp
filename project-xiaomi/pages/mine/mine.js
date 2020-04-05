// pages/mine/mine.js

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},           //用户信息
    list: [                 //cell列表
      {iconPath: '/assets/images/店铺，门店.png', text: '我的订单'},
      {iconPath: '/assets/images/店铺，门店.png', text: '会员中心'},
      {iconPath: '/assets/images/店铺，门店.png', text: '耗材服务'},
      {iconPath: '/assets/images/店铺，门店.png', text: '我的优惠券'},
      {iconPath: '/assets/images/店铺，门店.png', text: '我的F码'},
      {iconPath: '/assets/images/店铺，门店.png', text: '我的礼物码'},
      {iconPath: '/assets/images/店铺，门店.png', text: '我的红包'},
      {iconPath: '/assets/images/店铺，门店.png', text: '在线客服'},
      {iconPath: '/assets/images/店铺，门店.png', text: '设置'},
    ],  
    showDiolg: false,       //底部弹出层开关
    showMsgDiolog: false,   //中间弹窗开关
  },

  /**
   * 点击登录账号
   */
  loginClick: function() {
    this.setData({
      showDiolg: true,
    })
  },
  /**
   * 微信一键登录  重新授权
   */
  getInfoClick: function() {
    // 若中间弹窗是开的，要先关闭
    if(this.data.showMsgDiolog) {
      this.setData({
        showMsgDiolog: false
      })
    }
    // 向用户发起授权请求
    wx.authorize({
      scope: 'scope.userInfo',
      success: res => {
        console.log('获取用户信息成功',res)
      },
      fail: err => {
        // console.log('获取用户信息失败',err)
      }
    })
  },
  /**
   * 获取用户信息回调
   */
  bindGetUserInfo: function(e) {
    if(!e.detail.userInfo) { //若用户点击取消申请信息 
      this.setData({
        showMsgDiolog: true
      })
      return;
    }
    this.setData({ //点击允许了
      userInfo: e.detail.userInfo,
      showDiolg: false,
      showMsgDiolog: false
    })
  },
  /**
   * 关闭底部弹窗
   */
  closeDiolg: function() {
    let {userInfo} = this.data
    // 如期窗口关闭时没有获取到信息
    if(!userInfo  || !Object.keys(userInfo).length) {
      wx.showToast({
        title: '登录后才可完成购买哦~',
        icon: 'none'
      })
    }
    this.setData({
      showDiolg: false,
    })
  },
  /**
   * 先去转转
   */
  judgeHomePage: function() {
    // 关闭中间弹窗
    this.setData({
      showMsgDiolog: false
    })
    // 跳首页
    wx.switchTab({
      url: '/pages/home/home',
    })
  },








  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(app || Object.keys(app.userInfo).length) {
      this.setData({
        userInfo: app.userInfo
      })
    }

    // let userInfo = wx.getStorage({
    //   key: 'userInfo',
    //   success: res => {
    //     this.setData({
    //       userInfo: userInfo
    //     })
    //   },
    //   fail: err => {
    //     console.log('获取用户信息失败',err)
    //   }
    // })
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
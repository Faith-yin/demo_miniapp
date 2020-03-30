// pages/page03/page03.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item: {
      index: 0,
      msg: 'this is a template ...',
      time: '2020-03-28'
    },
    name: '初始名称',
    age: 18,
    sex: null,
  },

  // 子组件响应事件
  receiveEvent: function(e) {
    this.setData({
      name: e.detail.name
    })
  },

  // 获取用户信息
  bindgetuserinfo: function(e) {
    console.log('获取到用户信息了',e)
  },

  // 拉起支付
  payClick: function() {
    // 一下支付请求参数均由后端接口返回，纯前端目前不行...
    wx.requestPayment({
      nonceStr: 'fdasfdsafwer',
      package: 'prepay_id=wx215646756467356346',
      paySign: 'paySign',
      timeStamp: '1585390803',
      signType: 'MD5',
      success: function(res) {
        console.log('成功',res)
      },
      fail: function(res) {
        console.log('失败',res)
      }
    })
  },

  // 获取位置
  authorizationClick: function() {
    wx.getLocation({
      type: 'wgs84',
      success: function(res) {
        console.log('成功',res)
      },
      fail: function(res) {
        console.log('失败',res)
      }
    })
  },

  // 获取微信运动步数
  walkClick: function() {
    wx.getWeRunData({
      success: function(res) {
        // 拿 encryptedData 到开发者后台解密开放数据
        let encryptedData = res.encryptedData
        console.log('成功',encryptedData)
      },
      fail: function(res) {
        console.log('失败',res)
      }
    })
  },








  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 通过id 父组件调用子组件的data数据
    this.setData({
      sex: this.selectComponent('#component01Id').data.sex
    })
    // 通过id 父组件调用子组件的方法
    this.selectComponent('#component01Id').fun()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // wx.getUserInfo({
    //   success: function(res) {
    //     console.log('成功',res)
    //   },
    //   fail: function(e) {
    //     console.log('失败',e)
    //   }
    // })
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
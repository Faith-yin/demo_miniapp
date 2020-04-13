// pages/goodDetail/goodDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    itemContent: {}, //商品详情
    recommendList: [ //推荐列表
      {title: '小米米智能摄像头2.0', price: 199.99},
      {title: '小米米智能洗衣机3.5', price: 1998.88},
      {title: '小米米智能小爱2.0', price: 98.00},
      {title: '小米米智能摄像头2.0', price: 199.99},
      {title: '小米米智能摄像头2.0', price: 199.99},
      {title: '小米米智能摄像头2.0', price: 199.99},
      {title: '小米米智能摄像头2.0', price: 199.99},
      {title: '小米米智能摄像头2.0', price: 199.99},
      {title: '小米米智能摄像头2.0', price: 199.99},
      {title: '小米米智能摄像头2.0', price: 199.99},
      {title: '小米米智能摄像头2.0', price: 199.99},
    ],
    height: 0, //弹窗高度
    scrollHeight: 0, //scrollview高度
  },


  /**
   * 横向滚动滚动条动时
   */
  scroll: function() {
    // console.log(e)
  },

  /**
   * 分享点击
   */
  shareClick: function() {
    this.onShareAppMessage()
  },

  /**
   * 详情点击
   */
  infoClick: function() {
    this.setData({
      height: '90%'
    })
    // 计算scrollview的高度
    let query = wx.createSelectorQuery().in(this)
    query.select('#picker-title').boundingClientRect(res => {
      // 得到标题的高度
      let titleHeight = res.height
      // 获取屏幕高度
      let screenHeight = wx.getSystemInfoSync().windowHeight
      // 获取ScrollView的高度 = 屏幕高度 * 90% - 弹窗标题高度 - 底部按钮高度
      let scrollHeight = screenHeight * 0.9 - titleHeight - 40
      this.setData({
        scrollHeight: scrollHeight + 'px'
      })
    }).exec()
  },

  /**
   * 完成：关闭底部弹窗
   */
  closePicker: function() {
    this.setData({
      height: 0
    })
  },








  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
    const eventChannel = this.getOpenerEventChannel()
    let that = this
    eventChannel.on('acceptDataFromOpenerPage', function(data) {
      that.setData({
        itemContent: data.itemcontent
      })
    })

    
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
    let model = {
      title: 'Redmi K30 Pro KO自己，KO一切。',
      path: '/pages/goodDetail/goodDetail',
      imageUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/50beb6e77e316ff0637d79ad1869572e.jpg?w=632&h=340'
    }
    return model
  }
})
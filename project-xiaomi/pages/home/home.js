// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listBtn: [ //图标按钮列表
      {iconPath: '/assets/images/01.png', text: '手机'},
      {iconPath: '/assets/images/02.png', text: '电视'},
      {iconPath: '/assets/images/03.png', text: '电脑'},
      {iconPath: '/assets/images/04.png', text: '助力砍价'},
      {iconPath: '/assets/images/05.png', text: '0元抽奖'},
      {iconPath: '/assets/images/06.png', text: '1分拼团'},
      {iconPath: '/assets/images/07.png', text: '小米众筹'},
      {iconPath: '/assets/images/08.png', text: '小米秒杀'},
      {iconPath: '/assets/images/09.png', text: '以旧换新'},
      {iconPath: '/assets/images/10.png', text: '优先购'},
    ],
    cardList: [ //卡片列表
      {
        imgPath: 'http://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1569238836.72564587.jpg?thumb=1&w=180&h=180',
        title: '真无线蓝牙耳机',
        desc: '自动秒连，拿起耳机就能用/新一代蓝牙5.0技术/12小时不担心续航问题/销售火爆',
        nowPrice: 99.9,
        pastPrice: 199,
      },
      {
        imgPath: 'http://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1552376822.09637089.jpg?thumb=1&w=180&h=180',
        title: '小米路由器4A千兆版',
        desc: '双核全千兆AC1200路由器/自动秒连，拿起耳机就能用/自动秒连，拿起耳机就能用',
        nowPrice: 129.9,
        pastPrice: 169,
      },
      {
        imgPath: 'http://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1569238836.72564587.jpg?thumb=1&w=180&h=180',
        title: '真无线蓝牙耳机',
        desc: '自动秒连，拿起耳机就能用/新一代蓝牙5.0技术/12小时不担心续航问题/销售火爆',
        nowPrice: 99.9,
        pastPrice: 199,
      },
      {
        imgPath: 'http://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1569238836.72564587.jpg?thumb=1&w=180&h=180',
        title: '真无线蓝牙耳机',
        desc: '自动秒连，拿起耳机就能用/新一代蓝牙5.0技术/12小时不担心续航问题/销售火爆',
        nowPrice: 99.9,
        pastPrice: 199,
      },
      {
        imgPath: 'http://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1569238836.72564587.jpg?thumb=1&w=180&h=180',
        title: '真无线蓝牙耳机',
        desc: '自动秒连，拿起耳机就能用/新一代蓝牙5.0技术/12小时不担心续航问题/销售火爆',
        nowPrice: 99.9,
        pastPrice: 199,
      },
      {
        imgPath: 'http://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1569238836.72564587.jpg?thumb=1&w=180&h=180',
        title: '真无线蓝牙耳机',
        desc: '自动秒连，拿起耳机就能用/新一代蓝牙5.0技术/12小时不担心续航问题/销售火爆',
        nowPrice: 99.9,
        pastPrice: 199,
      },
      {
        imgPath: 'http://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1569238836.72564587.jpg?thumb=1&w=180&h=180',
        title: '真无线蓝牙耳机',
        desc: '自动秒连，拿起耳机就能用/新一代蓝牙5.0技术/12小时不担心续航问题/销售火爆',
        nowPrice: 99.9,
        pastPrice: 199,
      },
      {
        imgPath: 'http://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1569238836.72564587.jpg?thumb=1&w=180&h=180',
        title: '真无线蓝牙耳机',
        desc: '自动秒连，拿起耳机就能用/新一代蓝牙5.0技术/12小时不担心续航问题/销售火爆',
        nowPrice: 99.9,
        pastPrice: 199,
      },
    ],
  },


  /**
   * 其中一小卡片被点击
   */
  itemClick: function(e) {
    // console.log('拿到这条数据了',e.currentTarget.dataset.itemcontent)
    wx.navigateTo({
      url: '/pages/goodDetail/goodDetail',
      success: res => {
        res.eventChannel.emit('acceptDataFromOpenerPage', e.currentTarget.dataset)
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
// pages/page04/page04.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dialogShow: false,
    showOneButtonDialog: false,
    buttons: [{text: '取消'}, {text: '确定'}],
    oneButton: [{text: '确定'}],
    show: false,
    dialogButtons: [
      {
        type: 'default',
        className: '',
        text: '辅助操作',
        value: 0
      },
      {
        type: 'primary',
        className: '',
        text: '主操作',
        value: 1
      }
    ],
    showActionsheet: false,
    groups: [
        { text: '示例菜单', value: 1 },
        { text: '示例菜单', value: 2 },
        { text: '负向菜单', type: 'warn', value: 3 }
    ],
    list: [
      {
        "text": "主页",
        "iconPath": "/assets/images/主页 (1).png",
        "selectedIconPath": "/assets/images/主页.png",
        "value": "home",
      },
      {
        "text": "我的",
        "iconPath": "/assets/images/个人 (1).png",
        "selectedIconPath": "/assets/images/个人.png",
        "value": "mine"
      },
    ],
    searchValue: "韩国N号房事件",
    videoList: [
      {
        id: 1,
        url: 'https://vdept.bdstatic.com/54526e6c416c7976647a563867463864/5077483131514353/f74cfbd6597930da77970855ca60550914f0c03c6f77082351e65337df3f45a905a6e3dcaf9a2bb15f7cbb3853ccceaf.mp4?auth_key=1585545221-0-0-99fa56955341d1b5d63d7ed5af0c0175',
        objectFit: 'contain'
      },
      {
        id: 2,
        url: 'http://t.live.cntv.cn/cntvwebplay/cntvplayer/images/plug-in_bg.gif',
        objectFit: 'contain'
      },
      {
        id: 3,
        url: 'https://vdept.bdstatic.com/72665362536972455664516957473972/7962734775394272/1fe0654cde62e48313660d893a19a240dca254a10cf9c0666c741f39575d8562d368c8f414b8ad7cde52378b4a23414cacaafbf08b9bfed152b671200bccbd03.mp4?auth_key=1585545269-0-0-aa0b04378cba44c586223304920687bf',
        objectFit: 'contain'
      },
      {
        id: 4,
        url: 'https://vdept.bdstatic.com/6b77346b594979554261457169504865/5261726446624462/dc42c1896de7cb1e5c3f6da08d80280680387a8c9773a4d573be7556d07cbe1eed2e22e3bb4728dc7219dd63f04edce4.mp4?auth_key=1585545293-0-0-ba8d6ae8404e20ea1fd6776c572f1dc4',
        objectFit: 'contain'
      },
    ]
  },

  openConfirm: function() {
    this.setData({
      dialogShow: true
    })
  },

  tapOneDialogButton: function() {
    this.setData({
      showOneButtonDialog: true
    })
  },

  tapDialogButton(e) {
    this.setData({
      dialogShow: false,
      showOneButtonDialog: false
    })
  },

  tapOneDialogButton(e) {
    this.setData({
      showOneButtonDialog: true
    })
  },

  open: function() {
    this.setData({
      show: true
    })
  },

  buttontap(e) {
    console.log('点击按钮了',e.detail)
  },

  openBtnGroup: function() {
    this.setData({
      showActionsheet: true
    })
  },

  close: function () {
    this.setData({
      showActionsheet: false
    })
  },

  btnClick(e) {
    console.log(e.detail)
    this.close()
  },

  tabChange(e) {
    console.log('tab change', e)
  },

  search: function() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([{text: '搜索结果', value: 0}, {text: '搜索结果2', value: 1}])
      }, 300)
    })
  },

  selectResult: function(e) {
    console.log('搜索结果是：',e.detail)
  },








  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      search: this.search.bind(this)
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

  }
})
// pages/demo01/demo01.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: "这是我的第一个页面demo01",
    obj: {
      '2020-01-01': {name: 'james', age: 19},
      '2020-02-01': {name: 'jerry', age: 20},
      '2020-03-01': {name: 'tom', age: 21},
    },
    list: [
      {name: 'USA', value: '美国', checked: 'true'},
      {name: 'China', value: '中国'},
      {name: 'UK', value: '英国', disabled: 'true'},
    ],
    array: ['美国', '中国', '巴西', '日本', '英国', '巴基斯坦'],
    index: 0,
    multiArray: [
      ['无脊柱动物', '脊柱动物'], 
      ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'], 
      ['猪肉绦虫', '吸血虫']
    ],
    multiIndex: [0, 0, 0],
    time: '12:00',
    date: '2020-03-27',
    region: ['河北省', '石家庄', '长安区'],
    iconSize: [20,30,40,50],
    iconColor: ['red', '#ff6700', 'green', 'rgb(0,255,255)'],
    iconType: ['success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear'],
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    
  },




  // 多选框中的选项变化时
  checkboxChange: function(e) {
    // console.log(`当前选中的选项是:${e.detail.value}`)
  },

  // 表单提交
  formSubmit: function(e) {
    // console.log('表单提交了',e.detail.value)
  },

  // 表单重置
  formReset: function() {
    // console.log(`表单重置了`)
  },

  // 普通选择器选择事件
  bindPickerChange: function(e) {
    this.setData({
      index: e.detail.value
    })
  },
  
  // 多项选择器选择事件
  bindMultiPickerChange: function(e) {
    // e.detail.value修改之后每一列分别对应的index
    this.setData({
      multiIndex: e.detail.value
    })
  },

  // 多项选择器列被滑动时
  bindMultiPickerColumnChange: function (e) {
    // e.detail.column: 当前滑动的哪列， e.detail.value：滑动之后的值(index)
    // console.log(e.detail.column,e.detail.value)
    let data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    }
    data.multiIndex[e.detail.column] = e.detail.value
    // 判断滑动的哪列?
    switch (e.detail.column) {
      // 当滑动第一列时
      case 0:
        // 判断滑动之后的值(index)
        switch (data.multiIndex[0]) {
          case 0:
            data.multiArray[1] = ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物']
            data.multiArray[2] = ['猪肉绦虫', '吸血虫']
            break;
          case 1:
            data.multiArray[1] = ['鱼', '两栖动物', '爬行动物'];
            data.multiArray[2] = ['鲫鱼', '带鱼'];
            break;
        }
        data.multiIndex[1] = 0;
        data.multiIndex[2] = 0;
        break;
      // 当滑动第二列时
      case 1:
        // 判断滑动之后的值(index)
        switch (data.multiIndex[0]) {
          case 0:
            // 判断第三列的值(index)
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['猪肉绦虫', '吸血虫']
                break;
              case 1:
                data.multiArray[2] = ['蛔虫']
                break;
              case 2:
                data.multiArray[2] = ['蚂蚁', '蚂蟥']
                break;
              case 3:
                data.multiArray[2] = ['河蚌', '蜗牛', '蛞蝓']
                break;
              case 4:
                data.multiArray[2] = ['昆虫', '甲壳动物', '蛛形动物', '多足动物']
                break;
            }
            break;
          case 1:
            // 判断第三列的值(index)
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['鲫鱼', '带鱼'];
                break;
              case 1:
                data.multiArray[2] = ['青蛙', '娃娃鱼'];
                break;
              case 2:
                data.multiArray[2] = ['蜥蜴', '龟', '壁虎'];
                break;
            }
            break;
        }
        data.multiIndex[2] = 0
        break;
    }
    this.setData(data)
  },

  // 时间选择器选择事件
  bindTimeChange: function(e) {
    this.setData({
      time: e.detail.value
    })
  },

  // 日期选择器选择事件
  bindDateChange: function(e) {
    this.setData({
      date: e.detail.value
    })
  },

  // 省市区选择器选择事件
  bindRegionChange: function(e) {
    this.setData({
      region: e.detail.value
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
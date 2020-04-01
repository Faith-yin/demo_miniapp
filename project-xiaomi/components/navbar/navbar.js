// components/navbar/navbar.js

const app = getApp()

Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    navHeight: app.globalData.navHeight + 5 + 'px', //导航栏总高度
    navTop: app.globalData.navTop + 'px', //导航栏距离顶部高度
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 搜索框被点击
     */
    searchClick: function() {
      console.log(app)
    },
  }
})

// components/slideshow/slideshow.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 是否显示面板指示点
    indicatorDots: {
      type: Boolean,
      value: true,
    },
    // 是否自动切换
    autoplay: {
      type: Boolean,
      value: true,
    },
    // 是否采用衔接滑动
    circular: {
      type: Boolean,
      value: true,
    },
    // 指定 swiper 切换缓动动画类型
    easingFunction: {
      type: String,
      value: 'default'
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    imageArr: [ //轮播图
      "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4471a618ee488d1d86d0536c9362bf27.jpg?w=2452&h=920",
      "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/20dd5c13d766a0c2d17ad742fa7794c8.jpg?thumb=1&w=1226&h=460&f=webp&q=90",
      "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e25025f1ebb643fcf7f35aae636aa630.jpg?thumb=1&w=1226&h=460&f=webp&q=90",
      "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3c409123c70dc6fa2250916cb1cf2a4b.jpg?thumb=1&w=1226&h=460&f=webp&q=90",
      "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/755aca9487082e7698e16f17cfb70839.jpg?thumb=1&w=1226&h=460&f=webp&q=90"
    ],
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})

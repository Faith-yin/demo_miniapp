// components/business/component02/component02.js
Component({
  /**
   * 与其他组件关联
   */
  relations: {
    './component01': {
      type: 'parent', // 关联的目标节点应为父节点
      linked: function(target) {
        // 每次被插入到component01时执行，target是component01节点实例对象，触发在attached生命周期之后
      },
      linkChanged: function(target) {
        // 每次被移动后执行，target是component01节点实例对象，触发在moved生命周期之后
      },
      unlinked: function(target) {
        // 每次被移除时执行，target是component01节点实例对象，触发在detached生命周期之后
      }
    }
  },
  options: {
    // 在组件定义时的选项中启用多slot支持
    multipleSlots: true 
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    msg: '2222'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    childClick: function() {
      console.log('02 点击了啊')
    }
  }
})

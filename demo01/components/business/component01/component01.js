// components/business/component01/component01.js
Component({
  /**
   * 与其他组件关联
   */
  relations: {
    './component02': {
      type: 'child', // 关联的目标节点应为子节点
      linked: function(target) {
        // 每次有component02被插入时执行，target是该节点实例对象，触发在该节点attached生命周期之后
      },
      linkChanged: function(target) {
        // 每次有component02被移动后执行，target是该节点实例对象，触发在该节点moved生命周期之后
      },
      unlinked: function(target) {
        // 每次有component02被移除时执行，target是该节点实例对象，触发在该节点detached生命周期之后
      }
    }
  },

  /**
   * 数据监听器
   */
  observers: {
    'obj.numberA, obj.numberB': function(numberA, numberB) {
      this.setData({
        sum: numberA + numberB
      })
    }
  },

  /**
   * 组件的属性列表：接收父组件的值
   */
  properties: {
    params: {
      type: [String, Number],
      value: 0,
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    msg: '1111',
    sex: '男',
    obj: {
      numberA: 0,
      numberB: 99,
    },
    sum: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {

    parentClick: function() {
      // 对父组件进行响应通信传值
      this.triggerEvent('sendEvent', {name: 'ypf'}, {})
    },

    fun: function() {
      // console.log('这是component01中的方法啊')
    },

    // 减一
    decClick: function() {
      let obj2 = this.data.obj
      this.setData({
        obj: {
          numberA: obj2.numberA --,
          ...obj2
        }
      })
    },
  
    // 加一
    addClick: function() {
      let obj2 = this.data.obj
      this.setData({
        obj: {
          numberA: obj2.numberA ++,
          ...obj2
        }
      })
    },






  },

})

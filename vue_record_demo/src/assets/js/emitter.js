
function broadcast(componentName, eventName, params) {
  this.$children.forEach(child => {
    var name = child.$options.componentName

    if (name === componentName) {
      child.$emit.apply(child, [eventName].concat(params))
    } else {
      broadcast.apply(child, [componentName, eventName].concat([params]))
    }
  })
}
export default {
  methods: {
    /**
     *向上遍历寻找name 为 componentName 中的eventName 事件
     * ! 组件使用时记得把name 和componentName 设置好，遇到的bug 就是没有设置好componentName
     *
     * @param {*} componentName
     * @param {*} eventName
     * @param {*} params
     */
    dispatch(componentName, eventName, params) {
      var parent = this.$parent || this.$root
      var name = parent.$options.componentName

      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent

        if (parent) {
          name = parent.$options.componentName
        }
      }
      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params))
      }
    },
    /**
     *向下遍历寻找name 为 componentName 中的eventName 事件
     *
     * @param {*} componentName
     * @param {*} eventName
     * @param {*} params
     */
    broadcast(componentName, eventName, params) {
      broadcast.call(this, componentName, eventName, params)
    }
  }
}

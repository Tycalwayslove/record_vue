<template>
  <div class='t-collapse-item'
       v-if='show'
       :class="{'is-active':isActive}">
    <div class="tab"
         @click="handleHeaderClick">
      <div class="t-collapse-item__header">
        <slot name='header'>
        </slot>
      </div>
    </div>
    <t-collapse-transition>
      <div class="t-collapse-item__wrap"
           v-show="isActive">
        <div class="t-collapse-item__content">
          <slot name='content'></slot>
        </div>
      </div>
    </t-collapse-transition>

  </div>
</template>
<script>
import Emitter from "@/assets/js/emitter";
import TCollapseTransition from "@/assets/js/collapse-transition";
export default {
  name: "TCollapseItem",
  componentName: "TCollapseItem",
  mixins: [Emitter],
  components: {
    TCollapseTransition
  },
  props: {
    title: String,
    name: {
      type: [String, Number],
      default() {
        return this._uid;
      }
    },
    show: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    isActive() {
      return this.collapse.activeNames.indexOf(this.name) > -1;
    }
  },
  data() {
    return {};
  },
  inject: ["collapse"],

  methods: {
    handleHeaderClick() {
      this.dispatch("TCollapse", "item-click", this);
    },
    handleEnterClick() {
      this.dispatch("TCollapse", "item-click", this);
    }
  }
};
</script>

<style lang="scss" scoped>
// .t-collapse-item {
//   .t-collapse-item__header {
//     display: flex;
//     align-items: center;
//     width: 100%;
//     // height: 100px;
//     background-color: red;
//     cursor: pointer;
//     border-bottom: 1px solid #999;
//     font-size: 14px;
//     font-weight: 500;
//     transition: border-bottom-color 1s;
//     outline: none;
//   }
//   .t-collapse-item__wrap {
//     will-change: height;
//     background-color: #ccc;
//     overflow: hidden;
//     box-sizing: border-box;
//     border-bottom: 1px solid #eeeeee;
//     .t-collapse-item__content {
//       padding-bottom: 25px;
//       font-size: 14px;
//       line-height: 1.769230769230769;
//     }
//   }
// }
</style>

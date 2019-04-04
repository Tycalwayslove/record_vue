<template>
  <div class="number-grow-wrap">
    <span :data-value="showValue" ref="numberGrow" class="number-grow" :data-time="showTime"></span>
  </div>
</template>
<script>
export default {
  name: "numberGrowWrap",
  props: {
    time: {
      type: Number,
      default: 1
    },
    value: {
      type: [Number, String],
      default: 100
    }
  },
  data() {
    return {
      showValue: "",
      showTime: ""
    };
  },
  mounted() {
    console.log(this.$refs.numberGrow);
    this.numberGrow(this.$refs.numberGrow);
  },
  methods: {
    numberGrow(ele) {
      let _this = this;
      console.log(_this.time);
      let nowValue = _this.showValue;
      let step = parseInt((nowValue * 10) / (_this.time * 1000));
      // let step = parseInt((_this.value * 10) / (_this.time * 1000));
      let current = 0;
      let start = 0;
      let t = setInterval(() => {
        start += step;
        if (start > _this.value) {
          clearInterval(t);
          start = _this.value;
          t = null;
        }
        if (current === start) {
          return;
        }
        current = start;
        ele.innerHTML = current
          .toString()
          .replace(/(\d)(?=(?:\d{3}[+]?)+$)/g, "$1,");
      }, 10);
    }
  },
  watch: {
    value(val) {
      this.showValue = val;
    },
    showValue(val) {
      this.numberGrow(this.$refs.numberGrow);
      this.$emit("input", val);
    },
    time(val) {
      this.showTime = val;
    },
    showTime(val) {
      // this.numberGrow(this.$refs.numberGrow);
      // this.$emit("input", val);
    }
  }
};
</script>
<style lang="scss" scoped>
.number-grow-warp {
  transform: translateZ(0);
}
.number-grow {
  font-family: Arial-BoldMT;
  font-size: 32px;
  color: #000;
  letter-spacing: 2.67px;
  //   margin: 110px 0 20px;
  display: block;
  line-height: 64px;
}
</style>
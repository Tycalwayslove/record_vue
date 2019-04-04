/*
 <!--数字递增效果
     /**
     * @desc 组件描述
     * @author  唐游超
     * @date 2019-04-04 05:25:21
     * @params: value 要显示的值
     * @params: time 动画显示的时间
     * other: 其他说明
         */
     -->
<template>
  <div>
    <section class="show-number">
      <number-grow-wrap v-model="value" :time="1"></number-grow-wrap>
    </section>
    <section>
      <input type="range" :max="maxValue" :min="minValue" name="ValueControl" v-model="value">
      <br>
      <!-- <input type="range" :max="TimeMaxValue" :min="TimeMinValue" name="TimeControl" v-model="time"> -->
    </section>
  </div>
</template>
<script>
import NumberGrowWrap from "./NumberGrowWrap";
export default {
  name: "NumberGrowWrapDemo",
  components: {
    NumberGrowWrap
  },
  data() {
    return {
      value: "200",
      time: "2",
      maxValue: "2000",
      minValue: "0",
      TimeMaxValue: "10",
      TimeMinValue: "0"
    };
  },
  created() {},
  methods: {}
};
</script>
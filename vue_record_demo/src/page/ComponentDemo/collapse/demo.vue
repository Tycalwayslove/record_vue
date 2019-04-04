<template>
  <div>
    <t-collapse v-modle='activeNames'
                accordion>
      <t-collapse-item name='1'>
        <template slot="header">
          <div>
            我是header
          </div>
        </template>
        <template slot='content'>
          <div>
            我是折叠内容
          </div>
        </template>
      </t-collapse-item>
      <t-collapse-item name='2'></t-collapse-item>
    </t-collapse>
  </div>
</template>
<script>
import TCollapse from "./t-collapse";
import TCollapseItem from "./t-collapse-item";
export default {
  name: "CollpaseDemo",
  components: {
    TCollapse,
    TCollapseItem
  },
  data() {
    return {
      activeNames: ["1"]
    };
  }
};
</script>
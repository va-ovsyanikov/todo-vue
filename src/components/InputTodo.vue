<template>
  <div class="input_add">
    <el-input
      size="medium"
      placeholder="New todo"
      v-model="inputData"
    ></el-input>
    <el-button @click="addInputData" size="medium" type="primary"
      >Add</el-button
    >
  </div>
</template>

    <script>
export default {
  props: {
    inputAddTodo: {
      type: Function,
    },
  },
  data() {
    return {
      inputData: "",
    };
  },
  methods: {
    addInputData() {
      if (this.inputData.length > 0) {
        this.inputAddTodo(this.inputData);
        
      }
      this.inputData = "";
    },
  },
};
</script>

<style lang="less" scoped>
.input_add {
  display: flex;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.el-input {
  .el-input__inner {
    border: 0;
    border-radius: 0;
  }
}
.el-input--medium .el-input__inner {
  border: 0;
}
.el-button {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  font-weight: bold;
}
</style>
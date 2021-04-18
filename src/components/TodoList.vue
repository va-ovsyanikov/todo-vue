<template>
  <div>
    <div class="todo_item">
      <div class="button_check" @click="isCopleteTodo">
        <el-button
          v-if="isCoplete"
          size="mini"
          type="success"
          icon="el-icon-check"
          circle
        ></el-button>

        <el-button
          v-else
          size="mini"
          type="success"
          icon="el-icon-minus"
          circle
        ></el-button>
      </div>
      <span class="todo_title"  :class="{ 'through': isCoplete }">{{ title }}</span>
      <div class="todo_quantity">
        <el-button
          @click="addMinus(index)"
          size="mini"
          type="primary"
          icon="el-icon-minus"
        ></el-button>
        <span>{{ quantity }}</span>
        <el-button
          @click="addPlus(index)"
          size="mini"
          type="primary"
          icon="el-icon-plus"
        ></el-button>
      </div>
      <el-button
        size="mini"
        type="danger"
        icon="el-icon-delete"
        circle
        @click="remove(index)"
      ></el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  props: {
    title: String,
    quantity: Number,
    isCoplete: Boolean,
    index: Number,
  },
  data() {
    return {};
  },
  methods: {
    remove() {
      this.$emit("removeTodo", this.index);
    },
    addPlus() {
      this.$emit("addPlus", this.index);
    },
    addMinus() {
      this.$emit("addMinus", this.index);
    },
    isCopleteTodo() {
      this.$emit("isCopleteTodo", this.index);
    },
  },
};
</script>

<style lang="less" scoped>
.todo_item {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  margin-top: 30px;
  min-height: 36px;
  display: flex;
  align-items: center;
  padding: 0 5px;
}
.todo_title {
  margin-left: 20px;
}
.todo_quantity {
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: auto;
  margin-right: 30px;
}
.through {
  text-decoration: line-through;
}
</style>
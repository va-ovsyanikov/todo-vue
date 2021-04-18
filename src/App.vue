<template>
  <div id="app">
    <div class="todo_app">
      <h2>Todo List Vue.js</h2>
      <InputTodo :inputAddTodo="inputAddTodo" />
      <div v-if="todos.length > 0">
        <TodoList
          v-for="(todo, index) in todos"
          :key="index"
          :title="todo.title"
          :quantity="todo.quantity"
          :isCoplete="todo.isCoplete"
          @removeTodo="removeTodoList"
          :index="index"
          @addPlus="addPlusTodo"
          @addMinus="addMinusTodo"
          @isCopleteTodo="isCopleteTodo"
        />
      </div>
      <div class="empty_todo" v-else>Empty todo</div>
      <div v-if="todos.length > 0" class="todoTotal">
        Total todo: {{ todoTotal }}
      </div>
    </div>
  </div>
</template>

<script>
import InputTodo from "@/components/InputTodo.vue";
import TodoList from "@/components/TodoList.vue";
export default {
  name: "App",
  components: {
    InputTodo,
    TodoList,
  },
  data() {
    return {
      todos: [
        {
          title: "Todo 1",
          quantity: 5,
          isCoplete: false,
        },
        {
          title: "Todo 2",
          quantity: 1,
          isCoplete: false,
        },
      ],
    };
  },
  mounted() {
    if (localStorage.getItem("todos")) {
      try {
        this.todos = JSON.parse(localStorage.getItem("todos"));
      } catch (e) {
        localStorage.removeItem("todos");
      }
    }
  },
  methods: {
    inputAddTodo(data) {
      this.todos.push({
        title: data,
        quantity: 1,
        isCoplete: false,
      });
      this.saveTodos();
    },
    saveTodos() {
      const parsed = JSON.stringify(this.todos);
      localStorage.setItem("todos", parsed);
    },

    removeTodoList(index) {
      const todoDelete = [...this.todos];
      todoDelete.splice(index, 1);
      this.todos = todoDelete;
      this.saveTodos();
    },
    addPlusTodo(index) {
      const todoItemAdd = [...this.todos];
      todoItemAdd[index].quantity++;
      this.saveTodos();
    },
    addMinusTodo(index) {
      const todoItemRem = [...this.todos];
      if (todoItemRem[index].quantity > 1) {
        todoItemRem[index].quantity--;
      }
      this.saveTodos();
    },
    isCopleteTodo(index) {
      this.todos[index].isCoplete = !this.todos[index].isCoplete;
      this.saveTodos();
    },
  },
  computed: {
    todoTotal() {
      return this.todos.reduce((sum, current) => {
        return sum + current.quantity;
      }, 0);
    },
  },
};
</script>

<style lang="less">
body {
  background-color: #f8f1e4;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-weight: bold;
}
.todo_app {
  margin: 70px auto 0;
  background-color: #fff;
  max-width: 500px;
  min-height: 350px;
  box-sizing: border-box;
  padding: 20px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.todoTotal {
  text-align: right;
  margin-top: 30px;
}
.empty_todo {
  margin-top: 50px;
}
</style>

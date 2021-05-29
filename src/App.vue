<template>
  <div class="todolist">
    <img alt="Vue logo" src="./assets/logo.png" />
    <TodoList msg="Composition APIを使ったTodoアプリ" />
    <hr />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TodoList from "./components/TodoList.vue";

export default defineComponent({
  name: "App",
  components: {
    TodoList,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

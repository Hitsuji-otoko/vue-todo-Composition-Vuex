<template>
  <div>
    <TodoList msg="Welcome!!!" />
    <TodoInput />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TodoList from "../components/TodoList.vue";
import TodoInput from "../components/TodoInput.vue";

export default defineComponent({
  name: "Home",

  components: {
    TodoList,
    TodoInput,
  },
});
</script>
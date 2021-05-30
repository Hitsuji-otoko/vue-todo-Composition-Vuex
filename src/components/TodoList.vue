<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul class="todolist">
      <li v-for="(todo, index) in state.todoList" :key="todo.text">
        {{ todo.text
        }}<CompleteButton :index="index" @complete-todo="completeTodoAction" />
      </li>
    </ul>
    <TodoInput @add-todo="addTodoAction" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { useStore } from "vuex";
import TodoInput from "../components/TodoInput.vue";
import CompleteButton from "../components/CompleteButton.vue";

interface State {
  todoList: [{ text: string }, { text: string }];
}

export default defineComponent({
  name: "TodoList",

  props: {
    msg: String,
  },

  components: {
    TodoInput,
    CompleteButton,
  },

  setup() {
    const store = useStore();
    const state = reactive<State>({
      todoList: store.state.todoList,
    });

    return { state };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

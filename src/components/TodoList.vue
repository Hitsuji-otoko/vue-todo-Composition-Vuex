<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul class="todolist">
      <li v-for="(todo, index) in state.todoList" :key="todo.text">
        {{ todo.text }}
        <router-link :to="{ name: 'detail', params: { id: todo.id } }"
          >詳細</router-link
        >
        <CompleteButton :index="index" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { useStore } from "vuex";
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

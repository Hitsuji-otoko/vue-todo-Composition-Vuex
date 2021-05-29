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
    const state = reactive<State>({
      todoList: [
        { text: "(・ワ・🌻)" },
        { text: "バリデーション:空白入力への対応" },
      ],
    });

    //ミューテーション('add-todo')のコミットがなされたら以下を実行
    const addTodoAction = (value: string) => {
      state.todoList.push({ text: value });
    };

    const completeTodoAction = (targetIndex: number) => {
      state.todoList.splice(targetIndex, 1);
    };

    return { state, addTodoAction, completeTodoAction };
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

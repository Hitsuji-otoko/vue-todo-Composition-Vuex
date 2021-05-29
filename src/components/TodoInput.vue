<template>
  <div class="input">
    <input type="text" v-model="todoRef" @keyup.enter="add" />
    <button @click="add">登録</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, SetupContext, ref } from "vue";

export default defineComponent({
  name: "TodoInput",

  setup(props, context: SetupContext) {
    const todoRef = ref<string>("");

    const add = () => {
      //非同期: 親コンポーネントにミューテーションのコミットのみを行う
      context.emit("add-todo", todoRef.value);
      todoRef.value = "";
    };

    return { add, todoRef };
  },
});
</script>
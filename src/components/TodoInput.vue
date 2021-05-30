<template>
  <div class="input">
    <input type="text" v-model="todoRef" @keyup.enter="add" />
    <button @click="add">登録</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, SetupContext, ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "TodoInput",

  setup(props, context: SetupContext) {
    const store = useStore();
    const todoRef = ref<string>("");

    // storeのなかの一番最後のidを取得し、+1
    const lastId = () => {
      if (store.state.todoList.length === 0) {
        return 1;
      } else {
        const lastItem = store.state.todoList.slice(-1)[0];
        return lastItem.id + 1;
      }
    };

    const add = () => {
      const id = lastId();
      const value = todoRef.value;
      store.commit("increment", { id, value });
      todoRef.value = "";
    };

    return { add, todoRef };
  },
});
</script>
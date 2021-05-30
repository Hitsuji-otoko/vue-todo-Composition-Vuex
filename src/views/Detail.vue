<template>
  <div>
    <template v-if="detailItem"> </template>
    <h2>詳細画面</h2>
    <p>{{ detailItem }}</p>
    <TodoInput />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import TodoInput from "../components/TodoInput.vue";

export default defineComponent({
  name: "Detail",

  components: {
    TodoInput,
  },

  setup() {
    const store = useStore();
    const route = useRoute();
    const routerId = Number(route.params.id);
    const detailItem = store.getters.getTodoById(routerId);

    return { detailItem };
  },
});
</script>

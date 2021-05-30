<template>
  <button @click="completed">完了</button>
</template>

<script lang="ts">
import { defineComponent, SetupContext } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "CompleteButton",

  props: {
    index: {
      type: Number,
    },
  },

  setup(props, context: SetupContext) {
    const store = useStore();

    const completed = () => {
      const targetIndex = props.index;
      store.commit("complete", targetIndex);
    };

    return { completed };
    // return { completed, props }; にする必要はあるのか
  },
});
</script>
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
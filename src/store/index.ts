import { createStore } from 'vuex'

export interface State {
  todoList: Array<{ id: number, text: string }>
}

export const store = createStore<State>({
  state: {
    todoList: [{
      id: 1,
      text: "(ã»ã¯ã»ð»)"
    }]
  },

  getters: {
    //åå¥ã®todoãªãã¸ã§ã¯ããåå¾ããã²ãã¿ã¼
    getTodoById(state) {
      return function (_id: number) {
        const todo = state.todoList.find(todo => todo.id === _id)
        if (todo) {
          return todo
        }
      }
    }
  },

  mutations: {
    increment(state, { id, value }) {
      state.todoList.push({ id: id, text: value })
    },
    complete(state, targetIndex) {
      state.todoList.splice(targetIndex, 1)
    }
  },

  actions: {},

  modules: {}
})

export default store
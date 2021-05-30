import { createStore } from 'vuex'

export interface State {
  todoList: Array<{ id: number, text: string }>
}

export const store = createStore<State>({
  state: {
    todoList: []
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
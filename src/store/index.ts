import { createStore } from "vuex";

export default createStore({
  state: {
    todos: [
      { id: 1, text: "buy a car", checked: false },
      { id: 2, text: "play game", checked: false },
    ],
  },
  mutations: {
    ADD_TODO(state, value) {
      state.todos.push({
        id: Math.random(),
        text: value,
        checked: false,
      });
    },
    TOGGLE_TODO() {},
    DELETE_TODO() {},
  },
  actions: {},
  modules: {},
});

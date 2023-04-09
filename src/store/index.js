import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      todos: []
    }
  },
  mutations: {
    setTodos(state, data) {
      state.todos = data
      console.log(data);
    },
    addTodoItem(state, data) {
      state.todos.push(data)
    },
    updateTodoItem(state, data) {
      state.todos.forEach((todo) => {
        if (todo.id === data.id) {
          todo = data
        }
      })
    },
    deleteTodoItem(state, data) {
      state.todos.forEach(todo => {
        if (todo.id === data.id) {
          state.todos.splice(todo, 1)
        }
      })
    }
  },
  actions: {
    getTodos({commit}) {
      fetch("https://64107fb8c3639725adb7ab0f.mockapi.io/api/todos").then(response => response.json()).then(res => commit('setTodos',res))
    },
    createTodo({commit}, todo) {
      fetch("https://64107fb8c3639725adb7ab0f.mockapi.io/api/todos", {
        method: 'POST',
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(todo)
      }).then(res => res.json()).then(res => commit('addTodoItem', res))
    },
    updateTodo({commit},todo) {
      fetch(`https://64107fb8c3639725adb7ab0f.mockapi.io/api/todos/${todo.id}`, {
        method: "PUT",
        body: JSON.stringify(todo),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }).then(response => response.json()).then(res => commit('updateTodoItem', res))
    },
    deleteTodo({commit}, todo) {
      fetch(`https://64107fb8c3639725adb7ab0f.mockapi.io/api/todos/${todo.id}`, {
        method: "DELETE"
      }).then(() => commit('deleteTodoItem', todo))
    },
  }
})
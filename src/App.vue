<template>
 <main class="container">
  <todoTitle></todoTitle>
  <todoCreate @create="createTodoItem"></todoCreate>
  <todoFilter></todoFilter>
  <todoList :items="todos" @updateTodo="updateTodoItem" @deleteTodo="deleteTodoItem"></todoList>

      <!-- <div class="lds-hourglass d-none"></div> -->

    </main>
</template>

<script>
import todoTitle from '@/components/app/header.vue'
import todoCreate from '@/components/form/create.vue'
import todoFilter from '@/components/form/filter.vue'
import todoList from '@/components/todo/list.vue'
export default {
  name: 'App',
  components: {
    todoTitle,
    todoCreate,
    todoFilter,
    todoList
  },
  data() {
    return {
      todos: []
    }
  },
  mounted() {
    this.getTodos()
    console.log(this.todos)
  },
  methods: {
    getTodos() {
      fetch("https://64107fb8c3639725adb7ab0f.mockapi.io/api/todos").then(response => response.json()).then(res => this.todos = res)
    },
    createTodo(todo) {
      fetch("https://64107fb8c3639725adb7ab0f.mockapi.io/api/todos", {
        method: 'POST',
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(todo)
      }).then(this.getTodos)
    },
    createTodoItem(value) {
      const requestData = {
        name: value,
        completed: false
      }
      console.log(requestData);
      this.createTodo(requestData)
    },

    updateTodo(todo) {
      fetch(`https://64107fb8c3639725adb7ab0f.mockapi.io/api/todos/${todo.id}`, {
        method: "PUT",
        body: JSON.stringify(todo),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }).then(this.getTodos)
    },

    deleteTodo(todo) {
      fetch(`https://64107fb8c3639725adb7ab0f.mockapi.io/api/todos/${todo.id}`, {
        method: "DELETE"
      }).then(this.getTodos)
    },

    updateTodoItem(todo) {
      this.updateTodo(todo)
    },

    deleteTodoItem (todo) {
      this.deleteTodo(todo)
    }
  } 
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Supermercado One';
}
body {
  min-height: 100vh;
  background: rgb(77, 197, 77);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
}
.container {
  min-width: 420px;
  border-radius: 15px;
  margin: auto;
  min-height: 450px;
  background: rgba(238, 201, 201, 0.863);
  padding: 25px;
}
</style>

<template>
  <ul class="todo-list">
    <todoItem v-for="item in items" :key="item.id" :item="item" @updateTodo="updateTodo" @deleteTodo="deleteTodo"></todoItem>
  </ul>
</template>
<script>
import todoItem from '@/components/todo/item.vue'
export default {
  name: 'todoList',
  components: {
    todoItem,
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  },

  methods: {
    updateTodo(todo) {
      this.$emit('updateTodo', todo)
    },

    deleteTodo(todo) {
      this.$emit('deleteTodo', todo)
    }
  }
}
</script>
<style scoped>
.todo-list {
  margin-top: 30px;
}
</style>
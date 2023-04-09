<template>
  <ul class="todo-list">
    <todoItem v-for="item in items" :key="item.id" :item="item"></todoItem>
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
}
</script>
<style scoped>
.todo-list {
  margin-top: 30px;
}
</style>
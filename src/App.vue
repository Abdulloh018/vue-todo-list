<template>
 <main class="container">
  <todoTitle></todoTitle>
  <todoCreate></todoCreate>
  <todoFilter></todoFilter>
  <todoList :items="todos"></todoList>

      <!-- <div class="lds-hourglass d-none"></div> -->

    </main>
</template>

<script>
import todoTitle from '@/components/app/header.vue'
import todoCreate from '@/components/form/create.vue'
import todoFilter from '@/components/form/filter.vue'
import todoList from '@/components/todo/list.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    todoTitle,
    todoCreate,
    todoFilter,
    todoList
  },
  computed: mapState({
    todos: state => state.todos
  }),
  data() {
    return {
      // todos: []
    }
  },
  mounted() {
    this.getTodos()
  },
  methods: {
    ...mapActions(['getTodos']),
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

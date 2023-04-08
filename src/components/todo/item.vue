<template>
  <li :class="todoItem.completed ? 'completed todo' : 'todo'">
    <div @click="completedIcon" class="checkbox-btn">
      <div v-show="!todoItem.completed" class="checkbox-btn__empty"></div>
      <span v-show="todoItem.completed" class="checkbox-btn__icon">+</span>
    </div>
    <span class="todo__content">{{ todoItem.name }}</span
    ><button @click="deleteTodo" class="todo__deleteBtn">+</button>
  </li>
</template>
<script>
export default {
  name: "todoItem",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      todoItem: this.item
    }
  },
  methods: {
    completedIcon() {
      this.todoItem.completed = !this.todoItem.completed 
      this.$emit('updateTodo', this.todoItem)
    },
    deleteTodo() {
      this.$emit('deleteTodo', this.todoItem)
    }
  }
};
</script>
<style scoped>
.todo {
  display: flex;
  align-items: center;
  padding: 5px 15px 5px 10px;
  border-radius: 5px;
  max-width: 90%;
  margin: 10px auto;
  cursor: pointer;
}
.todo__checkbox {
  border: 2px solid #494a4b;
  outline: none;
}
.todo__deleteBtn {
  margin: 0 -8px 0 auto;
  padding: 0 8px;
  border: none;
  background: none;
  transform: rotate(45deg) scale(2);
  cursor: pointer;
  transition: 0.25s;
}
.todo__deleteBtn:hover {
  color: rgb(114, 111, 111);
}
.todo__content {
  font-family: "Abel";
  font-weight: 700;
  padding: 5px 10px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.checkbox-btn {
  width: 15px;
  height: 15px;
  cursor: pointer;
}

.checkbox-btn__empty {
  width: 15px;
  height: 15px;
  border: 2px solid #494a4b;
  padding: 5px;
  border-radius: 3px;
}
.checkbox-btn__icon {
  width: 20px;
  height: 10px;
  margin-top: -5px;
  transform: scale(1.6);
  margin-left: 5px;
  display: block;
}
.completed {
  background-color: rgb(18, 131, 18);
}
</style>

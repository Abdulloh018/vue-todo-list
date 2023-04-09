<template>
  <div class="form" @submit.prevent="createTodoItem">
    <h2 class="form__title">~ Today I need to ~</h2>
    <form>
      <input
        type="text"
        class="create-todo-input"
        placeholder="Add new todo.."
        v-model="inputValue"
      />
      <button type="submit" class="create-todo-btn">
        <span>Submit</span>
      </button>
    </form>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: "todoCreate",
  data() {
    return {
      inputValue: "",
    };
  },
  methods: {
    ...mapActions(['createTodo']),
    createTodoItem() {
      if (this.inputValue !== "") {
        const requestData = {
        name: this.inputValue,
        completed: false
      }
      this.createTodo(requestData)
      this.inputValue = ''
      }
    },
  },
};
</script>
<style scoped>
.form {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.form__title {
  font-size: 22px;
  font-weight: 400;
  margin-bottom: 20px;
}
form {
  width: 90%;
  display: flex;
  padding: 0 20px;
  justify-content: space-between;
}
input {
  border: none;
  background: none;
  border-bottom: 4px dashed rgb(18, 131, 18);
  margin-right: 20px;
  width: 70%;
  font-family: "Abel";
  font-weight: 700;
  font-size: 16px;
}
input:focus {
  outline: none;
}
input::placeholder {
  font-weight: 500;
}
button {
  height: 38px;
  position: relative;
  transform: rotate(4deg);
  border-radius: 6px;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  background-color: transparent;
  cursor: pointer;
}
button:focus {
  outline: none;
}
button:active {
  height: 35px;
  margin-top: 3px;
  transform: translateY(4px);
  padding-bottom: 0;
}
button:active::before {
  transform: scaleY(1);
}
button span {
  position: relative;
  display: block;
  font-size: 16.5px;
  padding: 0.34em 0.84em;
  border: 2px solid #494a4b;
  border-radius: inherit;
  background-color: #fff;
}
form button::before {
  position: absolute;
  left: 0;
  top: 0;
  content: "";
  width: 80px;
  height: 100%;
  transform: scaleY(1.1);
  border: 1px solid #494a4b;
  border-radius: inherit;
  transform-origin: top;
  background-image: url(data:image/png;base64,R0lGODlhBAAEAIABAAAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4wLWMwNjEgNjQuMTQwOTQ5LCAyMDEwLzEyLzA3LTEwOjU3OjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1LjEgV2luZG93cyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5NUY1OENCRDdDMDYxMUUyOTEzMEE1MEM5QzM0NDVBMyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5NUY1OENCRTdDMDYxMUUyOTEzMEE1MEM5QzM0NDVBMyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjk1RjU4Q0JCN0MwNjExRTI5MTMwQTUwQzlDMzQ0NUEzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjk1RjU4Q0JDN0MwNjExRTI5MTMwQTUwQzlDMzQ0NUEzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkEAQAAAQAsAAAAAAQABAAAAgYEEpdoeQUAOw==);
  background-color: #fe7345;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
</style>

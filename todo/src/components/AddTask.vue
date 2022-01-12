<template>
  <div class="form-control">
    <label>Task</label>
    <input type="text" 
           v-model="taskTitle" 
           name="text" 
           placeholder="Add a Task" 
           @keyup.enter="addTaskLocal"/>
  </div>
</template>

<script>
import store from './../store/index'

export default {
  name: 'AddTask',
  data() {
    return {
      taskTitle: ''
   }
  },
  methods: {
    addTaskLocal() {
      console.log('add task from actions')
      const newTask = {id: Math.floor(Math.random() * 100),
        text: this.taskTitle,
        done: false}
       store.dispatch('addTask', newTask) 
      this.taskTitle =''
    }
  }
}
</script>

<style scoped>

.add-form {
  margin-bottom: 40px;
}
.form-control {
  margin: 20px 0;
}
.form-control label {
  display: block;
}
.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}
.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.form-control-check label {
  flex: 1;
}
.form-control-check input {
  flex: 2;
  height: 20px;
}
</style>

<template>
<div class="task">
  <input class="checkbox" 
         type="checkbox"
         :checked="task.done"
         @change="change(task)"/>
  <h3>{{ task.text}}
    <i class="fas fa-trash" 
    @click="deleteTask(task.id)"></i>
  </h3>
</div>
</template>

<script>
// importing only actions and getters from the store
import store from '../store/index'

export default {
  name: 'Task',
  
  props: {
    task: Object,
    index: Number
  },
  methods: {
    deleteTask(id) {
      console.log('local delete: id='+ id)
      store.dispatch('deleteTask', this.index) 
    },
    // based on the state of the check box
    // it should change the done/undone field of the task in the tasks array
    change(task) {  
      store.dispatch('changeTaskStatus', task)
    }
  }
}
</script>

<style scoped>

.fas {
  display: flex;
  justify-content: flex-end;
}
.fa-times{
  color: red; 
}

.fa-edit {
  color: green;
}
.task {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}
.task.completed {
  border-left: 5px solid red;
}

.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.checkbox {
  /* display: inline-block; */
  float: left;
  margin: 8px 10px 10px 0px;
  color: red;
}
</style>


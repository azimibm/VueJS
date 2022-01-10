<template>
<div @dblclick="$emit('toggle-completed', task.id)"
class="task">
    <!-- class="[task.completed ? 'task completed' : '', 'task']"> -->
  <h3>{{ task.text}}
    <i class="fas fa-edit" @click="onEdit(task.id)"></i>
    <i class="fas fa-times" @click="onDelete(task.id)"></i>
  </h3>
</div>
</template>

<script>

export default {
  name: 'Task',
  props: {
    task: Object
  },
  methods: {
    onDelete(id) {
      console.log(id)
      this.$emit('delete-task', id)
    },
    OnEdit(id) {
      console.log(id)
      this.$emit('edit-task', id)
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
</style>


<template>
<div>
  <div v-for="task in tasks" :key="task.id">
    <Task 
      @toggle-completed="$emit('toggle-completed', task.id)" 
      @delete-task="$emit('delete-task', task.id)"
      @edit-task="$emit('edit-task', task.id)"
      :task="task"
      :style="task.completed ? {'text-decoration': 'line-through', 'color': 'red'} : ''"></Task>
  </div>
</div>
</template>

<script>
import Task from './Task'

export default {
  name: 'Tasks',
  props: {
    tasks: Array
  },
  components: {
    Task
  },
  emits: ['delete-task', 'toggle-completed', 'edit-task']
}
</script>

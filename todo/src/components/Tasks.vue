<template>
<div>
  <div v-for="task in tasks" :key="task.id">
    <Task :task="task"></Task>
  </div>
</div>
</template>

<script>
import Task from './Task'
import store from '../store/index'

export default {
  name: 'Tasks',
  components: {
    Task
  },
  computed: {
    tasks () {
      return store.getters.allTasks
    }
  }
}
</script>

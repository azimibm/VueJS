<template>
  <header>  
    <h1>{{ message }}</h1>
      <h5>Completed({{ doneTasksCount }})</h5>
      <h5>Incomplete({{ undoneTaskCount }})</h5>
  </header>
</template>

<script>
import store from '../store/index.js'

export default {
  name: 'Header',
  props: {
    message: {
      type: String,
      default: 'TODO LIST'
    }
  },
   computed: {
     doneTasksCount() {
       return store.getters.completedTasksCount
     },
     undoneTaskCount() {
       return store.getters.incompleteTaskscount
     }
   }
}
</script>

<style scoped>
  header {
  display: block;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

h1{
  margin-bottom: 20px;
}
</style>

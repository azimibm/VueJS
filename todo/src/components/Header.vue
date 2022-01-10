<template>
  <header>  
    <h1>{{ message }}</h1>
    <Button 
      @btn-click="$emit('toggle-add-task')"
      :text="showAddTask ? 'close' : 'Add Task'"  
      :color="showAddTask ? 'red' : 'green'"
      />
  </header>
</template>

<script>
import Button from './Button.vue'

export default {
  name: 'Header',
  props: {
    message: {
      type: String,
      default: 'TODO LIST'
    },
    showAddTask: Boolean
  },
  components: {
    Button
  }
}
</script>

<style scoped>
  header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>

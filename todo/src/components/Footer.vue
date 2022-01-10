<template>
  <div>
    <p>Total number of tasks: {{ taskLength }}
  </div>
</template>

<script>
import MainForm from './MainForm.vue'

export default {
  name: 'Footer',
  components: {
    MainForm
  },
  props: {
    taskLength: Number
  }

}
</script>

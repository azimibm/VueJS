<template>
<div>
  <div v-for="task in tasks" :key="task.id">
      <h3> {{ task.text}} </h3>
  </div>
</div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default {
    name: 'Tasks',
    props: {
        tasks: Array
    }
}
</script>

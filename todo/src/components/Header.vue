<template>
  <header>  
    <h1>{{ message }}</h1>
  </header>
</template>

<script>

export default {
  name: 'Header',
  props: {
    message: {
      type: String,
      default: 'TODO LIST'
    }
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

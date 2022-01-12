<template>
  <div id="app">
    <div class="container">
      <Header title="TODO List" />
      <AddTask @add-task="addTask"/>
      <Tasks :tasks="tasks"/>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Tasks from './components/Tasks.vue'
import AddTask from './components/AddTask.vue'

export default {
  name: 'App',
  components: {
    Header,
    Tasks,
    AddTask
  },
  data() {
    return {
      tasks: [],
      showAddTask: true
    }
  },
  methods: {
    addTask(task) {
      this.tasks = [...this.tasks, task]

    },
    deleteTask(id) {
      if (confirm('Are you sure?')) {
        console.log('task', id)
        this.tasks = this.tasks.filter((task) => task.id !== id)
      }
    },
    toggleCompleted(id) {
      console.log(id)
      //if (!this.task.completed) alert ('Task Completed')
      
      // For each task if the task.id is equal to the id that is passed in
      // if it is then we want an array of objects where we 
      // have an initial task property and we want to change the completed 
      // to whatever the opposite the current task.compeleted
      // * map allows us to manipulate and return the array of updated tasks 
      this.tasks = this.tasks.map((task) => task.id === id ? {...task, completed: !task.completed} : task)

    }
  },
  created () {
    this.tasks = [
      {
          id: 1,
          text: 'Doctors App',
          day: 'March 1st',
          completed: false,
        },
        {
          id: 2,
          text: 'Meeting with Sam',
          day: 'March 4st',
          completed: true,
        }
    ]
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Poppins', sans-serif;
}
.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}

.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
</style>

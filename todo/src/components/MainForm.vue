<template>
  <div>
    <div class="myform">
      <input
        id="taskId"
        placeholder="Add a task here"
        v-model="newTask"
        autofocus="autofocus"
        @keyup.enter="addTask"
      />
    </div>
    <div>
      <label for="taskId"></label>
      <ul>
        <li v-for="task in tasks" :key="task.id">
          <div>
            <input id="checkbox" type="checkbox" v-model="task.completed" @change="taskCompleted">
            <label @dblclick="editTask(task)"  style="width: 100%"> {{ task.title }}></label>
            <button @click="removeTask(task)">delete</button>
          </div>
          <!-- <input type="text"
                 v-model="task.title"
                 @keyup.enter="doneEdit(task)" 
                 @keyup.esc="cancelEdit(task)"
                 @blur="doneEdit(task)"
                 /> -->
        </li>
      </ul>
      <!-- <button id="btnAdd" @click="showTask">Add a task</button>
      <ul id="taskList">
        <li v-for="item in tasks" :key="item.id">
          {{ item.msg }}
        </li>
      </ul> -->
      </div>
    <footer>
      <p>Total tasks: {{ tasks.length }}</p>
        <button @click="clearCompletedTasks">Clear completed tasks</button>
    </footer>
  </div>
</template>

<script>
export default {
  name: "MainForm",
  data() {
    return {
      newTask: {
        title: "",
        id: 0,
        completed: false
        },
      tasks: [],
      editedTask: "",
      inputValue: "",
    }
  }, 
  methods: {
    addTask() {
      const taskValue = this.newTask
      if (!taskValue) {
        return
      }
      this.tasks.push({
        id: this.tasks.length,
        title: taskValue,
        editedTask: null,
        completed: false
      })
      this.newTask = ""
    },
    removeTask (task) {
      this.tasks.splice(this.tasks.indexOf(task), 1)
    },
    taskCompleted (task) {
      task.completed = !task.completed
    },
    clearCompletedTasks () {
      for (task in this.tasks) {
        if (task.completed) {
          this.tasks.splice(indexOf(task))
        }
      }
    }
  }
    // showTask() {
    //   const newTask = { msg: this.inputValue, id: this.tasks.length + 1 };
    //   this.tasks.push(newTask);
    // },
    // consoleInputValue() {
    //   console.log(this.inputValue);
    // }
}
</script>

<style scoped>
.myform {
  margin: auto;
  border: 3px, solid, green;
  width: 100%;
}


</style>
import Vuex from 'vuex'
import Vue from 'vue'

// Load Vuex
Vue.use(Vuex);

// create store
export default new Vuex.Store ({
  state : {
    tasks: [
      {
        id: 1,
        text: 'Doctors App',
        done: true
      },
      {
        id: 2,
        text: 'Meeting with Sam',
        done: false
      }
    ]
  }, 
  getters: {
    allTasks: (state) => state.tasks,

    completedTasksList({tasks}) {
       return tasks.filter(task => task.done)
     },
    incompleteTasksList({tasks}) {
      return tasks.filter(task => !task.done)
    },
    completedTasksCount(state) {
      return state.tasks.filter(task => task.done).length
    },
    incompleteTaskscount({tasks}) {  // the tasks argument comes form the state
      return tasks.filter(task => !task.done).length
    }
  },
  // Vuex mutations are essentially events
  mutations: {
    addTask(state, task) { 
      console.log(task)
      const copyoftasks = [...state.tasks, task];
      Vue.set(state, 'tasks', copyoftasks)
      // state.tasks = [...state.tasks, task];
    },
    deleteTask(state, id) {
      const copyoftasks = state.tasks.slice()
      const taskId = copyoftasks.indexOf(id)
      console.log(taskId)
      copyoftasks.splice(taskId, 1)
      Vue.set(state, 'tasks', copyoftasks)
    },
    changeTaskStatus(state, task) {
      console.log(task.id)
      task.done = !task.done
    }
  },
  // Actions are functions that dispatch mutations
  actions: {  
    addTask({ commit }, task) {
      console.log('add task actions')
      commit('addTask', task);
    },
    deleteTask({ commit }, id) {
      commit('deleteTask', id);
    },
    changeTaskStatus({ commit }, task) {
      commit('changeTaskStatus', task);
    }
  }
})
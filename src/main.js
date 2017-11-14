// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})

/*
import Vue from 'vue'
//eslint-disable no-new
// eslint-disable no-unused-vars
let app = new Vue({
  el: '#app',
  data: {
    newTodo: '',
    todoList: [{
      content: '11111111',
      finish: false
    }]
  },
  methods: {
    addItem: function () {
      let newItem = {
        content: this.newTodo,
        finish: false
      }
      this.todoList.push(newItem)
      this.newTodo = ''
    },
    deleteItem: function (todoItem) {
      let index = this.todoList.indexOf(todoItem)
      this.todoList.splice(index, 1)
    },
    finishTodo: function (todoItem) {
      let index = this.todoList.indexOf(todoItem)
      this.todoList[index].finish = true
    }
  },
  updated: function () {
    console.log(this.todoList)
  }
})
*/

<template>
  <div class="todo-component" >
    <input type="text" v-model="newTodo" placeholder="edit me" v-on:keydown.enter="addItem"/>
    <ol>
      <li v-for="(item, index) in todoList" is="TodoItem" 
          v-bind:todo="item" 
          v-bind:key="item.content" 
          v-bind:index="index"
          v-on:deleteInfo="deleteItem"></li>
    </ol>  
  </div>
</template>

<script>
import TodoItem from "./TodoItem";

export default {
  name: "TodoComponent",
  components: {
    TodoItem
  },
  data() {
    return {
      newTodo: "",
      todoList: [
        {
          content: "aaaaaaaaa",
          finish: false
        },
        {
          content: "bbbbbbbbb",
          finish: false
        }
      ]
    };
  },
  methods: {
    deleteItem: function (index) {
      this.todoList.splice(index, 1)
    },
    addItem: function () {
      this.todoList.push({
        content: this.newTodo,
        finish: false
      })
      this.newTodo = ''
    }
  }
};
</script>

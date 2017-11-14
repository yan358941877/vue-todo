<template>
  <li>
    <input type="checkbox" v-model="todo.finish">
    <span>{{todo.content}}</span>
    <span v-on:click="deleteItem">x</span>
  </li>
</template>

<script>
export default {
  name: 'TodoItem',
  props: ['todo', 'index'],
  methods: {
    deleteItem: function () {
      this.$emit('deleteInfo')
    }
  }
}
</script>

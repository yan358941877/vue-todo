<script>
export default {
  name: 'TodoItem',
  props: ['todo'],
  methods: {
    deleteItem: function () {
      this.$emit('deleteInfo')
    }
  },
  render: function (h) {
    return (
      <li>
        <input type="checkbox" value={this.todo.finish} on-change={this.handleFinish}/>
        <span>{this.todo.content}</span>
        <button on-click={this.deleteItem}>x</button>
      </li>
    )
  },
  methods : {
    deleteItem: function () {
      this.$emit('deleteInfo')
    },
    handleFinish: function () {
      this.$emit('finishInfo')
    }
  }
}
</script>

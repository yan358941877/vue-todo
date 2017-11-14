

<script>
// import TodoComponent from './components/TodoComponent'
import TodoComponent from './jsx/TodoComponent'

export default {
  name: 'app',
  components: {
    TodoComponent
  },
  render: function (h) {
    return (
      <div id="app">
        <TodoComponent />
      </div>
    )
  }
}
</script>

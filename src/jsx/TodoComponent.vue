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
  render: function (h) {
    let self = this
    const directives = {
      todo: 'item',
      key: 'item.content',
      index: 'index'
    }
    const todoArray = this.todoList.map((item, index) => {
      return (
        <TodoItem todo={item} 
                  index={index} 
                  on-deleteInfo={self.deleteItem.bind(self, index)} 
                  on-finishInfo={self.handleFinish.bind(self, index)}></TodoItem>
      )
    })
    return (
      <div class="todo-component" >
        <input type="text" placeholder="edit me" value={self.newTodo} on-input={self.handleInput} on-keydown={self.handleSubmit}/>
        <ol>
          {todoArray}
        </ol>  
      </div>
    )
  },
  methods: {
    deleteItem: function (index) {
      this.todoList.splice(index, 1)
    },
    handleInput: function (event) {
      this.newTodo = event.target.value
    },
    handleSubmit: function (event) {
      if(event.keyCode === 13){
        this.todoList.push({
          content: this.newTodo,
          finish: false
        })
        this.newTodo = ''
      }
    },
    handleFinish: function (index) {
      this.todoList[index].finish = !this.todoList[index].finish
      console.log(this.todoList)
    }
  }
}
</script>

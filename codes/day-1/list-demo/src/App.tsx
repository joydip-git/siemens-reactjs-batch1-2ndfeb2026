import TodoList from "./components/todo-list/TodoList"

const App = () => {
  return (
    <div>
      <TodoList />
      <br />
      <ul>
        {
          [10, 20, 30].map(
            (num) => <li>{num}</li>
          )
        }
      </ul>
    </div>
  )
}

export default App
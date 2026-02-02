import { todos } from "../../data/todos";

const TodoList = () => {
    return (
        <div>
            <h2>
                Todo List
            </h2>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Task</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map(
                            (todo) => {
                                return (
                                    <tr key={todo.id}>
                                        <td>{todo.id}</td>
                                        <td>{todo.title}</td>
                                        <td>{todo.completed ? 'yes' : 'no'}</td>
                                    </tr>
                                )
                            }
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TodoList
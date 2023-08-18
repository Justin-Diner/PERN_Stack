import { useEffect, useState } from "react";
import EditToDo from "./EditToDo";

const ListToDos = () => {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    const response = await fetch("http://localhost:5000/todos")
    const jsonData = await response.json(); 

    setTodos(jsonData);
  }

  const deleteToDo = async (id) => {
    try {
      const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE"
      })
      
      setTodos(todos.filter(todo => todo.todo_id !== id))
    } catch (err) {
      console.error(err.message)
    }
  }
  
  useEffect(() => {
    getTodos();
  }, [])


  return (
    <>
      <div className="container mt-5">
        <h2>Basic Table</h2>           
        <table class="table">
          <thead>
            <tr>
              <th>Description</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/*<tr>
              <td>John</td>
              <td>Doe</td>
              <td>john@example.com</td>
            </tr>*/}
            {todos.map(todo => (
              <tr key={todo.todo_id}>
                <td>{todo.description}</td>
                <td><EditToDo todo={todo} /></td>
                <td><button className="btn btn-danger" onClick={() => deleteToDo(todo.todo_id)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default ListToDos;
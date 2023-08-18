import { useEffect, useState } from "react";

const ListToDos = () => {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    const response = await fetch("http://localhost:5000/todos")
    const jsonData = await response.json(); 

    setTodos(jsonData);
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
              <tr>
                <td>{todo.description}</td>
                <td>Edit</td>
                <td>Delete</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default ListToDos;
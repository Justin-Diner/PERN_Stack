import { useState } from "react";

const InputToDo = () => {
  const [description, setDescription] = useState("hello");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      });
      
      window.location = "/";
    } catch (err) {
      console.error(err.message)
    }
  }

  return (
      <div className="d-flex-col justify-content-center align-items-center">
        <h1 className="text-center mt-5">Pern Todo List</h1>
        <form className="d-flex justify-content-center align-items-center mt-5" onSubmit={onSubmitForm}>
          <input type="text" className="form-control w-75" value={description} onChange={(e) => setDescription(e.target.value)}/>
          <button className="btn btn-success">Add</button>
        </form>
      </div>
  )
}

export default InputToDo;
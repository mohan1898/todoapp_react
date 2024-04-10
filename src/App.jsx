import React, { useState } from 'react'
import './App.css';
import Todolist from './Todolist';
const App = () => {
  const [task,setTask]=useState("");
  const [todos,SetTodos]= useState([])
  const changeHandler = e =>{
    setTask(e.target.value)
  }
  const submitHandler = e =>{
    e.preventDefault();
    const newTodo =[...todos,task];
    SetTodos(newTodo);
    SetTask(" ");
  }
  const deleteHandler =(indexvalue) =>{
    const newTodos=todos.filter((todo,index) => index !==indexvalue)
    SetTodos(newTodos);
  }
  return (
    <div>
      <h2 className='text-primary'>TaskMaster</h2>
      <div className="card-container">
      <div className="card">
        <div className="card-body">
          <div className="card-title text-center">Todos-management</div>
            <form onSubmit={submitHandler} className='form-control'>
              <label className='form-label'>Enter Your Task</label>
              <input type="text" className='form-control my-4' value={task} onChange={changeHandler} name="task"/>
              <input type="submit"className='form-control my-4' value="Add" name="Add"/>
            </form>
          <Todolist todolist={todos} deleteHandler={deleteHandler}/>
        </div>
      </div>
      </div>
    </div>
  )
}

export default App
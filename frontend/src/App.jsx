import { useState,useEffect } from 'react'
import './App.css'
import CreateTodo from './components/CreateTodo.jsx'
import Todos from './components/Todos.jsx'
function App() {
  const [todos,setTodos]=useState([]);

  useEffect(() => {
    async function fetchData() {
        const response=await fetch("http://localhost:3000/to-dos");
        const json=await response.json();
        setTodos(json.todos);
    }
    fetchData();
  }, []);
  return(
    <div class="todos">
      <CreateTodo></CreateTodo>
      <br></br>
      <br></br>
      <div class="line"></div>
      <div class="intro2">
        <h1>MANAGE YOUR TASKS</h1>
      </div>
      <Todos todos={todos}></Todos>
    </div>
  )
}

export default App

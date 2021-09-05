import React, { useState } from "react";
import Header from './components/Header/Header'
import AddToDo from './components/AddToDo/AddToDo'
import ToDoList from './components/ToDoList/Todolist'

function App() {

  const [todo, setTodo] = useState([
  {
    id: 1,
    title: 'first todo',
    status: false
  },
  {
    id: 2,
    title: 'second todo',
    status: true
  },
  {
    id: 3,
    title: 'three todo',
    status: true
  },

  ])

  return (
    
    <div className="content">
      <Header />
      <AddToDo todo={todo} setTodo={setTodo}/>
      <ToDoList todo={todo} setTodo={setTodo} />
      
    </div>
  );
}

export default App;







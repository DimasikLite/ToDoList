import React, { useState } from "react";
import s from './TodoStyle.css'



function ToDoList ({todo, setTodo}) {
    const [edit, setEdit] = useState(null)
    const [value, setValue] = useState()

    function deleteToDo(id) {
        setTodo([...todo].filter(item => item.id!==id))
    }
    function closeToDo(id) {
        setTodo([...todo].filter(item => {
           if (item.id === id) {
               item.status = !item.status
           }
           return item
           
        }))
    }

    function saveTodo(id) {
        let newTodo = ([...todo].map(item => {
            if (item.id===id) {
                item.title = value
            }
            return item
        }))
        setTodo(newTodo)
        setEdit(null)
    }
    
    function editToDo(id, title) {
        setEdit(id)
        setValue(title)
    }

    return (
        <ul>
            {
                todo.map( item => (
                    <li key={item.id}>
                        {
                            edit === item.id ? 
                            <div>
                                <input value={value} onChange={(e) => setValue(e.target.value)}/>
                            </div> : 
                            <span className={ item.status === false  ? 'close' : ''  }>{item.title}</span>
                        }
                        {
                            edit === item.id ? 
                            <div>
                                <button onClick={()=>saveTodo(item.id)}>Сохранить</button>
                            </div> : 
                            <div>
                            <button onClick={ ()=>deleteToDo(item.id)}>Удалить</button>
                            <button onClick={ ()=>closeToDo(item.id)}>Закрыть</button>
                            <button onClick={ ()=>editToDo(item.id, item.title)}>Редактировать</button>
                            </div>
                            
                        }
                        
                        </li>
                ))
            }

        </ul>
    )
    
}

export default ToDoList;
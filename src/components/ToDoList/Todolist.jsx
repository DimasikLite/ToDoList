import React, { useState } from "react";




function ToDoList ({todo, setTodo}) {
    const [edit, setEdit] = useState(null)
    const [value, setValue] = useState()

    function deleteToDo(id) {
        setTodo([...todo].filter(item => item.id!==id))
    }
    function closeToDo(id) {
        let newToDo = [...todo].filter(item => {
           if (item.id == id) {
               item.status = !item.status
           }
           console.log(todo)
        })
    }

    function saveTodo(id) {
        let newTodo = ([...todo].map(item => {
            if (item.id==id) {
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
    console.log(todo)
    return (
        <ul>
            {
                todo.map( item => (
                    <li key={item.id}>
                        {
                            edit == item.id ? 
                            <div>
                                <input value={value} onChange={(e) => setValue(e.target.value)}/>
                            </div> : 
                            <span>{item.title}</span>
                        }
                        {
                            edit == item.id ? 
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
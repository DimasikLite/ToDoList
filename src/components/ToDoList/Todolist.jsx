import React from "react";




function ToDoList ({todo, setTodo}) {
    function deleteToDo() {
        console.log()
    }
    console.log(todo)
    return (
        <ul>
            {
                todo.map( item => (
                    <li key={item.id}>
                        {item.title}
                        <button onClick={ ()=>deleteToDo(item.id)}>Удалить</button>
                        </li>
                ))
            }

        </ul>
    )
    
}

export default ToDoList;
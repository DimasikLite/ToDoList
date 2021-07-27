import React from "react";




function ToDoList ({todo, setTodo}) {
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
    
    function editToDo(id) {
        setTodo()
    }
    console.log(todo)
    return (
        <ul>
            {
                todo.map( item => (
                    <li key={item.id}>
                        {item.title}
                        <button onClick={ ()=>deleteToDo(item.id)}>Удалить</button>
                        <button onClick={ ()=>closeToDo(item.id)}>Закрыть</button>
                        <button onClick={ ()=>editToDo(item.id)}>Редактировать</button>
                        </li>
                ))
            }

        </ul>
    )
    
}

export default ToDoList;
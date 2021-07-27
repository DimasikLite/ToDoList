import React, { useState } from "react"; 


function AddToDo({todo, setTodo}) {
    const [value, setValue] = useState('')

    
    function saveToDo() {
        setTodo(
            [...todo, {
                id: (todo.length + 1),
                title: value,
                status: true
            }]
        )
        setValue('')
    }
    return (
        <div className="addItem">
            <input placeholder="Введите задачу" value={value} onChange={(e) =>
                setValue(e.target.value)
            }/>
            <button onClick={saveToDo}>Сохранить</button>
        </div>
        
    )
}
export default AddToDo;
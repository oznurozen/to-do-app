import React from 'react'
import { useTodo } from "../../../contexts/ToDoContext";

function Item({todo}) {
  const { toggleTodo, destroyTodo } = useTodo();

  const onChange = (id)=> {
    toggleTodo(id);
  };

  const onDestroy = (id) => destroyTodo(id);


  return (
    //üstünü çizip cizmemekle alakalı competed = tamamlanmış
    //inputta onchange ve label todo.text button sonrasında yapılacak
    <li key={todo.id} className={todo.completed ? "completed": ""}>
        <div className="view">
            <input className="toggle" type="checkbox" checked={todo.completed} onChange={()=> onChange(todo.id)} />
            <label>{todo.text}</label>
            <button className="destroy" onClick={()=> onDestroy(todo.id)}></button>
        </div>
    </li>

  )
}

export default Item
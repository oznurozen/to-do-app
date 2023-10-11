import React from 'react'
import { useTodo } from "../../../contexts/ToDoContext"
import Item from './Item';

let filtered = null;

function List() {
  const { todos, filter } = useTodo(); // filter ilk etapta eklenmeyecek en son eklenecek

  filtered = todos; // 10-18 satırlar en son yazılacak

  if(filter !== "all"){
    filtered = todos.filter((todo)=>
      filter === "active"
        ? todo.completed === false && todo
        : todo.comleted === true && todo
    );
  }

  return (
    <ul className="todo-list">
        {filtered.map((todo)=>(  //todos.map ten filter.map yapıyoruz filtreleme işleminde
           <Item key={todo.id} todo={todo}/> 
        ))}
			
		</ul>
  )
}

export default List
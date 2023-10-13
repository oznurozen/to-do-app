import React from 'react'
import { useTodo } from "../../../contexts/ToDoContext"
import Item from './Item';

let filtered = null;

function List() {
  const { todos, filter } = useTodo(); // filter ilk etapta eklenmeyecek en son eklenecek

  filtered = todos; // 10-18 satırlar en son yazılacak

  if(filter !== "all"){
    filtered = todos.filter((todo)=> //todos altında filtreleme yapıyoruz ve her defasında bir todo geliyor
      filter === "active"  //filter eğer aktif ise
        ? todo.completed === false && todo //todo.completat ları false olanları alıyroum sadece
        : todo.comleted === true && todo //aksi halde ise true alnaları ver
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
import React, {createContext, useContext, useState} from "react";
import { v4 as uuidv4} from "uuid";

const TodoContext = createContext();

export const TodoProvider = ({children}) => {
    const [filter, setFilter] =useState("all")
    const [todos, setTodos] = useState([
       {
        id:1,
        text:"Learn React",
        completed: true,
       },
       {
        id:2,
        text:"Learn Javascript",
        completed: false,
       },
    ]);

    const addTodo = (text) =>
        setTodos((prev) => [...prev, {id: uuidv4(), completed:false, text}]);

    const toggleTodo = (id) =>{
        const cloned_todos = [...todos];
        //güncellemek istediğim elemanın id sini kullanarak o objeye erişmem gerekiyor.
        const itemIndex = cloned_todos.findIndex((todo) => todo.id ===id); // too.id nin denkse parametreden gönderdiğimiz id(onchange) ye onu bana söylesin
        const item = todos[itemIndex];  //indexsi bulduktan sonra indexse sahip olan obje
        item.completed = !item.completed;
           // console.log(itemIndex);
            // console.log("item", item);
       // console.log("cloned_todos", cloned_todos);
        setTodos(cloned_todos);
    };

    const destroyTodo = (id) =>{
        const cloned_todos = [...todos];
    
        const itemIndex =  cloned_todos.findIndex((todo)=>todo.id === id);
        cloned_todos.splice(itemIndex,1);//cloned_todos altındaki itemIndex li elemanı aray üzerinden kaldır.
        setTodos(cloned_todos);
    
      }

    const values = {  //contexte geçeceğim veriler
        todos,
        setTodos,
        addTodo,
        toggleTodo,
        destroyTodo,
        filter,
        setFilter,
       
    };

    //value propuna hazırladığım verileri geçiyorum.
    return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>
};

export const useTodo = () => { //contexti doğrudan kullanabilmek için custum özelleştiirlmiş bir hook yazıyoruz
    const context = useContext(TodoContext);

    if(context === undefined){
        throw new Error("useTodo hook unun TodoProvider bileşenin içinde çağrılması gerekir.");
    }

    return context;
};
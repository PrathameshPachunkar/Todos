import react from 'react'

import TodoItem from "./todo";

export default function  TodoList (props){
  return(
    
    <div className="container">
      <h3 className="text-center my-3">
        Todos List
      </h3>
     {props.todos.map((todo)=>{return( <TodoItem todo={todo} key = {todo.id}onDelete={props.onDelete}/>);})}
     
    </div>
    
  );
}



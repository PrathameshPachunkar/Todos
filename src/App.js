
import './App.css';
import Header  from './MyComponents/Header';
import Footer from './MyComponents/Footer'
import TodoList from './MyComponents/todolist';
import  {AddTodos}  from './MyComponents/addTodos';
import { useState } from 'react';
function App() {
  const onDelete = (todo)=>{

    setTodos(todos.filter((e)=>{return e!==todo}))
  }
  const addTodos = (name,desc)=>{
   
    let sno = todos.length+1
   const mytodo ={
    sno: sno,
    name: name,
    desc: desc
   }
   setTodos([...todos,mytodo])
  }
  const [todos,setTodos]= useState([
    {
      id:1,
      name:"Market",
      desc:"go to the market"
    },
    {
      id:2,
      name:"Ghat",
      desc:"go to the market"
    },
    {
      id:3,
      name:"office",
      desc:"go to the market"
    },
    
    
    
  ]);

 
  return (
 <>
 <Header title="Todos List"/>
 <AddTodos addTodos={addTodos}/>
 <TodoList todos={todos} onDelete={onDelete}/>
 <Footer/>
 </>
  );
}

export default App;

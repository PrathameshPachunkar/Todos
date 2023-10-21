
export default function TodoItem ({todo,onDelete}){
    return(
        
        <div >
            <h4>{todo.name}</h4>
        <p>{todo.desc}</p>
        <button className ="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
        </div>
        
    );
}
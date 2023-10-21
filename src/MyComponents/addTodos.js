import {useState} from 'react'
export const AddTodos=({addTodos})=>{
    const [name, settitle] = useState("")
    const [desc, setdesc] = useState("")
    const submit =(e)=>{
        e.preventDefault();
        if(!name||!desc){
            alert("Title or Description cannot be empty");
        }

        addTodos(name,desc);
    }
    return(
        <div className="container my-3">
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" value={name} onChange={(e)=>{settitle(e.target.value)}} className="form-control" id="todotitle" aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="Description" className="form-label">Description</label>
    <input type="text" value={desc} onChange={(e)=>{setdesc(e.target.value)}} className="form-control" id="desc"/>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
        </div>
    );
}
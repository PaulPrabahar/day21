import { useEffect, useState } from "react";
const Todo = ()=>{
    
        const [name, setName] = useState("Prabahar");
        const [tasks, setTasks] = useState([]);

        function readTask(){
            fetch("http://localhost:4000/todotask")
            .then((response) => response.json())
            .then((data) =>{
                setTasks(data.filter((task) => task.task.includes(name)))
            })
            .catch((error)=> console.error(error));
        
    }
    //useEffect(()=>{console.log("useEffect")},[]);
    //useEffect(()=>{console.log("name")},[name]);
    //useEffect(()=>{console.log("tasks")},[tasks]);

    useEffect(()=>{readTask()},[name]);
    console.log(tasks);
      

    return(<div className="app">
        <h2> TodoList</h2>
        <h3>{name}</h3>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
        <button onClick={()=>{readTask();}}>Read</button>
        <ul>
            {
                tasks.map((task)=>(
                <li key={task.id}>
                    {task.task}
                </li>
                ))
            }
        </ul>
    </div>)

}

export default Todo;
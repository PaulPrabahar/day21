import { setAmount, deposit, withdraw } from "./todoSlice";
import { useDispatch, useSelector } from "react-redux";

const Todo = () =>{
    const {tasks,errorMessage,newTask} = useSelector((store) => store.todo);
    const dispatch = useDispatch();

    return(
         <div className="app">
         <h1>TODO Tasks</h1>
         <h2>CRUD using react saga</h2>
         <div className="todo">
            <input type="text"
            value={newTask}
            onchange={(e)=>{
                dispatch(this.setNewTask(e.target.value));
            }}>
            </input>
            <button onClick={()=>{
                const newId= Math.max(...tasks.map((task)=>task.id));
                dispatch(
                    {type:"CREATE-TODO-TASK-SAGA"
                     postData:{id:Number(newId)+1,
                     tasks:newTask,
            }}
                )
            }}></button>
         
            </div>  
        </div>
    )
}

export default Todo;
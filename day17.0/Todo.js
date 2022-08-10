import {setNewTask,setUpdatedTask , setDeleteId } from "./todoSlice";
import { useDispatch, useSelector } from "react-redux";
import "./Todo.css";

const Todo=()=> {
    const {tasks, errorMessage, newTask} = useSelector((store)=> store.todo);
    const dispatch = useDispatch();
    return(
        <div className="app">
        <h1>TODO<br></br></h1>
        <h1>SAgA</h1>
        <div className="toto"></div>
        <input
            type="text"
            value={newTask}
            onChange={(e) => {
                dispatch(setNewTask(e.target.value));
            }}
            ></input>
        <button 
            onClick={() => {
                const newId = Math.max(...tasks.map((task) => task.id));
                dispatch(
                    {type: "CREATE-TODO_TASK_SAGA",
                    postData: {id:Number(newId)+1,
                    task: newTask,}
            });
            }}
            >create</button>
        <button  onClick={() => dispatch({type:"READ_TODO_TASK_SAGA"})}>Read</button>
        <h2>{errorMessage && errorMessage}</h2>

   
    
        <ul>{tasks.map(
            (curTask) =>(
                <li key={curTask.id}> 
                <input
                    type="text"
                    value={curTask.task}
                    onChange={(e) => {
                   dispatch(setUpdatedTask({id:curTask.id, task:e.target.value}));
                }}>
                </input>
            <button onClick={() => {
                dispatch(
                    { type: "UPDATE_TODO_TASK_SAGA",
                       putData: {
                        id: curTask.id,
                        task: curTask.task,
            }});
            }} >
            Update
            </button>
            <button onClick={() =>{ dispatch (setDeleteId({delId: curTask.id}));
           dispatch( {type: "DELETE_TODO_TASK_SAGA",
           delData: {
                id: curTask.id}})
            
            }}>
            Delete
            </button>
            </li>
            ))};
        </ul>
       </div>
       
        );
            }

export default Todo;
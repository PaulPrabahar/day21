import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    tasks:[],
    errorMessage:"",
    newTask: "",
    delId:0,
};
const todoSlice = createSlice(
    {
        name:"todo",
        initialState,
        reducers:{
            setNewTask:(state, action)=>{
                console.log(action.payload);
                state.newTask=action.payload;
                console.log(action.payload);
            },
            setUpdatedTask: (state,action) => {
                state.tasks= state.tasks.map((task)=>{
                    if (task.id === action.payload.id){
                        task.task =action.payload.task;
                    }
                    return task;
                });
            },
            setDeleteId: (state,action) =>{
                state.delId = action.payload.delId;
            },
            readTodoTask(state,action){
                console.log(state.tasks);
                console.log(action.payload);
                state.tasks=action.payload;
                console.log("tasks:",state.tasks);
                state.errorMessage="";
            },
            createTodoTask(state,action){
                state.tasks=[...state.tasks,action.payload];
                state.newTask = "";
                state.errorMessage = "";
                console.log(action.payload);
            },
            updateTodoTask(state,action){
                state.errorMessage = "";
            },
            deleteTodoTask(state,action){
                state.tasks = state.tasks.filter((task) => (task.id!== state.delId));
                state.errorMessage = "";
            },
            setErrorMessage(state,action){
                state.errorMessage = action.payload.errorMessage;
            },
           
        }
    }  
);
export const {setNewTask,setUpdatedTask , readTodoTask, setErrorMessage, setDeleteId, updateTodoTask, deleteTodoTask, createTodoTask} = todoSlice.actions;
export default todoSlice.reducer;
import { createSlice} from "@reduxjs/toolkit";

const initialstate = {tasks:[], errorMessage:"", newTask};

const todoSlice = createSlice(
    {
        name:"Bank",
        initialstate,
        reducers:{
            setNewTask: (state, actions)=>{state.newTask = actions.payload},
            deposit: (state, actions)=>{state.bankbalance += actions.payload
            console.log(state.bankbalance);
        },
            withdraw: (state, actions)=>{state.bankbalance -= actions.payload
            console.log(state.bankbalance);
        },
        readTodoTask(state,action){
            state.tasks = [...state.tasks,action.payload];
            state.errorMessage ="";
        },
        setErrorMessage(state, action){
            state.errorMessage = action.payload.errorMessage;
        }


        }
    }
);

export const {setAmount, deposit, withdraw, readTodoTask, setErrorMessage} = todoSlice.actions;
export default todoSlice.reducer;
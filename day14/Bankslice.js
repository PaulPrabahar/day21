import { createSlice} from "@reduxjs/toolkit";

const initialstate = {amount:0, bankbalance:0}

const Bankslice = createSlice(
    {
        name:"Bank",
        initialstate,
        reducers:{
            setAmount: (state, actions)=>{state.amount = actions.payload},
            deposit: (state, actions)=>{state.bankbalance += actions.payload
            console.log(state.bankbalance);
        },
            withdraw: (state, actions)=>{state.bankbalance -= actions.payload
            console.log(state.bankbalance);
        },

        }
    }
);

export const {setAmount, deposit, withdraw} = Bankslice.actions;
export default Bankslice.reducer;
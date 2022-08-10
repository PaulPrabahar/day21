import { setAmount, deposit, withdraw } from "./Bankslice";
import { useDispatch, useSelector } from "react-redux";

const Bank = () =>{
    const {amount,bankbalance} = useSelector((store) => store.bank);
    const dispatch = useDispatch();

    return(
        <div className="app">
            Bank page
            <input type="text" value={amount} onChange={(e)=> {dispatch(setAmount(e.target.value))}}></input>
            <button onClick={()=> {dispatch(deposit(Number(amount)))}} >Deposit</button>
            <button onClick={()=> {dispatch(withdraw(amount))}}>withdraw </button>
            {bankbalance}
        </div>
    )
}

export default Bank;
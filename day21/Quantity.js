import { useState } from "react";
import useDisable from "./useDisable";

const Quantity = ()=>{
    const[quantity, setquantity] = useState(0);

    const addqty = ()=>{
        setquantity (quantity + 1)
     };
    const minusqty = ()=>{
        setquantity (quantity - 1)
    };
    const disableMinus = useDisable(quantity);
    return(<div>
            <div>
        <lable>Quantity</lable>
        <h1>AddQuantity</h1>
        <input type="text" className="qty" value={quantity}/>
        <button onClick={addqty}>+</button>
        <button onClick={minusqty} disabled={disableMinus}>-</button>
    </div>
    </div>);
};
export default Quantity;
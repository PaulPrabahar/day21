import { useEffect, useState } from "react";
const useDisable = (quantity)=>{
    const [disableMinus, setDisableaMinus] = useState(false);
    useEffect(() => {
        if(quantity <=0){
            setDisableaMinus(true);
        } else{
            setDisableaMinus(false);
        }
    }, [quantity]);
    return(disableMinus);
}
export default useDisable;
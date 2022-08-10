import { useContext } from "react";
import { appContext } from "./App";
const Home = ()=>{
    const appCtx = useContext(appContext);
    return(<div className="app"> 
    Home
    <h2>{appCtx.loginUser}</h2>
    </div>)
}

export default Home;
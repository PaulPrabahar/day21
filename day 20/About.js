import { useContext } from "react";
import { appContext } from "./App";
import {Link} from 'react-router-dom';
const About = ()=>{
  const appCtx = useContext(appContext);
    return(<div> About 
       <h2>{appCtx.loginUser}</h2>
        <ul>
        <li>
          <Link className="Link" to="Contuctus"> Contuctus</Link>
        </li>
        </ul>
    </div>)
}

export default About;
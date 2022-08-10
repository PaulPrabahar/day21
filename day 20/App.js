import './App.css';
import { BrowserRouter, Link, Route, Routes, NavLink } from 'react-router-dom';
import Home from './Home';
import Catogory from './Catogory';
import Order from './Order';
import Product from './Product';
import Contuctus from './Contuctus';
import About from './About';
import Pagenotfound from './Pagenotfound';
import User from './User';
import { useState, createContext} from 'react';

export const appContext = createContext("");
export  function App() {
  const [useName, setUseName] = useState("Prabahar");
  return (
     <div className='app'>  
     <BrowserRouter>
     <appContext.Provider value={{loginUser:useName}}>
     <div>
      <input type="text" value={useName} onChange={(e)=>setUseName(e.target.value)}></input>
      <h1>day15 class-react router</h1>
      <ul>

        <li>
          <NavLink className="Link" to="/" activeClassName="active"> Home </NavLink>
        </li>
        <li>
          <Link className="Link" to="Catogory"> Catogory</Link>
        </li>
        <li>
          <Link className="Link" to="Order"> Order</Link>
        </li>
        <li>
          <Link className="Link" to="Product"> Product</Link>
        </li>
        <li>
          <Link className="Link" to="About"> About</Link>
        </li>

      </ul>
      <Routes>

        <Route path="/" element={<Home/>}> </Route>
        <Route path="Catogory" element={<Catogory/>}> </Route>
        <Route path="Order" element={<Order/>}> </Route>
        <Route path="Product" element={<Product/>}> </Route>
        <Route path="About">
          <Route index={true} element={<About/>}/>
          <Route path="Contuctus" element={<Contuctus/>}/>
        </Route>
        <Route path="*" element={<Pagenotfound/>}> </Route>
        <Route path="/User/:id" element={<User/>}> </Route>
      </Routes>
     </div>

     </appContext.Provider>
     </BrowserRouter>
     </div>
  );
}

export default App;

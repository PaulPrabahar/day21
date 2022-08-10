import React,  { Component } from "react";
class Submit extends Component{
    constructor(){
        super();

        this.Email = React.createRef();
        this.Password = React.createRef();
        this.Country = React.createRef();
        this.state ={
            email:"",
            Password:"",
            country:"",
            term:false,

        }
    }


    handleSubmit(e){
        e.preventDfault();
        alert("incorrect values are:" +this.Email.current.value
        +"\n"
        +this.Password.current.value
        +"\n"
        +this.Country.current.value);
    }

    render(){
        return( <forms onSubmit={this.handleSubmit.bind(this)}>
            <h1>Presonal info</h1><br></br>
            
            <div>
            <textarea type="text" ref={this.Country}></textarea><br></br>
            <label>Email:</label><br></br>
            <input type="text" ref={this.Email}></input><br></br>
            </div>

            <div>
            <lable>Password </lable><br></br>
            <textarea type ="text" ref={this.Password}></textarea><br></br>
            </div>
            
            <div>
            <label>Country</label><br></br>
            <select>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            </select>
            </div>

            <div>
            <input type="checkbox"></input>
            <label> I Agree With The Terms</label>
            </div>
            
            <button type="submit">submit</button><br></br>
            </forms>)
            
    }
}
export default Submit;

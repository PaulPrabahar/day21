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
       
        return(
            <div className="Submit">
            <forms onSubmit={this.handleSubmit.bind(this)}>
            <div className="Form-container">
            <h1 className="header">Presonal info</h1><br></br>
            </div>

            <div className="email-container">
            <label>Email:</label><br></br>
            <input type="text" ref={this.Email}></input><br></br>
            </div>

            <div className="password-container">
            <lable>Password </lable><br></br>
            <textarea type ="text" ref={this.Password}></textarea><br></br>
            </div>

            <div className="country-container">
            <label>Country</label><br></br>
            <textarea type="text" ref={this.Country}></textarea><br></br>
            <select>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            </select>
            </div>

            <div className="check-container">
            <input type="checkbox"></input>
            <label > I Agree With The Terms</label><br></br>
            </div>

            <div>
            <button type="submit">submit</button><br></br>
            </div>

            </forms>
            </div>)
    }
            

            
}
export default Submit;

import React,  { Component } from "react";
class Submitset extends Component{
    constructor(){
        super();

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
    

    handleEmail(e){
        this.setState({email:e.target.value})
        console.log(this.state.email)
    }
    handlePassword(e){
        this.setState({Password:e.target.value})
        console.log(this.state.Password)
    }
    handleCountry(e){
        this.setState({country:e.target.value})
        console.log(this.state.country)
    }
    handleTerm(e){
        this.setState({term:!this.state.term})
        console.log(this.state.term)
    }

    

    render(){
        return( <forms onSubmit={this.handleSubmit.bind(this)}>
            <h1>Presonal info</h1><br></br>
            
            <div>
            <label>Email:</label><br></br>
            <input type="email" value={this.state.email} onChange={this.handleEmail.bind(this)} required></input><br></br>
            </div>

            <div>
            <lable for="pwd">Password </lable><br></br>
            <textarea type ="password" id="pwd" name="pwd" minLength="8" value={this.state.Password} onChange={this.handlePassword.bind(this)}></textarea><br></br>
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
            <input type="checkbox" value={this.state.term} checked={this.state.term} onChange={this.handleTerm.bind(this)}></input>
            <label> I Agree With The Terms</label>
            </div>
            
            <button type="submit">submit</button><br></br>
            </forms>)
            
    }
}
export default Submitset;

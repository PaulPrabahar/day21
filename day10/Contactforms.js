import React, { Component } from "react";
class Contactforms extends Component{

    constructor(){
        super();

        this.name = React.createRef();
        this.Address = React.createRef();
        this.MobileNo = React.createRef();
    }

    handleSubmit(e){
        e.preventDfault();
        alert("incorrect values are:" +this.name.current.value
        +"\n"
        +this.Address.current.value
        +"\n"
        +this.MobileNo.current.value);
    }
    render(){
        return(<forms onSubmit={this.handleSubmit.bind(this)}>
            <h1>Contact</h1><br></br>
            
            <label>name:</label><br></br>
            <input type="text" ref={this.name}></input><br></br>
            <label>Address</label><br></br>
            <input type="text" ref={this.Address}></input><br></br>
            <label>MobileNo:</label><br></br>
            <textarea type="text" ref={this.MobileNo}></textarea><br></br>
            <button type="submit">submit</button><br></br>
            </forms>)
    }
}
export default Contactforms;
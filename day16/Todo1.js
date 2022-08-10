import "./Todo.css";
import { Component } from "react";                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
class Todo1 extends Component {
    constructor(){
        super()
        this.state = { 
          mytasks: [],
          newId:0,
          newTask:"",
          updatedTask:"",
          url:"http://localhost:4000/todotask",
        };
          this.readTask = this.readTask.bind(this);
          this.createTask = this.createTask.bind(this);
          this.updateTask = this.updateTask.bind(this);
          this.deleteTask = this.deleteTask.bind(this);
 }
 readTask(){
      const data = fetch("http://localhost:4000/todotask")
         .then((response) => response.json())
         .then((data) => this.setState({mytasks: data }))
         .catch(error => console.log("Error", error));
         console.log(this.state.mytasks);
         console.log(data);
 }
 setNewTask(e){
  this.setState({ newTask: e.target.value })
}

createTask(url,postData){
          fetch(url,{
            method:"post",
            headers:{
              "Content-Type":"application/json",
              "x-access-token":"token-value",
            },
            body:JSON.stringify(postData),
          })
          .then((response) => response.json())
          .then((data) =>{ 
          this.setState({mytasks: data });
          this.setState({ newId: 0});
          this.setState({ newTask:""});
      })
        
}
updateTask(){
  
}

deleteTask(){

}

 render(){
    return(
      <div className="Todo task">
        <h2>Todo List</h2>
        <h2>CRUD operation</h2>
      <input type="text"  value = {this.state.newTask} onChange={(e) => {this.setNewTask(e);}}></input> 
      <button onClick={() => {
        this.setState({
          newId:Math.max(...this.state.mytasks.map((task)=>task.id)),});this.createTask(this.state.url,{
            id:Number(this.state.newId)+1,
            task:this.state.newTask,
          })}}>
             create
      </button>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
      <button onClick={() => {this.readTask(); }} > Read</button>
      <div>{this.state.newTask}</div>
      <ul>{this.state.mytasks.map((i)=>(<li key={i.id}> <input type ="text" value = {i.task}>
      </input>
      <button onClick={() => {this.upadateTask(); }} > Update</button>
      <button onClick={() => {this.deleteTask(); }} > Delete</button> </li>))}
      </ul>
      </div>
      );
    }
  }

 export default Todo1;   

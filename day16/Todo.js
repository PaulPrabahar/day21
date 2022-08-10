import {Component} from "react";

class Todo extends Component {
    constructor(){
        super()
        this.state = {
            mytask: [],
            newTask:"",
            newId:0,
            updateTask:"",
            url:"http://localhost:4000/todotask",
        };
        this.setNewTask= this.setNewTask.bind(this);
        this.setUpdatetask= this.setUpdatetask.bind(this);
        this.readTask = this.readTask.bind(this);
        this.createTask = this.createTask.bind(this);
        this.updateTask = this.updateTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    }
    readTask(url){
         fetch(url)
        .then((response) => response.json())
        .then((todotask) => this.setState({ mytask: todotask}))
        .catch(error => console.log("Error",error))
    }
    setNewTask(e){
        this.setState({newTask: e.target.value});
    }
    createTask(url,postData){
        fetch(url,{
            method:"post",
            header:{
                "content-type":"application/JSON",
                "x-access-token":"token-value"
            },
            body:JSON.stringify(postData),
        })
        .then((response) => response.json())
        .then((data) => {

            this.setState({ mytask:[...this.state.mytask, data]});
            this.setState({ newTask: ""});
            this.setState({ newId: 0});
        })

    }
    updateTask(){

    }
    deleteTask(){

    }

    render(){
        return(
        <div>
            <h1> Todo Task</h1>
            <input type= "text" value={this.state.newTask} onChange={(e) =>{this.setNewTask(e);}}></input>
            <button onClick={()=> {this.setState({newId: Math.max(this.state.mytask.map((task => task.id)),)});
            this.createTask(this.state.url,{
                id:Number(this.state.newId) + 1,
                task:this.state.newTask,
            });
            }}> create </button>
            <button onClick={() => {this.readTask();}}> read </button><br></br>
            {this.state.newTask}
            <ul>
            { 
            this.state.mytask.map((task)=>(<li key={task.id}> 
            <input type="text" value={task.id} ></input>
            <button onClick={() => {this.updateTask();}}> Update </button>
            <button onClick={() => {this.deleteTask();}}> Delete </button> 
            </li>))
            }
           </ul>
        </div>
        );
    }

}

export default Todo;
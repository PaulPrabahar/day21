import { Component } from "react";
class Lifecycle extends Component{

    constructor(){
        super();
        this.state={message:""}
    }
    componentWillUnmount(){
        console.log("jhg ugiug hhi")
    }
    componentDidMount(){
        console.log("jhs shd u h uh h ")
    }
    shouldComponentUpdate(){
        console.log("gd   gsg  ");return (true)
    }
    componentWillUpdate(){
        console.log("udusub u huis")
    }
    componentDidUpdate(){
        console.log("dgufd gu us ");
    }
    changestate(){
        this.setState({message:"hello world"});
    }
    render(){
        return(<div>
            <button onClick={this.changestate.bind(this)}>change state</button>
            <h1>{this.state.message}</h1>
            </div>)
    }
}
export default Lifecycle;
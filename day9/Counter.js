import { Component } from "react";
class Counter extends Component {
    constructor(props){
        super(props);
        this.greet={props};
        this.state={
            count:0,
            action:""
        }
    }
    handleClick(){
        this.setState({count:this.state.count+1})
        this.setState({action:"clicked"})
    }
    render(){
        return(<div className="counter"> welcome to {this.greet.props.name} Developer
            <button onClick={this.handleClick.bind(this)}>
            {this.state.count}
            </button>
            <p>{this.state.action}</p>
            </div>)
    }
}
export default Counter;
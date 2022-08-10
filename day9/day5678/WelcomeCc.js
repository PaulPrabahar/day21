import { Component } from "react";

class WelcomeCc extends Component{
    constructor(props){
        super(props);
        this.mode ={props};
    }
    render() {
        return(<div> world {this.mode.props.name} hello!!</div>)
    };
}
export default WelcomeCc;
import Eventchild from "./Eventchild";

const Event =()=>{
    function hello(){
        alert("sayhelloworld")
    }
    return(<div>
        <button onClick={hello}> function say hello</button>
        <Eventchild event = {hello}/></div>

    )

}
export default Event;
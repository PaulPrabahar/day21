import Review2 from "./Review2";

const Review =()=>{
    function hello(){
        alert("sayhelloworld")
    }
    return(<div>
        <button onClick={hello}> function say hello</button>
        <Review2 event = {hello}/></div>

    )

}
export default Review;
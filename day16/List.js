const List = ()=>{
    const todoList =[
        {id:1, task:"Buy Grocery"},
        {id:2, task:"Meet Friends"},
        {id:3, task:"Meet family"},
        {id:4, task:"watch movie"},
        {id:5, task:"pay eb bill"},
    ];

    return(<div>
        <h2> TodoList</h2>
        <ul>
            {
                todoList.map((task)=>(
                <li key={task.id}>
                    {task.task}
                </li>
                ))
            }
        </ul>
    </div>)

}

export default List;
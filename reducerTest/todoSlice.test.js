import todoReducer, {readTodoTask} from "./todoSlice";
import todoTaskData from "./todotask.json"

test("readTodoTask Reducer Testing", () => {
    const initialState = {task:[]};
    const action = readTodoTask(todoTaskData);
    const result = todoReducer(initialState, action);
    expect(Object.keys(result.tasks).length).toEqual(todoTaskData.length);
});
import {takeEvery, call, put} from "redux-saga/effects";
import axios from "axios";
import { setErrorMessage} from "./todoSlice";
const url="http://localhost:4000/todotask";
let callAPI = async ({url,method,data})=>{
    return await axios({url,method,data});
}
export function* createTodoTaskSaga(action){
    try{
        let {data} = yield call(()=>callAPI({url:url, method: "POST", data:action.postData}));
        console.log(data);
        yield put(createTodoTaskSaga(data));
    }
    catch(e){
        yield pit(setErrorMessage(e.message));
    }
}
export function* readTodoTaskSaga(){
    try{
        let {data} = yield call(()=>callAPI({url:url}));
        console.log(data);
        yield put(readTodoTaskSaga(data));
    }
    catch(e){
        yield put(setErrorMessage(e.message));
    }
}
export function* updateTodoTaskSaga(action){
    try{
        let {data} = yield call(()=>callAPI({url:`${url}/${action.putData.id}`, method: "PUT", data:action.putData}));
        console.log(data);
        yield put(updateTodoTaskSaga(data));
    }
    catch(e){
        yield pit(setErrorMessage(e.message));
    }
}
export function* deleteTodoTaskSaga(action){
    try{
        let {data} = yield call(()=>callAPI({url:`${url}/${action.putData.id}`, method: "DELETE", data:action.postData}));
        console.log(data);
        yield put(deleteTodoTaskSaga(data));
    }
    catch(e){
        yield pit(setErrorMessage(e.message));
    }
}
export default function* rootSaga(){
    yield takeEvery("CREATE_TODO_TASK_SAGA", createTodoTaskSaga);
    yield takeEvery("READ_TODO_TASK_SAGA", readTodoTaskSaga);
    yield takeEvery("UPDATE_TODO_TASK_SAGA", updateTodoTaskSaga);
    yield takeEvery("DELETE_TODO_TASK_SAGA", deleteTodoTaskSaga);
}
import {takeEvery,call,put} from "redux-saga/effects";
import axious from "axious";

let callAPI = async({url,method,data}) =>{
    return await axious({url,method,data});
}

export function* createTodoTaskSaga(){}
export function* readTodoTaskSaga(){
    try{
        let {data}= yield call(()=>(callAPI({url:url})));
        yield put(readTodoTask(data));
    }
    catch(e){
        yield put(setErrorMessage(e.message));
    }
}
export function* updateTodoTsakSaga(){}
export function* deleteTodoTaskSaga(){}
export default function* rootSaga(){
    yield takeEvery("CREATE-TODO-TASK-SAGA",createTodoTaskSaga);
    yield takeEvery("READ-TODO-TASK-SAGA",readTodoTaskSaga);
    yield takeEvery("UPDATE-TODO-TASK-SAGA",updateTodoTsakSaga);
    yield takeEvery("DELETE-TODO-TASK-SAGA",deleteTodoTaskSaga);
}
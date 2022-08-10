import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import saga from './saga'
import todoReducer from "./todoSlice";
let sagaMiddleware= createSagaMiddleware();
export const store = configureStore(
    {reducer:{
        todo:todoReducer
    },
        middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({thunk:false}).concat(sagaMiddleware),
});

sagaMiddleware.run(saga);


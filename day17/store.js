import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import todoReducer from "./todoSlice";
import { Saga } from "redux-saga";

export const store = configureStore(
    {reducer:{
        Todo:todoReducer
    },
    middleware:(getDefaultMiddleware) =>getDefaultMiddleware({thunk:false}.concat(sagaMiddleware)),
}
);


export default store;
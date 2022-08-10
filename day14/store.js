import { configureStore } from "@reduxjs/toolkit";
import bankReducer from "./Bankslice";

export const store = configureStore(
    {reducer:{
        bank:bankReducer
    }
}
);

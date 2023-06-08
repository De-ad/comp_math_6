import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {resultSlice} from "./slices/resultSlice";
import {errorSlice} from "./slices/errorSlice";


export const store = configureStore({
    reducer: {
        result : resultSlice.reducer,
        error : errorSlice.reducer
    },
})
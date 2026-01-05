import { configureStore } from "@reduxjs/toolkit";
import flightReducer from "./Slices/FlightsSlice"


export const store =configureStore({
    reducer:{
        flight : flightReducer,
    },
})
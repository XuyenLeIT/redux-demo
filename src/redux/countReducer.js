import { createSlice } from "@reduxjs/toolkit";

const countReducer = createSlice({
    name:"counter",
    initialState:{
        value:0
    },
    reducers:{
        increament:(state,action)=>{
            state.value += action.payload;
        },
        decreament:(state,action)=>{
            state.value -= action.payload;
        },
    }
});
export const {increament,decreament} = countReducer.actions;
export default countReducer.reducer;
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let apiProduct = "http://localhost:4000/products";
export const fetchProducts = createAsyncThunk("products/fetchProduct",async()=>{
    try {
       const response = await axios.get(apiProduct);
       return response.data.data;
    } catch (error) {
        console.log("error fetch api",error);
    }
})
const productReducer = createSlice({
    name:"productReducer",
    initialState:{
        products:[],
        product:{},
        status:"idle"
    },
    reducers:{

    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchProducts.fulfilled,(state,action)=>{
            state.products = action.payload;
            state.status = "success"
        })
    }
});
export default productReducer.reducer;
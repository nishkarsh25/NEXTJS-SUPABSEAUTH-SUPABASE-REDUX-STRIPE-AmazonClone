import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./index";

interface CartSate {
    cart: any,
}

const initialState:CartSate = {
    cart:[]
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    
});

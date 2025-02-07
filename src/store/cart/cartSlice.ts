import { TProduct } from "@/CustomTypes";
import {  createSlice } from "@reduxjs/toolkit";


type TCartState = {
     items:{[key: number] : number};
     productFullInfo: TProduct[];
}
const initialState :TCartState = {
    items: {},
    productFullInfo : []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart:(state , action)=>{
            if(state.items[action.payload]){
                state.items[action.payload]++
        }else{
            state.items[action.payload] = 1;
        }
    }
}});


export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;
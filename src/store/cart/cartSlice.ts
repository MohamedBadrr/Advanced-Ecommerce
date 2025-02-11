import { TLoading, TProduct } from "@/CustomTypes";
import {  createSlice } from "@reduxjs/toolkit";
import actGetProductsByItems from "./act/actGetProductsByItems";

type TCartState = {
     items:{[key: string] : number};
     productsFullInfo: TProduct[];
     loading: TLoading;
     error: null | string;
}
const initialState :TCartState = {
    items: {},
    productsFullInfo : [],
    error:null,
    loading:"idle"
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
    },
    // extraReducers:(builder)=>{
    //     builder.addCase(actGetProductsByItems.pending , (state) => {
    //         state.loading = "pending";
    //         state.error = null;
    //     });
    //     builder.addCase(actGetProductsByItems.fulfilled, (state, action) => {
    //         state.loading = "succeeded";
    //         state.productsFullInfo = action.payload; 
    //         state.error = null;
    //     }) ;
    //     builder.addCase(actGetProductsByItems.rejected , (state , action) => {
    //         state.loading = "failed";
    //         if(action.payload && typeof(action.payload) === "string" ){
    //             state.error = action.payload;
    //         }
    //     });
    // }

});

export {
    actGetProductsByItems  
}
export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;
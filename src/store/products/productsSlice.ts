import { createSlice } from "@reduxjs/toolkit";
import {  TLoading, TProduct } from "@/CustomTypes";
import actGetProductsByCat_Prefix from "./act/actGetProductsByCat_Prefix";

interface IProducts {
  products:TProduct[];
  loading: TLoading;
  error: string | null;
}
const initialState: IProducts = {
  products: [],
  loading: "idle",
  error: "",
};
const productsSlice = createSlice({
  initialState,
  name: "products",
  reducers: {
    productsCleanUp:(state)=>{
      state.products = [];
    }
  },
  extraReducers: (builder)=>{
    builder.addCase(actGetProductsByCat_Prefix.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetProductsByCat_Prefix.fulfilled , (state , action) => {
      state.products = action.payload;
      state.loading = "succeeded"
    });
    builder.addCase(actGetProductsByCat_Prefix.rejected , (state , action) =>{
      state.loading = "failed";
      if(action.payload &&  typeof action.payload == "string")
        {state.error = action.payload}
    })
  }
});

export const {productsCleanUp} = productsSlice.actions;
export {actGetProductsByCat_Prefix}
export default productsSlice.reducer;
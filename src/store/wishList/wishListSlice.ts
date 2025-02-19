import { createSlice } from "@reduxjs/toolkit";
import actLikeItem from "./act/actLikeItem";
import actGetWishlist from "./act/actGetWishlist";
import { TLoading, TProduct } from "@/CustomTypes";
type TWishList = {
    itemsId:number[];
    error: string | null;
    productsFullInfo: TProduct[],
    loading : TLoading
}

const initialState : TWishList = {
    itemsId:[],
    error: null,
    loading: "idle",
    productsFullInfo:[]
}
const wishListSlice = createSlice(
   {
    initialState,
    name:"wishList",
    reducers:{
        wishListCleanUp:(state)=>{
            state.productsFullInfo = []
        }
    } ,
    extraReducers:(builder)=>{
        builder.addCase(actLikeItem.pending , (state)=> {
            state.error=null; 
        });
        builder.addCase(actLikeItem.fulfilled , (state , action)=>{
            if(action.payload.type === "add"){
                state.itemsId.push(action.payload.id)
            }else{
                state.itemsId = state.itemsId.filter((el) => el !== action.payload.id)
                state.productsFullInfo = state.productsFullInfo.filter((el) => el.id !== action.payload.id)
            }
        })
        builder.addCase(actLikeItem.rejected , (state , action)=>{
            state.error = action.payload as string
        })


        // get items
        builder.addCase(actGetWishlist.pending , (state)=>{
         state.loading = "pending";
         state.error = null  
        });
        builder.addCase(actGetWishlist.fulfilled , (state , action)=>{
            state.productsFullInfo = action.payload;
            state.loading = "succeeded";
        });
        builder.addCase(actGetWishlist.rejected , (state , action)=>{
            state.loading = "failed";
            state.error = action.payload as string
        })
    }
   });

export {actLikeItem ,actGetWishlist };
export const { wishListCleanUp } = wishListSlice.actions;
export default wishListSlice.reducer;
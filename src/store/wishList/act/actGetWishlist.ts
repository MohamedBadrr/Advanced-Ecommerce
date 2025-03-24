import { TProduct } from "@/CustomTypes";
import axiosErrorHandler from "@/util/axiosErrorHandler";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const actGetWishlist = createAsyncThunk('wishList/actGetWishlist', async(_,thunkAPI)=>{
    const {rejectWithValue , fulfillWithValue} = thunkAPI;

    try{
    const userWishlist =await axios.get<{productId:number}[]>('/wishList?userId=1');
    if(!userWishlist.data.length){
        return fulfillWithValue([])
    }
    const requests = userWishlist.data.map(async(el) => await axios.get<TProduct>(`/products?id=${el.productId}`));
    const responses = await Promise.all(requests);
    const wishListProducts = responses.map((response)=>response.data).flat()

    return wishListProducts ;
    }catch(error){
        return rejectWithValue(axiosErrorHandler(error));
    }
})

export default actGetWishlist;
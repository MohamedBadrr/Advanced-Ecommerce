import { TProduct } from "@/CustomTypes";
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
        if(axios.isAxiosError(error)){
            return rejectWithValue(error.response?.data.message || error.message)
        }else
        {
            return rejectWithValue("An unexpected error")
        }
    }
})

export default actGetWishlist;
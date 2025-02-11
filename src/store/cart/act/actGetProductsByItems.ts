import { TProduct } from "@/CustomTypes";
import { RootState } from "@/store/store";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const actGetProductsByItems = createAsyncThunk ("cart/actGetProductsByItems" ,
    async(_, thunkAPI)=>{
        const {rejectWithValue ,fulfillWithValue, getState} = thunkAPI;
        const {cart} = getState() as RootState;
        const itemsId = Object.keys(cart.items);
        const IDs = itemsId.map((id)=> `id=${id}`).join("&")
        
        if(!itemsId.length){
            fulfillWithValue([]);
        }
        try{
            const response = await axios.get<TProduct []>(`/products?${IDs}`)
            return response.data;
        }
        catch(error){
            if(axios.isAxiosError(error)){
                return rejectWithValue( error.response?.data.message || error.message)
            }else{
                return rejectWithValue ("An unExpected Error.")
            }
        }
        
    })

export default actGetProductsByItems;

import { TProduct } from "@/CustomTypes";
import { RootState } from "@/store/store";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const actGetProductsByItems = createAsyncThunk ("cart/actGetProductsByItems" ,
    async(_, thunkAPI)=>{
        const {rejectWithValue ,fulfillWithValue, getState} = thunkAPI;
        const {cart} = getState() as RootState;
        const itemsId = Object.keys(cart.items);

        if(!itemsId.length){
            fulfillWithValue([]);
        }
        try{
            const requests = itemsId.map((id) => axios.get<TProduct>(`/products?id=${id}`));
            const responses = await Promise.all(requests);
            const products = responses.map(response => response.data).flat();
            return products;
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
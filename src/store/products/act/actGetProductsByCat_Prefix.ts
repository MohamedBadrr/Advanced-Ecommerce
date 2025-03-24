import { TProduct } from "@/CustomTypes";
import axiosErrorHandler from "@/util/axiosErrorHandler";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const actGetProductsByCat_Prefix = createAsyncThunk<
TProduct[], 
string,    
{ rejectValue: string } 
>("products/actGetProducts",
  async (prefix,thunkAPI) => { 
    const { rejectWithValue , signal } = thunkAPI 
    try{
        const response =  await axios.get<TProduct[]>(`/products?cat_prefix=${prefix}` , {
          signal
        })
        return response.data;
    }catch(err){
      return rejectWithValue(axiosErrorHandler(err));
    }
  }  
)



export default actGetProductsByCat_Prefix ; 
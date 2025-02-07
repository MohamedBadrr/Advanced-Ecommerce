import { TProduct } from "@/CustomTypes";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const actGetProductsByCat_Prefix = createAsyncThunk<
TProduct[], 
string,    
{ rejectValue: string } 
>("products/actGetProducts",
  async (prefix,thunkAPI) => { 
    const { rejectWithValue } = thunkAPI 
    try{
        const response =  await axios.get<TProduct[]>(`http://localhost:5000/products?cat_prefix=${prefix}`)
        return response.data;
    }catch(err){
        if(axios.isAxiosError(err)){
            return rejectWithValue(err.response?.data.message || err.message)
        } else {
            return rejectWithValue("An unexpected error")
        }
    }
  }  
)



export default actGetProductsByCat_Prefix ; 
import axiosErrorHandler from "@/util/axiosErrorHandler";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type CategoriesResponse = {
    id: number;
    title: string;
    prefix: string;
    img: string;
}[]
const actGetCategories = createAsyncThunk("categories/actGetCategories",
  async (_,thunkAPI) => {
    const { rejectWithValue , signal} = thunkAPI 
    try{
        const response =  await axios.get<CategoriesResponse>("/categories",{
            signal
        })
        return response.data;
    }catch(err){
        return rejectWithValue(axiosErrorHandler(err));
    }
  }  
)

export default actGetCategories ; 
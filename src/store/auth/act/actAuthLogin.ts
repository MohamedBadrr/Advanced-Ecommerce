import axiosErrorHandler from "@/util/axiosErrorHandler";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { isAxiosError } from "axios";


type LoginFormData = {
    email:string
    password : string
}

export type LoginResponse = {
    accessToken:string,
    user:{
        id:string,
        firstName:string,
        lastName : string ,
        email:string
    }
} 
const actAuthLogin = createAsyncThunk("auth/actAuthLogin", async(
    formData:LoginFormData,
    thunkAPI
)=>{
    const {rejectWithValue} = thunkAPI;
    try {
    const response = await axios.post<LoginResponse>("/login" , formData)
    console.log("responseeeeeeeee" , response.data);
    
    return response.data;
    } catch (error) {
        if(isAxiosError(error) && error.response){
            console.log("Error" , error.response.data);
            return rejectWithValue( error.response.data);
        }else{
            console.log("An unknown expected error" , error);
        }
        return rejectWithValue(axiosErrorHandler(error));
    }
})


export default actAuthLogin ;
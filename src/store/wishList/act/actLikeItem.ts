import axiosErrorHandler from "@/util/axiosErrorHandler";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const actLikeItem = createAsyncThunk("wishlist/actLikeItem",async(id:number,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    console.log(id)
    try{
        const isRecordExist = await axios.get(`/wishList?productId=${id}`);
        if (isRecordExist.data.length > 0){
            for (const item of isRecordExist.data) {
                await axios.delete(`/wishList/${item.id}`);
            } 
            return {type:"remove" , id}
        } else{
            await axios.post(`/wishList`,{userId:"1" , productId : id})
            return {type:"add" , id}
        }
    }catch(err){
        return rejectWithValue(axiosErrorHandler(err));
    }
});

export default actLikeItem
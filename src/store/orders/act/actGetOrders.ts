import { TOrder } from "@/CustomTypes";
import { RootState } from "@/store/store";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


type OrdersResponse = TOrder[];


const actGetOrders = createAsyncThunk("orders/getOrders", async (_,thunkAPI) => {
    const {rejectWithValue , getState , signal} = thunkAPI;
    const {auth} = getState() as RootState;

    try {
        const res = await axios.get<OrdersResponse>(`/orders?userId=${auth.loginData.user.id}`, {signal})

        return res.data;
    } catch (error) {
        return rejectWithValue(error);
    }

}
);

export default actGetOrders;
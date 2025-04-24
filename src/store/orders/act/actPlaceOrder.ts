import { RootState } from "@/store/store";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const actPlaceOrder = createAsyncThunk(
  "orders/placeOrder",
  async (subtotal: number, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    const { cart, auth } = getState() as RootState; // Adjust the type according to your state structure

    const OrderList = cart.productsFullInfo.map((el) => ({
      id: el.id,
      title: el.title,
      price: el.price,
      img: el.img,
      quantity: cart.items[el.id],
    }));
    try {
        const res= await axios.post("/orders", {
            userId: auth.loginData.user.id,
            items: OrderList,
            subTotal: subtotal,
        })
        return res.data;
    } catch (error) {
      console.error("Error placing order:", error);
      return rejectWithValue("Failed to place order");
    }
  }
);

export default actPlaceOrder;

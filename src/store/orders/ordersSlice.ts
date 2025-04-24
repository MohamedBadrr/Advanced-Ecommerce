import { TLoading, TOrder } from "@/CustomTypes";
import { createSlice } from "@reduxjs/toolkit";
import actPlaceOrder from "./act/actPlaceOrder";
import actGetOrders from "./act/actGetOrders";

type OrderSlice = {
  orders: TOrder[];
  loading: TLoading;
  error: string | null;
};

const initialState: OrderSlice = {
  orders: [],
  loading: "idle",
  error: null,
};
const orderSlice = createSlice({
  initialState,
  name: "orders",
  reducers: {
    clearOrders: (state) => {
      state.orders = [];
      state.loading = "idle";
    }
  },
  extraReducers: (builder) => {

    //Place Order
    builder.addCase(actPlaceOrder.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });

    builder.addCase(actPlaceOrder.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.orders.push(action.payload);
    });

    builder.addCase(actPlaceOrder.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload as string;
    });

    // Get Orders

    builder.addCase(actGetOrders.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });

    builder.addCase(actGetOrders.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.orders = action.payload;
    });

    builder.addCase(actGetOrders.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload as string;
    });

  },
});

export { actPlaceOrder , actGetOrders};
export const {clearOrders} = orderSlice.actions;
export default orderSlice.reducer;

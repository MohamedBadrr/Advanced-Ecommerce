import { createSlice } from "@reduxjs/toolkit";
import actGetCategories from "./act/actGetCategories";
import { TCategory, TLoading } from "@/CustomTypes";

interface ICategories {
  categories:TCategory[];
  loading: TLoading;
  error: string | null;
}
const initialState: ICategories = {
  categories: [],
  loading: "idle",
  error: "",
};
const categoriesSlice = createSlice({
  initialState,
  name: "categories",
  reducers: {},
  extraReducers: (builder)=>{
    builder.addCase(actGetCategories.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetCategories.fulfilled , (state , action) => {
      state.categories = action.payload;
      state.loading = "succeeded"
    });
    builder.addCase(actGetCategories.rejected , (state , action) =>{
      state.loading = "failed";
      if(action.payload &&  typeof action.payload == "string")
        {state.error = action.payload}
    })
  }
});

export {actGetCategories}
export default categoriesSlice.reducer;
import axiosErrorHandler from "@/util/axiosErrorHandler";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type TFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};
const actAuthRegister = createAsyncThunk(
  "auth/actAuthRegister",
  async (formData: TFormData, thunk) => {
    const { rejectWithValue } = thunk;

    try {
        const response = await axios.post("http://localhost:5000/register", formData); {
            return response.data;
    }} catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            console.log("Error:", error.response.data);
        } else {
            console.log("An unknown error occurred", error);
        }        
        return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actAuthRegister;

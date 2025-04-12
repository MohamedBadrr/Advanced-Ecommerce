import { TLoading } from "@/CustomTypes";
import { createSlice } from "@reduxjs/toolkit";
import actAuthRegister from "./act/actAuthRegister";
import actAuthLogin, { LoginResponse } from "./act/actAuthLogin";

type AuthState = {
    loading: TLoading;
    error: string | null;
    loginData : LoginResponse
}
const initialState : AuthState = {
    loading: "idle",
    error: null,
    loginData : {
        accessToken:"",
        user:{
            email:"",
            firstName:"",
            id:"",
            lastName:""
        }
    }
}
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        resetAuthState : (state)=>{
            state.error = "";
            state.loading = "idle";
        },
        authLogout : (state) =>{
            state.loginData = {
                accessToken: "",
                user: {
                    email: "",
                    firstName: "",
                    id: "",
                    lastName: ""
                }
            };
        }
    },
    extraReducers: (builder) => {
        builder.addCase(actAuthRegister.pending, (state) => {
            state.loading = "pending";
            state.error = null;
        });
        builder.addCase(actAuthRegister.fulfilled, (state)=>{
            state.loading = "succeeded";
        });
        builder.addCase(actAuthRegister.rejected, (state, action) => {
            state.loading = "failed";
            state.error = action.payload as string;
        });

        //login
        builder.addCase(actAuthLogin.pending, (state) => {
            state.loading = "pending";
            state.error = null;
        });
        builder.addCase(actAuthLogin.fulfilled, (state, action)=>{
            state.loading = "succeeded";
            state.loginData = action.payload
        });
        builder.addCase(actAuthLogin.rejected, (state, action) => {
            state.loading = "failed";
            state.error = action.payload as string;
        });
    }
});

export {actAuthRegister , actAuthLogin}
export const {resetAuthState , authLogout} = authSlice.actions
export default authSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import { registerThunk, loginThunk, logoutThunk } from "../auth/operations.js"

const initialState = {
    user: {
        name: null,
        email: null,
      },
      token: null,
      isLoggedIn: false,
      isRefreshing: false,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: builder => {
      builder
        .addCase(registerThunk.fulfilled, (state, action) => {
          state.user = action.payload.user;
          state.token = action.payload.token;
          state.isLoggedIn = true;
        })

        .addCase(loginThunk.fulfilled, (state, action) => {
          state.user = action.payload.user;
          state.token = action.payload.token;
          state.isLoggedIn = true;
        })

        .addCase(logoutThunk.fulfilled, () => initialState);
    },
  });
  
  export const contactsReducer = authSlice.reducer;
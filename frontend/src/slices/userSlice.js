import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null, // initially no user is logged in
  isAuthenticated: false,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
});

export default userSlice.reducer;

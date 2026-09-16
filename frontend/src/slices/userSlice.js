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
  // defines how state changes
  reducers: {
    loginSuccess: (state, action) => {
      state.name = action.payload.name;
      state.isAuthenticated = true;
    },
    logoutSuccess: (state) => {
      state.name = null;
      state.isAuthenticated = false;
    },
  },
});
// exporting the actions
export const { loginSuccess, logoutSuccess } = userSlice.actions;
export default userSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: null,
  subject: null,
  date: null,
  description: null,
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postsResults: (state, action) => {
      state.title = action.payload.title;
    },
  },
});

export const { postsResults } = postSlice.actions;
export default postSlice.reducer;

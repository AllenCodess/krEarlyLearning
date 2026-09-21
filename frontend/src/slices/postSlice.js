import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: null,
  subject: null,
  date: null,
  message: null,
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postsResults: (state, action) => {
      state.title = action.payload.title;
      state.subject = action.payload.subject;
      state.date = action.payload.date;
      state.message = action.payload.message;
    },
  },
});

export const { postsResults } = postSlice.actions;
export default postSlice.reducer;

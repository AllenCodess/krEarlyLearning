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
      state.subject = action.payload.subject;
      state.date = action.payload.date;
      state.description = action.payload.description;
    },
  },
});

export const { postsResults } = postSlice.actions;
export default postSlice.reducer;

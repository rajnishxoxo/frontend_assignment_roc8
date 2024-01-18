import { createSlice } from "@reduxjs/toolkit";

export const imageSlice = createSlice({
  name: "imageData",
  initialState: {
    images: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.images.push(action.payload);
    },
  },
});

export const { addItem } = imageSlice.actions;

export default imageSlice.reducer;

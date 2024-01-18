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
    clearItems: (state, action) => {
      state.images = [];
    },
  },
});

export const { addItem, clearItems } = imageSlice.actions;

export default imageSlice.reducer;

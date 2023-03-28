import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkmode: false,
};

const themeSlice = createSlice({
  name: "themeSlice",
  initialState,
  reducers: {},
});

export default themeSlice.reducer;
export const themeSliceActions = themeSlice.actions;

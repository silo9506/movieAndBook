import { createSlice } from "@reduxjs/toolkit";

type CartItem = {
  id: number;
  url: number;
};

type initialState = {
  isOpen: boolean;
  item: CartItem[];
};

const initialState: initialState = {
  isOpen: false,
  item: [],
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    cartOpen(state) {
      state.isOpen = true;
    },
    cartClose(state) {
      state.isOpen = false;
    },
  },
});

export default cartSlice.reducer;
export const cartSliceAction = cartSlice.actions;

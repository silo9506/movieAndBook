import { configureStore } from "@reduxjs/toolkit";
import naverBookSlice from "./naverBookSlice";
import themeSlice from "./themeSlice";
import { bookCarouselSlice, movieCarouselSlice } from "./carouselSlice";
import tmdbSlice from "./tmdbSlice";
import cartSlice from "./cartSlice";
export const store = configureStore({
  reducer: { naverBookSlice, themeSlice, bookCarouselSlice, movieCarouselSlice, tmdbSlice, cartSlice },
});

export type RootState = ReturnType<typeof store.getState>;

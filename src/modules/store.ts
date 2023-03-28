import { configureStore } from "@reduxjs/toolkit";
import naverBookSlice from "./naverBookSlice";
import themeSlice from "./themeSlice";
import { bookCarouselSlice, movieCarouselSlice } from "./carouselSlice";

export const store = configureStore({
  reducer: { naverBookSlice, themeSlice, bookCarouselSlice, movieCarouselSlice },
});

export type RootState = ReturnType<typeof store.getState>;

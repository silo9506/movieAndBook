import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getTmdb } from "./thunk/tmdb";

export interface movieInitialState {
  movies: any;
  loading: boolean;
  error: boolean;
  query: string;
  page: number;
  maxPage: number;
}

interface FulfilledPayload {
  results: [any];
  total_pages: number;
}

const initialState: movieInitialState = {
  movies: [],
  loading: false,
  error: false,
  query: "",
  page: 1,
  maxPage: 0,
};

const tmdbMovieSlice = createSlice({
  name: "tmdbMovieSlice",
  initialState,
  reducers: {
    changeQuery(state, action) {
      console.log(action.payload);
      state.query = action.payload;
      state.movies = [];
    },
    changePage(state, action) {
      console.log(action.payload);
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTmdb.pending, (state, actions: PayloadAction<any>) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(getTmdb.fulfilled, (state, actions: PayloadAction<FulfilledPayload>) => {
      // console.log("성공");
      console.log(actions);
      const result = actions.payload.results;
      console.log(result);
      state.loading = false;
      state.movies = result;
      state.maxPage = actions.payload.total_pages;
    });

    builder.addCase(getTmdb.rejected, (state, actions: PayloadAction<any>) => {
      console.log(actions, "오류");
      state.error = actions.payload.errorMessage.errorMessage;
      state.loading = false;
    });
  },
});
export default tmdbMovieSlice.reducer;
export const tmdbMovieSliceAction = tmdbMovieSlice.actions;

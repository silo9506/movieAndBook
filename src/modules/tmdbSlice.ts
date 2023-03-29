import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getTmdb } from "./thunk/tmdb";

export interface movieInitialState {
  movies: any;
  loading: boolean;
  error: boolean;
}

interface FulfilledPayload {
  any: any;
}

const initialState: movieInitialState = {
  movies: [],
  loading: false,
  error: false,
};

const tmdbMovieSlice = createSlice({
  name: "tmdbMovieSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTmdb.pending, (state, actions: PayloadAction<any>) => {
      console.log(actions);
      console.log("로딩중");
      state.loading = true;
      state.error = false;
    });
    builder.addCase(getTmdb.fulfilled, (state, actions: PayloadAction<FulfilledPayload>) => {
      console.log("성공");
      let result = actions.payload;
      console.log(result);
      state.loading = false;
      // state.movies = result;
    });

    builder.addCase(getTmdb.rejected, (state, actions: PayloadAction<any>) => {
      console.log(actions, "오류");
      state.error = actions.payload.errorMessage.errorMessage;
      state.loading = false;
    });
  },
});
export default tmdbMovieSlice.reducer;

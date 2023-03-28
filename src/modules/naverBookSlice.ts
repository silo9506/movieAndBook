import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getNaverBook } from "./thunk/naver";
import {} from "./thunk/naver";

export interface BookInitialState {
  books: any[];
  loading: boolean;
  error: boolean | string;
  maxPage: boolean;
}

interface FulfilledPayload {
  display: number;
  items: any[];
  lastBuildDate: string;
  start: number;
  total: number;
}

const initialState: BookInitialState = {
  books: [],
  loading: true,
  error: false,
  maxPage: false,
};

const naverBookSlice = createSlice({
  name: "naverBookSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getNaverBook.pending, (state) => {
      console.log("로딩중");
      state.loading = true;
      state.error = false;
    });
    builder.addCase(
      getNaverBook.fulfilled,
      (state, actions: PayloadAction<FulfilledPayload>) => {
        console.log("성공");
        let result = actions.payload;
        console.log(result);
        state.loading = false;
        state.books = [...state.books, ...result.items];
      }
    );

    builder.addCase(
      getNaverBook.rejected,
      (state, actions: PayloadAction<any>) => {
        console.log(actions, "오류");
        state.error = actions.payload.errorMessage.errorMessage;
        state.loading = false;
      }
    );
  },
});
export default naverBookSlice.reducer;
export const animalAction = naverBookSlice.actions;
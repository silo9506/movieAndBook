import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getNaverBook } from "./thunk/naver";
import {} from "./thunk/naver";

interface BookInitialState {
  books: any[];
  loading: boolean;
  error: boolean | string;
  maxPage: number;
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
  maxPage: 0,
};

const naverBookSlice = createSlice({
  name: "naverBookSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getNaverBook.pending, (state, actions: PayloadAction<any>) => {
      console.log(actions);
      console.log("로딩중");
      state.loading = true;
      state.error = false;
    });
    builder.addCase(getNaverBook.fulfilled, (state, actions: PayloadAction<FulfilledPayload>) => {
      console.log("성공");
      let result = actions.payload;
      state.loading = false;
      const newBooks = result.items.filter((item) => !state.books.some((book) => book.isbn === item.isbn));
      console.log(newBooks);
      state.books = [...state.books, ...newBooks];
      // state.books = [...state.books, ...result.items];
      state.maxPage = actions.payload.total;
    });

    builder.addCase(getNaverBook.rejected, (state, actions: PayloadAction<any>) => {
      console.log(actions, "오류");
      state.error = actions.payload.errorMessage.errorMessage;
      state.loading = false;
    });
  },
});
export default naverBookSlice.reducer;

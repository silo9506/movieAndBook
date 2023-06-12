import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getNaverBook } from "./thunk/naver";
import {} from "./thunk/naver";

interface BookInitialState {
  books: any[];
  loading: boolean;
  error: boolean | string;
  maxPage: number;
  query: string;
  start: number;
  isLastPage: boolean;
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
  loading: false,
  error: false,
  maxPage: 0,
  query: "",
  start: 1,
  isLastPage: false,
};

const naverBookSlice = createSlice({
  name: "naverBookSlice",
  initialState,
  reducers: {
    changeQuery(state, action) {
      console.log(action.payload);
      state.books = [];
      state.query = action.payload;
    },
    changeStart(state, action) {
      state.start = action.payload;
    },
    setLastPage(state, action) {
      state.isLastPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getNaverBook.pending, (state, actions: PayloadAction<any>) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(getNaverBook.fulfilled, (state, actions: PayloadAction<FulfilledPayload>) => {
      console.log("성공");
      let result = actions.payload;
      // console.log(result);
      state.loading = false;
      const newBooks = result.items.filter((item) => !state.books.some((book) => book.isbn === item.isbn));
      state.books = [...state.books, ...newBooks];
      // state.books = [...state.books, ...result.items];
      state.maxPage = actions.payload.total;
    });

    builder.addCase(getNaverBook.rejected, (state, actions: PayloadAction<any>) => {
      console.log(actions, "오류");
      state.error = actions.payload.errorMessage;
      state.loading = false;
    });
  },
});
export default naverBookSlice.reducer;
export const naverBookSliceAction = naverBookSlice.actions;

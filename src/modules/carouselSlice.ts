import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { carouselItems } from "data/samples";

const book = [...carouselItems.book, ...carouselItems.book, ...carouselItems.book];
const movie = [...carouselItems.movie, ...carouselItems.movie, ...carouselItems.movie];

interface BookCarouselState {
  book: { name: string; url: string }[];
  bookStartX: number;
  bookCurrentX: number;
  bookCurrentIndex: number;
}
interface MovieCarouselState {
  movie: { name: string; url: string }[];
  movieStartX: number;
  movieCurrentX: number;
  movieCurrentIndex: number;
}

// const initialState = { book, movie, max: book.length / 3, counte: 3, trans: true };
const BOOKCAROUSELSLICE = createSlice({
  name: "bookCarouselSlice",
  initialState: {
    book,
    bookStartX: 0,
    bookCurrentX: 0,
    bookCurrentIndex: 0,
  } as BookCarouselState,
  reducers: {
    bookDragStart(state, action) {
      state.bookStartX = action.payload;
    },
    bookDrag(state, action) {
      state.bookCurrentX = action.payload;
    },
    bookDragEnd(state, action) {
      // const diff = state.bookStartX - state.bookCurrentX;
      console.log(state.bookCurrentX);

      if (state.bookCurrentX > -100 && state.bookCurrentX < 100) {
        console.log("너무 작게 움직여서 아무일도안일어남");
      }

      if (state.bookCurrentX > 150) {
        console.log(state.bookCurrentX);
        console.log("150보다 큼");
        state.bookCurrentIndex = state.bookCurrentIndex - 1;
      }

      if (state.bookCurrentX < -150) {
        console.log(state.bookCurrentX);
        console.log("150보다 작음");

        state.bookCurrentIndex = state.bookCurrentIndex + 1;
      }

      state.bookStartX = 0;
      state.bookCurrentX = 0;
      // if (state.bookCurrentX > 50) {
      //   state.bookCurrentIndex = state.bookCurrentIndex === 0 ? book.length / 3 - 1 : state.bookCurrentIndex - 1;
      // } else if (state.bookCurrentX < -50) {
      //   state.bookCurrentIndex = state.bookCurrentIndex === book.length / 3 - 1 ? 0 : state.bookCurrentIndex + 1;
      // }
    },
  },
});

const MOVIECAROUSELSLICE = createSlice({
  name: "movieCarouselSlice",
  initialState: {
    movie,
    movieStartX: 0,
    movieCurrentX: 0,
    movieCurrentIndex: 0,
  } as MovieCarouselState,
  reducers: {
    movieDragStart(state, action) {
      state.movieStartX = action.payload;
    },
    movieDrag(state, action) {
      state.movieCurrentX = action.payload;
    },
    movieDragEnd(state, action) {
      if (state.movieCurrentX > 50) {
        state.movieCurrentIndex = state.movieCurrentIndex === 0 ? movie.length / 3 - 1 : state.movieCurrentIndex - 1;
      } else if (state.movieCurrentX < -50) {
        state.movieCurrentIndex = state.movieCurrentIndex === movie.length / 3 - 1 ? 0 : state.movieCurrentIndex + 1;
      }
      state.movieStartX = 0;
      state.movieCurrentX = 0;
    },
  },
});

export const bookCarouselSlice = BOOKCAROUSELSLICE.reducer;
export const bookCarouselSliceAction = BOOKCAROUSELSLICE.actions;

export const movieCarouselSlice = MOVIECAROUSELSLICE.reducer;
export const movieCarouselSliceAction = MOVIECAROUSELSLICE.actions;

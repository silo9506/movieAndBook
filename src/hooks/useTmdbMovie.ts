import { isAsyncThunkAction } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "modules/store";
import { getTmdb } from "modules/thunk/tmdb";
import axios, { CancelTokenSource } from "axios";
import { getTmdbProps } from "modules/thunk/tmdb";
type tmdbMovieResult = [[any], boolean, string | boolean, number];
const useTmdbMovie = (): tmdbMovieResult => {
  const { query, page, movies, loading, error, maxPage } = useSelector((state: RootState) => state.tmdbSlice);
  console.log(movies);
  const dispatch = useDispatch<typeof isAsyncThunkAction>();

  useEffect(() => {
    const cancelTokenSource: CancelTokenSource = axios.CancelToken.source();
    if (query) {
      console.log("디스패치함");

      const params: getTmdbProps = { query, page, cancelToken: cancelTokenSource.token };
      dispatch(getTmdb(params));
    }
    return () => {
      cancelTokenSource.cancel("취소 요청");
    };
  }, [query, page, dispatch]);

  return [movies, loading, error, maxPage];
};

export default useTmdbMovie;
